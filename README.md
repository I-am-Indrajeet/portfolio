# Indrajeet Mahara portfolio

A React / Vite portfolio with 14 indexable pages and a 404 page. Production output is static HTML with React hydration. Every public page has its own rendered content and metadata; navigation uses ordinary links and needs no client router.

## Development and validation

Requires Node 22+ and npm. Install the locked dependencies with `npm ci`.

- `npm run dev` — local development.
- `npm run build` — client bundle, temporary server-render bundle, then prerender every page into `dist`.
- `npm run preview` — inspect the production build; unknown page routes return the rendered 404 with HTTP 404.
- `npm run lint` — ESLint and React Hooks checks.
- `npm test` — inquiry validation/encoding and SEO/route tests.
- `npm run check:site` — validate the built HTML, headings, internal links, image paths, labels, metadata, JSON-LD, sitemap and robots.

Build before running the site checker. `.prerender` is a temporary build artifact, excluded from git and deployment. Only `dist` is public output. Use `npm ci` for reproducibility; the existing framework dependency declarations and lockfile were preserved.

## Content

Edit `src/data/site.js` for public identity, canonical origin, services, projects, packages, FAQs and the route registry. The production canonical remains `https://www.indrajeetmahara.com.np`; the private Sites deployment is a review copy, not a canonical migration.

Page renderers are in `src/pages/Pages.jsx` and `Contact.jsx`, shared layout components in `src/components`, design tokens and responsive CSS in `src/styles.css`. Metadata/structured data are generated in `src/lib/seo.js`. Add new routes to the registry and the appropriate renderer together, then run the build/checker. Sitemap and robots generation uses the same registry. Do not manually add a URL to the sitemap.

Starting prices: NPR 35,000 starter, NPR 55,000 professional/CMS, NPR 75,000 travel/hospitality, NPR 110,000 single-vendor e-commerce. All are scope-dependent development starting prices. The proposal must confirm exclusions and tax treatment. See `docs/strategy.md` for the owner instructions, competitor comparison and keyword/page strategy.

## Inquiry flow

There is no form backend or email provider configured. The form validates a brief, prepares a reviewable `mailto:` draft, and offers a copy fallback. It never displays a false “sent” confirmation. Sending requires the visitor's email app/service. Direct email and telephone links remain available even without JavaScript. Form values are not saved in localStorage, cookies, or analytics. If direct submission is required, integrate a server-side delivery provider with validation, abuse controls and verified delivery; update the privacy page and test failure/success paths before launch.

The page emits `portfolio:conversion` CustomEvents for contact CTA, email/call intent and inquiry preparation. No receiver or external analytics script is configured. Do not count these intent events as received leads. Never send the brief, visitor name, email or query string to an analytics service.

## Hosting

`vercel.json` selects the `dist` output, trailing-slash convention and response headers. There is no catch-all rewrite to the homepage; the generated `404.html` should be the host's actual 404. Cloudflare-compatible static hosting can use `public/_headers` and the generated 404. Configure other hosts to serve `/route/index.html`, redirect slashless page URLs to their trailing-slash version, and return unknown paths with HTTP 404. Do not enable SPA fallback for this prerendered site. Existing #home, #projects, #about and #contact anchors are retained.

After public deployment, verify redirect behavior for apex/www and HTTP/HTTPS, all canonical pages, cache headers and an unknown URL. Submit the sitemap in the existing Search Console property; verification metadata is retained. Private preview access prevents search crawling and is unsuitable for measuring Google performance. No public deployment or domain reassignment is performed as part of the private preview.

## Assets and evidence

Optimized portrait variants and real project screenshots are under `public`. The font is self-hosted with its OFL license. Original large PNGs, original credential component and invalid HTML files previously saved as project images are preserved in `assets/originals`, outside public output. Project captures are under `assets/captures`; validation screenshots are under `docs/screenshots`.

Portfolio demos are not proof of paid client engagements or business metrics. No unsupported experience counters, fabricated reviews or promised results are used. Add client-approved facts and outcomes as they become available.
