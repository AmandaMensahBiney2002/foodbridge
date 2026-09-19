import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();

  const [status, setStatus] = useState("verifying");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get("token");

      if (!token) {
        setStatus("error");
        setMessage("No verification token was provided.");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:5000/api/auth/verify-email?token=${encodeURIComponent(
            token
          )}`
        );

        const data = await response.json();

        if (!response.ok) {
          setStatus("error");
          setMessage(
            data.error || "Unable to verify your email address."
          );
          return;
        }

        setStatus("success");
        setMessage(
          data.message || "Your email has been verified successfully."
        );
      } catch (error) {
        console.error("Email verification error:", error);

        setStatus("error");
        setMessage(
          "Something went wrong while verifying your email. Please try again."
        );
      }
    };

    verifyEmail();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[#FFFDF5] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8 text-center">

        {status === "verifying" && (
          <>
            <div className="mx-auto mb-6 h-12 w-12 rounded-full border-4 border-[#D9A441] border-t-[#006B3F] animate-spin"></div>

            <h1 className="text-2xl font-bold text-[#006B3F] mb-3">
              Verifying your email
            </h1>

            <p className="text-[#3F352C]">
              Please wait while we verify your email address.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#006B3F] text-white text-3xl">
              ✓
            </div>

            <h1 className="text-2xl font-bold text-[#006B3F] mb-3">
              Email verified!
            </h1>

            <p className="text-[#3F352C] mb-8">
              {message}
            </p>

            <Link
              to="/login"
              className="inline-block rounded-lg bg-[#006B3F] px-6 py-3 font-semibold text-white transition hover:bg-[#005631]"
            >
              Go to Login
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C65D3A] text-white text-3xl">
              !
            </div>

            <h1 className="text-2xl font-bold text-[#C65D3A] mb-3">
              Verification failed
            </h1>

            <p className="text-[#3F352C] mb-8">
              {message}
            </p>

            <Link
              to="/login"
              className="inline-block rounded-lg bg-[#006B3F] px-6 py-3 font-semibold text-white transition hover:bg-[#005631]"
            >
              Go to Login
            </Link>
          </>
        )}

      </div>
    </div>
  );
};

export default VerifyEmail;