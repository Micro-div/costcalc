import { useEffect, useState } from "react";
import { fmt } from "../utils/format";
import { copyText, makeShareLink } from "../utils/share";
import { useToast } from "../context/ToastContext";

export default function QuoteModal({ result, open, onClose }) {
  const showToast = useToast();
  const [rows, setRows] = useState([]);
  const [quoteNumber, setQuoteNumber] = useState("QT-2026-0001");
  const [quoteDates, setQuoteDates] = useState("Issued: — · Valid until: —");

  useEffect(() => {
    if (!open || !result) return;
    const d = new Date();
    setQuoteNumber("QT-" + d.getFullYear() + "-" + String(Math.floor(1000 + Math.random() * 9000)));
    const issued = d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const exp = new Date(d.getTime() + 30 * 864e5).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    setQuoteDates("Issued: " + issued + " - Valid until: " + exp);
    setRows(
      result.shares.map((s) => ({
        name: s[0],
        pct: s[1],
        amt: String(Math.round((result.avg * s[1]) / 100)),
      })),
    );
  }, [open, result]);

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  const numeric = (r) => (r.amt === "" ? 0 : parseFloat(r.amt) || 0);
  const total = rows.reduce((sum, r) => sum + numeric(r), 0);

  const updateRow = (idx, raw) => {
    const clean = raw.replace(/[^\d.]/g, "");
    setRows((prev) => prev.map((r, j) => (j === idx ? { ...r, amt: clean } : r)));
  };

  const copyQuote = () => {
    const link = makeShareLink();
    copyText(link, () => showToast("Your quotation is ready: " + link));
  };

  const downloadPdf = () => window.print();

  return (
    <div
      className={"quote-modal" + (open ? " open" : "")}
      id="quoteModal"
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="quote-modal-shell no-print">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
      </div>

      {result && (
        <div className="quote-doc" id="printDoc">
          <div className="quote-head">
            <div>
              <span className="logo-mark">E</span>
              <strong className="qd-brand">Estimo</strong>
              <p className="qd-company">
                AI-powered cost estimation platform
                <br />
                estimate@estimo.app
              </p>
            </div>
            <div className="quote-ref">
              <span className="qd-label">Quotation</span>
              <strong>{quoteNumber}</strong>
              <p>{quoteDates}</p>
            </div>
          </div>

          <div className="quote-cust">
            <div>
              <span className="qd-label">Prepared for</span>
              <strong>Demo Client</strong>
              <p>Prepared via Estimo estimator</p>
            </div>
            <div className="quote-proj">
              <span className="qd-label">Project</span>
              <strong>
                {result.label} - {result.city}, {result.name}
              </strong>
              <p>
                Prepared from the confirmed requirements. {result.quality}{" "}
                quality, {result.dur}. {result.features[0]}.
              </p>
            </div>
          </div>

          <div className="quote-doctitle">Scope of work</div>
          <ul className="quote-scope qd-check">
            {result.scope.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="quote-doctitle">Cost breakdown</div>
          <table className="quote-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Description</th>
                <th>Qty</th>
                <th>Unit price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.name} data-idx={i}>
                  <td>{i + 1}</td>
                  <td>{r.name}</td>
                  <td className="q-qty">1</td>
                  <td>
                    <input
                      type="number"
                      value={r.amt}
                      step="50"
                      onChange={(e) => updateRow(i, e.target.value)}
                    />
                  </td>
                  <td className="q-amt">{fmt(numeric(r), result.currency)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="quote-totals">
            <div>
              <span>Subtotal</span>
              <span>{fmt(total, result.currency)}</span>
            </div>
            <div>
              <span>Discounts</span>
              <span>- {fmt(0, result.currency)}</span>
            </div>
            <div>
              <span>Taxes & contingency</span>
              <span>Included above</span>
            </div>
            <div className="tot">
              <span>Total amount</span>
              <span>{fmt(total, result.currency)}</span>
            </div>
          </div>

          <div className="quote-doctitle">Payment schedule</div>
          <p className="quote-pay">40% advance · 30% on progress · 30% on delivery</p>

          <div className="quote-grid2">
            <div>
              <div className="quote-doctitle">Terms</div>
              <ul className="quote-terms">
                <li>Quotation valid for 30 days from issue date.</li>
                <li>
                  Hosting, domains and third-party licences are billed separately
                  unless stated.
                </li>
                <li>
                  Client content, branding and access must be provided as per the
                  agreed schedule.
                </li>
                <li>
                  Final pricing may change after professional confirmation.
                </li>
              </ul>
            </div>
            <div>
              <div className="quote-doctitle">Notes</div>
              <p className="quote-note">
                This quotation was generated by Estimo from the confirmed project
                requirements. Custom adjustments were applied to the line items
                above.
              </p>
            </div>
          </div>

          <div className="quote-foot">
            <span>Signature &amp; date —</span>
            <span>Client acceptance —</span>
          </div>
        </div>
      )}

      <div className="quote-actions no-print">
        <button className="btn btn-primary" type="button" onClick={downloadPdf}>
          Download PDF
        </button>
        <button className="btn" type="button" onClick={copyQuote}>
          Copy share link
        </button>
        <button className="btn btn-ghost" type="button" onClick={onClose}>
          Back to estimate
        </button>
      </div>
    </div>
  );
}