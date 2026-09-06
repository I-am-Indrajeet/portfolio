import {
  ArrowUpRight,
  Check,
  Globe,
  PenTool,
  Code2,
  ShoppingBag,
} from "lucide-react";
import { services, faqs } from "../data/site.js";
import SectionHeading, { Eyebrow } from "./SectionHeading";
export function Button({
  children,
  href = "/contact/",
  secondary = false,
  ...props
}) {
  return (
    <a
      href={href}
      className={`button ${secondary ? "button-secondary" : ""}`}
      {...props}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
export function PageIntro({ eyebrow, title, children }) {
  return (
    <header className="page-intro">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      {children && <p className="lead">{children}</p>}
    </header>
  );
}
export function ServiceGrid() {
  const icons = { Globe, PenTool, Code2, ShoppingBag };
  return (
    <div className="service-grid">
      {services.map((s) => {
        const Icon = icons[s.icon];
        return (
          <a
            href={`/services/${s.slug}/`}
            className="service-card"
            key={s.slug}
          >
            <div className="card-top">
              <Icon size={26} />
              <span>{s.number}</span>
            </div>
            <h3>{s.label}</h3>
            <p>{s.description}</p>
            <span className="text-link">
              Explore service <ArrowUpRight size={18} />
            </span>
          </a>
        );
      })}
    </div>
  );
}
export function Process() {
  return (
    <section className="section" id="process">
      <SectionHeading number="THE PROCESS">
        Clear steps. Shared decisions.
      </SectionHeading>
      <ol className="process-grid">
        {[
          [
            "Understand",
            "We discuss your business, audience and what the website needs to achieve.",
          ],
          [
            "Plan & design",
            "You review the scope, price, page structure and visual direction before the build.",
          ],
          [
            "Build & refine",
            "The website takes shape with feedback, responsive checks and agreed features.",
          ],
          [
            "Launch & hand over",
            "We check the essentials, launch and walk through ownership and the next steps.",
          ],
        ].map(([title, text], i) => (
          <li key={title}>
            <span className="step-number">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
export function FAQ({
  items = faqs,
  title = "A few things you might be wondering.",
}) {
  return (
    <section className="section faq-section">
      <div>
        <Eyebrow>GOOD QUESTIONS</Eyebrow>
        <h2>{title}</h2>
        <p>Something else on your mind?</p>
        <a className="text-link" href="/contact/">
          Let’s talk <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="faq-list">
        {items.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={17} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}
export function Callout({
  title = "Have something in mind?",
  text = "Tell me about your business and what you need. We’ll work out the right next step together.",
  cta = "Discuss your website",
  href = "/contact/",
}) {
  return (
    <section className="callout">
      <div>
        <Eyebrow>LET’S MAKE IT HAPPEN</Eyebrow>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Button href={href}>{cta}</Button>
    </section>
  );
}
export function PriceTeaser() {
  return (
    <section className="price-teaser">
      <div>
        <Eyebrow>A CLEAR STARTING POINT</Eyebrow>
        <h2>
          A better website starts
          <br />
          with a sensible scope.
        </h2>
        <p>
          Business websites from <strong>NPR 35,000.</strong> See the packages,
          what affects cost and what to plan for after launch.
        </p>
        <a href="/website-cost-nepal/" className="text-link">
          Explore website pricing <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="price-number">
        <span>PROJECTS FROM</span>
        <strong>
          35,000<span>NPR</span>
        </strong>
        <span>YOUR GOALS. YOUR SCOPE. A CLEAR QUOTE.</span>
      </div>
    </section>
  );
}
