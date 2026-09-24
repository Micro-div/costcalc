(function () {
  "use strict";

  var COUNTRIES = {
    us: {
      name: "United States",
      city: "New York",
      currency: "USD",
      symbol: "$",
      mult: 1.0,
    },
    uk: {
      name: "United Kingdom",
      city: "London",
      currency: "GBP",
      symbol: "\u00a3",
      mult: 0.95,
    },
    ca: {
      name: "Canada",
      city: "Toronto",
      currency: "CAD",
      symbol: "CA$",
      mult: 0.85,
    },
    ae: {
      name: "United Arab Emirates",
      city: "Dubai",
      currency: "AED",
      symbol: "AED",
      mult: 0.8,
    },
    au: {
      name: "Australia",
      city: "Sydney",
      currency: "AUD",
      symbol: "A$",
      mult: 1.1,
    },
    pk: {
      name: "Pakistan",
      city: "Karachi",
      currency: "PKR",
      symbol: "Rs",
      mult: 0.22,
    },
  };

  var IC = {
    web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/></svg>',
    mobile:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>',
    logo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18z"/><path d="m2 2 7.6 7.6"/></svg>',
    painting:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v3H9z"/><path d="M9 3v3H3c0 4 3 6 7 6"/><path d="M12 12v6a2 2 0 0 1-4 0v-2"/></svg>',
    kitchen:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/></svg>',
    check:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    gauge:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>',
    layers:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 8.5 4.5L12 11 3.5 6.5 12 2z"/><path d="m20.5 11.5L12 16l-8.5-4.5"/><path d="m20.5 16.5L12 21l-8.5-4.5"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 13h8M8 17h6"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    calendar:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  };
  IC.code =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/></svg>';

  var COLORS = ["c1", "c2", "c3", "c4", "c5", "c6"];

  var CATS = {
    web: {
      label: "Website Development",
      group: "digital",
      icon: "web",
      base: 7800,
      dur: 4,
      example:
        "I need an e-commerce website for a clothing brand in Canada. It should support online payments, customer accounts and about 500 products.",
      features: [
        "Custom e-commerce build",
        "Online payments integration",
        "Customer accounts",
        "500 product catalog",
        "Responsive design",
        "SEO fundamentals",
      ],
      scope: [
        "Project kickoff & requirements mapping",
        "Information architecture & page structure",
        "Responsive design and branding",
        "Development of pages and components",
        "Payment gateway integration",
        "Testing, launch & handover",
      ],
      assumptions: [
        "Hosting and domain charges are not included",
        "Client provides content, logo and product photos",
        "Standard quality materials/templates assumed",
      ],
    },
    mobile: {
      label: "Mobile App Development",
      group: "digital",
      icon: "mobile",
      base: 12500,
      dur: 6,
      example:
        "I need a mobile app for a local fitness studio. Users should be able to book classes, pay online and track their attendance history.",
      features: [
        "iOS + Android (cross-platform)",
        "User accounts & login",
        "Class booking system",
        "In-app payments",
        "Push notifications",
        "Attendance & history tracking",
      ],
      scope: [
        "Discovery & technical specification",
        "UX flow and screen design",
        "UI development for iOS and Android",
        "API integration and data modelling",
        "Payment and notification integration",
        "Store submission and maintenance handover",
      ],
      assumptions: [
        "App store developer fees are billed separately",
        "Backend hosting included only for MVP window",
        "Client provides brand assets and content",
        "Standard quality assumed for typography & layout",
      ],
    },
    logo: {
      label: "Logo & Branding",
      group: "digital",
      icon: "logo",
      base: 950,
      dur: 2,
      example:
        "I want a modern logo and a basic brand identity kit for my new cleaning services startup.",
      features: [
        "Logo concepts (3 directions)",
        "Colour palette",
        "Typography system",
        "Basic brand guidelines",
        "Source files",
        "2 revision rounds",
      ],
      scope: [
        "Brand discovery & questionnaire",
        "Moodboard and style exploration",
        "Logo concept development",
        "Revisions and refinement",
        "Brand kit assembly",
        "Final file delivery",
      ],
      assumptions: [
        "Client provides a clear brand brief",
        "No print collateral included at this stage",
        "One business, one logo lockup",
        "Revisions limited to two rounds",
      ],
    },
    painting: {
      label: "House Painting",
      group: "home",
      icon: "painting",
      base: 3400,
      dur: 1.2,
      example:
        "I want to paint the interior of a small 2-bedroom apartment in Toronto using standard quality paint.",
      features: [
        "Walls & ceiling paint",
        "Primer & prep work",
        "Trim and baseboards",
        "Ceiling touch-ups",
        "Cleanup & protection",
        "1-year workmanship",
      ],
      scope: [
        "Site inspection and surface check",
        "Protection of floors and fixtures",
        "Repairing and prepping surfaces",
        "Priming and two coats of paint",
        "Trim and detail finishing",
        "Final cleanup and walkthrough",
      ],
      assumptions: [
        "Assume paint included at standard quality",
        "Existing walls are in good condition",
        "Furniture can be moved or is covered",
        "No major drywall repair included",
      ],
    },
    kitchen: {
      label: "Kitchen Renovation",
      group: "home",
      icon: "kitchen",
      base: 18500,
      dur: 8,
      example:
        "I want to renovate a small kitchen in Toronto using standard quality materials. Keep the existing layout.",
      features: [
        "Cabinets & hardware",
        "Countertop replacement",
        "Backsplash installation",
        "Sink & faucet upgrade",
        "Fresh lighting",
        "Permit guidance",
      ],
      scope: [
        "Site measurement and layout review",
        "Demolition and disposal",
        "Plumbing and electrical adjustments",
        "Cabinet installation",
        "Countertop and backsplash",
        "Final fixtures, cleanup & inspection",
      ],
      assumptions: [
        "Structure and plumbing layout remain unchanged",
        "Permit fees billed separately if required",
        "Medium grade material allowance",
        "Occupancy possible during works with dust control",
      ],
    },
  };

  var QSETS = {
    digital: ["quality", "size", "content"],
    home: ["quality", "size", "materials"],
  };

  var QUESTIONS = {
    quality: {
      title: "What quality level do you need?",
      options: [
        {
          id: "basic",
          label: "Basic",
          desc: "Functional and clean - best value",
        },
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

  var QUALITY_MULT = { basic: 0.75, standard: 1, premium: 1.35 };
  var SIZE_MULT = { small: 0.7, medium: 1, large: 1.55 };

  var PHASES = [
    {
      icon: "code",
      phase: "Phase 1 - Live",
      title: "Digital Services",
      chips: [
        "Website",
        "Web app",
        "Mobile app",
        "E-commerce",
        "UI/UX design",
        "Logo & branding",
        "SEO",
        "Content writing",
        "Video editing",
        "Social media",
      ],
    },
    {
      icon: "painting",
      phase: "Phase 2 - Planned",
      title: "Home Services",
      chips: [
        "House painting",
        "Cleaning",
        "Plumbing",
        "Electrical",
        "Roofing",
        "Flooring",
        "Gardening",
        "Appliance repair",
      ],
    },
    {
      icon: "kitchen",
      phase: "Phase 3 - Planned",
      title: "Construction & Renovation",
      chips: [
        "Kitchen",
        "Bathroom",
        "House build",
        "Interior design",
        "Concrete",
        "Solar install",
      ],
    },
    {
      icon: "calendar",
      phase: "Phase 4 - Planned",
      title: "Events & Professional",
      chips: [
        "Weddings",
        "Photography",
        "Catering",
        "Legal",
        "Accounting",
        "Consulting",
      ],
    },
  ];

  var state = {
    cat: "web",
    country: "ca",
    answers: {},
    pool: [],
    qi: 0,
    anim: false,
  };

  var $ = function (id) {
    return document.getElementById(id);
  };

  function fmt(v, currency) {
    var cur = currency || COUNTRIES[state.country].currency;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: cur,
      maximumFractionDigits: 0,
    }).format(Math.round(v));
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function toast(msg) {
    var t = $("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () {
      t.classList.remove("show");
    }, 2600);
  }

  function sleep(ms) {
    return new Promise(function (r) {
      setTimeout(r, ms);
    });
  }

  function goStep(name) {
    var steps = document.querySelectorAll(".step");
    steps.forEach(function (s) {
      s.classList.toggle("is-active", s.getAttribute("data-step") === name);
    });
    document.querySelectorAll(".wizard-steps li").forEach(function (li) {
      var w = li.getAttribute("data-wsid");
      li.classList.toggle("is-active", w === name);
      li.classList.toggle("is-done", false);
    });
    var seen = false;
    document.querySelectorAll(".wizard-steps li").forEach(function (li) {
      var w = li.getAttribute("data-wsid");
      if (w === name) seen = true;
      else if (!seen) li.classList.toggle("is-done", true);
    });
    window.scrollTo({
      top: $("wizard").getBoundingClientRect().top + window.scrollY - 90,
      behavior: "smooth",
    });
  }

  function catById(id) {
    return CATS[id];
  }

  function loadCat(catId) {
    state.cat = catId;
    state.answers = {};
    document.querySelectorAll(".chip").forEach(function (c) {
      c.classList.toggle("active", c.getAttribute("data-cat") === catId);
    });
    $("catLabel").textContent = CATS[catId].label;
    var ta = $("descInput");
    ta.value = CATS[catId].example;
    $("charcnt").textContent = ta.value.length;
  }

  $("descInput").addEventListener("input", function () {
    $("charcnt").textContent = this.value.length;
  });
  document.querySelectorAll(".chip").forEach(function (c) {
    c.addEventListener("click", function () {
      loadCat(c.getAttribute("data-cat"));
    });
  });

  $("btnAnalyze").addEventListener("click", function () {
    runAnalyze(false);
  });

  $("btnInstant").addEventListener("click", function () {
    state.answers = { quality: "standard", size: "medium" };
    var extra = state.cat === "logo" ? "yes" : null;
    if (CATS[state.cat].group === "digital") {
      state.answers.content = extra || "no";
    } else {
      state.answers.materials = "yes";
    }
    showResult("medium");
  });

  function runAnalyze(instant) {
    var c = CATS[state.cat];
    var loc = COUNTRIES[state.country];
    var aiLog = $("aiLog");
    aiLog.innerHTML = "";
    goStep("analyze");

    var lines = [
      {
        tag: "AI",
        text: "Reading your project description...",
        tt: "Read project",
      },
      { tag: "AI", text: "Category detected: " + c.label, tt: "Detect" },
      {
        tag: "LOC",
        text:
          "Location & currency: " +
          loc.city +
          ", " +
          loc.name +
          " - " +
          loc.currency,
        tt: "Locate",
      },
      {
        tag: "REQ",
        text:
          "Features: \u201c" +
          c.features[0] +
          "\u201d, \u201c" +
          c.features[1] +
          "\u201d, \u201c" +
          c.features[2] +
          "\u201d",
        tt: "Extract",
      },
      {
        tag: "GAP",
        text: "Missing details found - asking a few follow-up questions...",
        tt: "Questions",
      },
    ];
    var i = 0;
    var timer = setInterval(function () {
      if (i < lines.length) {
        var l = lines[i];
        var div = document.createElement("div");
        div.className = "ai-line";
        div.innerHTML =
          '<span class="tl">' + l.tag + "</span><span>" + l.text + "</span>";
        aiLog.appendChild(div);
        $("aiStatus").textContent = l.tt;
        i++;
      } else {
        clearInterval(timer);
        sleep(500).then(function () {
          $("aiStatus").textContent = "Requirements ready";
          sleep(400).then(function () {
            goQuestions();
          });
        });
      }
    }, 620);
  }

  function goQuestions() {
    var pool = QSETS[CATS[state.cat].group];
    state.pool = pool;
    state.qi = 0;
    renderQProgress();
    renderQuestion();
    goStep("questions");
  }

  function renderQProgress() {
    $("qProgress").innerHTML = state.pool
      .map(function (_, i) {
        return (
          "<span" +
          (i < state.qi
            ? ' class="done"'
            : i === state.qi
              ? ' class="now"'
              : "") +
          "></span>"
        );
      })
      .join("");
  }

  function answerId(qid) {
    return state.answers[qid];
  }

  function renderQuestion() {
    var qid = state.pool[state.qi];
    var q = QUESTIONS[qid];
    $("qTitle").textContent = q.title;
    var opts = q.options
      .map(function (o) {
        var sel =
          answerId(qid) === o.id
            ? " style='border-color:#6366f1;background:rgba(99,102,241,.05)'"
            : "";
        return (
          '<button class="q-opt" type="button" data-val="' +
          o.id +
          '"' +
          sel +
          "><span>" +
          o.label +
          "<small>" +
          o.desc +
          "</small></span><span class='q-arrow'>&rarr;</span></button>"
        );
      })
      .join("");
    $("qOptions").innerHTML = opts;
    Array.prototype.forEach.call(
      $("qOptions").querySelectorAll(".q-opt"),
      function (b) {
        b.addEventListener("click", function () {
          state.answers[qid] = b.getAttribute("data-val");
          state.qi++;
          if (state.qi >= state.pool.length) {
            goConfirm();
          } else {
            renderQProgress();
            renderQuestion();
          }
        });
      },
    );
  }

  $("qBack").addEventListener("click", function () {
    if (state.qi > 0) {
      state.qi--;
      renderQProgress();
      renderQuestion();
    } else {
      goStep("describe");
    }
  });

  function goConfirm() {
    var c = CATS[state.cat];
    var loc = COUNTRIES[state.country];
    var q = state.answers.quality,
      s = state.answers.size;
    var items = [
      { icon: IC[c.icon], label: "Category", val: c.label },
      {
        icon: IC.pin,
        label: "Location",
        val: loc.city + ", " + loc.name,
        small: loc.currency,
      },
      { icon: IC.gauge, label: "Quality", val: cap(q) },
      { icon: IC.layers, label: "Size", val: cap(s) },
      {
        icon: IC.file,
        label: "Features",
        val: c.features[0] + ", " + c.features[1],
        small: "+ " + (c.features.length - 2) + " more detected",
      },
    ];
    if (c.group === "digital") {
      items.push({
        icon: IC.file,
        label: "Content & design",
        val: state.answers.content === "yes" ? "Ready to go" : "To be created",
      });
    } else {
      items.push({
        icon: IC.box,
        label: "Materials",
        val:
          state.answers.materials === "yes"
            ? "Included in estimate"
            : "Client supplies",
      });
    }
    items.push({
      icon: IC.clock,
      label: "Duration",
      val: durationText(c.dur, state.answers.size),
    });
    $("reqGrid").innerHTML = items
      .map(function (it) {
        return (
          '<div class="req-card"><span class="req-icon">' +
          it.icon +
          '</span><div><span class="req-label">' +
          it.label +
          "</span><div class='req-val'>" +
          it.val +
          (it.small ? "<small>" + it.small + "</small>" : "") +
          "</div></div></div>"
        );
      })
      .join("");
    goStep("confirm");
  }

  function cap(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function durationText(baseWeeks, sizeId) {
    var m = SIZE_MULT[sizeId || "medium"];
    var lo = Math.max(1, Math.round(baseWeeks * m * 0.9));
    var hi = Math.round(baseWeeks * m * 1.35);
    return lo === hi
      ? "~" + lo + " week" + (lo > 1 ? "s" : "")
      : lo + "-" + hi + " weeks";
  }

  $("btnEstimate").addEventListener("click", function () {
    showResult("high");
  });

  function computeResult() {
    var c = CATS[state.cat];
    var loc = COUNTRIES[state.country];
    var qm = QUALITY_MULT[state.answers.quality];
    var sm = SIZE_MULT[state.answers.size];
    var mat = 1;
    if (c.group !== "digital" && state.answers.materials === "no") {
      mat = 0.88;
    }
    if (c.group === "digital" && state.answers.content === "no") {
      mat = 1.08;
    }
    var avg = c.base * loc.mult * qm * sm * mat;
    return {
      avg: avg,
      min: avg * 0.8,
      max: avg * 1.25,
      catKey: state.cat,
      city: loc.city,
      name: loc.name,
      currency: loc.currency,
      label: c.label,
      icon: c.icon,
      shares: buildShares(state.cat),
      scope: c.scope,
      assumptions: c.assumptions,
      features: c.features,
      dur: durationText(c.dur, state.answers.size),
      quality: cap(state.answers.quality),
    };
  }

  function buildShares(key) {
    var defs = {
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
    return defs[key] || defs.web;
  }

  function showResult(level) {
    var r = computeResult();
    state.result = r;
    state.conf = level;

    $("resultTitle").textContent = r.label + " estimate";
    $("resultMeta").textContent =
      r.city + ", " + r.name + " - " + r.quality + " quality - " + r.dur;

    animateVal($("valMin"), r.min, r.currency);
    animateVal($("valAvg"), r.avg, r.currency);
    animateVal($("valMax"), r.max, r.currency);
    $("valRange").textContent =
      fmt(r.min, r.currency) + " - " + fmt(r.max, r.currency);

    var conf = confidenceInfo(level);
    $("confPill").innerHTML =
      '<span class="pdot" style="background:' +
      conf.color +
      '"></span>' +
      conf.label +
      (conf.score ? " - " + conf.score + "%" : "");
    $("durPill").textContent = "\u23f1 " + r.dur;
    $("locPill").textContent = r.city + ", " + r.name + " - " + r.currency;

    renderBreakdown(r);
    $("scopeList").innerHTML = r.scope
      .map(function (t) {
        return "<li>" + IC.check + "<span>" + t + "</span></li>";
      })
      .join("");
    var extraA = [];
    if (r.quality === "Premium") {
      extraA.push("Premium quality allowance applied across components");
    }
    if (r.quality === "Basic") {
      extraA.push("Basic quality kept - savings reflected in the range");
    }
    $("assumpList").innerHTML = r.assumptions
      .concat(extraA)
      .map(function (a) {
        return "<li>" + a + "</li>";
      })
      .join("");

    goStep("result");
  }

  function animateVal(el, end, currency) {
    var start = null,
      dur = 900;
    function tick(t) {
      if (!start) start = t;
      var p = Math.min(1, (t - start) / dur);
      var v = end * (1 - Math.pow(1 - p, 3));
      el.textContent = fmt(v, currency);
      if (p < 1) {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);
  }

  function confidenceInfo(level) {
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

  function renderBreakdown(r) {
    var rows = r.shares
      .map(function (s, i) {
        var pct = s[1],
          amt = (r.avg * pct) / 100;
        var color = COLORS[i % COLORS.length];
        return (
          "<div class='b-row'><div class='b-head'><strong>" +
          s[0] +
          "</strong><span>" +
          pct +
          "% - " +
          fmt(amt, r.currency) +
          "</span></div><div class='b-track'><div class='b-fill " +
          color +
          "' data-w='" +
          pct +
          "'></div></div></div>"
        );
      })
      .join("");
    $("breakdown").innerHTML = rows;
    requestAnimationFrame(function () {
      setTimeout(function () {
        document.querySelectorAll("#breakdown .b-fill").forEach(function (b) {
          b.style.width = b.getAttribute("data-w") + "%";
        });
      }, 120);
    });
  }

  function openQuote() {
    var r = state.result || computeResult();
    var d = new Date();
    var num =
      "QT-" +
      d.getFullYear() +
      "-" +
      String(Math.floor(1000 + Math.random() * 9000));
    $("quoteNumber").textContent = num;
    var issued = d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    var exp = new Date(d.getTime() + 30 * 864e5).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    $("quoteDates").textContent =
      "Issued: " + issued + " - Valid until: " + exp;
    $("quoteProject").textContent = r.label + " - " + r.city + ", " + r.name;
    $("quoteDesc").textContent =
      "Prepared from the confirmed requirements. " +
      r.quality +
      " quality, " +
      r.dur +
      ". " +
      r.features[0] +
      ".";
    $("quoteScope").innerHTML = r.scope
      .map(function (t) {
        return "<li>" + t + "</li>";
      })
      .join("");

    var rows = r.shares
      .map(function (s, i) {
        var pct = s[1],
          amt = Math.round((r.avg * pct) / 100);
        return (
          "<tr data-idx='" +
          i +
          "'><td>" +
          (i + 1) +
          "</td><td>" +
          s[0] +
          "</td><td class='q-qty'>1</td><td><input type='number' data-amt='" +
          amt +
          "' value='" +
          amt +
          "' step='50'></td><td class='q-amt'>" +
          fmt(amt, r.currency) +
          "</td></tr>"
        );
      })
      .join("");
    $("quoteTable").innerHTML = rows;
    $("quoteTable")
      .querySelectorAll("input")
      .forEach(function (inp) {
        inp.addEventListener("input", function () {
          recalcQuote(r);
        });
      });
    recalcQuote(r);
    $("quoteModal").classList.add("open");
    document.body.classList.add("no-scroll");
  }

  function recalcQuote(r) {
    var total = 0;
    var currency = r.currency;
    Array.prototype.forEach.call(
      $("quoteTable").querySelectorAll("tr"),
      function (tr) {
        var inp = tr.querySelector("input");
        var amt = Math.max(0, parseFloat(inp.value) || 0);
        tr.querySelector(".q-amt").textContent = fmt(amt, currency);
        total += amt;
      },
    );
    $("quoteTotals").innerHTML =
      "<div><span>Subtotal</span><span>" +
      fmt(total, currency) +
      "</span></div>" +
      "<div><span>Discounts</span><span>- " +
      fmt(0, currency) +
      "</span></div>" +
      "<div><span>Taxes &amp; contingency</span><span>Included above</span></div>" +
      '<div class="tot"><span>Total amount</span><span>' +
      fmt(total, currency) +
      "</span></div>";
  }

  $("btnQuote").addEventListener("click", openQuote);
  $("quoteClose").addEventListener("click", closeQuote);
  $("btnEditQuote").addEventListener("click", closeQuote);
  function closeQuote() {
    $("quoteModal").classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
  $("quoteModal").addEventListener("click", function (e) {
    if (e.target === $("quoteModal")) {
      closeQuote();
    }
  });

  $("btnPdf").addEventListener("click", function () {
    window.print();
  });

  $("btnShare").addEventListener("click", function () {
    shareLink();
  });
  $("btnCopyQuote").addEventListener("click", function () {
    shareLink("Your quotation is ready: ");
  });

  function shareLink(prefix) {
    var link = "https://estimo.app/e/" + Date.now().toString(36);
    var msg = (prefix || "Estimate link copied: ") + link;
    var done = function () {
      toast(msg);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(link).then(done, function () {
        fallbackCopy(link, done);
      });
    } else {
      fallbackCopy(link, done);
    }
  }
  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
    } catch (e) {}
    document.body.removeChild(ta);
    done();
  }

  $("btnRequest").addEventListener("click", function () {
    toast(
      "Demo: matching verified providers for quotes is part of the full product.",
    );
  });

  $("btnNew").addEventListener("click", function () {
    state.answers = {};
    goStep("describe");
    loadCat(state.cat);
    window.scrollTo({
      top: $("wizard").getBoundingClientRect().top + window.scrollY - 90,
      behavior: "smooth",
    });
  });

  document.querySelectorAll(".faq-q").forEach(function (b) {
    b.addEventListener("click", function () {
      var item = b.parentElement;
      var was = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(function (i) {
        i.classList.remove("open");
      });
      if (!was) {
        item.classList.add("open");
      }
    });
  });

  var navToggle = $("navToggle"),
    navLinks = $("navLinks");
  navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      navToggle.classList.remove("open");
      navLinks.classList.remove("open");
    }
  });

  window.addEventListener(
    "scroll",
    function () {
      $("siteHeader").classList.toggle("scrolled", window.scrollY > 10);
    },
    { passive: true },
  );

  var revealTargets = [
    ".hero-grid",
    ".wizard",
    ".cat-grid",
    ".steps-grid",
    ".engine-grid",
    ".plans-grid",
    ".faq-list",
    ".cta-inner",
  ];
  revealTargets.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      el.classList.add("reveal");
    });
  });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in-view");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("in-view");
    });
  }

  function renderCatGrid() {
    $("catGrid").innerHTML = PHASES.map(function (p) {
      var chips = p.chips
        .map(function (c) {
          return "<span>" + c + "</span>";
        })
        .join("");
      return (
        '<div class="cat-card"><span class="cat-tag">' +
        p.phase +
        '</span><span class="cat-icon">' +
        IC[p.icon] +
        "</span><h3>" +
        p.title +
        "</h3><p>Cost estimation for " +
        p.title.toLowerCase() +
        " projects.</p><div class='cat-chips'>" +
        chips +
        "</div></div>"
      );
    }).join("");
  }
  renderCatGrid();

  $("year").textContent = new Date().getFullYear();

  loadCat("web");
})();
