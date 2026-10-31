import { explore, socials } from "@/lib/links";
import { getNavbarOffset, scrollToSection, sectionAnchor } from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import AfricaMap from "./africa-map";
import { Container } from "./container";
import SlantLink from "./slant-link";

// Shared by the menu panel and its links so they move as one.
const MENU_EASE = "ease-[cubic-bezier(0.7,0,0.2,1)]";

const routes = [
  { name: "About", href: "#about" },
  { name: "Partners", href: "#partners" },
  { name: "Summit", href: "#summit" },
];

// Includes sections with no nav link, so being on Mission doesn't leave Summit lit.
const SECTION_IDS = [
  "home",
  "about",
  "partners",
  "focus",
  "summit",
  "milestone",
  "mission",
  "campus",
  "ticker",
  "get-involved",
  "contact",
];

export const Logo = ({ className }: { className?: string }) => (
  <span
    role="img"
    aria-label="Solana Students Africa"
    className={cn(
      "bg-ssa-purple block [mask-image:url(/images/logo2.png)] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]",
      className
    )}
  />
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);

      // Small movements are ignored so it doesn't flicker.
      const delta = y - lastScrollY.current;
      if (y < 100) setIsHidden(false);
      else if (delta > 6) setIsHidden(true);
      else if (delta < -6) setIsHidden(false);
      if (Math.abs(delta) > 6) lastScrollY.current = y;

      // Closest passed top wins; the footer may be too short to ever reach the threshold.
      const threshold = getNavbarOffset() + 100;
      let current = "home";
      let closest = -Infinity;
      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (!element) continue;
        const top = sectionAnchor(element).getBoundingClientRect().top;
        if (top < threshold && top >= closest) {
          current = id;
          closest = top;
        }
      }
      const atBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 4;
      setActiveSection(atBottom ? "contact" : current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const html = document.documentElement;
    html.style.overflow = "hidden";
    const close = () => setIsMobileMenuOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    // The menu is phone-only, so rotating to a wider screen would otherwise leave scrolling locked.
    const wide = window.matchMedia("(min-width: 768px)");
    window.addEventListener("keydown", onKey);
    wide.addEventListener("change", close);
    return () => {
      html.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", close);
    };
  }, [isMobileMenuOpen]);

  const scrollTo = (href: string) => {
    const targetId = href.substring(1);
    if (scrollToSection(targetId)) setActiveSection(targetId);
  };

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setTimeout(() => scrollTo(href), 100);
    } else {
      scrollTo(href);
    }
  };

  const isActive = (href: string) => activeSection === href.substring(1);

  return (
    <>
      <div
        className={cn(
          "navbar-section fixed top-0 right-0 left-0 z-50 flex w-full justify-center transition-all duration-300",
          isScrolled
            ? "bg-ssa-cream/85 py-3 shadow-sm backdrop-blur-md"
            : "bg-transparent py-5 md:py-8",
          isHidden && !isMobileMenuOpen && "-translate-y-full",
          isMobileMenuOpen && "bg-transparent shadow-none backdrop-blur-none"
        )}
      >
        <Container as="nav" className="flex items-center justify-between">
          <a href="#home" onClick={(e) => handleClick(e, "#home")} className="shrink-0">
            <Logo
              className={cn(
                "h-14 w-14 transition-colors duration-500 md:h-16 md:w-16",
                isMobileMenuOpen && "bg-white"
              )}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 md:flex">
            {routes.map((route) => (
              <SlantLink
                key={route.name}
                variant="purple"
                href={route.href}
                onClick={(e) => handleClick(e, route.href)}
                aria-current={isActive(route.href) ? "true" : undefined}
                className={cn(
                  "min-w-24",
                  isActive(route.href) && "shadow-[inset_0_-3px_0_var(--color-ssa-green)]"
                )}
              >
                {route.name}
              </SlantLink>
            ))}
            <SlantLink
              href="#contact"
              sweep
              onClick={(e) => handleClick(e, "#contact")}
              aria-current={isActive("#contact") ? "true" : undefined}
              className="ml-10 min-w-24"
            >
              Contact
            </SlantLink>
          </div>

          {/* Stays above the menu panel, so it doubles as the close button. */}
          <button
            className="flex h-10 w-10 flex-col items-center justify-center space-y-1.5 focus:outline-none md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {["translate-y-2 rotate-45", "opacity-0", "-translate-y-2 -rotate-45"].map((open) => (
              <span
                key={open}
                className={cn(
                  "bg-ssa-purple block h-0.5 w-6 transition-all duration-300",
                  isMobileMenuOpen && cn("bg-white", open)
                )}
              />
            ))}
          </button>
        </Container>
      </div>

      <MobileMenu open={isMobileMenuOpen} isActive={isActive} onNavigate={handleClick} />
    </>
  );
};

const MobileMenu = ({
  open,
  isActive,
  onNavigate,
}: {
  open: boolean;
  isActive: (href: string) => boolean;
  onNavigate: (e: React.MouseEvent, href: string) => void;
}) => {
  // Rows rise one after another on open and drop together on close.
  const rise = (i: number) => ({
    className: cn(
      "block transition-transform duration-700 motion-reduce:transition-none",
      MENU_EASE,
      open ? "translate-y-0" : "translate-y-[110%] duration-300"
    ),
    style: { transitionDelay: open ? `${200 + i * 70}ms` : "0ms" },
  });

  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={cn(
        "bg-ssa-purple fixed inset-0 z-40 flex flex-col overflow-hidden text-white transition-[clip-path,visibility] duration-500 motion-reduce:transition-none md:hidden",
        MENU_EASE,
        open ? "visible [clip-path:inset(0)]" : "invisible [clip-path:inset(0_0_100%_0)]"
      )}
    >
      <div
        aria-hidden
        className="bg-grid-paper absolute inset-0 [--grid-line:rgb(255_255_255/0.07)] [--grid-size:28px]"
      />
      <div aria-hidden className="pointer-events-none absolute -right-28 bottom-24 w-[30rem]">
        <AfricaMap strokeWidth={0.5} className="text-white/15" />
      </div>

      <nav aria-label="Mobile" className="relative flex flex-1 flex-col justify-center px-6 pt-24">
        <p className="overflow-hidden">
          <span {...rise(0)}>
            <span className="clip-slant bg-ssa-green text-ssa-purple inline-block px-4 py-1 text-xs font-bold tracking-widest uppercase [--slant:6px]">
              Menu
            </span>
          </span>
        </p>
        <ul className="mt-6 space-y-1">
          {explore.map((item, i) => {
            const active = isActive(item.href);
            const r = rise(i + 1);
            return (
              <li key={item.href} className="overflow-hidden">
                <a
                  href={item.href}
                  tabIndex={open ? undefined : -1}
                  onClick={(e) => onNavigate(e, item.href)}
                  aria-current={active ? "true" : undefined}
                  className={cn(r.className, "group flex items-center gap-4 py-1.5")}
                  style={r.style}
                >
                  <span className="text-ssa-green w-6 text-xs font-bold tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "text-[clamp(2rem,10.5vw,2.6rem)] leading-none font-extrabold tracking-tight whitespace-nowrap transition-colors",
                      active ? "text-ssa-green" : "group-active:text-ssa-green"
                    )}
                  >
                    {item.label}
                  </span>
                  {active && (
                    <span
                      aria-hidden
                      className="clip-slant bg-ssa-green h-3 w-7 shrink-0 [--slant:4px]"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="relative overflow-hidden px-6 pb-8">
        <div {...rise(explore.length + 1)}>
          <div className="flex items-center justify-between gap-4 border-t border-white/20 pt-6">
            <SlantLink
              href="#contact"
              sweep
              tabIndex={open ? undefined : -1}
              onClick={(e) => onNavigate(e, "#contact")}
              className="shrink-0 px-6 py-3"
            >
              Contact
            </SlantLink>
            <ul className="flex gap-1.5">
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={open ? undefined : -1}
                    aria-label={social.label}
                    className="border-ssa-green/40 text-ssa-green active:bg-ssa-green active:text-ssa-ink grid h-8 w-8 place-items-center rounded-full border transition min-[380px]:h-9 min-[380px]:w-9"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
