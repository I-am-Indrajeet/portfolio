import { readFile, access, stat } from "node:fs/promises";
import { join } from "node:path";
import assert from "node:assert/strict";
import { parseHTML } from "linkedom";
import { pages, site } from "../src/data/site.js";
const fileFor = (path) =>
  join(
    "dist",
    path.endsWith(".html") ? path.slice(1) : join(path, "index.html"),
  );
const docs = new Map();
let links = 0,
  images = 0;
for (const page of pages) {
  const html = await readFile(fileFor(page.path), "utf8"),
    { document } = parseHTML(html);
  docs.set(page.path, document);
  assert.equal(
    document.querySelectorAll("h1").length,
    1,
    `${page.path}: one H1`,
  );
  assert.equal(
    document.querySelectorAll("main").length,
    1,
    `${page.path}: main landmark`,
  );
  assert.equal(document.querySelector("title").textContent, page.title);
  assert.equal(
    document.querySelector('meta[name="description"]').content,
    page.description,
  );
  assert.equal(
    document.querySelector('link[rel="canonical"]').href,
    site.origin + page.path,
  );
  assert.equal(
    document.querySelector('meta[property="og:url"]').content,
    site.origin + page.path,
  );
  assert.equal(
    document.querySelector('meta[property="og:title"]').content,
    page.title,
  );
  assert.equal(
    document.querySelector('meta[name="twitter:title"]').content,
    page.title,
  );
  assert.equal(
    document.querySelector('meta[name="robots"]').content.includes("noindex"),
    !!page.noindex,
  );
  const schema = JSON.parse(
    document.querySelector('script[type="application/ld+json"]').textContent,
  );
  assert.equal(schema["@context"], "https://schema.org");
  assert.ok(schema["@graph"].every((node) => node["@type"]));
  assert.ok(
    document.querySelector("main").textContent.trim().length > 100,
    `${page.path}: prerendered content`,
  );
  const ids = [...document.querySelectorAll("[id]")].map((el) => el.id);
  assert.equal(new Set(ids).size, ids.length, `${page.path}: duplicate ids`);
  let previous = 0;
  for (const heading of document.querySelectorAll("h1,h2,h3,h4,h5,h6")) {
    const level = Number(heading.tagName.slice(1));
    assert.ok(
      level <= previous + 1,
      `${page.path}: heading jump to ${heading.textContent}`,
    );
    previous = level;
  }
  for (const image of document.querySelectorAll("img")) {
    assert.ok(image.getAttribute("alt")?.trim(), `${page.path}: image alt`);
    assert.ok(image.width || image.getAttribute("width"));
    assert.ok(image.height || image.getAttribute("height"));
    await access(join("dist", image.getAttribute("src")));
    images++;
  }
  for (const field of document.querySelectorAll("input,select,textarea"))
    assert.ok(
      document.querySelector(`label[for="${field.id}"]`),
      `${page.path}: field label`,
    );
  for (const asset of document.querySelectorAll("script[src],link[href]")) {
    const url = asset.getAttribute("src") || asset.getAttribute("href");
    if (url.startsWith("/")) await access(join("dist", url));
  }
}
for (const [path, doc] of docs) {
  for (const a of doc.querySelectorAll("a[href]")) {
    const href = a.getAttribute("href");
    assert.notEqual(href, "#", `${path}: empty CTA`);
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const url = new URL(href, site.origin + path),
      target = docs.get(url.pathname);
    assert.ok(target, `${path}: broken route ${href}`);
    if (url.hash)
      assert.ok(
        target.getElementById(decodeURIComponent(url.hash.slice(1))),
        `${path}: missing anchor ${href}`,
      );
    links++;
  }
}
const sitemap = await readFile("dist/sitemap.xml", "utf8");
for (const p of pages)
  assert.equal(
    sitemap.includes(`<loc>${site.origin + p.path}</loc>`),
    !p.noindex,
  );
assert.equal(
  (sitemap.match(/<loc>/g) || []).length,
  pages.filter((p) => !p.noindex).length,
);
assert.ok(
  (await readFile("dist/robots.txt", "utf8")).includes(
    `Sitemap: ${site.origin}/sitemap.xml`,
  ),
);
assert.ok((await stat("dist/portrait-400.webp")).size < 70000);
console.log(
  `PASS: ${pages.length} HTML routes; ${links} internal links; ${images} image instances; metadata, headings, labels, anchors, JSON-LD, sitemap and robots.`,
);
