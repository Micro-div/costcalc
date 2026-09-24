import { CATS } from "../../data/categories";
import { COUNTRIES } from "../../data/countries";
import { IconMap } from "../../utils/icons";
import { cap, durationText } from "../../utils/format";

export default function ConfirmStep({ cat, country, answers, onEstimate }) {
  const c = CATS[cat];
  const loc = COUNTRIES[country];

  const items = [
    { Icon: IconMap[c.icon] || IconMap.file, label: "Category", val: c.label },
    {
      Icon: IconMap.pin,
      label: "Location",
      val: loc.city + ", " + loc.name,
      small: loc.currency,
    },
    { Icon: IconMap.gauge, label: "Quality", val: cap(answers.quality) },
    { Icon: IconMap.layers, label: "Size", val: cap(answers.size) },
    {
      Icon: IconMap.file,
      label: "Features",
      val: c.features[0] + ", " + c.features[1],
      small: "+ " + (c.features.length - 2) + " more detected",
    },
  ];

  if (c.group === "digital") {
    items.push({
      Icon: IconMap.file,
      label: "Content & design",
      val: answers.content === "yes" ? "Ready to go" : "To be created",
    });
  } else {
    items.push({
      Icon: IconMap.box,
      label: "Materials",
      val: answers.materials === "yes" ? "Included in estimate" : "Client supplies",
    });
  }

  items.push({
    Icon: IconMap.clock,
    label: "Duration",
    val: durationText(c.dur, answers.size),
  });

  return (
    <div className="step is-active" data-step="confirm">
      <div className="step-body">
        <h3 className="q-title">Confirm your requirements</h3>
        <p className="q-sub">
          AI detected the following. You can adjust anything before we
          calculate.
        </p>
        <div className="req-grid" id="reqGrid">
          {items.map((it, i) => (
            <div className="req-card" key={i}>
              <span className="req-icon">
                <it.Icon />
              </span>
              <div>
                <span className="req-label">{it.label}</span>
                <div className="req-val">
                  {it.val}
                  {it.small && <small>{it.small}</small>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="step-actions">
          <button className="btn btn-primary" type="button" onClick={onEstimate}>
            Generate my estimate
          </button>
        </div>
      </div>
    </div>
  );
}