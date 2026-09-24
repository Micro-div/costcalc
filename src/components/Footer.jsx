const PRODUCT = [
  { href: "#estimator", label: "Estimator demo" },
  { href: "#services", label: "Services" },
  { href: "#plans", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const COMPANY = [
  { href: "#how", label: "How it works" },
  { href: "#engine", label: "Why Estimo" },
  { href: "#hero", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="logo" href="#hero">
            <span className="logo-mark">E</span>
            <span className="logo-text">Estimo</span>
          </a>
          <p className="footer-note">
            The global starting point for answering "how much should this
            project cost?"
          </p>
        </div>
        <div className="footer-links">
          <strong>Product</strong>
          {PRODUCT.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="footer-links">
          <strong>Company</strong>
          {COMPANY.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Estimo. Presented as a product concept demo.</span>
        <span>Estimates are preliminary market estimates and are not legally binding.</span>
      </div>
    </footer>
  );
}