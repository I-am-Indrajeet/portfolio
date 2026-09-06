import { ArrowUpRight, Code2, Mail, Phone } from "lucide-react";
import { site } from "../data/site.js";
export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-grid">
        <div>
          <a href="/" className="brand">
            <span className="brand-mark">
              im<span>.</span>
            </span>
            <span>
              INDRAJEET
              <br />
              MAHARA
            </span>
          </a>
          <p>
            Thoughtful websites.
            <br />
            Built in Kathmandu, for businesses everywhere.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <span className="eyebrow">EXPLORE</span>
          <a href="/services/">Services</a>
          <a href="/portfolio/">Selected work</a>
          <a href="/website-cost-nepal/">Website pricing</a>
          <a href="/about/">About me</a>
        </nav>
        <div className="footer-contact">
          <span className="eyebrow">START A CONVERSATION</span>
          <a href={`mailto:${site.email}`}>
            <Mail size={16} />
            {site.email}
          </a>
          <a href={`tel:${site.phone}`}>
            <Phone size={16} />
            +977 9809410215
          </a>
          <span>{site.location}</span>
          <a href="/contact/" className="text-link">
            Discuss your project <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Indrajeet Mahara</span>
        <div>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            <Code2 size={16} />
            GitHub <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a href="/privacy/">Privacy</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
