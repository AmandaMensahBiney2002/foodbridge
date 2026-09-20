
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditFoodListing() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await fetch(
          `https://foodbridge-backend-l3b0.onrender.com/api/food-listings/donor/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "Failed to load food listing"
          );
        }

        const listing = data.find(
          (item) => Number(item.id) === Number(id)
        );

        if (!listing) {
          throw new Error("Food listing not found.");
        }

        setFoodName(listing.food_name || "");
        setDescription(listing.description || "");
        setQuantity(listing.quantity || "");
        setUnit(listing.unit || "");
        setExpiryDate(
          listing.expiry_date
            ? listing.expiry_date.split("T")[0]
            : ""
        );
        setPickupLocation(listing.pickup_location || "");
      } catch (error) {
        console.error("Error loading food listing:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id, token, user?.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSaving(true);

    try {
      const response = await fetch(
        `https://foodbridge-backend-l3b0.onrender.com/api/food-listings/${id}`,
        {
          method: "PATCH",
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
          data.error || "Failed to update food listing"
        );
      }

      navigate("/food-listings");
    } catch (error) {
      console.error("Edit food listing error:", error);
      setError(error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFFDF5] px-6 py-12 text-[#3F352C] md:px-12">
        <div className="mx-auto max-w-2xl">
          <p className="text-[#3F352C]/70">
            Loading food listing...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] px-6 py-12 text-[#3F352C] md:px-12">
      <div className="mx-auto max-w-2xl">

        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#006B3F]">
          FoodBridge
        </p>

        <h1 className="text-3xl font-bold md:text-4xl">
          Edit Food Listing
        </h1>

        <p className="mt-3 text-[#3F352C]/70">
          Update the details of your surplus food listing.
        </p>

        {error && (
          <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        {!error && (
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6 rounded-2xl border border-[#3F352C]/10 bg-white p-6 shadow-sm md:p-8"
          >

            {/* Food Name */}
            <div>
              <label className="mb-2 block font-semibold">
                Food Name
              </label>

              <input
                type="text"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                required
                className="w-full rounded-xl border border-[#3F352C]/20 px-4 py-3 outline-none focus:border-[#006B3F]"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block font-semibold">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className="w-full rounded-xl border border-[#3F352C]/20 px-4 py-3 outline-none focus:border-[#006B3F]"
              />
            </div>

            {/* Quantity + Unit */}
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

            {/* Expiry Date */}
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

            {/* Pickup Location */}
            <div>
              <label className="mb-2 block font-semibold">
                Pickup Location
              </label>

              <textarea
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                rows="3"
                required
                className="w-full rounded-xl border border-[#3F352C]/20 px-4 py-3 outline-none focus:border-[#006B3F]"
              />
            </div>

            {/* Error */}
            {error && (
              <p className="rounded-xl bg-red-50 p-4 text-sm text-red-600">
                {error}
              </p>
            )}

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                onClick={() => navigate("/food-listings")}
                className="w-full rounded-xl border-2 border-[#3F352C]/20 px-5 py-3 font-bold transition hover:bg-[#FFFDF5]"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="w-full rounded-xl bg-[#006B3F] px-5 py-3 font-bold text-white transition hover:bg-[#005531] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "Saving Changes..." : "Save Changes"}
              </button>

            </div>

          </form>
        )}
      </div>
    </div>
  );
}

export default EditFoodListing;

