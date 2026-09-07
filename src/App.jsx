import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SectionHeading from "./components/SectionHeading";
import {
  ServiceGrid,
  Process,
  FAQ,
  Callout,
  PriceTeaser,
  Button,
} from "./components/Shared";
import { getPage } from "./data/site.js";
import {
  Services,
  Service,
  Pricing,
  LocalLanding,
  Portfolio,
  CaseStudy,
  About,
  Privacy,
  NotFound,
} from "./pages/Pages";
import Contact from "./pages/Contact";
function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <section className="section">
        <SectionHeading
          number="02 / WHAT I CAN HELP WITH"
          link="/services/"
          label="Explore services"
        >
          Built around your next move.
        </SectionHeading>
        <ServiceGrid />
      </section>
      <section className="section home-about split-section" id="about">
        <div>
          <p className="eyebrow">03 / THE PERSON BEHIND THE PIXELS</p>
          <h2>
            One person.
            <br />A considered approach.
          </h2>
        </div>
        <div>
          <p>
            You work directly with the person designing and developing your
            website. I’m Indrajeet Mahara, based in Kathmandu, with a focus on
            useful design, clear communication and the details that make a
            website work.
          </p>
          <p>
            Start with the business goal. Build the right pages. Make it easy
            for people to take the next step.
          </p>
          <Button href="/about/" secondary>
            More about me
          </Button>
        </div>
      </section>
      <Process />
      <PriceTeaser />
      <FAQ />
      <Callout title="Your next chapter deserves a better website." />
    </>
  );
}
export default function App({
  pathname = typeof window !== "undefined" ? window.location.pathname : "/",
} = {}) {
  const page = getPage(pathname);
  let content;
  switch (page.kind) {
    case "home":
      content = <Home />;
      break;
    case "services":
      content = <Services />;
      break;
    case "service":
      content = <Service slug={page.slug} />;
      break;
    case "pricing":
      content = <Pricing />;
      break;
    case "landing":
      content = <LocalLanding slug={page.slug} />;
      break;
    case "portfolio":
      content = <Portfolio />;
      break;
    case "case":
      content = <CaseStudy slug={page.slug} />;
      break;
    case "about":
      content = <About />;
      break;
    case "contact":
      content = <Contact />;
      break;
    case "privacy":
      content = <Privacy />;
      break;
    default:
      content = <NotFound />;
  }
  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header path={page.path} />
      <main id="main" tabIndex={-1}>
        {page.path !== "/" && (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            {page.kind === "service" && (
              <>
                <a href="/services/">Services</a>
                <span aria-hidden="true">/</span>
              </>
            )}
            {page.kind === "case" && (
              <>
                <a href="/portfolio/">Portfolio</a>
                <span aria-hidden="true">/</span>
              </>
            )}
            <span aria-current="page">{page.label}</span>
          </nav>
        )}
        {content}
      </main>
      <Footer />
    </div>
  );
}
