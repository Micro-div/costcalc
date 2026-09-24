const BARS = [
  { label: "Labour", pct: 58 },
  { label: "Software & licences", pct: 12, cls: "v2" },
  { label: "Third-party services", pct: 8, cls: "v3" },
  { label: "Taxes", pct: 6, cls: "v4" },
  { label: "Contingency", pct: 8, cls: "v2" },
];

export default function BrowserMock() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-glow"></div>
      <div className="browser-frame">
        <div className="browser-bar">
          <span className="win-dots">
            <i></i>
            <i></i>
            <i></i>
          </span>
          <span className="browser-url">estimo.app/e/k2m9x</span>
        </div>
        <div className="mock-body">
          <div className="mock-head">
            <div>
              <span className="mock-eyebrow">E-commerce website · Canada</span>
              <h4>Estimated cost range</h4>
            </div>
            <span className="mock-conf">High confidence</span>
          </div>
          <div className="mock-cols">
            <div className="mock-num">
              <span>Minimum</span>
              <strong>CA$ 14,500</strong>
            </div>
            <div className="mock-num accent">
              <span>Average</span>
              <strong>CA$ 18,200</strong>
            </div>
            <div className="mock-num">
              <span>Maximum</span>
              <strong>CA$ 22,700</strong>
            </div>
          </div>
          <div className="mock-bars">
            {BARS.map((b) => (
              <div key={b.label}>
                <div className="mb-top">
                  <span>{b.label}</span>
                  <span>{b.pct}%</span>
                </div>
                <div className="mb-track">
                  <span
                    className={"mb-fill" + (b.cls ? " " + b.cls : "")}
                    style={{ width: b.pct + "%" }}
                  ></span>
                </div>
              </div>
            ))}
          </div>
          <div className="mock-foot">
            <span className="mf-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              4–7 weeks
            </span>
            <span className="mf-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              </svg>
              PDF quotation
            </span>
            <span className="mf-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <path d="m16 6-4-4-4 4" />
                <path d="M12 2v13" />
              </svg>
              Share link
            </span>
          </div>
        </div>
      </div>
      <div className="float-chip">
        <span className="ok">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <span>
          AI scope detected<small>6 tasks · materials assumed</small>
        </span>
      </div>
    </div>
  );
}