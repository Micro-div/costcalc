import { COUNTRIES } from "../data/countries";
import { CATS } from "../data/categories";
import { QUALITY_MULT, SIZE_MULT } from "../data/questions";
import { cap, durationText } from "./format";

const SHARES = {
  web: [
    ["Labour", 58],
    ["Software & licences", 12],
    ["Third-party services", 8],
    ["Taxes", 6],
    ["Contingency", 8],
    ["Profit margin", 8],
  ],
  mobile: [
    ["Labour", 62],
    ["Software & licences", 12],
    ["Cloud & services", 8],
    ["Taxes", 5],
    ["Contingency", 8],
    ["Profit margin", 5],
  ],
  logo: [
    ["Labour", 82],
    ["Software & licences", 6],
    ["Revisions & support", 4],
    ["Taxes", 3],
    ["Contingency", 3],
    ["Profit margin", 2],
  ],
  painting: [
    ["Labour", 55],
    ["Materials", 32],
    ["Equipment & consumables", 6],
    ["Taxes", 3],
    ["Contingency", 2],
    ["Profit margin", 2],
  ],
  kitchen: [
    ["Labour", 45],
    ["Materials", 36],
    ["Equipment", 5],
    ["Third-party trades", 4],
    ["Taxes", 4],
    ["Contingency", 3],
    ["Profit margin", 3],
  ],
};

export const buildShares = (key) => SHARES[key] || SHARES.web;

export function computeResult(catKey, countryKey, answers) {
  const c = CATS[catKey];
  const loc = COUNTRIES[countryKey];
  const qm = QUALITY_MULT[answers.quality || "standard"];
  const sm = SIZE_MULT[answers.size || "medium"];

  let mat = 1;
  if (c.group !== "digital" && answers.materials === "no") {
    mat = 0.88;
  }
  if (c.group === "digital" && answers.content === "no") {
    mat = 1.08;
  }

  const avg = c.base * loc.mult * qm * sm * mat;

  return {
    avg,
    min: avg * 0.8,
    max: avg * 1.25,
    catKey,
    city: loc.city,
    name: loc.name,
    currency: loc.currency,
    label: c.label,
    icon: c.icon,
    shares: buildShares(catKey),
    scope: c.scope,
    assumptions: c.assumptions,
    features: c.features,
    dur: durationText(c.dur, answers.size),
    quality: cap(answers.quality || "standard"),
  };
}