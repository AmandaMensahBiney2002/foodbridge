
function Login() {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3F352C]">

      {/* LOGIN AREA */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-6 py-16">

        {/* Green Background */}
        <div className="absolute inset-0 bg-[#006B3F]"></div>

        {/* Subtle background shapes */}
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#FCD116]/10 blur-3xl"></div>

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#CE1126]/10 blur-3xl"></div>

        {/* Decorative Ghana Colour Line */}
        <div className="absolute left-0 top-0 flex h-1 w-full">
          <div className="w-1/3 bg-[#CE1126]"></div>
          <div className="w-1/3 bg-[#FCD116]"></div>
          <div className="w-1/3 bg-[#006B3F]"></div>
        </div>

        {/* LOGIN CARD */}
        <div className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-3xl bg-[#FFFDF5] shadow-2xl md:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="hidden flex-col justify-between bg-[#006B3F] p-10 text-white md:flex lg:p-12">

            <div>
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
                <img
                  src="/images/logo.png"
                  
                  className="h-11 w-11 object-contain"
                />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#FCD116]">
                Welcome back
              </p>

              <h2 className="max-w-sm text-4xl font-bold leading-tight lg:text-5xl">
                Good food should reach people.
              </h2>

              <p className="mt-6 max-w-md text-base leading-relaxed text-white/85">
                Sign in to FoodBridge and continue connecting surplus food
                with people and communities that need it.
              </p>
            </div>

            <div className="border-l-4 border-[#FCD116] pl-5">
              <p className="text-sm font-medium text-white/90">
                Born in Ghana.
              </p>
              <p className="text-sm font-medium text-[#FCD116]">
                Built for Africa.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="p-8 sm:p-10 lg:p-12">

            {/* MOBILE LOGO */}
            <div className="mb-8 flex justify-center md:hidden">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#006B3F] shadow-md">
                <img
                  src="/images/logo.png"
                  alt="FoodBridge logo"
                  className="h-11 w-11 object-contain"
                />
              </div>
            </div>

            {/* HEADING */}
            <div className="mb-8">

              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#006B3F]">
                Welcome back
              </p>

              <h1 className="text-3xl font-bold md:text-4xl">
                Log in to FoodBridge
              </h1>

              <p className="mt-3 leading-relaxed text-[#3F352C]/65">
                Enter your details below to access your account.
              </p>

            </div>

            {/* FORM */}
            <form className="space-y-5">

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3.5 text-[#3F352C] outline-none transition placeholder:text-[#3F352C]/35 focus:border-[#006B3F] focus:ring-4 focus:ring-[#006B3F]/10"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="text-sm font-semibold"
                  >
                    Password
                  </label>

                  <a
                    href="#"
                    className="text-sm font-semibold text-[#006B3F] transition hover:text-[#CE1126]"
                  >
                    Forgot password?
                  </a>

                </div>

                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3.5 text-[#3F352C] outline-none transition placeholder:text-[#3F352C]/35 focus:border-[#006B3F] focus:ring-4 focus:ring-[#006B3F]/10"
                />
              </div>

              {/* REMEMBER ME */}
              <div className="flex items-center gap-2">

                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="h-4 w-4 accent-[#006B3F]"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-[#3F352C]/70"
                >
                  Remember me
                </label>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#006B3F] px-6 py-3.5 font-bold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-[#005531] hover:shadow-lg"
              >
                Log In
              </button>

            </form>

            {/* DIVIDER */}
            <div className="my-8 flex items-center gap-4">

              <div className="h-px flex-1 bg-[#3F352C]/10"></div>

              <span className="text-xs font-medium uppercase tracking-wide text-[#3F352C]/40">
                New to FoodBridge?
              </span>

              <div className="h-px flex-1 bg-[#3F352C]/10"></div>

            </div>

            {/* SIGN UP */}
            <a
              href="/signup"
              className="block w-full rounded-xl border-2 border-[#006B3F] px-6 py-3 text-center font-bold text-[#006B3F] transition hover:bg-[#006B3F] hover:text-white"
            >
              Create an Account
            </a>

            {/* FOOTER TEXT */}
            <p className="mt-6 text-center text-xs leading-relaxed text-[#3F352C]/50">
              By continuing, you agree to FoodBridge's terms and privacy
              policy.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Login;

