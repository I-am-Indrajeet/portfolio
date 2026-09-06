import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const nav = [
  ["Services", "/services/"],
  ["Work", "/portfolio/"],
  ["Pricing", "/website-cost-nepal/"],
  ["About", "/about/"],
];
export default function Header({ path }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <a href="/" className="brand" aria-label="Indrajeet Mahara home">
        <span className="brand-mark">
          im<span>.</span>
        </span>
        <span>
          INDRAJEET
          <br />
          MAHARA
        </span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map(([label, href]) => (
          <a
            key={href}
            href={href}
            aria-current={path.startsWith(href) ? "page" : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="/contact/">
        Let’s talk <ArrowUpRight size={16} />
      </a>
      <button
        ref={toggle}
        type="button"
        className="menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-controls="mobile-menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="mobile-menu"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {nav.map(([label, href]) => (
          <a
            href={href}
            key={href}
            aria-current={path.startsWith(href) ? "page" : undefined}
          >
            {label}
          </a>
        ))}
        <a href="/contact/">
          Start your project <ArrowUpRight size={18} />
        </a>
      </nav>
    </header>
  );
}
