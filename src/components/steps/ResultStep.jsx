import { useEffect, useState } from "react";
import useAnimatedNumber from "../../hooks/useAnimatedNumber";
import { BREAKDOWN_COLORS, confidenceInfo, fmt } from "../../utils/format";
import { IconCheck } from "../../utils/icons";

export default function ResultStep({ result, conf, onQuote, onShare, onRequest, onNew }) {
  const minStr = useAnimatedNumber(result.min, result.currency);
  const avgStr = useAnimatedNumber(result.avg, result.currency);
  const maxStr = useAnimatedNumber(result.max, result.currency);

  const [bars, setBars] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setTimeout(() => setBars(true), 120));
    return () => cancelAnimationFrame(raf);
  }, []);

  const ci = confidenceInfo(conf);
  const extraA = [];
  if (result.quality === "Premium") {
    extraA.push("Premium quality allowance applied across components");
  }
  if (result.quality === "Basic") {
    extraA.push("Basic quality kept - savings reflected in the range");
  }

  return (
    <div className="step is-active" data-step="result">
      <div className="result-head">
        <div>
          <span className="eyebrow">Your estimate</span>
          <h3 id="resultTitle">{result.label} estimate</h3>
          <p id="resultMeta">
            {result.city}, {result.name} - {result.quality} quality - {result.dur}
          </p>
        </div>
        <button className="btn btn-ghost" type="button" onClick={onNew}>
          New estimate
        </button>
      </div>

      <div className="result-cards">
        <div className="r-card is-min">
          <span>Minimum</span>
          <strong>{minStr}</strong>
        </div>
        <div className="r-card is-avg">
          <span>Average estimate</span>
          <strong>{avgStr}</strong>
          <small id="valRange">
            {fmt(result.min, result.currency)} - {fmt(result.max, result.currency)}
          </small>
        </div>
        <div className="r-card is-max">
          <span>Maximum</span>
          <strong>{maxStr}</strong>
        </div>
      </div>

      <div className="result-sub">
        <span className="pill" id="confPill">
          <span className="pdot" style={{ background: ci.color }}></span>
          {ci.label}
          {ci.score ? " - " + ci.score + "%" : ""}
        </span>
        <span className="pill" id="durPill">
          {"\u23f1 " + result.dur}
        </span>
        <span className="pill" id="locPill">
          {result.city}, {result.name} - {result.currency}
        </span>
      </div>

      <div className="result-grid">
        <div className="panel">
          <h4>Cost breakdown</h4>
          <p className="panel-sub">Based on average estimate — edit the quotation to fine-tune.</p>
          <div className="breakdown" id="breakdown">
            {result.shares.map((s, i) => {
              const pct = s[1];
              const amt = (result.avg * pct) / 100;
              return (
                <div className="b-row" key={s[0]}>
                  <div className="b-head">
                    <strong>{s[0]}</strong>
                    <span>
                      {pct}% - {fmt(amt, result.currency)}
                    </span>
                  </div>
                  <div className="b-track">
                    <div
                      className={"b-fill " + BREAKDOWN_COLORS[i % BREAKDOWN_COLORS.length]}
                      style={{ width: bars ? pct + "%" : "0%" }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="panel">
          <h4>Scope of work</h4>
          <ul className="check-list" id="scopeList">
            {result.scope.map((t) => (
              <li key={t}>
                <IconCheck />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel">
          <h4>Assumptions</h4>
          <ul className="assump-list" id="assumpList">
            {[...result.assumptions, ...extraA].map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="formula">
        <span>Simplified model</span>
        <code>Base rate × Location × Size × Quality + Labour + Materials + Taxes + Contingency</code>
      </div>

      <div className="step-actions center">
        <button className="btn btn-primary" type="button" onClick={onQuote}>
          Generate quotation
        </button>
        <button className="btn" type="button" onClick={onShare}>
          Share result
        </button>
        <button className="btn" type="button" onClick={onRequest}>
          Request real quotes
        </button>
      </div>
      <p className="disclaimer">
        Preliminary market estimate based on available pricing data. Not a
        legally binding quotation — final prices may change after professional
        confirmation.
      </p>
    </div>
  );
}