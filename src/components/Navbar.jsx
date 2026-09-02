
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

          {/* LOGO SPACE */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
            <img
              src="/images/logo.png"
             
              className="h-9 w-9 object-contain"
            />
          </div>

          {/* BRAND NAME */}
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

          <Link
            to="/"
            className="font-medium text-white transition hover:text-[#FCD116]"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="font-medium text-white transition hover:text-[#FCD116]"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="font-medium text-white transition hover:text-[#FCD116]"
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="font-medium text-white transition hover:text-[#FCD116]"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-lg bg-[#FCD116] px-5 py-2.5 font-bold text-[#3F352C] shadow-sm transition hover:bg-[#e5bc0f] hover:shadow-md"
          >
            Sign Up
          </Link>

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

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-white transition hover:bg-white/10 hover:text-[#FCD116]"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-white transition hover:bg-white/10 hover:text-[#FCD116]"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-white transition hover:bg-white/10 hover:text-[#FCD116]"
            >
              Contact
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-white transition hover:bg-white/10 hover:text-[#FCD116]"
            >
              Login
            </Link>

            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-[#FCD116] px-4 py-3 text-center font-bold text-[#3F352C] transition hover:bg-[#e5bc0f]"
            >
              Sign Up
            </Link>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;

