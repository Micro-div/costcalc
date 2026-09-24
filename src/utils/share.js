export const makeShareLink = () =>
  "https://estimo.app/e/" + Date.now().toString(36);

export function copyText(text, onDone) {
  const done = () => {
    if (typeof onDone === "function") onDone();
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, () => {
      fallbackCopy(text, done);
    });
  } else {
    fallbackCopy(text, done);
  }
}

function fallbackCopy(text, onDone) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
  } catch (e) {
    /* noop */
  }
  document.body.removeChild(ta);
  onDone();
}