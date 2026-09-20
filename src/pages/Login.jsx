import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");
    setIsLoggingIn(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(
          data.error || "Unable to log in. Please try again."
        );

        setIsLoggingIn(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      console.log("Login successful");

      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);

      setErrorMessage(
        "Something went wrong. Please check your connection and try again."
      );

      setIsLoggingIn(false);
    }
  };

  const handleResendVerification = async () => {
    setErrorMessage("");
    setSuccessMessage("");
    setIsResending(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/resend-verification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(
          data.error || "Unable to resend the verification email."
        );

        setIsResending(false);
        return;
      }

      setSuccessMessage(
        data.message || "A new verification email has been sent."
      );
    } catch (error) {
      console.error("Resend verification error:", error);

      setErrorMessage(
        "Something went wrong while resending the verification email. Please try again."
      );
    }

    setIsResending(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#2F2A25]">

      {/* ===================================================== */}
      {/* GHANA ACCENT */}
      {/* ===================================================== */}

      <div className="h-1.5 w-full bg-[linear-gradient(to_right,#CE1126_33.33%,#FCD116_33.33%,#FCD116_66.66%,#006B3F_66.66%)]"></div>


      {/* ===================================================== */}
      {/* LOGIN PAGE */}
      {/* ===================================================== */}

      <main className="relative flex min-h-[calc(100vh-6px)] items-center justify-center overflow-hidden px-5 py-12 sm:px-8 lg:py-16">

        {/* Subtle background decoration */}

        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#006B3F]/5 blur-3xl"></div>

        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#D9A441]/8 blur-3xl"></div>


        {/* ===================================================== */}
        {/* LOGIN CARD */}
        {/* ===================================================== */}

        <div className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-[28px] border border-[#2F2A25]/8 bg-white shadow-[0_25px_70px_rgba(47,42,37,0.12)] md:grid-cols-[0.9fr_1.1fr]">


          {/* ===================================================== */}
          {/* LEFT BRAND PANEL */}
          {/* ===================================================== */}

          <div className="relative hidden overflow-hidden bg-[#006B3F] p-10 text-white md:flex md:flex-col md:justify-between lg:p-12">

            {/* Decorative circle */}

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[45px] border-[#FCD116]/10"></div>

            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border-[50px] border-white/5"></div>


            <div className="relative">

              {/* Logo */}

              <div className="mb-10 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg ring-4 ring-white/10">
                <img
                  src="/images/logo.jpg"
                  alt="FoodBridge logo"
                  className="h-14 w-14 rounded-full object-cover"
                />
              </div>


              {/* Small heading */}

              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#FCD116]"></span>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FCD116]">
                  FoodBridge
                </p>
              </div>


              {/* Main message */}

              <h2 className="max-w-md text-4xl font-bold leading-[1.08] lg:text-5xl">
                Good food should
                <span className="block text-[#FCD116]">
                  reach people.
                </span>
              </h2>


              <p className="mt-6 max-w-md text-base leading-7 text-white/75">
                A platform connecting surplus food with people and
                organizations that need it.
              </p>

            </div>


            {/* Bottom statement */}

            <div className="relative mt-12 border-l-2 border-[#FCD116] pl-5">

              <p className="text-sm font-semibold text-white">
                Born in Ghana.
              </p>

              <p className="mt-1 text-sm font-semibold text-[#FCD116]">
                Built for Africa.
              </p>

            </div>

          </div>


          {/* ===================================================== */}
          {/* RIGHT FORM AREA */}
          {/* ===================================================== */}

          <div className="px-7 py-9 sm:px-10 sm:py-12 lg:px-14 lg:py-14">


            {/* ===================================================== */}
            {/* MOBILE BRAND */}
            {/* ===================================================== */}

            <div className="mb-9 flex flex-col items-center text-center md:hidden">

              <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#006B3F] shadow-md ring-4 ring-[#006B3F]/10">
                <img
                  src="/images/logo.jpg"
                  alt="FoodBridge logo"
                  className="h-14 w-14 rounded-full object-cover"
                />
              </div>

              <p className="text-sm font-bold text-[#006B3F]">
                FoodBridge
              </p>

              <p className="mt-1 text-xs font-medium text-[#2F2A25]/45">
                Born in Ghana. Built for Africa.
              </p>

            </div>


            {/* ===================================================== */}
            {/* HEADING */}
            {/* ===================================================== */}

            <div className="mb-8">

              <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-[#006B3F]">
                Welcome back
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-[#2F2A25] sm:text-4xl">
                Log in to FoodBridge
              </h1>

              <p className="mt-3 max-w-md text-sm leading-6 text-[#2F2A25]/55 sm:text-base">
                Welcome back. Enter your details to continue to your
                FoodBridge account.
              </p>

            </div>


            {/* ===================================================== */}
            {/* ERROR MESSAGE */}
            {/* ===================================================== */}

            {errorMessage && (
              <div className="mb-6 rounded-2xl border border-[#C65D3A]/20 bg-[#C65D3A]/8 p-4">

                <div className="flex gap-3">

                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C65D3A]/15 text-xs font-bold text-[#C65D3A]">
                    !
                  </div>

                  <div className="min-w-0">

                    <p className="text-sm font-bold text-[#C65D3A]">
                      Login unsuccessful
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#2F2A25]/65">
                      {errorMessage}
                    </p>


                    {/* RESEND VERIFICATION */}

                    {errorMessage ===
                      "Please verify your email address before logging in." && (
                      <button
                        type="button"
                        onClick={handleResendVerification}
                        disabled={isResending || !email.trim()}
                        className="mt-4 rounded-lg border border-[#006B3F] bg-white px-4 py-2.5 text-sm font-bold text-[#006B3F] transition hover:bg-[#006B3F] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isResending
                          ? "Sending..."
                          : "Resend verification email"}
                      </button>
                    )}

                  </div>

                </div>

              </div>
            )}


            {/* ===================================================== */}
            {/* SUCCESS MESSAGE */}
            {/* ===================================================== */}

            {successMessage && (
              <div className="mb-6 rounded-2xl border border-[#006B3F]/15 bg-[#006B3F]/7 p-4">

                <div className="flex gap-3">

                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#006B3F]/10 text-sm text-[#006B3F]">
                    ✓
                  </div>

                  <div>

                    <p className="text-sm font-bold text-[#006B3F]">
                      Verification email sent
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#2F2A25]/65">
                      {successMessage}
                    </p>

                    <p className="mt-2 text-xs text-[#2F2A25]/45">
                      Please check your inbox and spam or junk folder.
                    </p>

                  </div>

                </div>

              </div>
            )}


            {/* ===================================================== */}
            {/* FORM */}
            {/* ===================================================== */}

            <form
              className="space-y-5"
              onSubmit={handleLogin}
            >

              {/* EMAIL */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-[#2F2A25]"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorMessage("");
                    setSuccessMessage("");
                  }}
                  className="w-full rounded-xl border border-[#2F2A25]/12 bg-[#FCFBF8] px-4 py-3.5 text-[#2F2A25] outline-none transition placeholder:text-[#2F2A25]/30 hover:border-[#2F2A25]/20 focus:border-[#006B3F] focus:bg-white focus:ring-4 focus:ring-[#006B3F]/8"
                />

              </div>


              {/* PASSWORD */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="text-sm font-bold text-[#2F2A25]"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={() => navigate("/forgot-password")}
                    className="text-xs font-bold text-[#006B3F] transition hover:text-[#C65D3A] sm:text-sm"
                  >
                    Forgot password?
                  </button>

                </div>

                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrorMessage("");
                    setSuccessMessage("");
                  }}
                  className="w-full rounded-xl border border-[#2F2A25]/12 bg-[#FCFBF8] px-4 py-3.5 text-[#2F2A25] outline-none transition placeholder:text-[#2F2A25]/30 hover:border-[#2F2A25]/20 focus:border-[#006B3F] focus:bg-white focus:ring-4 focus:ring-[#006B3F]/8"
                />

              </div>


              {/* REMEMBER ME */}

              <label
                htmlFor="remember"
                className="flex cursor-pointer items-center gap-2.5"
              >

                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="h-4 w-4 rounded border-[#2F2A25]/20 accent-[#006B3F]"
                />

                <span className="text-sm text-[#2F2A25]/60">
                  Remember me
                </span>

              </label>


              {/* LOGIN BUTTON */}

              <button
                type="submit"
                disabled={isLoggingIn}
                className="group relative w-full overflow-hidden rounded-xl bg-[#006B3F] px-6 py-3.5 font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#005531] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >

                <span className="relative z-10">
                  {isLoggingIn ? "Logging In..." : "Log In"}
                </span>

              </button>

            </form>


            {/* ===================================================== */}
            {/* DIVIDER */}
            {/* ===================================================== */}

            <div className="my-8 flex items-center gap-4">

              <div className="h-px flex-1 bg-[#2F2A25]/10"></div>

              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#2F2A25]/35">
                New to FoodBridge?
              </span>

              <div className="h-px flex-1 bg-[#2F2A25]/10"></div>

            </div>


            {/* ===================================================== */}
            {/* SIGN UP */}
            {/* ===================================================== */}

            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="w-full rounded-xl border border-[#006B3F]/25 bg-[#006B3F]/5 px-6 py-3.5 font-bold text-[#006B3F] transition hover:border-[#006B3F] hover:bg-[#006B3F] hover:text-white"
            >
              Create an Account
            </button>


            {/* ===================================================== */}
            {/* FOOTER TEXT */}
            {/* ===================================================== */}

            <p className="mt-6 text-center text-xs leading-5 text-[#2F2A25]/40">
              By continuing, you agree to FoodBridge's terms and
              privacy policy.
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Login;