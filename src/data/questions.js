export const QSETS = {
  digital: ["quality", "size", "content"],
  home: ["quality", "size", "materials"],
};

export const QUESTIONS = {
  quality: {
    title: "What quality level do you need?",
    options: [
      { id: "basic", label: "Basic", desc: "Functional and clean - best value" },
      {
        id: "standard",
        label: "Standard",
        desc: "Balanced quality and cost (recommended)",
      },
      {
        id: "premium",
        label: "Premium",
        desc: "Higher-end finish and materials",
      },
    ],
  },
  size: {
    title: "How large is this project?",
    options: [
      { id: "small", label: "Small", desc: "Limited scope, fewer areas" },
      { id: "medium", label: "Medium", desc: "Average typical project" },
      { id: "large", label: "Large", desc: "Bigger space or feature set" },
    ],
  },
  content: {
    title: "Do you already have content and design ready?",
    options: [
      { id: "yes", label: "Yes", desc: "Design, copy and assets are ready" },
      {
        id: "no",
        label: "No",
        desc: "Design and content still need to be created",
      },
    ],
  },
  materials: {
    title: "Are materials included in the estimate?",
    options: [
      {
        id: "yes",
        label: "Yes, include materials",
        desc: "Add a full material allowance",
      },
      {
        id: "no",
        label: "No, I'll supply them",
        desc: "Quote for labour and management only",
      },
    ],
  },
};

export const QUALITY_MULT = { basic: 0.75, standard: 1, premium: 1.35 };
export const SIZE_MULT = { small: 0.7, medium: 1, large: 1.55 };