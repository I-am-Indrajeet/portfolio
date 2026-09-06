# Portfolio audit and lead-generation strategy

Research date: 6 September 2026. Sources are a point-in-time search sample, not a verified Nepal Google ranking report. No Keyword Planner, Search Console, paid volume or keyword-difficulty data was available. Google Trends was inspected later in Chrome; the normalized comparison is recorded below. Demand, competition, and lead value below are qualitative hypotheses to validate after launch. No volumes or ranking promises are made.

## Existing project audit (before implementation)

React 19 / Vite 8, Tailwind 4 and Lucide; npm lockfile. One client-rendered page, five components, no router, backend, test or lint scripts. Uncommitted user changes already present: retain their substantive portrait, project, contact, education, and SEO content. No AGENTS.md found in the project. No hosting manifest initially.

Preserve: distinctive black/red design, condensed display typography, real portrait WebP, seven project names/descriptions/URLs, public email and telephone, Pepsicola/Kathmandu location, GitHub profile, education, Search Console verification, established www canonical domain, original section anchors.

Improve: no navigation beyond a nonfunctional mobile menu; no hero inquiry CTA; 7–12px body/labels and dim text; oversized animated hero competes with value proposition; carousel hides work and makes off-screen cards keyboard focusable; no service/cost pages; portfolio cards have no project detail route; no inquiry form or analytics. Reduced-motion CSS leaves the JS scramble timer running. Four external Google font families and a generic remote footer image add requests. Only homepage metadata/schema/sitemap; crawlers receive an empty root before JS rendering. No 404 or deployment routing rules. Existing structure has a main wrapping footer, and project headings unnecessarily descend to h4.

Assets: all files under public/projects, including normalized copies, are HTML documents incorrectly saved with image extensions; do not serve them as images. Portrait PNGs total over 6MB; existing WebPs are approximately 124KB each. Preserve original source assets outside the shipped public directory and produce smaller responsive portrait variants. Verify project previews before claiming live availability or results.

Trust: remove unsupported 10+ years, 11+ completed projects, 20+ happy clients. Keep seven projects as portfolio work, without asserting commissioned client relationships, revenue results, authorship of unverified integrations, awards, or testimonials. No registered company / LocalBusiness / review markup without evidence.

## Research observations and differentiation

