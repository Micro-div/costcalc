const CHECKS = [
  "Country & city multipliers and live currency rates",
  "Confidence level from data completeness and freshness",
  "Min / average / max range instead of a single guess",
  "Scope of work, assumptions and risk factors explained",
];

const CARDS = [
  {
    cls: "blue",
    title: "AI layer",
    items: [
      "Understands natural language",
      "Extracts structured requirements",
      "Writes scope & quotation copy",
    ],
  },
  {
    cls: "green",
    title: "Pricing engine",
    items: [
      "Base market rates per category",
      "Local multipliers & taxes",
      "Range, confidence & math",
    ],
  },
  {
    cls: "amber",
    title: "Pricing data sources",
    items: [
      "Government & open datasets",
      "Licensed pricing APIs",
      "Historical platform estimates",
    ],
  },
];

export default function Engine() {
  return (
    <section className="section section-alt" id="engine">
      <div className="container engine-grid reveal">
        <div>
          <span className="eyebrow">Transparent by design</span>
          <h2>AI understands. Math calculates.</h2>
          <p className="lead">
            Estimo never lets AI invent prices. A deterministic pricing engine
            guarantees transparent, reproducible and mathematically accurate
            estimates — AI handles language, scope and content.
          </p>
          <ul className="check-list">
            {CHECKS.map((c) => (
              <li key={c}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="engine-cards">
          {CARDS.map((card) => (
            <div className="float-card ecard" key={card.title}>
              <div className="ecard-top">
                <span className={"ecard-dot " + card.cls}></span>
                <strong>{card.title}</strong>
              </div>
              <ul>
                {card.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}