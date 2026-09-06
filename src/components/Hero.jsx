import { ArrowDown, MapPin } from "lucide-react";
import { Button } from "./Shared";
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> FREELANCE WEB DEVELOPER · NEPAL
        </p>
        <h1>
          Websites built
          <br />
          to <span>earn their place</span>
          <br />
          in your business.
        </h1>
        <p className="hero-description">
          I’m Indrajeet, a web designer and developer in Kathmandu. I build
          thoughtful websites that help the right people find you, understand
          you and get in touch.
        </p>
        <div className="button-row">
          <Button>Discuss your website</Button>
          <Button href="/portfolio/" secondary>
            Explore my work
          </Button>
        </div>
        <p className="hero-note">
          Projects from <strong>NPR 35,000</strong>
          <span> / </span>Direct collaboration, from idea to launch.
        </p>
      </div>
      <div className="hero-portrait">
        <span className="portrait-word" aria-hidden="true">
          CREATE.
        </span>
        <img
          src="/portrait-800.webp"
          srcSet="/portrait-400.webp 400w, /portrait-800.webp 800w"
          sizes="(max-width: 700px) 85vw, 45vw"
          alt="Indrajeet Mahara, web designer and developer in Kathmandu"
          width="800"
          height="808"
          fetchPriority="high"
        />
        <div className="portrait-caption">
          <span>
            DESIGNED WITH INTENT.
            <br />
            BUILT WITH CARE.
          </span>
          <span className="signature">Indrajeet.</span>
        </div>
      </div>
      <div className="hero-bottom">
        <span>
          <MapPin size={15} /> Kathmandu, Nepal · Working worldwide
        </span>
        <a href="#projects">
          A little less talk. A little more work. <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}
