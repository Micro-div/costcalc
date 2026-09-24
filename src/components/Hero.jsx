import BrowserMock from "./BrowserMock";

const POINTS = [
  "AI understands, a rule-based engine calculates",
  "Localized to your country, city & currency",
  "Free estimate, editable quotation, PDF & share link",
];

const STRIP = [
  { strong: "4 phases", span: "Digital · Home · Construction · Events" },
  { strong: "100+", span: "service categories planned" },
  { strong: "Local data", span: "country & city pricing" },
  { strong: "0 cost", span: "basic estimates remain free" },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-grid reveal">
        <div className="hero-copy">
          <span className="badge">
            <span className="dot"></span> AI-Powered Cost Estimation Platform
          </span>
          <h1>
            Know exactly what your{" "}
            <span className="grad-text">project should cost</span>.
          </h1>
          <p className="lead">
            Describe any project in plain language. Estimo analyses your
            requirements, asks a few smart questions and gives you a localized
            cost range, detailed scope and a professional quotation — in
            minutes.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#estimator">
              Estimate my project
            </a>
            <a className="btn btn-ghost" href="#services">
              Explore services
            </a>
          </div>
          <ul className="hero-points">
            {POINTS.map((p) => (
              <li key={p}>
                <span className="check"></span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <BrowserMock />
      </div>
      <div className="hero-strip container">
        {STRIP.map((s) => (
          <div className="strip-item" key={s.strong}>
            <strong>{s.strong}</strong>
            <span>{s.span}</span>
          </div>
        ))}
      </div>
    </section>
  );
}