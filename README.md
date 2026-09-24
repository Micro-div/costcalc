# Estimo — AI Cost Estimation & Quotation Platform

Describe any project in plain language. Estimo analyses your requirements, asks
a few smart questions, and returns a **localized cost range**, a **detailed
scope of work**, and a **professional quotation** — in minutes.

> This is a front-end product-concept demo built with **React + Vite**. All
> estimation logic runs in the browser (deterministic rule engine) — no backend
> or API keys required.

---

## ✨ Features

- **Plain-language input** — write or paste a description, or load a ready-made
  example by picking a category chip.
- **AI-style analysis flow** — animated step-by-step extraction of category,
  location, features and gaps.
- **Smart refinement questions** — adaptive question sets per project group
  (`digital` vs `home`), covering quality, size, content or materials.
- **Deterministic pricing engine** — no AI guessing at prices:

  ```
  Base rate × Location multiplier × Size × Quality × Materials  →  Min / Avg / Max range
  ```

- **Localization** — 6 country profiles (US, UK, CA, AE, AU, PK) with currency
  and rate multipliers.
- **Detailed result** — min / average / max cards, cost breakdown bars, scope of
  work, assumptions and confidence level.
- **Editable quotation modal** — adjust per-line amounts, see live totals,
  **Download PDF** (print stylesheet) and **Copy share link**.
- **Polished marketing UI** — hero product mock, services grid ("How it works",
  pricing engine explainer), pricing plans, FAQ accordion, CTA, footer.
- **Responsive** — mobile navigation drawer, stacked layouts, fully accessible
  focus states.

---

## 🧱 Tech Stack

| Layer      | Choice                                    |
| ---------- | ----------------------------------------- |
| Framework  | [React 18](https://react.dev)             |
| Build tool | [Vite 5](https://vitejs.dev)              |
| Language   | JavaScript (ESM, JSX)                     |
| Styling    | Plain CSS (`src/styles/estimo.css`)       |
| Fonts      | Inter (Google Fonts)                      |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) **18+** (tested on Node 26)
- npm (ships with Node)

### Install & run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build (output: dist/)
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
Demo-Project/
├── index.html               # Vite entry (fonts, favicon, #root)
├── package.json
├── vite.config.js
├── .gitignore
└── src/
    ├── main.jsx             # React bootstrap
    ├── App.jsx              # Page composition (lands all sections)
    ├── styles/
    │   └── estimo.css       # Global stylesheet + UI enhancements
    ├── data/                # All domain data (single source of truth)
    │   ├── countries.js     #   Country profiles & currency multipliers
    │   ├── categories.js    #   Cost categories & ready-made examples
    │   ├── questions.js     #   Question sets, quality/size multipliers
    │   └── phases.js        #   Service roadmap (4 phases)
    ├── utils/
    │   ├── estimation.js    #   computeResult, share-of-cost tables
    │   ├── format.js        #   currency formatting, confidence, duration
    │   ├── share.js         #   clipboard / share-link helpers
    │   └── icons.jsx        #   Inline SVG icon library
    ├── hooks/
    │   ├── useAnimatedNumber.js  # Count-up currency animation
    │   └── useReveal.js          # Scroll-reveal (IntersectionObserver)
    ├── context/
    │   └── ToastContext.jsx # Toast notifications
    └── components/
        ├── Header.jsx       # Fixed nav + mobile drawer
        ├── Hero.jsx         # Hero copy + product mock + stat strip
        ├── BrowserMock.jsx  # Faux estimator screenshot
        ├── Estimator.jsx    # 5-step wizard state machine
        ├── steps/
        │   ├── DescribeStep.jsx    # Step 1 — description, chips, location
        │   ├── AnalyzeStep.jsx     # Step 2 — AI analysis animation
        │   ├── QuestionsStep.jsx   # Step 3 — smart refinement questions
        │   ├── ConfirmStep.jsx     # Step 4 — requirements review
        │   └── ResultStep.jsx      # Step 5 — estimate + actions
        ├── QuoteModal.jsx   # Editable quotation / PDF / share
        ├── Services.jsx     # Service categories grid
        ├── HowItWorks.jsx   # 6-step explainer
        ├── Engine.jsx       # "AI understands. Math calculates."
        ├── Plans.jsx        # Free / Premium / Providers
        ├── Faq.jsx          # Accordion FAQ
        ├── Cta.jsx          # Call-to-action banner
        └── Footer.jsx
```

---

## ⚙️ How the Estimator Works

The wizard is a lightweight state machine with five steps:

1. **Describe** — the user's text + selected category + location feed the engine.
2. **Analyze** — a timed sequence simulates AI extraction (detect category,
   locate, extract features, flag gaps).
3. **Refine** — a question pool is chosen from the category group
   (`digital` → quality/size/content, `home` → quality/size/materials).
4. **Review** — detected requirements render as confirm cards.
5. **Result** — `computeResult()` applies:

   ```
   avg = categoryBase × countryMult × qualityMult × sizeMult × materialFactor
   min = avg × 0.80
   max = avg × 1.25
   ```

   A fixed share-of-cost table splits `avg` into labour, materials, taxes,
   contingency and margin for the breakdown bars and the quotation line items.

The "Skip to instant result" shortcut seeds standard quality/medium size
answers and jumps straight to the result for a low-confidence preview.

---

## 🛠 Customization

Everything is data-driven — no component changes needed to extend the app.

| Want to add…                | Edit file                    |
| --------------------------- | ---------------------------- |
| A new category (e.g. "SEO") | `src/data/categories.js`     |
| A new country/currency      | `src/data/countries.js`      |
| A new refinement question   | `src/data/questions.js` + question sets |
| A new roadmap phase         | `src/data/phases.js`         |
| Brand colours / styling     | CSS variables at the top of `src/styles/estimo.css` |

Each category needs a unique `icon` key — add a matching entry in
`src/utils/icons.jsx` if you introduce a new one.

---

## 📦 Available Scripts

| Command            | Description                                  |
| ------------------ | -------------------------------------------- |
| `npm run dev`      | Start Vite dev server (port 5173)            |
| `npm run build`    | Create an optimized production build in `dist/` |
| `npm run preview`  | Preview the production build locally         |

---

## 🔖 Notes & Disclaimer

- Estimates are **preliminary market estimates** based on bundled pricing data
  and are **not legally binding**.
- This is a product-concept demo; the "share link" copies a demo URL and the
  provider-matching flow shows an informational toast.
- Full provider quoting, live currency rates and cloud persistence are planned
  product features, not implemented here.