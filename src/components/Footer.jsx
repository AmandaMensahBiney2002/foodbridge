import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#163F32] text-white">

      {/* ========================= */}
      {/* MAIN FOOTER */}
      {/* ========================= */}

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-4">

        {/* BRAND */}

        <div className="lg:col-span-2">

          <Link to="/" className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white">
              <img
                src="/images/logo.jpg"
                alt="FoodBridge logo"
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>

            <div>
              <span className="block text-2xl font-bold">
                FoodBridge
              </span>

              <span className="text-xs font-medium text-[#F4D98A]">
                Born in Ghana. Built for Africa.
              </span>
            </div>

          </Link>

          <p className="mt-6 max-w-md leading-7 text-white/70">
            Connecting surplus food with people and organizations who need it,
            while helping communities reduce food waste and create meaningful
            social impact.
          </p>

          <p className="mt-5 font-semibold text-[#D9A441]">
            Less waste. More food. Stronger communities.
          </p>

        </div>


        {/* QUICK LINKS */}

        <div>

          <h3 className="text-lg font-bold text-[#D9A441]">
            Quick Links
          </h3>

          <div className="mt-5 flex flex-col gap-3">

            <Link
              to="/"
              className="text-white/70 transition hover:text-[#D9A441]"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-white/70 transition hover:text-[#D9A441]"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="text-white/70 transition hover:text-[#D9A441]"
            >
              Contact Us
            </Link>

            <Link
              to="/login"
              className="text-white/70 transition hover:text-[#D9A441]"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="text-white/70 transition hover:text-[#D9A441]"
            >
              Sign Up
            </Link>

          </div>

        </div>


        {/* PLATFORM */}

        <div>

          <h3 className="text-lg font-bold text-[#D9A441]">
            FoodBridge
          </h3>

          <div className="mt-5 flex flex-col gap-3">

            <Link
              to="/signup"
              className="text-white/70 transition hover:text-[#D9A441]"
            >
              Become a Donor
            </Link>

            <Link
              to="/signup"
              className="text-white/70 transition hover:text-[#D9A441]"
            >
              Find Food
            </Link>

            <Link
              to="/about"
              className="text-white/70 transition hover:text-[#D9A441]"
            >
              Our Mission
            </Link>

            <Link
              to="/contact"
              className="text-white/70 transition hover:text-[#D9A441]"
            >
              Get in Touch
            </Link>

          </div>

        </div>

      </div>


      {/* ========================= */}
      {/* BOTTOM FOOTER */}
      {/* ========================= */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm md:flex-row md:items-center md:justify-between md:px-10">

          <p className="text-white/60">
            © 2026 FoodBridge. All rights reserved.
          </p>

          <div className="flex gap-6">

            <span className="cursor-pointer text-white/60 transition hover:text-[#D9A441]">
              Privacy Policy
            </span>

            <span className="cursor-pointer text-white/60 transition hover:text-[#D9A441]">
              Terms of Service
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;