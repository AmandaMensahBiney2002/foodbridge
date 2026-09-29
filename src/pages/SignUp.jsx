
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  // =========================================================
  // FORM DATA
  // =========================================================

  const [step, setStep] = useState(1);

  const [userType, setUserType] = useState("");
  const [accountType, setAccountType] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  // =========================================================
  // PASSWORD VISIBILITY
  // =========================================================

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // =========================================================
  // SIGNUP / VERIFICATION STATE
  // =========================================================

  const [signupComplete, setSignupComplete] = useState(false);
  const [createdEmail, setCreatedEmail] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // =========================================================
  // PASSWORD VALIDATION
  // =========================================================

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

  // =========================================================
  // PASSWORD REQUIREMENT COMPONENT
  // =========================================================

  const PasswordRequirement = ({ valid, children }) => (
    <div
      className={`flex items-center gap-2 text-xs ${
        valid ? "text-[#006B3F]" : "text-[#77716B]"
      }`}
    >
      <span
        className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold ${
          valid
            ? "bg-[#006B3F] text-white"
            : "border border-[#CFC8BE] text-transparent"
        }`}
      >
        ✓
      </span>
      {children}
    </div>
  );

  // =========================================================
  // EYE ICONS
  // =========================================================

  const EyeIcon = ({ visible }) => {
    if (visible) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c1.635 0 3.18-.374 4.554-1.04M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.774 3.162 10.066 7.5a10.523 10.523 0 01-4.132 5.411M6.228 6.228L3 3m3.228 3.228l3.75 3.75m7.794 7.794L21 21m-3.228-3.228l-3.75-3.75m0 0a3 3 0 10-4.243-4.243m4.243 4.243L9.78 9.78"
          />
        </svg>
      );
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.062 12.348a1.978 1.978 0 010-.696C3.356 7.4 7.273 4.5 12 4.5s8.644 2.9 9.938 7.152c.04.13.04.268 0 .396C20.644 16.3 16.727 19.5 12 19.5s-8.644-3.2-9.938-7.152z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    );
  };

  // =========================================================
  // STEP 1
  // =========================================================

  const handleStepOne = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!firstName.trim() || !lastName.trim()) {
      const message = "Please enter your first and last name.";
      setErrorMessage(message);
      return;
    }

    if (!email.trim()) {
      const message = "Please enter your email address.";
      setErrorMessage(message);
      return;
    }

    if (!passwordIsValid) {
      const message =
        "Please make sure your password meets all the requirements.";

      setErrorMessage(message);
      return;
    }

    if (!passwordsMatch) {
      const message = "Passwords do not match.";
      setErrorMessage(message);
      return;
    }

    setStep(2);
  };

  // =========================================================
  // STEP 2
  // =========================================================

  const handleStepTwo = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!userType) {
      const message = "Please select what describes you.";
      setErrorMessage(message);
      return;
    }

    if (!accountType) {
      const message = "Please select how you will use FoodBridge.";
      setErrorMessage(message);
      return;
    }

    setStep(3);
  };

  // =========================================================
  // STEP 3 / CREATE ACCOUNT
  // =========================================================

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!phone.trim()) {
      const message = "Please enter your phone number.";
      setErrorMessage(message);
      return;
    }

    if (!termsAccepted) {
      const message =
        "Please agree to the Terms of Service and Privacy Policy.";

      setErrorMessage(message);
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "https://foodbridge-backend-l3b0.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            email: email.trim().toLowerCase(),
            password,
            phone: phone.trim(),
            user_type: userType,
            account_type: accountType,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const message =
          data.error || "Unable to create your account.";

        setErrorMessage(message);
        return;
      }

      console.log("Account created successfully");
      console.log(data);

      setCreatedEmail(email.trim().toLowerCase());
      setSignupComplete(true);
    } catch (error) {
      console.error("Signup error:", error);

      const message =
        "Something went wrong while creating your account. Please try again.";

      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // =========================================================
  // EMAIL VERIFICATION SCREEN
  // =========================================================

  if (signupComplete) {
    return (
      <main className="min-h-screen bg-[#FCFBF7] px-4 py-10 text-[#2F2A25]">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="h-2 bg-[#D9A441]" />

          <div className="px-6 py-12 text-center sm:px-12">
            <div className="mb-8 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#006B3F] text-2xl font-bold text-white">
                F
              </div>
            </div>

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#E4F2EA]">
              <span className="text-4xl text-[#006B3F]">✓</span>
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A441]">
              Welcome to FoodBridge
            </p>

            <h1 className="mb-4 text-3xl font-bold text-[#17241E] sm:text-4xl">
              Account created successfully
            </h1>

            <p className="mx-auto mb-8 max-w-lg leading-7 text-[#6F6963]">
              We've created your FoodBridge account. One last step: verify
              your email address before you can log in.
            </p>

            <div className="mb-8 rounded-2xl bg-[#F8F1E5] px-5 py-5">
              <p className="mb-1 text-sm text-[#77716B]">
                Verification email sent to
              </p>

              <p className="break-all font-semibold text-[#17241E]">
                {createdEmail}
              </p>
            </div>

            <div className="mb-8 rounded-2xl border border-[#E8E0D5] bg-white p-6 text-left">
              <h2 className="mb-4 font-bold text-[#17241E]">
                What happens next?
              </h2>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#006B3F] text-sm font-bold text-white">
                    1
                  </div>

                  <p className="text-sm leading-6 text-[#6F6963]">
                    Open the verification email we sent you.
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#006B3F] text-sm font-bold text-white">
                    2
                  </div>

                  <p className="text-sm leading-6 text-[#6F6963]">
                    Click the verification link in the email.
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#006B3F] text-sm font-bold text-white">
                    3
                  </div>

                  <p className="text-sm leading-6 text-[#6F6963]">
                    Return to FoodBridge and log in.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 text-xs leading-5 text-[#77716B]">
              The verification link expires in 10 minutes. If you don't see
              the email, please check your spam or junk folder.
            </p>

            <Link
              to="/login"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#006B3F] px-6 py-3.5 font-semibold text-white transition hover:bg-[#005631] sm:w-auto"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // =========================================================
  // MAIN SIGNUP PAGE
  // =========================================================

  return (
    <main className="min-h-screen bg-[#FCFBF7] px-4 py-8 text-[#2F2A25] sm:py-12">
      <div className="mx-auto max-w-5xl">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <Link to="/" className="mb-5 inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#006B3F] font-bold text-white">
              F
            </div>

            <span className="text-xl font-bold text-[#17241E]">
              FoodBridge
            </span>
          </Link>

          <h1 className="mb-2 text-3xl font-bold text-[#17241E] sm:text-4xl">
            Join FoodBridge
          </h1>

          <p className="text-[#77716B]">Born in Ghana. Built for Africa.</p>
        </div>

        {/* PROGRESS */}
        <div className="mx-auto mb-8 max-w-2xl">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((number) => (
              <div key={number} className="flex flex-1 items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                      step >= number
                        ? "bg-[#006B3F] text-white"
                        : "border border-[#D8D0C5] bg-white text-[#9B948C]"
                    }`}
                  >
                    {number}
                  </div>

                  <span
                    className={`mt-2 hidden text-xs font-medium sm:block ${
                      step >= number
                        ? "text-[#006B3F]"
                        : "text-[#9B948C]"
                    }`}
                  >
                    {number === 1
                      ? "Account"
                      : number === 2
                      ? "About You"
                      : "Finish"}
                  </span>
                </div>

                {number !== 3 && (
                  <div
                    className={`mx-2 h-[2px] flex-1 ${
                      step > number
                        ? "bg-[#006B3F]"
                        : "bg-[#E1DAD0]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CARD */}
        <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="h-2 bg-[#006B3F]" />

          <div className="p-6 sm:p-10">
            {/* =====================================================
                STEP 1
            ===================================================== */}

            {step === 1 && (
              <form onSubmit={handleStepOne}>
                <div className="mb-8">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#D9A441]">
                    Step 1 of 3
                  </p>

                  <h2 className="mb-2 text-2xl font-bold text-[#17241E]">
                    Create your account
                  </h2>

                  <p className="text-sm leading-6 text-[#77716B]">
                    Start with the basics. You can tell us more about
                    yourself in the next step.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* First name */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      First name
                    </label>

                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Amanda"
                      className="w-full rounded-xl border border-[#D8D0C5] bg-[#FCFBF7] px-4 py-3 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/10"
                    />
                  </div>

                  {/* Last name */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Last name
                    </label>

                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Mensah-Biney"
                      className="w-full rounded-xl border border-[#D8D0C5] bg-[#FCFBF7] px-4 py-3 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/10"
                    />
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold">
                      Email address
                    </label>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#D8D0C5] bg-[#FCFBF7] px-4 py-3 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/10"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Password
                    </label>

                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                        className="w-full rounded-xl border border-[#D8D0C5] bg-[#FCFBF7] px-4 py-3 pr-12 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/10"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#77716B] transition hover:text-[#006B3F]"
                      >
                        <EyeIcon visible={showPassword} />
                      </button>
                    </div>
                  </div>

                  {/* Confirm password */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Confirm password
                    </label>

                    <div className="relative">
                      <input
                        type={
                          showConfirmPassword ? "text" : "password"
                        }
                        value={confirmPassword}
                        onChange={(e) =>
                          setConfirmPassword(e.target.value)
                        }
                        placeholder="Repeat your password"
                        className="w-full rounded-xl border border-[#D8D0C5] bg-[#FCFBF7] px-4 py-3 pr-12 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/10"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        aria-label={
                          showConfirmPassword
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#77716B] transition hover:text-[#006B3F]"
                      >
                        <EyeIcon visible={showConfirmPassword} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Password rules */}
                {password.length > 0 && (
                  <div className="mt-5 rounded-2xl bg-[#F8F1E5] p-4">
                    <p className="mb-3 text-sm font-semibold">
                      Password requirements
                    </p>

                    <div className="grid gap-2 sm:grid-cols-2">
                      <PasswordRequirement valid={passwordRules.length}>
                        8–128 characters
                      </PasswordRequirement>

                      <PasswordRequirement
                        valid={passwordRules.uppercase}
                      >
                        One uppercase letter
                      </PasswordRequirement>

                      <PasswordRequirement
                        valid={passwordRules.lowercase}
                      >
                        One lowercase letter
                      </PasswordRequirement>

                      <PasswordRequirement valid={passwordRules.number}>
                        One number
                      </PasswordRequirement>

                      <PasswordRequirement valid={passwordRules.special}>
                        One special character
                      </PasswordRequirement>

                      <PasswordRequirement
                        valid={passwordRules.noSpaces}
                      >
                        No spaces
                      </PasswordRequirement>
                    </div>
                  </div>
                )}

                {errorMessage && (
                  <div className="mt-5 rounded-xl bg-[#FDECEA] px-4 py-3 text-sm text-[#A33A2B]">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="mt-7 w-full rounded-xl bg-[#006B3F] px-6 py-3.5 font-semibold text-white transition hover:bg-[#005631]"
                >
                  Continue
                </button>

                <p className="mt-6 text-center text-sm text-[#77716B]">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-[#006B3F] hover:underline"
                  >
                    Log in
                  </Link>
                </p>
              </form>
            )}

            {/* =====================================================
                STEP 2
            ===================================================== */}

            {step === 2 && (
              <form onSubmit={handleStepTwo}>
                <div className="mb-8">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#D9A441]">
                    Step 2 of 3
                  </p>

                  <h2 className="mb-2 text-2xl font-bold text-[#17241E]">
                    Tell us about yourself
                  </h2>

                  <p className="text-sm leading-6 text-[#77716B]">
                    This helps us create the right FoodBridge experience
                    for you.
                  </p>
                </div>

                {/* User type */}
                <div className="mb-8">
                  <label className="mb-3 block text-sm font-semibold">
                    What describes you?
                  </label>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      [
                        "individual",
                        "Individual",
                        "Joining to help or receive support",
                      ],
                      [
                        "food-business",
                        "Food Business",
                        "Restaurant, caterer, shop or food business",
                      ],
                      [
                        "organization",
                        "Organization",
                        "NGO, charity, school or community group",
                      ],
                      [
                        "volunteer",
                        "Volunteer",
                        "I want to support FoodBridge activities",
                      ],
                    ].map(([value, title, description]) => (
                      <button
                        type="button"
                        key={value}
                        onClick={() => setUserType(value)}
                        className={`rounded-2xl border p-4 text-left transition ${
                          userType === value
                            ? "border-[#006B3F] bg-[#EAF5EF] ring-2 ring-[#006B3F]/10"
                            : "border-[#DDD5CA] bg-white hover:border-[#006B3F]"
                        }`}
                      >
                        <p className="mb-1 font-semibold text-[#17241E]">
                          {title}
                        </p>

                        <p className="text-xs leading-5 text-[#77716B]">
                          {description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Account type */}
                <div>
                  <label className="mb-3 block text-sm font-semibold">
                    How will you use FoodBridge?
                  </label>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setAccountType("donor")}
                      className={`rounded-2xl border p-5 text-left transition ${
                        accountType === "donor"
                          ? "border-[#006B3F] bg-[#EAF5EF] ring-2 ring-[#006B3F]/10"
                          : "border-[#DDD5CA] hover:border-[#006B3F]"
                      }`}
                    >
                      <p className="mb-1 font-semibold text-[#17241E]">
                        Donate surplus food
                      </p>

                      <p className="text-xs leading-5 text-[#77716B]">
                        Share safe surplus food with people and
                        organizations that need it.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAccountType("recipient")}
                      className={`rounded-2xl border p-5 text-left transition ${
                        accountType === "recipient"
                          ? "border-[#006B3F] bg-[#EAF5EF] ring-2 ring-[#006B3F]/10"
                          : "border-[#DDD5CA] hover:border-[#006B3F]"
                      }`}
                    >
                      <p className="mb-1 font-semibold text-[#17241E]">
                        Receive food
                      </p>

                      <p className="text-xs leading-5 text-[#77716B]">
                        Find and request available surplus food.
                      </p>
                    </button>
                  </div>
                </div>

                {errorMessage && (
                  <div className="mt-5 rounded-xl bg-[#FDECEA] px-4 py-3 text-sm text-[#A33A2B]">
                    {errorMessage}
                  </div>
                )}

                <div className="mt-7 flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setErrorMessage("");
                      setStep(1);
                    }}
                    className="w-1/3 rounded-xl border border-[#D8D0C5] px-4 py-3.5 font-semibold text-[#2F2A25] transition hover:bg-[#F8F1E5]"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="w-2/3 rounded-xl bg-[#006B3F] px-6 py-3.5 font-semibold text-white transition hover:bg-[#005631]"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}

            {/* =====================================================
                STEP 3
            ===================================================== */}

            {step === 3 && (
              <form onSubmit={handleSignUp}>
                <div className="mb-8">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#D9A441]">
                    Step 3 of 3
                  </p>

                  <h2 className="mb-2 text-2xl font-bold text-[#17241E]">
                    Almost there
                  </h2>

                  <p className="text-sm leading-6 text-[#77716B]">
                    Add your phone number and agree to our terms to
                    complete your FoodBridge account.
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Phone number
                  </label>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="024 123 4567"
                    className="w-full rounded-xl border border-[#D8D0C5] bg-[#FCFBF7] px-4 py-3 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/10"
                  />

                  <p className="mt-2 text-xs text-[#77716B]">
                    We'll use this to support your FoodBridge account.
                  </p>
                </div>

                {/* Summary */}
                <div className="mt-7 rounded-2xl bg-[#F8F1E5] p-5">
                  <p className="mb-3 text-sm font-semibold">
                    Your account
                  </p>

                  <div className="space-y-2 text-sm text-[#6F6963]">
                    <p>
                      <span className="font-medium text-[#2F2A25]">
                        Name:
                      </span>{" "}
                      {firstName} {lastName}
                    </p>

                    <p>
                      <span className="font-medium text-[#2F2A25]">
                        Email:
                      </span>{" "}
                      {email}
                    </p>

                    <p>
                      <span className="font-medium text-[#2F2A25]">
                        Account:
                      </span>{" "}
                      {accountType === "donor"
                        ? "Food Donor"
                        : "Food Recipient"}
                    </p>
                  </div>
                </div>

                {/* Terms */}
                <label className="mt-6 flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) =>
                      setTermsAccepted(e.target.checked)
                    }
                    className="mt-1 h-4 w-4 accent-[#006B3F]"
                  />

                  <span className="text-sm leading-6 text-[#6F6963]">
                    I agree to FoodBridge's{" "}
                    <span className="font-semibold text-[#006B3F]">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-[#006B3F]">
                      Privacy Policy
                    </span>
                    .
                  </span>
                </label>

                {errorMessage && (
                  <div className="mt-5 rounded-xl bg-[#FDECEA] px-4 py-3 text-sm text-[#A33A2B]">
                    {errorMessage}
                  </div>
                )}

                <div className="mt-7 flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setErrorMessage("");
                      setStep(2);
                    }}
                    className="w-1/3 rounded-xl border border-[#D8D0C5] px-4 py-3.5 font-semibold text-[#2F2A25] transition hover:bg-[#F8F1E5]"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-2/3 rounded-xl bg-[#006B3F] px-6 py-3.5 font-semibold text-white transition hover:bg-[#005631] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting
                      ? "Creating account..."
                      : "Create Account"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;

