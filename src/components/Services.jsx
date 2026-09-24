import { PHASES } from "../data/phases";
import { IconMap } from "../utils/icons";

export default function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Every project</span>
          <h2>Estimate almost anything</h2>
          <p>
            Built phase by phase — starting with digital services, expanding
            into home, construction and professional services.
          </p>
        </div>
        <div className="cat-grid reveal">
          {PHASES.map((p) => {
            const Icon = IconMap[p.icon] || IconMap.box;
            return (
              <div className="cat-card" key={p.title}>
                <span className="cat-tag">{p.phase}</span>
                <span className="cat-icon">
                  <Icon />
                </span>
                <h3>{p.title}</h3>
                <p>Cost estimation for {p.title.toLowerCase()} projects.</p>
                <div className="cat-chips">
                  {p.chips.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}