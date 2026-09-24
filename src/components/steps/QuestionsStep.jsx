import { QUESTIONS } from "../../data/questions";

export default function QuestionsStep({ qid, index, total, answers, onAnswer, onBack }) {
  const q = QUESTIONS[qid];

  return (
    <div className="step is-active" data-step="questions">
      <div className="step-body">
        <div className="q-progress" id="qProgress">
          {Array.from({ length: total }).map((_, i) => (
            <span key={i} className={i < index ? "done" : i === index ? "now" : ""}></span>
          ))}
        </div>
        <h3 className="q-title" id="qTitle">
          {q.title}
        </h3>
        <p className="q-sub">One quick question — this lets us refine the estimate.</p>
        <div className="q-options" id="qOptions">
          {q.options.map((o) => (
            <button
              key={o.id}
              className={"q-opt" + (answers[qid] === o.id ? " selected" : "")}
              type="button"
              onClick={() => onAnswer(qid, o.id)}
            >
              <span>
                {o.label}
                <small>{o.desc}</small>
              </span>
              <span className="q-arrow">&rarr;</span>
            </button>
          ))}
        </div>
        <div className="step-actions">
          <button className="btn btn-ghost" type="button" onClick={onBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}