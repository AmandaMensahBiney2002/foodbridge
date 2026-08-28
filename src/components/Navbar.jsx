import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1F5D42]/10 bg-[#F8F1E5]/95 shadow-sm backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">

        {/* ========================= */}
        {/* LOGO */}
        {/* ========================= */}

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2"
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F5D42] text-xl text-[#D9A441]">
            🌍
          </div>

          <div>
            <span className="block text-xl font-bold leading-none text-[#1F5D42]">
              FoodBridge
            </span>

            <span className="text-xs font-medium text-[#C65D3A]">
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
            className="font-medium text-[#202020] transition hover:text-[#1F5D42]"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="font-medium text-[#202020] transition hover:text-[#1F5D42]"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="font-medium text-[#202020] transition hover:text-[#1F5D42]"
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="font-medium text-[#202020] transition hover:text-[#1F5D42]"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-lg bg-[#C65D3A] px-5 py-2.5 font-bold text-white shadow-sm transition hover:bg-[#A94B2E] hover:shadow-md"
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
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1F5D42] text-xl text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* ========================= */}
      {/* MOBILE NAVIGATION */}
      {/* ========================= */}

      {menuOpen && (

        <div className="border-t border-[#1F5D42]/10 bg-[#F8F1E5] px-6 py-5 shadow-md md:hidden">

          <div className="flex flex-col gap-2">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-[#202020] transition hover:bg-[#E4F0E9] hover:text-[#1F5D42]"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-[#202020] transition hover:bg-[#E4F0E9] hover:text-[#1F5D42]"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-[#202020] transition hover:bg-[#E4F0E9] hover:text-[#1F5D42]"
            >
              Contact
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-[#202020] transition hover:bg-[#E4F0E9] hover:text-[#1F5D42]"
            >
              Login
            </Link>

            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-[#C65D3A] px-4 py-3 text-center font-bold text-white transition hover:bg-[#A94B2E]"
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