import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://foodbridge-backend-l3b0.onrender.com/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(
          data.error || "Something went wrong. Please try again."
        );
        return;
      }

      setMessage(
        data.message ||
          "If an account exists with this email address, a password reset email has been sent."
      );
    } catch (error) {
      console.error("Forgot password error:", error);

      setErrorMessage(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#006B3F] mb-3">
            Forgot your password?
          </h1>

          <p className="text-[#3F352C]">
            Enter the email address associated with your FoodBridge
            account and we'll send you a password reset link.
          </p>
        </div>

        {message && (
          <div className="mb-6 rounded-lg bg-green-50 border border-green-200 px-4 py-4 text-sm text-[#006B3F]">
            {message}
          </div>
        )}

        {errorMessage && (
          <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-4 text-sm text-[#C65D3A]">
            {errorMessage}
          </div>
        )}

        {!message && (
          <form onSubmit={handleSubmit}>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#3F352C] mb-2"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/20"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-[#006B3F] px-6 py-3 font-semibold text-white transition hover:bg-[#005631] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </button>

          </form>
        )}

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-sm font-semibold text-[#006B3F] hover:underline"
          >
            ← Back to Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;