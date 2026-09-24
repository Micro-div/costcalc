import { useEffect, useRef, useState } from "react";
import { CATS } from "../data/categories";
import { COUNTRIES } from "../data/countries";
import { QSETS } from "../data/questions";
import { computeResult } from "../utils/estimation";
import { copyText, makeShareLink } from "../utils/share";
import { useToast } from "../context/ToastContext";
import DescribeStep from "./steps/DescribeStep";
import AnalyzeStep from "./steps/AnalyzeStep";
import QuestionsStep from "./steps/QuestionsStep";
import ConfirmStep from "./steps/ConfirmStep";
import ResultStep from "./steps/ResultStep";

const STEP_ORDER = ["describe", "analyze", "questions", "confirm", "result"];
const STEP_LABELS = ["Describe", "Analyze", "Refine", "Review", "Result"];

export default function Estimator({ result, onResult, conf, onConf, onQuoteOpen }) {
  const [cat, setCat] = useState("web");
  const [country, setCountry] = useState("ca");
  const [desc, setDesc] = useState(CATS.web.example);
  const [answers, setAnswers] = useState({});
  const [pool, setPool] = useState(QSETS.digital);
  const [qi, setQi] = useState(0);
  const [step, setStep] = useState("describe");
  const [aiLines, setAiLines] = useState([]);
  const [aiStatus, setAiStatus] = useState("Extracting requirements…");
  const timersRef = useRef([]);
  const wizardRef = useRef(null);
  const showToast = useToast();

  useEffect(
    () => () => {
      timersRef.current.forEach(clearTimeout);
    },
    [],
  );

  const scrollToWizard = () => {
    if (wizardRef.current) {
      window.scrollTo({
        top: wizardRef.current.getBoundingClientRect().top + window.scrollY - 90,
        behavior: "smooth",
      });
    }
  };

  const goStep = (name) => {
    setStep(name);
    scrollToWizard();
  };

  const goDescribe = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setAnswers({});
    setQi(0);
    setDesc(CATS[cat].example);
    goStep("describe");
  };

  const loadCat = (id) => {
    setCat(id);
    setAnswers({});
    setDesc(CATS[id].example);
  };

  const runAnalyze = () => {
    const c = CATS[cat];
    const loc = COUNTRIES[country];
    setAiLines([]);
    goStep("analyze");

    const lines = [
      { tag: "AI", text: "Reading your project description…", tt: "Read project" },
      { tag: "AI", text: "Category detected: " + c.label, tt: "Detect" },
      {
        tag: "LOC",
        text:
          "Location & currency: " + loc.city + ", " + loc.name + " - " + loc.currency,
        tt: "Locate",
      },
      {
        tag: "REQ",
        text:
          'Features: "' +
          c.features[0] +
          '", "' +
          c.features[1] +
          '", "' +
          c.features[2] +
          '"',
        tt: "Extract",
      },
      {
        tag: "GAP",
        text: "Missing details found - asking a few follow-up questions…",
        tt: "Questions",
      },
    ];

    lines.forEach((l, i) => {
      timersRef.current.push(
        setTimeout(() => {
          setAiLines((prev) => [...prev, l]);
          setAiStatus(l.tt);
          if (i === lines.length - 1) {
            timersRef.current.push(
              setTimeout(() => {
                setAiStatus("Requirements ready");
                timersRef.current.push(setTimeout(() => goQuestions(), 400));
              }, 500),
            );
          }
        }, 620 * i),
      );
    });
  };

  const goQuestions = () => {
    setPool(QSETS[CATS[cat].group]);
    setQi(0);
    goStep("questions");
  };

  const answerQuestion = (qid, val) => {
    const next = { ...answers, [qid]: val };
    setAnswers(next);
    const nextQi = qi + 1;
    setQi(nextQi);
    if (nextQi >= pool.length) {
      goStep("confirm");
    }
  };

  const backQuestion = () => {
    if (qi > 0) {
      setQi(qi - 1);
    } else {
      goStep("describe");
    }
  };

  const showResult = (ans, level) => {
    const r = computeResult(cat, country, ans || answers);
    onResult(r);
    onConf(level);
    goStep("result");
  };

  const goInstant = () => {
    const extra = cat === "logo" ? "yes" : null;
    const ans = { quality: "standard", size: "medium" };
    if (CATS[cat].group === "digital") {
      ans.content = extra || "no";
    } else {
      ans.materials = "yes";
    }
    setAnswers(ans);
    showResult(ans, "medium");
  };

  const generateEstimate = () => showResult(answers, "high");

  const openQuote = () => onQuoteOpen(true);

  const shareResult = () => {
    const link = makeShareLink();
    copyText(link, () => showToast("Estimate link copied: " + link));
  };

  const requestQuotes = () =>
    showToast("Demo: matching verified providers for quotes is part of the full product.");

  const stepIndex = STEP_ORDER.indexOf(step);

  return (
    <div className="wizard reveal" id="wizard" ref={wizardRef}>
      <ol className="wizard-steps">
        {STEP_ORDER.map((name, i) => (
          <li
            key={name}
            data-wsid={name}
            className={i === stepIndex ? "is-active" : i < stepIndex ? "is-done" : ""}
          >
            <span>{i + 1}</span>
            {STEP_LABELS[i]}
          </li>
        ))}
      </ol>

      {step === "describe" && (
        <DescribeStep
          cat={cat}
          desc={desc}
          onDescChange={setDesc}
          country={country}
          onCountryChange={setCountry}
          onCat={loadCat}
          onAnalyze={runAnalyze}
          onInstant={goInstant}
        />
      )}

      {step === "analyze" && <AnalyzeStep lines={aiLines} status={aiStatus} />}

      {step === "questions" && pool[qi] && (
        <QuestionsStep
          qid={pool[qi]}
          index={qi}
          total={pool.length}
          answers={answers}
          onAnswer={answerQuestion}
          onBack={backQuestion}
        />
      )}

      {step === "confirm" && (
        <ConfirmStep
          cat={cat}
          country={country}
          answers={answers}
          onEstimate={generateEstimate}
        />
      )}

      {step === "result" && result && (
        <ResultStep
          result={result}
          conf={conf}
          onQuote={openQuote}
          onShare={shareResult}
          onRequest={requestQuotes}
          onNew={goDescribe}
        />
      )}
    </div>
  );
}