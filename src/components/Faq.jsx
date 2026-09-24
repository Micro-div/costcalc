import { useState } from "react";

const FAQS = [
  {
    q: "Is the estimate accurate?",
    a: "Every estimate is a localized market range built from pricing data, not a single AI guess. Each result includes a confidence level and states its assumptions clearly.",
  },
  {
    q: "Is it really free?",
    a: "Yes. Basic estimates are free so anyone can learn what a project should cost. Premium features — branding, signatures, invoices — are optional.",
  },
  {
    q: "How do you get local pricing?",
    a: "We combine public datasets, licensed pricing APIs, market rate cards and historical platform data — refreshed regularly per country and city.",
  },
  {
    q: "Can I get real quotations from professionals?",
    a: "Yes. Share your project and verified providers can submit real quotations. You then compare providers side by side before hiring.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section className="section section-alt" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Quick answers</h2>
        </div>
        <div className="faq-list reveal">
          {FAQS.map((f, i) => (
            <div
              className={"faq-item" + (openIndex === i ? " open" : "")}
              key={f.q}
            >
              <button className="faq-q" type="button" onClick={() => toggle(i)}>
                {f.q}
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}