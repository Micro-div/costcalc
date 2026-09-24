import { useState } from "react";
import useReveal from "./hooks/useReveal";
import { ToastProvider } from "./context/ToastContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Estimator from "./components/Estimator";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Engine from "./components/Engine";
import Plans from "./components/Plans";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";

export default function App() {
  useReveal();
  const [result, setResult] = useState(null);
  const [conf, setConf] = useState("high");
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <ToastProvider>
      <div className="bg-glow" aria-hidden="true"></div>
      <Header />
      <main>
        <Hero />
        <section className="section" id="estimator">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Live demo</span>
              <h2>Try the estimator</h2>
              <p>
                Watch how AI extracts requirements, a rule engine calculates and
                a quotation is generated.
              </p>
            </div>
            <Estimator
              result={result}
              onResult={setResult}
              conf={conf}
              onConf={setConf}
              onQuoteOpen={setQuoteOpen}
            />
          </div>
        </section>
        <Services />
        <HowItWorks />
        <Engine />
        <Plans />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <QuoteModal
        result={result}
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </ToastProvider>
  );
}