// Until a stage is reached, <html> carries its attribute (reveal: swipe began; done: gone).
export const STAGES = {
  reveal: { attr: "data-covered", event: "ssa:reveal" },
  done: { attr: "data-loading", event: "ssa:loaded" },
} as const;
type Stage = keyof typeof STAGES;

export const reach = (stage: Stage) => {
  document.documentElement.removeAttribute(STAGES[stage].attr);
  window.dispatchEvent(new Event(STAGES[stage].event));
};

/** Runs `fn` once the loader reaches `stage` (or now, if it already has). Returns a cleanup. */
export const whenLoaded = (fn: () => void, stage: Stage = "done") => {
  const { attr, event } = STAGES[stage];
  if (!document.documentElement.hasAttribute(attr)) {
    fn();
    return;
  }
  window.addEventListener(event, fn, { once: true });
  return () => window.removeEventListener(event, fn);
};
