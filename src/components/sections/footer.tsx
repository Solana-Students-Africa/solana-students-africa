import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section flex w-full flex-col gap-[30px] bg-black md:w-[1412px] md:gap-[35px]">
      {/* Main footer content - Mobile: stacked, Desktop: row */}
      <div className="flex w-full flex-col-reverse items-center gap-[40px] md:flex-row md:items-start md:justify-between md:gap-0">
        {/* Links columns - Mobile: 2x2 grid, Desktop: row */}
        <div className="mt-[0px] grid w-full grid-cols-2 gap-[30px] text-[16px] text-white md:mt-[85px] md:flex md:w-auto md:gap-[100px] md:text-[20px]">
          {/* About Us column */}
          <div className="flex flex-col gap-[20px] md:w-[199px] md:gap-[25px]">
            <p className="font-gellix font-semibold tracking-[-0.48px] md:tracking-[-0.6px]">
              About Us
            </p>
            <div className="font-gellix flex flex-col gap-[20px] font-normal md:gap-[32px]">
              <Link to="/team" className="transition-opacity hover:opacity-80">
                Meet the team
              </Link>
              <Link to="/#faq" className="transition-opacity hover:opacity-80">
                FAQ
              </Link>
              <a href="#" className="transition-opacity hover:opacity-80">
                Privacy & Policy
              </a>
              <a href="#" className="transition-opacity hover:opacity-80">
                Terms and Conditions
              </a>
            </div>
          </div>

          {/* Community column */}
          <div className="flex flex-col gap-[20px] md:w-[159px] md:gap-[25px]">
            <p className="font-gellix font-semibold tracking-[-0.48px] md:tracking-[-0.6px]">
              Community
            </p>
            <div className="font-gellix flex flex-col gap-[20px] font-normal md:gap-[32px]">
              <Link to="/events" className="transition-opacity hover:opacity-80">
                Upcoming Events
              </Link>
              <Link to="/events" className="transition-opacity hover:opacity-80">
                Summit
              </Link>
              <Link to="/contact" className="transition-opacity hover:opacity-80">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Socials column */}
          <div className="flex flex-col gap-[20px] md:w-[69px] md:gap-[25px]">
            <p className="font-gellix font-semibold tracking-[-0.48px] md:tracking-[-0.6px]">
              Socials
            </p>
            <div className="font-gellix flex flex-col gap-[20px] font-normal md:gap-[32px]">
              <a
                href="https://discord.gg/solanastudentsafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                Discord
              </a>
              <a
                href="https://x.com/SolanaStudentAf"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                X
              </a>
            </div>
          </div>
        </div>

        {/* Logo - Mobile: smaller and centered, Desktop: full size */}
        <div className="h-[200px] w-[240px] md:h-[361px] md:w-[438px]">
          <img
            src="/images/ssa-logo-footer.png"
            alt="Solana Students Africa"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Copyright */}
      <p className="font-gellix text-center text-[14px] font-semibold text-white/50 md:text-left md:text-[20px]">
        Copyright 2025 SSA. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
