const BASE = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  width: "1em",
  height: "1em",
};

export const IconWeb = (props) => (
  <svg {...BASE} {...props}>
    <path d="m8 6-6 6 6 6" />
    <path d="m16 6 6 6-6 6" />
  </svg>
);

export const IconMobile = (props) => (
  <svg {...BASE} {...props}>
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <path d="M12 18h.01" />
  </svg>
);

export const IconLogo = (props) => (
  <svg {...BASE} {...props}>
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18z" />
    <path d="m2 2 7.6 7.6" />
  </svg>
);

export const IconPainting = (props) => (
  <svg {...BASE} {...props}>
    <path d="M9 3h6v3H9z" />
    <path d="M9 3v3H3c0 4 3 6 7 6" />
    <path d="M12 12v6a2 2 0 0 1-4 0v-2" />
  </svg>
);

export const IconKitchen = (props) => (
  <svg {...BASE} {...props}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />
  </svg>
);

export const IconCheck = (props) => (
  <svg {...BASE} strokeWidth={2.4} {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const IconGauge = (props) => (
  <svg {...BASE} {...props}>
    <path d="m12 14 4-4" />
    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
  </svg>
);

export const IconLayers = (props) => (
  <svg {...BASE} {...props}>
    <path d="m12 2 8.5 4.5L12 11 3.5 6.5 12 2z" />
    <path d="m20.5 11.5L12 16l-8.5-4.5" />
    <path d="m20.5 16.5L12 21l-8.5-4.5" />
  </svg>
);

export const IconFile = (props) => (
  <svg {...BASE} {...props}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M8 13h8M8 17h6" />
  </svg>
);

export const IconBox = (props) => (
  <svg {...BASE} {...props}>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);

export const IconPin = (props) => (
  <svg {...BASE} {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconClock = (props) => (
  <svg {...BASE} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export const IconCalendar = (props) => (
  <svg {...BASE} {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const IconCode = IconWeb;

export const IconShare = (props) => (
  <svg {...BASE} {...props}>
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <path d="m16 6-4-4-4 4" />
    <path d="M12 2v13" />
  </svg>
);

export const IconArrowRight = (props) => (
  <svg {...BASE} {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const IconMap = {
  web: IconWeb,
  mobile: IconMobile,
  logo: IconLogo,
  painting: IconPainting,
  kitchen: IconKitchen,
  code: IconCode,
  calendar: IconCalendar,
  file: IconFile,
  gauge: IconGauge,
  layers: IconLayers,
  pin: IconPin,
  clock: IconClock,
  box: IconBox,
  check: IconCheck,
};