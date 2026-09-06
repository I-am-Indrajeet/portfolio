import { site, pages, services, projects } from "../data/site.js";
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export function schemaFor(page) {
  const canonical = site.origin + page.path;
  const person = {
    "@type": "Person",
    "@id": site.origin + "/#person",
    name: site.name,
    url: site.origin + "/",
    jobTitle: "Web Designer and Developer",
    image: site.origin + "/hero_section.webp",
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    sameAs: [site.github],
  };
  const website = {
    "@type": "WebSite",
    "@id": site.origin + "/#website",
    name: site.name,
    url: site.origin + "/",
    inLanguage: "en",
    publisher: { "@id": person["@id"] },
  };
  const webPage = {
    "@type": page.kind === "about" ? "ProfilePage" : "WebPage",
    "@id": canonical + "#webpage",
    url: canonical,
    name: page.title,
    description: page.description,
    isPartOf: { "@id": website["@id"] },
    about: { "@id": person["@id"] },
    inLanguage: "en",
  };
  if (page.kind === "about") webPage.mainEntity = { "@id": person["@id"] };
  const graph = [person, website, webPage];
  if (page.path !== "/" && !page.noindex) {
    const ancestors = [pages[0]];
    if (page.kind === "service")
      ancestors.push(pages.find((p) => p.kind === "services"));
    if (page.kind === "case")
      ancestors.push(pages.find((p) => p.kind === "portfolio"));
    ancestors.push(page);
    graph.push({
      "@type": "BreadcrumbList",
      "@id": canonical + "#breadcrumb",
      itemListElement: ancestors.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.label,
        item: site.origin + p.path,
      })),
    });
    webPage.breadcrumb = { "@id": canonical + "#breadcrumb" };
  }
  if (page.kind === "service") {
    const s = services.find((s) => s.slug === page.slug);
    graph.push({
      "@type": "Service",
      "@id": canonical + "#service",
      name: s.label,
      serviceType: s.label,
      description: s.description,
      url: canonical,
      provider: { "@id": person["@id"] },
      areaServed: { "@type": "Country", name: "Nepal" },
    });
  }
  if (page.kind === "case") {
    const p = projects.find((p) => p.slug === page.slug);
    graph.push({
      "@type": "CreativeWork",
      "@id": canonical + "#project",
      name: p.name,
      description: p.summary,
      url: p.link,
      image: site.origin + p.image,
      mainEntityOfPage: { "@id": webPage["@id"] },
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
export function headFor(page) {
  const canonical = site.origin + page.path;
  return `<!--seo-start-->
<title>${escape(page.title)}</title>
<meta name="description" content="${escape(page.description)}" />
<meta name="robots" content="${page.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />
<link rel="canonical" href="${canonical}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Indrajeet Mahara" />
<meta property="og:locale" content="en_US" />
<meta property="og:url" content="${canonical}" />
<meta property="og:title" content="${escape(page.title)}" />
<meta property="og:description" content="${escape(page.description)}" />
<meta property="og:image" content="${site.origin}/hero_section.webp" />
<meta property="og:image:alt" content="Portrait of Indrajeet Mahara" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escape(page.title)}" />
<meta name="twitter:description" content="${escape(page.description)}" />
<meta name="twitter:image" content="${site.origin}/hero_section.webp" />
<script type="application/ld+json">${JSON.stringify(schemaFor(page)).replace(/</g, "\\u003c")}</script>
<!--seo-end-->`;
}
