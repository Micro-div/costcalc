import { useEffect, useState } from "react";

const LINKS = [
  { href: "#estimator", label: "Demo" },
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#engine", label: "Why Estimo" },
  { href: "#plans", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"site-header" + (scrolled ? " scrolled" : "")} id="siteHeader">
      <nav className="nav container">
        <a className="logo" href="#hero">
          <span className="logo-mark">E</span>
          <span className="logo-text">Estimo</span>
        </a>
        <ul className={"nav-links" + (open ? " open" : "")} id="navLinks">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="btn btn-primary btn-sm"
              href="#estimator"
              onClick={() => setOpen(false)}
            >
              Try the demo
            </a>
          </li>
        </ul>
        <button
          className={"nav-toggle" + (open ? " open" : "")}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}