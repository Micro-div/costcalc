import { IconCheck } from "../utils/icons";

const PLANS = [
  {
    name: "Free",
    tag: null,
    tagline: "Instant estimates & every core tool for personal use.",
    features: [
      "Instant cost estimates",
      "Basic cost breakdown & scope",
      "Standard quotation PDF",
      "Shareable estimate link",
      "Limited saved estimates",
    ],
    cta: "Try free",
    primary: false,
  },
  {
    name: "Premium",
    tag: "For professionals",
    tagline: "Built for freelancers, contractors and agencies.",
    features: [
      "Unlimited estimates & history",
      "Custom branding & templates",
      "Digital signatures & approvals",
      "Estimate to invoice conversion",
      "Team access & analytics",
    ],
    cta: "Explore premium",
    primary: true,
  },
  {
    name: "Providers",
    tag: null,
    tagline: "Get verified, receive real project leads.",
    features: [
      "Verified business profile",
      "Request & submit quotations",
      "Featured placement",
      "Pay per qualified lead",
      "Business analytics",
    ],
    cta: "Join as provider",
    primary: false,
  },
];

export default function Plans() {
  return (
    <section className="section" id="plans">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Simple plans</span>
          <h2>Free to estimate. Premium when you need more.</h2>
        </div>
        <div className="plans-grid reveal">
          {PLANS.map((p) => (
            <div
              className={"plan" + (p.primary ? " plan-pop" : "")}
              key={p.name}
            >
              {p.tag && <span className="plan-tag">{p.tag}</span>}
              <h3>{p.name}</h3>
              <p>{p.tagline}</p>
              <ul className="check-list">
                {p.features.map((f) => (
                  <li key={f}>
                    <IconCheck />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                className={"btn " + (p.primary ? "btn-primary" : "btn-ghost") + " wide"}
                href="#estimator"
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}