import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateFoodListing() {
  const navigate = useNavigate();

  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://foodbridge-backend-l3b0.onrender.com/api/food-listings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            food_name: foodName,
            description,
            quantity: Number(quantity),
            unit,
            expiry_date: expiryDate || null,
            pickup_location: pickupLocation,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to create food listing"
        );
      }

      navigate("/food-listings");
    } catch (error) {
      console.error("Create food listing error:", error);
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
          Create Food Listing
        </h1>

        <p className="mt-3 text-[#3F352C]/70">
          Share surplus food that is available for redistribution.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 rounded-2xl border border-[#3F352C]/10 bg-white p-6 shadow-sm md:p-8"
        >
          <div>
            <label className="mb-2 block font-semibold">
              Food Name
            </label>

            <input
              type="text"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              placeholder="e.g. Jollof Rice"
              required
              className="w-full rounded-xl border border-[#3F352C]/20 px-4 py-3 outline-none focus:border-[#006B3F]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the food..."
              rows="4"
              className="w-full rounded-xl border border-[#3F352C]/20 px-4 py-3 outline-none focus:border-[#006B3F]"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-semibold">
                Quantity
              </label>

              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="e.g. 20"
                required
                className="w-full rounded-xl border border-[#3F352C]/20 px-4 py-3 outline-none focus:border-[#006B3F]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Unit
              </label>

              <input
                type="text"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                placeholder="e.g. portions"
                className="w-full rounded-xl border border-[#3F352C]/20 px-4 py-3 outline-none focus:border-[#006B3F]"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Expiry Date
            </label>

            <input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full rounded-xl border border-[#3F352C]/20 px-4 py-3 outline-none focus:border-[#006B3F]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Pickup Location
            </label>

            <textarea
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              placeholder="Where should the food be collected?"
              rows="3"
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
            {loading ? "Creating Listing..." : "Create Food Listing"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateFoodListing;