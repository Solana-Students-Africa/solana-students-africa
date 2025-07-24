import { useEffect, useMemo, useState } from "react";
import { Container } from "./container";

const Navbar = () => {
  const routes = useMemo(() => {
    return [
      {
        name: "Home",
        href: "#home",
      },
      {
        name: "About",
        href: "#about",
      },
      {
        name: "Tracks",
        href: "#tracks",
      },
      {
        name: "Timeline",
        href: "#timeline",
      },
      {
        name: "Partners",
        href: "#partners",
      },
      {
        name: "Contact",
        href: "#contact",
      },
    ];
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      const sections = routes.map((route) => route.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [routes]);

  const isActive = (href: string) => {
    return activeSection === href.substring(1);
  };

  const handleMobileMenuClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className={`navbar-section fixed top-0 right-0 left-0 z-50 flex w-full justify-center transition-all duration-300 ${
          isScrolled ? "bg-black/70 shadow-2xl backdrop-blur-md" : "bg-transparent"
        }`}
        style={{ padding: isScrolled ? "20px 0" : "40px 0 0 0" }}
      >
        <Container as="nav" className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="text-lg font-medium text-white md:text-xl lg:text-2xl"
              data-animate-y-up
              data-delay="0.1"
              data-easing="NAVIGATION.button"
            >
              Solana Students Africa
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-4 md:flex md:space-x-6 lg:space-x-12">
            {routes.map((route, index) => (
              <a
                data-animate-y-up
                data-delay={index / 10 + 0.1}
                data-easing="NAVIGATION.button"
                key={route.name}
                href={route.href}
                className={`group relative text-sm transition-colors md:text-base lg:text-lg ${
                  isActive(route.href) ? "text-white" : "text-white/90 hover:text-white"
                }`}
              >
                {route.name}

                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                    isActive(route.href) ? "w-full" : "w-0"
                  }`}
                />

                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-white/80 transition-all duration-300 ease-out ${
                    isActive(route.href) ? "w-0" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="flex h-8 w-8 flex-col items-center justify-center space-y-1.5 focus:outline-none md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </Container>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-md transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 transform bg-black/95 backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex h-8 w-8 items-center justify-center text-white/80 transition-colors hover:text-white"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-6">
            <div className="space-y-6">
              {routes.map((route, index) => (
                <a
                  key={route.name}
                  href={route.href}
                  onClick={() => handleMobileMenuClick(route.href)}
                  className={`block transform text-xl font-medium transition-all duration-300 hover:translate-x-2 ${
                    isActive(route.href)
                      ? "border-l-2 border-white pl-4 text-white"
                      : "pl-4 text-white/80 hover:text-white"
                  }`}
                  style={{
                    animationDelay: isMobileMenuOpen ? `${index * 0.1}s` : "0s",
                  }}
                >
                  {route.name}
                </a>
              ))}
            </div>
          </nav>

          <div className="border-t border-white/10 p-6">
            <p className="text-sm text-white/60">Solana Students Africa</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
