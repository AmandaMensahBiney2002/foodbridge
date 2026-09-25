import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [userType, setUserType] = useState("");
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

  // ============================================================
  // PASSWORD RULES
  // ============================================================

  const passwordRules = {
    length: password.length >= 8 && password.length <= 128,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*]/.test(password),
    noSpaces: !/\s/.test(password),
  };

  const passwordIsValid = Object.values(passwordRules).every(Boolean);

  const passwordsMatch =
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword;

  const handleSignUp = async (e) => {
    e.preventDefault();

    setErrorMessage("");

    // Password validation
    if (!passwordIsValid) {
      setErrorMessage(
        "Please make sure your password meets all the requirements."
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!userType) {
      setErrorMessage("Please select what describes you.");
      return;
    }

    if (!accountType) {
      setErrorMessage("Please select how you will use FoodBridge.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "https://foodbridge-backend-l3b3.onrender.com/api/auth/signup",
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
            user_type: userType,
            account_type: accountType,
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

  // ============================================================
  // PASSWORD REQUIREMENT ITEM
  // ============================================================

  const PasswordRequirement = ({ valid, children }) => (
    <div className="flex items-center gap-2">
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
          valid
            ? "bg-[#006B3F] text-white"
            : "border border-[#2F2A25]/20 text-transparent"
        }`}
      >
        ✓
      </span>

      <span
        className={`text-xs ${
          valid
            ? "text-[#006B3F]"
            : "text-[#2F2A25]/50"
        }`}
      >
        {children}
      </span>
    </div>
  );

  // ============================================================
  // EMAIL VERIFICATION SCREEN
  // ============================================================

  if (signupComplete) {
    return (
      <div className="min-h-screen bg-[#F8F6F1] text-[#2F2A25]">

        {/* GHANA ACCENT */}
        <div className="h-1.5 w-full bg-[linear-gradient(to_right,#CE1126_33.33%,#FCD116_33.33%,#FCD116_66.66%,#006B3F_66.66%)]"></div>

        <main className="relative flex min-h-[calc(100vh-6px)] items-center justify-center overflow-hidden px-5 py-12 sm:px-8">

          {/* Background decoration */}

          <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#006B3F]/5 blur-3xl"></div>

          <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#D9A441]/8 blur-3xl"></div>

          {/* SUCCESS CARD */}

          <div className="relative z-10 w-full max-w-xl rounded-[28px] border border-[#2F2A25]/8 bg-white p-7 text-center shadow-[0_25px_70px_rgba(47,42,37,0.12)] sm:p-10 lg:p-12">

            {/* LOGO */}

            <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#006B3F] shadow-md ring-4 ring-[#006B3F]/10">
              <img
                src="/images/logo.jpg"
                alt="FoodBridge logo"
                className="h-14 w-14 rounded-full object-cover"
              />
            </div>

            {/* SUCCESS ICON */}

            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#006B3F]/10 text-2xl font-bold text-[#006B3F]">
              ✓
            </div>

            {/* LABEL */}

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#006B3F]">
              Account created successfully
            </p>

            {/* HEADING */}

            <h1 className="text-3xl font-bold tracking-tight text-[#2F2A25] sm:text-4xl">
              Verify your email
            </h1>

            {/* MESSAGE */}

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#2F2A25]/60 sm:text-base">
              We've created your FoodBridge account. Before you
              continue, verify your email address using the link we
              sent you.
            </p>

            {/* EMAIL */}

            <div className="mt-6 rounded-2xl border border-[#006B3F]/15 bg-[#006B3F]/5 px-5 py-4">

              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#2F2A25]/45">
                Verification email sent to
              </p>

              <p className="break-all font-bold text-[#006B3F]">
                {createdEmail}
              </p>

            </div>

            {/* NEXT STEPS */}

            <div className="mt-7 rounded-2xl border border-[#2F2A25]/8 bg-[#FCFBF8] p-5 text-left">

              <p className="font-bold text-[#2F2A25]">
                What to do next
              </p>

              <ol className="mt-4 space-y-4">

                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#006B3F] text-xs font-bold text-white">
                    1
                  </span>

                  <span className="pt-1 text-sm leading-5 text-[#2F2A25]/65">
                    Open the verification email in your inbox.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#006B3F] text-xs font-bold text-white">
                    2
                  </span>

                  <span className="pt-1 text-sm leading-5 text-[#2F2A25]/65">
                    Click <strong>Verify My Email</strong>.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#006B3F] text-xs font-bold text-white">
                    3
                  </span>

                  <span className="pt-1 text-sm leading-5 text-[#2F2A25]/65">
                    Return to FoodBridge and log in.
                  </span>
                </li>

              </ol>

            </div>

            {/* EXPIRATION */}

            <div className="mt-5 rounded-xl bg-[#D9A441]/10 px-5 py-4 text-sm leading-6 text-[#2F2A25]/65">

              <strong className="text-[#2F2A25]">
                Your verification link expires in 10 minutes.
              </strong>

            </div>

            {/* SPAM NOTICE */}

            <div className="mt-4 text-left">

              <p className="text-sm font-bold text-[#2F2A25]">
                Didn't receive the email?
              </p>

              <p className="mt-1 text-xs leading-5 text-[#2F2A25]/50">
                Check your spam or junk folder and make sure you are
                checking the inbox for the email address shown above.
              </p>

            </div>

            {/* LOGIN BUTTON */}

            <Link
              to="/login"
              className="mt-7 block w-full rounded-xl bg-[#006B3F] px-6 py-3.5 font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#005531] hover:shadow-lg"
            >
              Go to Login
            </Link>

          </div>

        </main>

      </div>
    );
  }

  // ============================================================
  // SIGN UP FORM
  // ============================================================

  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#2F2A25]">

      {/* GHANA ACCENT */}

      <div className="h-1.5 w-full bg-[linear-gradient(to_right,#CE1126_33.33%,#FCD116_33.33%,#006B3F_66.66%)]"></div>

      {/* SIGN UP AREA */}

      <main className="relative flex items-center justify-center overflow-hidden px-5 py-10 sm:px-8 sm:py-14 lg:py-16">

        {/* Background decoration */}

        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#006B3F]/5 blur-3xl"></div>

        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#D9A441]/8 blur-3xl"></div>

        {/* SIGN UP CARD */}

        <div className="relative z-10 grid w-full max-w-6xl overflow-hidden rounded-[28px] border border-[#2F2A25]/8 bg-white shadow-[0_25px_70px_rgba(47,42,37,0.12)] md:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT BRAND PANEL */}

          <div className="relative hidden overflow-hidden bg-[#006B3F] p-10 text-white md:flex md:flex-col md:justify-between lg:p-12">

            {/* Decorative shapes */}

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[45px] border-[#FCD116]/10"></div>

            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border-[50px] border-white/5"></div>

            <div className="relative">

              {/* LOGO */}

              <div className="mb-10 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg ring-4 ring-white/10">
                <img
                  src="/images/logo.jpg"
                  alt="FoodBridge logo"
                  className="h-14 w-14 rounded-full object-cover"
                />
              </div>

              {/* LABEL */}

              <div className="mb-4 flex items-center gap-3">

                <span className="h-px w-8 bg-[#FCD116]"></span>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FCD116]">
                  Join FoodBridge
                </p>

              </div>

              {/* MAIN MESSAGE */}

              <h2 className="max-w-md text-4xl font-bold leading-[1.08] lg:text-5xl">
                Give surplus food
                <span className="block text-[#FCD116]">
                  a purpose.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-white/75">
                Become part of a community working to connect surplus
                food with people and organizations that need it.
              </p>

            </div>

            {/* WHO CAN JOIN */}

            <div className="relative mt-12">

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/50">
                Who can join?
              </p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">

                <div className="border-l-2 border-[#FCD116] pl-3">
                  Food Businesses
                </div>

                <div className="border-l-2 border-[#CE1126] pl-3">
                  Organizations
                </div>

                <div className="border-l-2 border-white/40 pl-3">
                  Individuals
                </div>

                <div className="border-l-2 border-[#FCD116] pl-3">
                  Volunteers
                </div>

              </div>

            </div>

          </div>

          {/* FORM AREA */}

          <div className="p-7 sm:p-10 lg:p-12">

            {/* MOBILE BRAND */}

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

            {/* HEADING */}

            <div className="mb-8">

              <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-[#006B3F]">
                Create your account
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-[#2F2A25] sm:text-4xl">
                Join FoodBridge
              </h1>

              <p className="mt-3 max-w-lg text-sm leading-6 text-[#2F2A25]/55 sm:text-base">
                Create your account and become part of the food-sharing
                community.
              </p>

            </div>

            {/* ERROR */}

            {errorMessage && (
              <div className="mb-6 rounded-2xl border border-[#C65D3A]/20 bg-[#C65D3A]/8 p-4">

                <div className="flex gap-3">

                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C65D3A]/15 text-xs font-bold text-[#C65D3A]">
                    !
                  </div>

                  <p className="text-sm leading-6 text-[#C65D3A]">
                    {errorMessage}
                  </p>

                </div>

              </div>
            )}

            {/* FORM */}

            <form
              className="space-y-5"
              onSubmit={handleSignUp}
            >

              {/* USER TYPE + ACCOUNT TYPE */}

              <div className="grid gap-5 sm:grid-cols-2">

                {/* USER TYPE */}

                <div>

                  <label
                    htmlFor="userType"
                    className="mb-2 block text-sm font-bold text-[#2F2A25]"
                  >
                    What describes you?
                  </label>

                  <select
                    id="userType"
                    name="userType"
                    required
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    className="w-full rounded-xl border border-[#2F2A25]/12 bg-[#FCFBF8] px-4 py-3.5 text-[#2F2A25] outline-none transition hover:border-[#2F2A25]/20 focus:border-[#006B3F] focus:bg-white focus:ring-4 focus:ring-[#006B3F]/8"
                  >

                    <option value="" disabled>
                      Select an option
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

                {/* ACCOUNT TYPE */}

                <div>

                  <label
                    htmlFor="accountType"
                    className="mb-2 block text-sm font-bold text-[#2F2A25]"
                  >
                    How will you use FoodBridge?
                  </label>

                  <select
                    id="accountType"
                    name="accountType"
                    required
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="w-full rounded-xl border border-[#2F2A25]/12 bg-[#FCFBF8] px-4 py-3.5 text-[#2F2A25] outline-none transition hover:border-[#2F2A25]/20 focus:border-[#006B3F] focus:bg-white focus:ring-4 focus:ring-[#006B3F]/8"
                  >

                    <option value="" disabled>
                      Select how you will use FoodBridge
                    </option>

                    <option value="donor">
                      Donate surplus food
                    </option>

                    <option value="recipient">
                      Receive or request food
                    </option>

                  </select>

                </div>

              </div>

              {/* NAME */}

              <div className="grid gap-5 sm:grid-cols-2">

                {/* FIRST NAME */}

                <div>

                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-bold text-[#2F2A25]"
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
                    className="w-full rounded-xl border border-[#2F2A25]/12 bg-[#FCFBF8] px-4 py-3.5 text-[#2F2A25] outline-none transition placeholder:text-[#2F2A25]/30 hover:border-[#2F2A25]/20 focus:border-[#006B3F] focus:bg-white focus:ring-4 focus:ring-[#006B3F]/8"
                  />

                </div>

                {/* LAST NAME */}

                <div>

                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-bold text-[#2F2A25]"
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
                    className="w-full rounded-xl border border-[#2F2A25]/12 bg-[#FCFBF8] px-4 py-3.5 text-[#2F2A25] outline-none transition placeholder:text-[#2F2A25]/30 hover:border-[#2F2A25]/20 focus:border-[#006B3F] focus:bg-white focus:ring-4 focus:ring-[#006B3F]/8"
                  />

                </div>

              </div>

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
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[#2F2A25]/12 bg-[#FCFBF8] px-4 py-3.5 text-[#2F2A25] outline-none transition placeholder:text-[#2F2A25]/30 hover:border-[#2F2A25]/20 focus:border-[#006B3F] focus:bg-white focus:ring-4 focus:ring-[#006B3F]/8"
                />

              </div>

              {/* PHONE */}

              <div>

                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold text-[#2F2A25]"
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
                  className="w-full rounded-xl border border-[#2F2A25]/12 bg-[#FCFBF8] px-4 py-3.5 text-[#2F2A25] outline-none transition placeholder:text-[#2F2A25]/30 hover:border-[#2F2A25]/20 focus:border-[#006B3F] focus:bg-white focus:ring-4 focus:ring-[#006B3F]/8"
                />

              </div>

              {/* PASSWORD */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-bold text-[#2F2A25]"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Create password"
                    required
                    minLength={8}
                    maxLength={128}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full rounded-xl border bg-[#FCFBF8] px-4 py-3.5 text-[#2F2A25] outline-none transition placeholder:text-[#2F2A25]/30 hover:border-[#2F2A25]/20 focus:bg-white focus:ring-4 ${
                      password.length === 0
                        ? "border-[#2F2A25]/12 focus:border-[#006B3F] focus:ring-[#006B3F]/8"
                        : passwordIsValid
                        ? "border-[#006B3F]/40 focus:border-[#006B3F] focus:ring-[#006B3F]/8"
                        : "border-[#C65D3A]/40 focus:border-[#C65D3A] focus:ring-[#C65D3A]/8"
                    }`}
                  />

                  {/* PASSWORD REQUIREMENTS */}

                  <div className="mt-3 rounded-xl border border-[#2F2A25]/8 bg-[#FCFBF8] p-3.5">

                    <p className="mb-3 text-xs font-bold text-[#2F2A25]/65">
                      Password must contain:
                    </p>

                    <div className="grid grid-cols-1 gap-2">

                      <PasswordRequirement valid={passwordRules.length}>
                        8–128 characters
                      </PasswordRequirement>

                      <PasswordRequirement valid={passwordRules.uppercase}>
                        At least one uppercase letter
                      </PasswordRequirement>

                      <PasswordRequirement valid={passwordRules.lowercase}>
                        At least one lowercase letter
                      </PasswordRequirement>

                      <PasswordRequirement valid={passwordRules.number}>
                        At least one number
                      </PasswordRequirement>

                      <PasswordRequirement valid={passwordRules.special}>
                        At least one special character
                      </PasswordRequirement>

                      <PasswordRequirement valid={passwordRules.noSpaces}>
                        No spaces
                      </PasswordRequirement>

                    </div>

                  </div>

                </div>

                {/* CONFIRM PASSWORD */}

                <div>

                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-bold text-[#2F2A25]"
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
                    className={`w-full rounded-xl border bg-[#FCFBF8] px-4 py-3.5 text-[#2F2A25] outline-none transition placeholder:text-[#2F2A25]/30 hover:border-[#2F2A25]/20 focus:bg-white focus:ring-4 ${
                      confirmPassword.length === 0
                        ? "border-[#2F2A25]/12 focus:border-[#006B3F] focus:ring-[#006B3F]/8"
                        : passwordsMatch
                        ? "border-[#006B3F]/40 focus:border-[#006B3F] focus:ring-[#006B3F]/8"
                        : "border-[#C65D3A]/40 focus:border-[#C65D3A] focus:ring-[#C65D3A]/8"
                    }`}
                  />

                  {/* MATCH MESSAGE */}

                  {confirmPassword.length > 0 && (
                    <div className="mt-3 flex items-center gap-2">

                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                          passwordsMatch
                            ? "bg-[#006B3F] text-white"
                            : "border border-[#C65D3A] text-[#C65D3A]"
                        }`}
                      >
                        {passwordsMatch ? "✓" : "!"}
                      </span>

                      <span
                        className={`text-xs ${
                          passwordsMatch
                            ? "text-[#006B3F]"
                            : "text-[#C65D3A]"
                        }`}
                      >
                        {passwordsMatch
                          ? "Passwords match"
                          : "Passwords do not match"}
                      </span>

                    </div>
                  )}

                </div>

              </div>

              {/* TERMS */}

              <div className="flex items-start gap-3 pt-1">

                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded border-[#2F2A25]/20 accent-[#006B3F]"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-5 text-[#2F2A25]/55 sm:text-sm"
                >
                  I agree to FoodBridge's{" "}
                  <a
                    href="#"
                    className="font-bold text-[#006B3F] transition hover:text-[#C65D3A]"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-bold text-[#006B3F] transition hover:text-[#C65D3A]"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>

              </div>

              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-xl bg-[#006B3F] px-6 py-3.5 font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#005531] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="relative z-10">
                  {isSubmitting
                    ? "Creating Account..."
                    : "Create Account"}
                </span>
              </button>

            </form>

            {/* LOGIN LINK */}

            <div className="mt-8 border-t border-[#2F2A25]/10 pt-6 text-center">

              <p className="text-sm text-[#2F2A25]/55">
                Already have a FoodBridge account?
              </p>

              <Link
                to="/login"
                className="mt-2 inline-block font-bold text-[#006B3F] transition hover:text-[#C65D3A]"
              >
                Log in
              </Link>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default SignUp;