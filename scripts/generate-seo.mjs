import { writeFile } from "node:fs/promises";
import { pages, site } from "../src/data/site.js";
await writeFile(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .filter((p) => !p.noindex)
    .map((p) => `  <url><loc>${site.origin}${p.path}</loc></url>`)
    .join("\n")}\n</urlset>\n`,
);
await writeFile(
  "public/robots.txt",
  `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`,
);
