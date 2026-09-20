import { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setErrorMessage("");

    if (!token) {
      setErrorMessage(
        "This password reset link is invalid or incomplete."
      );
      return;
    }

    if (password.length < 8) {
      setErrorMessage(
        "Your password must be at least 8 characters long."
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage(
        "The passwords do not match."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://foodbridge-backend-l3b0.onrender.com/api/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(
          data.error ||
          "Unable to reset your password. Please try again."
        );
        return;
      }

      setMessage(
        data.message ||
        "Your password has been reset successfully."
      );

      setPassword("");
      setConfirmPassword("");

    } catch (error) {
      console.error("Password reset error:", error);

      setErrorMessage(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">

        <div className="text-center mb-8">

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#006B3F] text-white text-2xl">
            🔒
          </div>

          <h1 className="text-3xl font-bold text-[#006B3F] mb-3">
            Reset your password
          </h1>

          <p className="text-[#3F352C]">
            Create a new password for your FoodBridge account.
          </p>

        </div>

        {errorMessage && (
          <div className="mb-6 rounded-lg border border-[#C65D3A]/30 bg-[#C65D3A]/10 px-4 py-4 text-sm text-[#C65D3A]">
            {errorMessage}
          </div>
        )}

        {message && (
          <div className="mb-6 rounded-lg border border-[#006B3F]/20 bg-[#006B3F]/10 px-4 py-4 text-sm text-[#006B3F]">
            <p className="font-semibold mb-1">
              Password reset successful
            </p>

            <p>
              {message}
            </p>
          </div>
        )}

        {!message && (
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-[#3F352C] mb-2"
              >
                New password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage("");
                }}
                placeholder="Enter your new password"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/20"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-[#3F352C] mb-2"
              >
                Confirm new password
              </label>

              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setErrorMessage("");
                }}
                placeholder="Re-enter your new password"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/20"
              />
            </div>

            <p className="text-xs text-[#3F352C]/60">
              Your password must be at least 8 characters long.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-[#006B3F] px-6 py-3 font-semibold text-white transition hover:bg-[#005631] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting
                ? "Resetting Password..."
                : "Reset Password"}
            </button>

          </form>
        )}

        <div className="mt-6 text-center">

          {message ? (
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-sm font-semibold text-[#006B3F] hover:underline"
            >
              Go to Login
            </button>
          ) : (
            <Link
              to="/login"
              className="text-sm font-semibold text-[#006B3F] hover:underline"
            >
              ← Back to Login
            </Link>
          )}

        </div>

      </div>
    </div>
  );
};

export default ResetPassword;