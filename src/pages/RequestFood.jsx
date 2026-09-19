import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function RequestFood() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/food-requests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            food_listing_id: Number(id),
            quantity_requested: Number(quantity),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to submit food request"
        );
      }

      navigate("/food-requests");
    } catch (error) {
      console.error("Food request error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] px-6 py-12 text-[#3F352C] md:px-12">
      <div className="mx-auto max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#006B3F]">
          FoodBridge
        </p>

        <h1 className="text-3xl font-bold md:text-4xl">
          Request Food
        </h1>

        <p className="mt-3 text-[#3F352C]/70">
          Enter the amount of food you would like to request.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 rounded-2xl border border-[#3F352C]/10 bg-white p-6 shadow-sm md:p-8"
        >
          <div>
            <label className="mb-2 block font-semibold">
              Quantity Requested
            </label>

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="e.g. 5"
              required
              className="w-full rounded-xl border border-[#3F352C]/20 px-4 py-3 outline-none focus:border-[#006B3F]"
            />
          </div>

          {error && (
            <p className="rounded-xl bg-red-50 p-4 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#006B3F] px-5 py-3 font-bold text-white transition hover:bg-[#005531] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Submitting Request..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestFood;