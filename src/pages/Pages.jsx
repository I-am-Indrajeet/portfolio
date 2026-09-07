import { ArrowUpRight } from "lucide-react";
import {
  services,
  projects,
  packages,
  localLandingPages,
  site,
  money,
} from "../data/site.js";
import {
  Button,
  PageIntro,
  ServiceGrid,
  Process,
  FAQ,
  CheckList,
  Callout,
  PriceTeaser,
} from "../components/Shared";
import SectionHeading, { Eyebrow } from "../components/SectionHeading";
import { ProjectCard } from "../components/Projects";
export function Services() {
  return (
    <>
      <PageIntro
        eyebrow="WEBSITE DEVELOPMENT SERVICES IN NEPAL"
        title="The right website for your next step."
      >
        From your first business website to a more ambitious digital product.
        Start with what you need the website to do, and we’ll find the right
        approach.
      </PageIntro>
      <section className="section-top">
        <h2 className="sr-only">Choose a website service</h2>
        <ServiceGrid />
      </section>
      <section className="section split-section">
        <div>
          <Eyebrow>THE ESSENTIALS COME FIRST</Eyebrow>
          <h2>More than a collection of pages.</h2>
        </div>
        <div>
          <p>
            Clear content, a mobile-friendly experience and a straightforward
            path to contact are part of the foundation. We define what is
            included before work begins.
          </p>
          <CheckList
            items={[
              "A written scope and project estimate",
              "Responsive layouts and accessible interactions",
              "Technical SEO and launch checks",
              "Handover and ownership explained",
            ]}
          />
        </div>
      </section>
      <Process />
      <PriceTeaser />
      <FAQ />
      <Callout />
    </>
  );
}
export function Service({ slug }) {
  const s = services.find((s) => s.slug === slug),
    p = projects.find((p) => p.slug === s.related);
  const href = `/contact/?service=${encodeURIComponent(s.label)}`;
  return (
    <>
      <PageIntro eyebrow={s.label.toUpperCase() + " / NEPAL"} title={s.h1}>
        {s.intro}
      </PageIntro>
      <div className="button-row">
        <Button href={href}>Discuss your project</Button>
        <a href="/website-cost-nepal/" className="text-link">
          See pricing <ArrowUpRight size={18} />
        </a>
      </div>
      <section className="section split-section">
        <div>
          <Eyebrow>IS THIS THE RIGHT FIT?</Eyebrow>
          <h2>{s.tagline}</h2>
        </div>
        <p>{s.audience}</p>
      </section>
      <section className="section">
        <SectionHeading number="WHAT WE CAN BUILD">
          A scope shaped around your goals.
        </SectionHeading>
        <div className="feature-grid">
          {s.items.map(([title, text], i) => (
            <article key={title}>
              <span className="step-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section split-section">
        <div>
          <Eyebrow>BUDGET & TIMING</Eyebrow>
          <h2>
            Know what you’re
            <br />
            getting into.
          </h2>
        </div>
        <div>
          <h3>What it costs</h3>
          <p>{s.scope}</p>
          <h3>How long to allow</h3>
          <p>{s.time}</p>
          <p className="muted">
            Planning estimates, subject to content readiness and agreed
            requirements. Hosting, domain, paid tools and ongoing maintenance
            are separate.
          </p>
          <a className="text-link" href="/website-cost-nepal/">
            Compare packages and exclusions <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      {p && (
        <section className="section related-project">
          <div>
            <Eyebrow>A RELEVANT PROJECT</Eyebrow>
            <h2>
              See the approach
              <br />
              in practice.
            </h2>
            <p>{p.summary}</p>
          </div>
          <ProjectCard project={p} />
        </section>
      )}
      <FAQ items={s.faq} />
      <Callout title="Let’s define your first step." href={href} />
    </>
  );
}
export function Pricing() {
  return (
    <>
      <PageIntro
        eyebrow="WEBSITE DEVELOPMENT COST IN NEPAL"
        title="Clear starting prices. A quote that fits your project."
      >
        Websites start at NPR 35,000. Choose a useful starting point below, then
        we’ll confirm the pages, features and final price together.
      </PageIntro>
      <section className="section-top">
        <h2 className="sr-only">Website packages and starting prices</h2>
        <div className="pricing-grid">
          {packages.map((p, i) => (
            <article
              className={`pricing-card ${i === 1 ? "featured" : ""}`}
              key={p.name}
            >
              {i === 1 && (
                <span className="package-label">FOR A GROWING BUSINESS</span>
              )}
              <Eyebrow>{p.for}</Eyebrow>
              <h3>{p.name}</h3>
              <p className="price-label">Starting from</p>
              <p className="package-price">{money(p.price)}</p>
              <CheckList items={p.items} />
              <p className="package-note">{p.note}</p>
              <Button
                secondary={i !== 1}
                href={`/contact/?service=${encodeURIComponent(p.service)}`}
              >
                Request an estimate
              </Button>
            </article>
          ))}
        </div>
        <p className="pricing-disclosure">
          Prices are development starting points in NPR, not an all-inclusive
          fixed quote. Domain, hosting, paid services, applicable taxes and
          ongoing maintenance are separate; the proposal confirms all inclusions
          and charges before work starts.
        </p>
      </section>
      <section className="custom-price">
        <div>
          <h2>Something more custom?</h2>
          <p>
            Advanced stores, marketplaces, integrations and web applications
            need a separate scope.
          </p>
        </div>
        <a
          href="/contact/?service=Custom%20web%20development"
          className="text-link"
        >
          Let’s scope it together <ArrowUpRight size={18} />
        </a>
      </section>
      <section className="section split-section">
        <div>
          <Eyebrow>WHAT MOVES THE PRICE</Eyebrow>
          <h2>
            Compare the work.
            <br />
            Then compare the price.
          </h2>
          <p>
            Two websites with the same page count can involve very different
            work. A useful estimate explains the differences.
          </p>
        </div>
        <div className="cost-factors">
          {[
            [
              "Pages & content",
              "Page types, copy preparation, photography, language versions and the time to organise existing material.",
            ],
            [
              "Design & functionality",
              "Custom layouts, content management, forms, product variants, search or workflows beyond standard pages.",
            ],
            [
              "Integrations",
              "Payment providers, booking systems, third-party tools, account access and testing requirements.",
            ],
            [
              "After launch",
              "Domain renewals, hosting, provider subscriptions, backups, security updates and future content changes.",
            ],
          ].map(([t, d]) => (
            <div key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <SectionHeading number="A PRACTICAL PLANNING GUIDE">
          Budget for the whole website.
        </SectionHeading>
        <div className="feature-grid">
          <article>
            <h3>What you receive</h3>
            <p>
              The agreed pages and features, responsive development, basic
              technical SEO, launch checks and a handover. Editable content and
              support scope are confirmed in writing.
            </p>
          </article>
          <article>
            <h3>What you provide</h3>
            <p>
              Your business information, logo, content and photographs, plus
              timely feedback. Content creation and specialist photography can
              be discussed separately.
            </p>
          </article>
          <article>
            <h3>What takes time</h3>
            <p>
              A starter site may take 2–4 weeks after content is ready.
              Content-managed or travel sites may need 4–8 weeks; a store may
              need 6–10. These are planning ranges, not delivery guarantees.
            </p>
          </article>
          <article>
            <h3>What to agree upfront</h3>
            <p>
              Page count, functionality, reviews, payment milestones, account
              ownership, support and a process for changes. You should know what
              happens if the scope grows.
            </p>
          </article>
        </div>
      </section>
      <FAQ
        items={[
          [
            "Why do website prices in Nepal vary so much?",
            "A template setup, custom business site and online store require different amounts of work. Compare deliverables, content management, third-party costs and support—not just the headline price.",
          ],
          [
            "Is hosting or a domain included?",
            "No. Domain registration, hosting, paid services, applicable taxes and ongoing maintenance are separate from the advertised development starting prices. Your proposal identifies the relevant charges before you commit.",
          ],
          [
            "Should I choose a freelancer or an agency?",
            "A freelancer can offer direct collaboration for a focused project. An agency may suit work that needs several specialists or continuous coverage. In either case, check relevant work, written scope, code ownership and support arrangements.",
          ],
          [
            "Can we start with a smaller scope?",
            "Yes. We can prioritise core pages and the most useful contact path, then discuss later phases. Tell me your budget early so the first version can be planned realistically.",
          ],
          [
            "Do you give a fixed quote?",
            "The starting price is a guide. After understanding the work, I provide a proposal with a defined scope and estimate. New features or scope changes are discussed before proceeding.",
          ],
        ]}
      />
      <Callout
        title="Let’s put a number to your idea."
        cta="Request a website estimate"
      />
    </>
  );
}
export function LocalLanding({ slug }) {
  const page = localLandingPages.find((item) => item.slug === slug);
  return (
    <>
      <PageIntro eyebrow={page.eyebrow} title={page.h1}>
        {page.intro}
      </PageIntro>
      <div className="button-row">
        <Button href="/contact/">Discuss your website</Button>
        <Button href="/services/" secondary>
          Explore services
        </Button>
      </div>
      <section className="section split-section">
        <div>
          <Eyebrow>THE RIGHT SCALE FOR THE JOB</Eyebrow>
          <h2>{page.fitTitle}</h2>
        </div>
        <p>{page.fitText}</p>
      </section>
      <section className="section">
        <SectionHeading number="WHAT I CAN BUILD">
          A clear scope, built with care.
        </SectionHeading>
        <div className="feature-grid">
          {page.items.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section split-section">
        <div>
          <Eyebrow>LOCAL, DIRECT COLLABORATION</Eyebrow>
          <h2>{page.localTitle}</h2>
        </div>
        <div>
          <p>{page.localText}</p>
          <a className="text-link" href="/website-cost-nepal/">
            See website starting prices <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <FAQ items={page.faq} title="Questions before you start?" />
      <Callout
        title="Have a website project in mind?"
        text="Tell me what you are building, who it is for and what you need the site to do. I’ll help you decide the next sensible step."
      />
    </>
  );
}
export function Portfolio() {
  return (
    <>
      <PageIntro
        eyebrow="SELECTED WORK / SEVEN PROJECTS"
        title="The work behind the words."
      >
        Travel, hospitality, education and brand experiences. Explore the
        thinking behind the interface, then open the project and take a look.
      </PageIntro>
      <section className="section-top">
        <h2 className="sr-only">Featured project studies</h2>
        <div className="project-grid">
          {projects
            .filter((p) => p.slug)
            .map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
        </div>
      </section>
      <section className="section">
        <SectionHeading number="MORE TO EXPLORE">
          Other projects & experiments.
        </SectionHeading>
        <div className="other-projects">
          {projects
            .filter((p) => !p.slug)
            .map((p, i) => (
              <article key={p.name}>
                <span className="project-index">0{i + 4}</span>
                <div>
                  <Eyebrow>{p.category}</Eyebrow>
                  <h3>{p.name}</h3>
                  <p>{p.summary}</p>
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                  aria-label={`Open ${p.name} project preview (new tab)`}
                >
                  View project <ArrowUpRight size={20} />
                </a>
              </article>
            ))}
        </div>
        <p className="evidence-note">
          These are portfolio project previews, including experiments. A preview
          is not a claim of a paid client engagement or verified business
          results. Public demos may contain unfinished functionality.
        </p>
      </section>
      <Callout
        title="See a direction that fits your business?"
        cta="Start a similar project"
      />
    </>
  );
}
export function CaseStudy({ slug }) {
  const p = projects.find((p) => p.slug === slug);
  return (
    <>
      <PageIntro
        eyebrow={"PROJECT STUDY / " + p.category.toUpperCase()}
        title={p.name}
      >
        {p.summary}
      </PageIntro>
      <div className="case-meta">
        <div>
          <span>PROJECT TYPE</span>
          <strong>{p.type}</strong>
        </div>
        <div>
          <span>VISIBLE TECHNOLOGY</span>
          <strong>{p.stack}</strong>
        </div>
        <a
          href={p.link}
          className="text-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open project preview <ArrowUpRight size={18} />
          <span className="sr-only">(new tab)</span>
        </a>
      </div>
      <figure className="case-image">
        <img
          src={p.image}
          alt={`${p.name} homepage screenshot captured from the public project preview`}
          width="1440"
          height="900"
          fetchPriority="high"
        />
        <figcaption>
          Public project preview, captured September 2026.
        </figcaption>
      </figure>
      <section className="section case-body">
        <aside>
          <Eyebrow>BEHIND THE INTERFACE</Eyebrow>
          <p>
            A look at the context,
            <br />
            the decisions and the result.
          </p>
        </aside>
        <div>
          {[
            ["The context", p.context],
            ["The design challenge", p.problem],
            ["The approach", p.approach],
          ].map(([t, d]) => (
            <div key={t}>
              <h2>{t}</h2>
              <p>{d}</p>
            </div>
          ))}
          <div>
            <h2>What the project presents</h2>
            <CheckList items={p.features} />
          </div>
          <div>
            <h2>The result, honestly</h2>
            <p>{p.outcome}</p>
            <p className="evidence-note">
              This study describes the supplied project and observable
              interface. Client status, detailed delivery process and commercial
              metrics have not been independently established. The public
              preview may include unfinished features.
            </p>
          </div>
          <a className="text-link" href={`/services/${p.service}/`}>
            Explore the related service <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <Callout
        title="A similar challenge on your mind?"
        cta="Discuss your project"
        href={`/contact/?service=${encodeURIComponent(p.service === "business-websites" ? "Travel & hospitality" : "Custom web development")}`}
      />
      <div className="section-top">
        <a className="text-link" href="/portfolio/">
          ← Back to all projects
        </a>
      </div>
    </>
  );
}
export function About() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT INDRAJEET"
        title="A thoughtful approach. A person you can talk to."
      >
        I’m a web designer and developer based in Pepsicola, Kathmandu. I bring
        design and development together so a website feels coherent from the
        first impression to the final interaction.
      </PageIntro>
      <section className="section-top about-grid" id="about">
        <div className="about-photo">
          <img
            src="/portrait-800.webp"
            srcSet="/portrait-400.webp 400w, /portrait-800.webp 800w"
            sizes="(max-width:700px) 90vw, 40vw"
            alt="Portrait of Indrajeet Mahara"
            width="800"
            height="808"
          />
          <span className="signature">Indrajeet.</span>
        </div>
        <div>
          <Eyebrow>DESIGN MEETS DEVELOPMENT</Eyebrow>
          <h2>The details should serve the bigger picture.</h2>
          <p>
            I work with business websites and interactive digital experiences.
            My portfolio includes travel, hospitality, education and brand
            projects—each with its own audience and purpose.
          </p>
          <p>
            My approach starts with understanding what a visitor needs to know
            and what you want them to do next. That shapes the content, layout
            and technology, rather than the other way around.
          </p>
          <p>
            Working directly means the conversation about your goals stays
            connected to the person designing and building the site.
          </p>
          <Button>Discuss your website</Button>
        </div>
      </section>
      <section className="section split-section">
        <div>
          <Eyebrow>BACKGROUND & TOOLKIT</Eyebrow>
          <h2>
            A foundation
            <br />
            to build on.
          </h2>
        </div>
        <div>
          <h3>BSc. Information Technology</h3>
          <p>
            International School of Management and Technology (ISMT), Kathmandu,
            Nepal.
          </p>
          <p className="muted">
            Studies include software engineering, databases, web technologies,
            networking and object-oriented programming.
          </p>
          <h3>Higher secondary education · Science</h3>
          <p>NAST College, Dhangadi, Nepal.</p>
          <h3>School education</h3>
          <p>Shree Dharma Janata Higher Secondary School.</p>
          <h3>Tools for the task</h3>
          <div className="skill-tags">
            {[
              "React",
              "JavaScript",
              "HTML & CSS",
              "Python",
              "Django",
              "Node.js",
              "REST APIs",
              "SQL",
              "PostgreSQL",
              "Git & GitHub",
              "Flutter",
            ].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Explore my GitHub <ArrowUpRight size={18} />
            <span className="sr-only">(new tab)</span>
          </a>
        </div>
      </section>
      <Process />
      <Callout />
    </>
  );
}
export function Privacy() {
  return (
    <>
      <PageIntro eyebrow="PRIVACY" title="Your inquiry, your information.">
        A straightforward explanation of how contact details are handled on this
        website.
      </PageIntro>
      <article className="prose section-top">
        <h2>The project brief form</h2>
        <p>
          The form creates an email draft in your browser. It does not submit
          your details to a server, store them in browser storage or
          automatically send an email. Your details remain in the current page
          until you navigate away, copy the draft or open it in an email app.
        </p>
        <h2>Email and phone contact</h2>
        <p>
          If you send an email, your email service and the receiving email
          service process it. Indrajeet uses the information you choose to share
          to discuss your inquiry and any resulting project. Avoid sending
          passwords, payment details or other sensitive information in the
          initial brief.
        </p>
        <h2>Cookies and measurement</h2>
        <p>
          This website does not install analytics or advertising cookies. Basic
          button-action events can be emitted inside the page, without your
          name, email address or message. No analytics destination is configured
          to receive them.
        </p>
        <h2>Hosting and external links</h2>
        <p>
          The hosting provider may process standard access logs such as IP
          addresses and browser information for delivery and security. External
          project sites and GitHub apply their own privacy practices.
        </p>
        <h2>Questions or deletion requests</h2>
        <p>
          Contact <a href={`mailto:${site.email}`}>{site.email}</a> to ask about
          information you have shared or request its deletion.
        </p>
      </article>
    </>
  );
}
export function NotFound() {
  return (
    <>
      <PageIntro
        eyebrow="404 / PAGE NOT FOUND"
        title="This page has moved off the map."
      >
        The address may be incomplete or the page may no longer exist. These
        links will get you back on track.
      </PageIntro>
      <div className="button-row">
        <Button href="/">Back to home</Button>
        <Button href="/services/" secondary>
          Explore services
        </Button>
        <a className="text-link" href="/contact/">
          Contact me <ArrowUpRight size={18} />
        </a>
      </div>
    </>
  );
}