- [Damodar](https://damodar.dev/): narrow freelancer/technology positioning, service and work links, named personal contact and Kathmandu relevance. Opportunity: put client deliverables and budget decisions ahead of tool lists.
- [Kokil Thapa](https://kokil.com.np/index.php): extensive service navigation, experience-led homepage and project totals, repeated contact prompts. His [freelancer rates guide](https://kokil.com.np/blog/freelance-web-developer-nepal-rates-per-project) matches price-comparison intent. Opportunity: concise navigation with one URL per intent; trust through inspectable work instead of unverified numbers.
- [LinkBinary website development](https://www.linkbinary.com.np/services/website-development): explicit scope, turnaround and NPR starting price, clear service hierarchy. Opportunity: distinguish included work from optional CMS, content, maintenance and hosting.
- [Brandx](https://www.brandxnepal.com/en/services/website-design-development): business-problem-first service narrative, deliverables and timeline. Opportunity: connect service choice to relevant actual portfolio studies and a simple inquiry brief.
- [Infobytes FAQ](https://www.infobytesnepal.com/faq): price, ownership, support and comparison questions reflect objections close to purchase. Opportunity: surface a small relevant FAQ in each decision page rather than a giant FAQ destination.
- [Fossa pricing guide](https://fossatechnology.com.np/blog/website-design-cost-in-nepal) and [Shailee cost guide](https://shailee.io/website-development-cost-in-nepal/): published prices vary substantially by scope. Use scope-aware starting prices approved by the owner; the final pricing decision and competitor comparison are recorded below.

Competitor factual claims are their own and were not independently audited. Research inspected search snippets, page content, headings, navigation, CTA patterns, local signals, visible trust claims and contact flows. It did not submit competitor forms or validate their underlying schema/analytics. Title samples include “Freelance Laravel & Web Developer in Nepal | Damodar” and “Website Development Services Nepal | Professional Business Websites | LinkBinary”; description snippets favor named services and deliverables. Do not treat snippets as guaranteed verbatim meta descriptions.

## Keyword map

| Keyword / related terms | Intent and audience | Destination; role | Angle | Lead value / priority | Demand / competition hypothesis |
|---|---|---|---|---|---|
| web developer in Nepal | Hire; business owners | /; primary | Named Kathmandu freelancer, work, direct inquiry | High / P1 | Relevant SERP; broad competition |
| freelance web developer Nepal; hire web developer Nepal | Hire; SMEs, founders | /; secondary | Direct work with designer/developer | High / P1 | Freelancer + marketplace competition |
| web developer Kathmandu | Local hire; Kathmandu businesses | /; secondary | Actual location and local contact | High / P1 | Narrower locality, no volume evidence |
| website development services Nepal; website building services | Compare suppliers; SMEs | /services/; primary + secondary | Choose scope, deliverables, related work | High / P1 | Agency-heavy SERP |
| business website development Nepal; small business website Nepal | Purchase; hospitality, travel, professional services | /services/business-websites/; primary + secondary | Services, proof and inquiry journey | High / P1 | Narrower fit than broad agency terms |
| website design Nepal; website redesign Nepal; website design and development | Compare/hire; new businesses and owners replacing sites | /services/website-design/; primary + secondary | Structure, visual design, mobile usability | High / P1 | Broad design competition |
| custom website development Nepal; React developer Nepal; web application development | Hire; founders, workflow owners | /services/custom-development/; primary + secondary | Scope a specific interaction/workflow; technical discussion | High / P2 | Higher value, stronger technical qualification needed |
| website development cost Nepal; website price Nepal; website design cost Nepal | Commercial research; budget holders | /website-cost-nepal/; primary + secondary | NPR market examples, scope, recurring expenses | High / P1 | Strong published guide competition |
| freelance developer vs agency Nepal | Commercial research; buyers choosing a provider | /website-cost-nepal/; secondary FAQ | Ownership, continuity, scope over cheapest quote | Medium-high / P2 | Informational overlap |
| web developer portfolio Nepal; website development projects | Trust/research; evaluating buyers | /portfolio/; primary + secondary | Seven projects, three focused studies | High assisted / P1 | Branded discovery; not a volume target |
| travel website design Nepal; resort website design Nepal | Niche commercial; travel and hospitality owners | Relevant portfolio studies; secondary | Sector-specific experience and design reasoning | High assisted / P2 | Demand unverified; no doorway service pages |
| how long does website development take; what to prepare for a website | Research; early-stage buyers | Service, price and contact FAQs; secondary | Preparation checklist and scoped timing | Medium / P2 | Avoid low-value generic tutorials |
| Indrajeet Mahara | Navigational; referrals | /about/; primary | Real background and skills | High assisted / P1 | Branded |
| contact Indrajeet Mahara; website quote Nepal | Transactional; ready buyers | /contact/; primary + secondary | Project type, goal, budget, timeline | High / P1 | Conversion destination |

Exclude job vacancies, salaries, free website builders, web development courses, generic programming tutorials, “best/#1” claims, and “company” positioning for a solo freelancer. E-commerce has a dedicated scoped service page following the owner’s pricing direction; do not invent payment/inventory delivery experience.

## Page architecture / content briefs

All indexable pages: unique title/description, self canonical on established domain, WebPage + Person/WebSite graph, breadcrumb except home. No FAQ rich-result promise or LocalBusiness/Review markup.

| URL | H1 | Audience / intent / purpose | Main sections | CTA / internal links / conversion |
|---|---|---|---|---|
| / | Websites built to earn their place in your business. | Owners hiring a Nepal developer | Value + portrait, selected work, services, process, price teaser, FAQ | Discuss your website → contact; portfolio, services, cost, about; qualified inquiry |
| /services/ | The right website for your next step. | Buyers comparing website services | Three service scopes, inclusions, process, FAQ | Get a free quote; three service routes + portfolio + cost |
| /services/business-websites/ | A business website that makes the next step obvious. | SMEs purchasing an inquiry website | Audience, deliverables, content, related work, budget/time, FAQ | Discuss a business website → prefilled contact; cost + travel/resort studies; Service schema |
| /services/website-design/ | Good design makes your business easier to choose. | New sites / redesign buyers | UX, brand, mobile, audit before rebuild, scope, FAQ | Discuss your design → prefilled contact; portfolio + cost; Service schema |
| /services/custom-development/ | Custom development for the way your business works. | Buyers needing specific functionality | Workflow discovery, feature scoping, technical fit, limits, GrammarIELTS example | Discuss your project → prefilled contact; cost + study; Service schema |
| /website-cost-nepal/ | What should you budget for a website in Nepal? | Price-aware business owners | Cited illustrative NPR ranges, inclusions, recurring expenses, timeline, comparison FAQ | Request a website estimate → prefilled contact; service routes + portfolio |
| /portfolio/ | The work behind the words. | Buyers verifying fit | Three studies + four other existing projects, transparent evidence limits | Start a similar project; studies + service routes |
| /portfolio/shailung-holidays/ | Shailung Holidays | Travel website buyers | Context, design objective, approach, available features, outcome limits | Discuss a travel website; business service + contact; CreativeWork schema |
| /portfolio/shailung-eco-village/ | Shailung Eco Village | Hospitality buyers | Context, content hierarchy, experience-led presentation, outcome limits | Discuss a hospitality website; business service + contact; CreativeWork schema |
| /portfolio/grammarielts/ | GrammarIELTS | Interactive product buyers | Learning problem, practice/feedback flow, no-login interaction, outcome limits | Discuss an interactive product; custom service + contact; CreativeWork schema |
| /about/ | A thoughtful approach. A person you can talk to. | Referrals and evaluating buyers | Portrait, verified background, education, skills, collaboration process | Discuss your project; GitHub + portfolio + contact; ProfilePage/Person |
| /contact/ | Tell me what you want your website to do. | Ready-to-inquire visitors | Labeled brief form, email draft/copy fallback, public email/phone/location, next steps | Prepare inquiry → review → email app; no false sent state |
| /privacy/ | Your inquiry, your information. | Form users; transparency | Local-only form behavior, email handling, hosting logs, no analytics cookies | Contact; no marketing keyword target |
| /404.html | This page has moved off the map. | Invalid URLs | Recovery links | Home + services + contact; noindex; excluded from sitemap |

No duplicate homepage location routes, separate generic web-development route, thin testimonials page, empty blog or standalone FAQ page. Preserve #home, #projects, #about and #contact anchors. Normal anchor navigation with prerendered HTML avoids a router dependency and gives every page content without JavaScript. A build-time route registry owns all metadata and sitemap URLs.

## Measurement and next actions

Primary outcome is qualified inquiries, then accepted proposals—not raw visits. Track service CTA, cost CTA, email/call intent and prepared brief without names/email/body. These actions are intent, never successful leads. Add a consent-aware analytics provider only after the owner supplies a property/measurement choice. Search Console: submit sitemap, inspect all commercial routes, compare query impressions/clicks and qualified inquiries after 4–8 weeks. Request genuine project ownership/scope, screenshots, metrics and testimonials. Confirm timing/support in proposals and choose a direct form delivery provider if desired. Consider a Google Business Profile only if eligibility and customer-facing operations are confirmed. Earn relevant Nepal business/partner links and later publish useful case-led content grounded in actual delivery.

## Owner-approved pricing and subsequent research update

The owner supplied a NPR 35,000 starting point, then requested pricing slightly below [Web House Nepal](https://webhousenepal.com/blogs/website-design-and-development-price-in-nepal). Their page was inspected on 6 September 2026: dynamic websites from NPR 60,000; travel from NPR 80,000; basic e-commerce from NPR 120,000. Implemented: professional/CMS NPR 55,000 (8.3% below), travel/hospitality NPR 75,000 (6.25% below), single-vendor e-commerce NPR 110,000 (8.3% below). Keep starter NPR 35,000 as explicitly requested. Their static offers at NPR 20,000–30,000 are lower than this starter; no blanket “cheaper than Web House” claim appears on the website. Features and scope are not identical. Hosting/domain and other services are excluded from their figures; our page also separates recurring charges and confirms applicable taxes in the proposal.

This supersedes the earlier market-range placeholder plan. It also justifies /services/ecommerce/ (primary: e-commerce website development Nepal; audience: single-vendor sellers; H1: “An online store built around your business.”; sections: audience, catalogue/checkout/order scope, provider dependencies, price/timing, FAQ; Service/Breadcrumb schema; CTA: prefilled quote inquiry; links: pricing/services/contact). No existing payment integration success or e-commerce conversion claim is made.

### Google Trends (owner suggested using Chrome)

Observed directly in Chrome: [Nepal, past 12 months, all categories, Web Search, four search terms](https://trends.google.com/trends/explore?date=today%2012-m&geo=NP&q=web%20development,website%20design,web%20developer,website%20cost). Relative average interest in this comparison: website design 45, web development 34, website cost 9, web developer 2. Values are Google’s normalized comparison indices, NOT monthly searches, lead counts, or market shares. Sampled and sparse data includes many zero weeks; zero does not establish no demand. The current partial week was displayed, so the comparison is not a finalized annual series.

Related queries: web developer → “web developer in nepal” (Top, normalized 100); web development → technical subjects such as API design principles and web development best practices; website design → website design AI; website cost → insufficient related-query data. Interpretation: broad topics mix buyers with technical/learning interest. Retain high-intent service, local hiring and price pages; do not chase technical tutorial queries simply for volume. This is category validation, not exact long-tail volume or proof of future leads.

Project validation update: three public previews were accessible using direct HTTP/browser inspection; actual screenshots captured. Shailung Holidays exposes HTML/CSS/JS; Eco Village and GrammarIELTS expose Next.js assets. The resort preview has unfinished contact placeholders, so all previews are labeled as portfolio work/demos rather than guaranteed production client websites. No form on another website was submitted.
