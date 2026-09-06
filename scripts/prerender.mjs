import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { render, pages, site, headFor } from "../.prerender/entry-server.js";
const template = await readFile("dist/index.html", "utf8");
for (const page of pages) {
  const filename = page.path.endsWith(".html")
    ? page.path.slice(1)
    : join(page.path, "index.html");
  const target = join("dist", filename);
  const html = template
    .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, headFor(page))
    .replace(
      '<div id="root"></div>',
      `<div id="root">${render(page.path)}</div>`,
    );
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
}
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .filter((p) => !p.noindex)
    .map((p) => `  <url><loc>${site.origin}${p.path}</loc></url>`)
    .join("\n")}\n</urlset>\n`,
);
await writeFile(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`,
);
console.log(
  `Prerendered ${pages.length} routes with complete HTML, metadata and structured data.`,
);
