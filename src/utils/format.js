import { COUNTRIES } from "../data/countries";
import { SIZE_MULT } from "../data/questions";

export function fmt(value, currency) {
  const cur = currency || COUNTRIES.ca.currency;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: cur,
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

export const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

export const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : "");

export function durationText(baseWeeks, sizeId) {
  const m = SIZE_MULT[sizeId || "medium"];
  const lo = Math.max(1, Math.round(baseWeeks * m * 0.9));
  const hi = Math.round(baseWeeks * m * 1.35);
  return lo === hi
    ? "~" + lo + " week" + (lo > 1 ? "s" : "")
    : lo + "-" + hi + " weeks";
}

export function confidenceInfo(level) {
  if (level === "high") {
    return {
      label: "High confidence",
      color: "#10b981",
      score: 90 + Math.floor(Math.random() * 4),
    };
  }
  if (level === "medium") {
    return { label: "Medium confidence", color: "#f59e0b", score: 72 };
  }
  return { label: "Low confidence", color: "#ef4444", score: 58 };
}

export const BREAKDOWN_COLORS = ["c1", "c2", "c3", "c4", "c5", "c6"];