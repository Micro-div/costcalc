const STEPS = [
  {
    num: "01",
    title: "Describe",
    text: "Type your project in plain language or pick a category.",
  },
  {
    num: "02",
    title: "AI extracts",
    text: "Requirements, size, location and missing details are detected automatically.",
  },
  {
    num: "03",
    title: "Smart questions",
    text: "A few relevant questions refine the quality level and scope.",
  },
  {
    num: "04",
    title: "Calculate",
    text: "A rule-based engine applies local rates, taxes and confidence scoring.",
  },
  {
    num: "05",
    title: "Edit & export",
    text: "Adjust line items, download a PDF or share a web link.",
  },
  {
    num: "06",
    title: "Get real quotes",
    text: "Optionally invite verified providers to compete.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>From description to professional quotation</h2>
        </div>
        <div className="steps-grid reveal">
          {STEPS.map((s) => (
            <div className="how-card" key={s.num}>
              <span className="how-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}