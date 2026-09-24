import { CATEGORY_OPTIONS, CATS } from "../../data/categories";
import { COUNTRY_OPTIONS } from "../../data/countries";

export default function DescribeStep({
  cat,
  desc,
  onDescChange,
  country,
  onCountryChange,
  onCat,
  onAnalyze,
  onInstant,
}) {
  return (
    <div className="step is-active" data-step="describe">
      <div className="step-body">
        <label className="field-label" htmlFor="descInput">
          Describe your project
        </label>
        <div className="tx-wrap">
          <textarea
            id="descInput"
            rows="3"
            placeholder="e.g. I need an e-commerce website for a clothing brand in Canada. It should support online payments, customer accounts and about 500 products."
            value={desc}
            onChange={(e) => onDescChange(e.target.value)}
          ></textarea>
          <span className="tx-charcnt">{desc.length}</span>
        </div>
        <p className="field-hint">
          Pick a category and try a ready-made example — or write your own.
        </p>
        <div className="chip-row">
          {CATEGORY_OPTIONS.map((c) => (
            <button
              key={c.id}
              className={"chip" + (cat === c.id ? " active" : "")}
              data-cat={c.id}
              type="button"
              onClick={() => onCat(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="field-row">
          <div className="field-col">
            <label className="field-label" htmlFor="countrySelect">
              Project location
            </label>
            <select
              id="countrySelect"
              className="select"
              value={country}
              onChange={(e) => onCountryChange(e.target.value)}
            >
              {COUNTRY_OPTIONS.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div className="field-col">
            <label className="field-label">Relevant category</label>
            <div className="fake-select">{CATS[cat].label}</div>
          </div>
        </div>
        <div className="step-actions">
          <button className="btn btn-primary" type="button" onClick={onAnalyze}>
            Analyze my project
          </button>
          <button className="btn-link" type="button" onClick={onInstant}>
            Skip to instant result
          </button>
        </div>
      </div>
    </div>
  );
}