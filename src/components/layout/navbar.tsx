import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
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

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Navbar - Exact Figma: left-[50px] top-[50px] w-[1412px] */}
      <nav className="navbar-section absolute top-[50px] left-[50px] z-50 flex w-[1412px] items-center justify-between">
        {/* Brand - Exact Figma: text-[30px] Gellix Medium */}
        <Link to="/" className="font-gellix text-[30px] font-medium text-white">
          Solana Students Africa
        </Link>

        {/* Navigation Links - Exact Figma: gap-[48px] text-[20px] */}
        <div className="flex items-center gap-[48px]">
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
                className={`\${isAboutDropdownOpen ? "rotate-180" : ""} transition-transform`}
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

            {/* Dropdown - Exact Figma: w-[199px] h-[93px] rounded-[15px] */}
            {isAboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-[37px] flex h-[93px] w-[199px] flex-col overflow-hidden rounded-[15px] bg-white">
                {aboutDropdownItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsAboutDropdownOpen(false)}
                    className={`font-gellix \${ index === 0 ? "" : "" } flex-1 px-[15px] py-[10px] text-[20px] font-medium text-black transition-colors hover:bg-gray-100`}
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
              className={`font-gellix \${ isActive(route.href) ? "text-white" : "text-white hover:text-white/80" } text-[20px] font-medium transition-colors`}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
