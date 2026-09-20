
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative font-medium text-white transition ${
      isActive
        ? "text-[#FCD116]"
        : "hover:text-[#FCD116]"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `rounded-lg px-4 py-3 font-medium text-white transition ${
      isActive
        ? "bg-white/10 text-[#FCD116]"
        : "hover:bg-white/10 hover:text-[#FCD116]"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#006B3F] shadow-sm">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">

        {/* ========================= */}
        {/* LOGO */}
        {/* ========================= */}

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >

          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white">
            <img
              src="/images/logo.jpg"
              alt="FoodBridge logo"
              className="h-11 w-11 rounded-full object-cover"
            />
          </div>

          <div>
            <span className="block text-xl font-bold leading-none text-white">
              FoodBridge
            </span>

            <span className="text-xs font-medium text-[#FCD116]">
              Born in Ghana. Built for Africa.
            </span>
          </div>

        </Link>


        {/* ========================= */}
        {/* DESKTOP NAVIGATION */}
        {/* ========================= */}

        <div className="hidden items-center gap-8 md:flex">

          <NavLink
            to="/"
            end
            className={navLinkClass}
          >
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#FCD116]" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
          >
            {({ isActive }) => (
              <>
                About
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#FCD116]" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/contact"
            className={navLinkClass}
          >
            {({ isActive }) => (
              <>
                Contact
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#FCD116]" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/login"
            className={navLinkClass}
          >
            {({ isActive }) => (
              <>
                Login
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#FCD116]" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `rounded-lg px-5 py-2.5 font-bold text-[#3F352C] shadow-sm transition ${
                isActive
                  ? "bg-[#e5bc0f] ring-2 ring-[#FCD116] ring-offset-2 ring-offset-[#006B3F]"
                  : "bg-[#FCD116] hover:bg-[#e5bc0f] hover:shadow-md"
              }`
            }
          >
            Sign Up
          </NavLink>

        </div>


        {/* ========================= */}
        {/* MOBILE MENU BUTTON */}
        {/* ========================= */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 text-xl text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* ========================= */}
      {/* MOBILE NAVIGATION */}
      {/* ========================= */}

      {menuOpen && (

        <div className="border-t border-white/10 bg-[#006B3F] px-6 py-5 shadow-md md:hidden">

          <div className="flex flex-col gap-2">

            <NavLink
              to="/"
              end
              onClick={() => setMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              Contact
            </NavLink>

            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `mt-2 rounded-lg px-4 py-3 text-center font-bold text-[#3F352C] transition ${
                  isActive
                    ? "bg-[#e5bc0f] ring-2 ring-[#FCD116]"
                    : "bg-[#FCD116] hover:bg-[#e5bc0f]"
                }`
              }
            >
              Sign Up
            </NavLink>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;
