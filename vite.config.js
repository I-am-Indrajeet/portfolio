import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { getPage } from "./src/data/site.js";
import { headFor } from "./src/lib/seo.js";
import { readFile } from "node:fs/promises";
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "route-metadata",
      configurePreviewServer(server) {
        server.middlewares.use(async (req, res, next) => {
          const pathname = new URL(req.url, "http://localhost").pathname;
          const isPage =
            !pathname.split("/").at(-1).includes(".") ||
            pathname.endsWith(".html");
          if (!isPage || !getPage(pathname).noindex) return next();
          try {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            res.end(
              await readFile(new URL("./dist/404.html", import.meta.url)),
            );
          } catch (error) {
            next(error);
          }
        });
      },
      transformIndexHtml(html, ctx) {
        return html.replace(
          "<!--seo-->",
          headFor(getPage(ctx.originalUrl || ctx.path)),
        );
      },
    },
  ],
});
