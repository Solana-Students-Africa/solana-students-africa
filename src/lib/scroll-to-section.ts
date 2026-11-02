/** Height to leave clear for the fixed navbar when landing on a section. */
export const getNavbarOffset = () => {
  // The navbar is sized in rem, which grows past 1920 wide.
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) / 16;
  return (window.innerWidth >= 768 ? 110 : 80) * rem;
};

/** A pinned section's own top is fixed while pinned, so measure its GSAP `.pin-spacer`. */
export const sectionAnchor = (element: HTMLElement) => {
  const parent = element.parentElement;
  return parent?.classList.contains("pin-spacer") ? parent : element;
};

// Full-screen sections that pin as soon as they reach the top: land exactly on them.
const FULL_SCREEN = new Set(["about", "summit", "campus"]);

// Partners appears and fades in only after its top passes, so land past that.
const landingOffset = (id: string) => {
  if (id === "partners" && window.innerWidth >= 768) return -0.25 * window.innerHeight;
  if (FULL_SCREEN.has(id)) return 0;
  return getNavbarOffset();
};

/** Smooth-scrolls to the section with this id. Returns false if there's no such section. */
export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return false;
  const top = sectionAnchor(element).getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: top - landingOffset(id), behavior: "smooth" });
  return true;
};
