import { useEffect, useState } from "react";
import { Container } from "./container";

const Navbar = () => {
  const routes = [
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

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Check which section is currently in view
      const sections = routes.map((route) => route.href.substring(1)); // Remove the '#' from href
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

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 flex w-full justify-center transition-all duration-300 ${
        isScrolled ? "bg-black/70 shadow-2xl backdrop-blur-md" : "bg-transparent"
      }`}
      style={{ padding: isScrolled ? "25px 0" : "40px 0 0 0" }}
    >
      <Container as="nav" className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-medium text-white">Solana Students Africa</div>
        </div>

        <div className="hidden items-center space-x-12 md:flex">
          {routes.map((route) => (
            <a
              key={route.name}
              href={route.href}
              className={`group relative text-lg transition-colors ${
                isActive(route.href) ? "text-white" : "text-white/90 hover:text-white"
              }`}
            >
              {route.name}

              {/* Active underline - always visible when active */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                  isActive(route.href) ? "w-full" : "w-0"
                }`}
              />

              {/* Hover underline - animated from left to right */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-white/80 transition-all duration-300 ease-out ${
                  isActive(route.href) ? "w-0" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
