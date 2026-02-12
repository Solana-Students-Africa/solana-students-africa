import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const routes = [
    { name: "Events", href: "/events" },
    { name: "Community", href: "/community" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ];

  const aboutDropdownItems = [
    { name: "Meet the team", href: "/team" },
    { name: "About SSA", href: "/about" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Navbar - Responsive: mobile left-[15px], desktop left-[50px] */}
      <nav className="navbar-section absolute top-[30px] left-[15px] z-50 flex w-[calc(100%-30px)] items-center justify-between md:top-[50px] md:left-[50px] md:w-[calc(100%-100px)]">
        {/* Brand - Mobile: text-[20px], Desktop: text-[30px] */}
        <Link to="/" className="font-gellix text-[20px] font-medium text-white md:text-[30px]">
          Solana Students Africa
        </Link>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-[21px] w-[31.5px] flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-[2px] w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-[2px] w-full bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[2px] w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>

        {/* Desktop Navigation Links - Hidden on mobile */}
        <div className="hidden items-center gap-[48px] md:flex">
          {/* About Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              className="font-gellix flex items-center gap-2 text-[20px] font-medium text-white transition-colors hover:text-white/80"
            >
              About
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                className={`transition-transform ${isAboutDropdownOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1L6.5 6.5L12 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {isAboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-[37px] flex h-[93px] w-[199px] flex-col overflow-hidden rounded-[15px] bg-white">
                {aboutDropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsAboutDropdownOpen(false)}
                    className="font-gellix flex-1 px-[15px] py-[10px] text-[20px] font-medium text-black transition-colors hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Nav Links */}
          {routes.map((route) => (
            <Link
              key={route.name}
              to={route.href}
              className={`font-gellix text-[20px] font-medium transition-colors ${
                isActive(route.href) ? "text-white" : "text-white hover:text-white/80"
              }`}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 md:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-[40px]">
            {/* About Section with nested items */}
            <div className="flex flex-col items-center gap-[20px]">
              <span className="font-gellix text-[24px] font-medium text-[#0b9444]">About</span>
              {aboutDropdownItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="font-gellix text-[20px] font-normal text-white/80 transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Other Nav Links */}
            {routes.map((route) => (
              <Link
                key={route.name}
                to={route.href}
                className={`font-gellix text-[24px] font-medium transition-colors ${
                  isActive(route.href) ? "text-[#0b9444]" : "text-white hover:text-[#0b9444]"
                }`}
              >
                {route.name}
              </Link>
            ))}

            {/* Join CTA */}
            <a
              href="https://x.com/SolanaStudentAf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-gellix mt-[20px] rounded-[50px] bg-[#0b9444] px-[30px] py-[15px] text-[18px] font-medium text-white"
            >
              Join the community
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
