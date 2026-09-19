import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [accountType, setAccountType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [signupComplete, setSignupComplete] = useState(false);
  const [createdEmail, setCreatedEmail] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    let backendAccountType;

    if (
      accountType === "food-business" ||
      accountType === "organization"
    ) {
      backendAccountType = "donor";
    } else if (
      accountType === "individual" ||
      accountType === "volunteer"
    ) {
      backendAccountType = "recipient";
    }

    if (!backendAccountType) {
      setErrorMessage("Please select an account type.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            phone,
            account_type: backendAccountType,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(
          data.error || "Unable to create your account."
        );
        return;
      }

      console.log("Account created successfully");
      console.log(data);

      setCreatedEmail(email.trim().toLowerCase());
      setSignupComplete(true);

    } catch (error) {
      console.error("Signup error:", error);

      setErrorMessage(
        "Something went wrong while creating your account. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };


  // EMAIL VERIFICATION MESSAGE
  if (signupComplete) {
    return (
      <div className="min-h-screen bg-[#FFFDF5] text-[#3F352C]">

        <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-6 py-16">

          {/* Green Background */}
          <div className="absolute inset-0 bg-[#006B3F]"></div>

          {/* Background shapes */}
          <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#FCD116]/10 blur-3xl"></div>

          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#CE1126]/10 blur-3xl"></div>

          {/* Ghana Colour Stripe */}
          <div className="absolute left-0 top-0 flex h-1 w-full">
            <div className="w-1/3 bg-[#CE1126]"></div>
            <div className="w-1/3 bg-[#FCD116]"></div>
            <div className="w-1/3 bg-[#006B3F]"></div>
          </div>

          {/* CARD */}
          <div className="relative z-10 w-full max-w-lg rounded-3xl bg-[#FFFDF5] p-8 text-center shadow-2xl sm:p-12">

            {/* LOGO */}
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#006B3F] shadow-md">
              <img
                src="/images/logo.png"
                alt="FoodBridge logo"
                className="h-12 w-12 object-contain"
              />
            </div>

            {/* SUCCESS ICON */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#006B3F] text-3xl text-white">
              ✓
            </div>

            {/* SUCCESS LABEL */}
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#006B3F]">
              Account created successfully
            </p>

            {/* HEADING */}
            <h1 className="text-3xl font-bold md:text-4xl">
              Verify your email
            </h1>

            {/* MAIN MESSAGE */}
            <p className="mt-5 leading-relaxed text-[#3F352C]/70">
              We've created your FoodBridge account and sent a
              verification email to:
            </p>

            {/* EMAIL ADDRESS */}
            <div className="mt-4 rounded-xl border-2 border-[#006B3F]/20 bg-[#006B3F]/5 px-4 py-4">
              <p className="break-all font-bold text-[#006B3F]">
                {createdEmail}
              </p>
            </div>

            {/* INSTRUCTIONS */}
            <div className="mt-6 text-left">

              <p className="font-semibold text-[#3F352C]">
                What to do next:
              </p>

              <ol className="mt-3 space-y-3 text-sm leading-relaxed text-[#3F352C]/70">

                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#006B3F] text-xs font-bold text-white">
                    1
                  </span>

                  <span>
                    Open the verification email in your inbox.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#006B3F] text-xs font-bold text-white">
                    2
                  </span>

                  <span>
                    Click <strong>Verify My Email</strong>.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#006B3F] text-xs font-bold text-white">
                    3
                  </span>

                  <span>
                    Return to FoodBridge and log in.
                  </span>
                </li>

              </ol>

            </div>

            {/* EXPIRATION NOTICE */}
            <div className="mt-6 rounded-xl bg-[#D9A441]/10 px-5 py-4 text-sm leading-relaxed text-[#3F352C]/75">
              <strong className="text-[#3F352C]">
                Your verification link expires in 1 hour.
              </strong>
            </div>

            {/* SPAM NOTICE */}
            <div className="mt-5 rounded-xl border border-[#3F352C]/10 bg-white px-5 py-4 text-left text-sm leading-relaxed text-[#3F352C]/65">
              <p className="font-semibold text-[#3F352C]">
                Didn't receive the email?
              </p>

              <p className="mt-1">
                Check your <strong>spam</strong> or{" "}
                <strong>junk</strong> folder. Make sure you are
                checking the inbox for the email address shown above.
              </p>
            </div>

            {/* LOGIN BUTTON */}
            <Link
              to="/login"
              className="mt-8 inline-block w-full rounded-xl bg-[#006B3F] px-6 py-3.5 font-bold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-[#005531] hover:shadow-lg"
            >
              Go to Login
            </Link>

          </div>

        </section>

      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3F352C]">

      {/* SIGN UP AREA */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-6 py-16">

        {/* Green Background */}
        <div className="absolute inset-0 bg-[#006B3F]"></div>

        {/* Subtle background shapes */}
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#FCD116]/10 blur-3xl"></div>

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#CE1126]/10 blur-3xl"></div>

        {/* Ghana Colour Stripe */}
        <div className="absolute left-0 top-0 flex h-1 w-full">
          <div className="w-1/3 bg-[#CE1126]"></div>
          <div className="w-1/3 bg-[#FCD116]"></div>
          <div className="w-1/3 bg-[#006B3F]"></div>
        </div>

        {/* SIGN UP CARD */}
        <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl bg-[#FFFDF5] shadow-2xl">

          <div className="grid md:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="hidden flex-col justify-between bg-[#006B3F] p-10 text-white md:flex lg:p-12">

              <div>

                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
                  <img
                    src="/images/logo.png"
                    className="h-11 w-11 object-contain"
                    alt="FoodBridge logo"
                  />
                </div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#FCD116]">
                  Join FoodBridge
                </p>

                <h2 className="max-w-sm text-4xl font-bold leading-tight lg:text-5xl">
                  Give surplus food a purpose.
                </h2>

                <p className="mt-6 max-w-md text-base leading-relaxed text-white/85">
                  Join a growing community connecting surplus food with
                  people and organizations that need it.
                </p>

              </div>

              {/* ACCOUNT TYPES */}
              <div className="space-y-4">

                <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
                  Who can join?
                </p>

                <div className="grid grid-cols-2 gap-3 text-sm">

                  <div className="border-l-2 border-[#FCD116] pl-3">
                    Food Businesses
                  </div>

                  <div className="border-l-2 border-[#CE1126] pl-3">
                    Organizations
                  </div>

                  <div className="border-l-2 border-white/50 pl-3">
                    Individuals
                  </div>

                  <div className="border-l-2 border-[#FCD116] pl-3">
                    Volunteers
                  </div>

                </div>

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
                  Create your account
                </p>

                <h1 className="text-3xl font-bold md:text-4xl">
                  Join FoodBridge
                </h1>

                <p className="mt-3 leading-relaxed text-[#3F352C]/65">
                  Create an account and become part of the food-sharing
                  community.
                </p>

              </div>

              {/* ERROR MESSAGE */}
              {errorMessage && (
                <div className="mb-6 rounded-xl border border-[#C65D3A]/30 bg-[#C65D3A]/10 px-4 py-3 text-sm leading-relaxed text-[#C65D3A]">
                  {errorMessage}
                </div>
              )}

              {/* FORM */}
              <form
                className="space-y-5"
                onSubmit={handleSignUp}
              >

                {/* ACCOUNT TYPE */}
                <div>
                  <label
                    htmlFor="accountType"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Account Type
                  </label>

                  <select
                    id="accountType"
                    name="accountType"
                    required
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="w-full rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3.5 text-[#3F352C] outline-none transition focus:border-[#006B3F] focus:ring-4 focus:ring-[#006B3F]/10"
                  >
                    <option value="" disabled>
                      Select your account type
                    </option>

                    <option value="food-business">
                      Food Business
                    </option>

                    <option value="organization">
                      Organization
                    </option>

                    <option value="individual">
                      Individual
                    </option>

                    <option value="volunteer">
                      Volunteer
                    </option>
                  </select>
                </div>

                {/* NAME */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-semibold"
                    >
                      First Name
                    </label>

                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3.5 outline-none transition placeholder:text-[#3F352C]/35 focus:border-[#006B3F] focus:ring-4 focus:ring-[#006B3F]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Last Name
                    </label>

                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3.5 outline-none transition placeholder:text-[#3F352C]/35 focus:border-[#006B3F] focus:ring-4 focus:ring-[#006B3F]/10"
                    />
                  </div>

                </div>

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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3.5 outline-none transition placeholder:text-[#3F352C]/35 focus:border-[#006B3F] focus:ring-4 focus:ring-[#006B3F]/10"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+233 XX XXX XXXX"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3.5 outline-none transition placeholder:text-[#3F352C]/35 focus:border-[#006B3F] focus:ring-4 focus:ring-[#006B3F]/10"
                  />
                </div>

                {/* PASSWORDS */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Password
                    </label>

                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Create password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3.5 outline-none transition placeholder:text-[#3F352C]/35 focus:border-[#006B3F] focus:ring-4 focus:ring-[#006B3F]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Confirm Password
                    </label>

                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Repeat password"
                      required
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(e.target.value)
                      }
                      className="w-full rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3.5 outline-none transition placeholder:text-[#3F352C]/35 focus:border-[#006B3F] focus:ring-4 focus:ring-[#006B3F]/10"
                    />
                  </div>

                </div>

                {/* TERMS */}
                <div className="flex items-start gap-3">

                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                    className="mt-1 h-4 w-4 accent-[#006B3F]"
                  />

                  <label
                    htmlFor="terms"
                    className="text-sm leading-relaxed text-[#3F352C]/70"
                  >
                    I agree to FoodBridge's{" "}
                    <a
                      href="#"
                      className="font-semibold text-[#006B3F] hover:text-[#CE1126]"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="font-semibold text-[#006B3F] hover:text-[#CE1126]"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>

                </div>

                {/* SIGN UP BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-[#006B3F] px-6 py-3.5 font-bold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-[#005531] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? "Creating Account..."
                    : "Create Account"}
                </button>

              </form>

              {/* LOGIN LINK */}
              <div className="mt-8 border-t border-[#3F352C]/10 pt-6 text-center">

                <p className="text-sm text-[#3F352C]/65">
                  Already have a FoodBridge account?
                </p>

                <Link
                  to="/login"
                  className="mt-2 inline-block font-bold text-[#006B3F] transition hover:text-[#CE1126]"
                >
                  Log in
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default SignUp;