import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function FoodRequests() {
  const user = JSON.parse(localStorage.getItem("user"));
  const isDonor = user?.account_type === "donor";

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);
  const [pickupEditingId, setPickupEditingId] = useState(null);

  const [pickupForm, setPickupForm] = useState({
    pickup_date: "",
    pickup_time: "",
    collection_instructions: "",
    pickup_status: "scheduled",
  });

  const fetchRequests = async () => {
    try {
      const token = localStorage.getItem("token");

      const endpoint = isDonor
        ? `https://foodbridge-backend-l3b0.onrender.com/api/food-requests/donor/${user.id}`
        : `https://foodbridge-backend-l3b0.onrender.com/api/food-requests/recipient/${user.id}`;

      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to fetch food requests"
        );
      }

      setRequests(data);
    } catch (error) {
      console.error("Error fetching food requests:", error);
      setError("Unable to load food requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;

    fetchRequests();
  }, []);

  const updateRequestStatus = async (requestId, status) => {
    try {
      setUpdatingId(requestId);
      setError("");

      const token = localStorage.getItem("token");

      const response = await fetch(
        `https://foodbridge-backend-l3b0.onrender.com/api/food-requests/${requestId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to update request"
        );
      }

      await fetchRequests();
    } catch (error) {
      console.error("Update request error:", error);
      setError(error.message);
    } finally {
      setUpdatingId(null);
    }
  };

  const openPickupEditor = (request) => {
    setPickupEditingId(request.id);

    setPickupForm({
      pickup_date: request.pickup_date
        ? String(request.pickup_date).slice(0, 10)
        : "",
      pickup_time: request.pickup_time
        ? String(request.pickup_time).slice(0, 5)
        : "",
      collection_instructions:
        request.collection_instructions || "",
      pickup_status: request.pickup_status || "scheduled",
    });
  };

  const closePickupEditor = () => {
    setPickupEditingId(null);

    setPickupForm({
      pickup_date: "",
      pickup_time: "",
      collection_instructions: "",
      pickup_status: "scheduled",
    });
  };

  const handlePickupChange = (event) => {
    const { name, value } = event.target;

    setPickupForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const updatePickupTime = (hour, minute) => {
    const formattedHour = String(hour).padStart(2, "0");
    const formattedMinute = String(minute).padStart(2, "0");

    setPickupForm((previous) => ({
      ...previous,
      pickup_time: `${formattedHour}:${formattedMinute}`,
    }));
  };

  const getSelectedHour = () => {
    if (!pickupForm.pickup_time) return null;

    const [hour] = pickupForm.pickup_time.split(":");

    return Number(hour);
  };

  const getSelectedMinute = () => {
    if (!pickupForm.pickup_time) return null;

    const [, minute] = pickupForm.pickup_time.split(":");

    return Number(minute);
  };

  const updatePickupDetails = async (requestId) => {
    try {
      setUpdatingId(requestId);
      setError("");

      const token = localStorage.getItem("token");

      const response = await fetch(
        `https://foodbridge-backend-l3b0.onrender.com/api/food-requests/${requestId}/pickup`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(pickupForm),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to update pickup details"
        );
      }

      await fetchRequests();
      closePickupEditor();
    } catch (error) {
      console.error("Pickup update error:", error);
      setError(error.message);
    } finally {
      setUpdatingId(null);
    }
  };

  const formatPickupStatus = (status) => {
    if (!status) return "Scheduled";

    return status
      .replaceAll("_", " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  };

  const pickupStatusClasses = (status) => {
    switch (status) {
      case "ready_for_pickup":
        return "bg-[#006B3F]/10 text-[#006B3F]";

      case "collected":
        return "bg-[#D9A441]/20 text-[#8A6818]";

      case "missed":
        return "bg-[#C65D3A]/10 text-[#C65D3A]";

      case "cancelled":
        return "bg-red-50 text-red-600";

      default:
        return "bg-[#E8F3EC] text-[#006B3F]";
    }
  };

  const formatDisplayDate = (date) => {
    if (!date) return "";

    const dateString = String(date).trim().slice(0, 10);

    const match = dateString.match(
      /^(\d{4})-(\d{2})-(\d{2})$/
    );

    if (!match) {
      return dateString;
    }

    const [, year, month, day] = match;

    return `${day}/${month}/${year}`;
  };

  const hours = Array.from(
    { length: 24 },
    (_, index) => index
  );

  const minutes = Array.from(
    { length: 12 },
    (_, index) => index * 5
  );

  const selectedHour = getSelectedHour();
  const selectedMinute = getSelectedMinute();

  return (
    <div className="min-h-screen bg-[#FFFDF5] px-6 py-12 text-[#3F352C]">
      <div className="mx-auto max-w-6xl">

        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#006B3F]">
          FoodBridge
        </p>

        <h1 className="text-3xl font-bold md:text-4xl">
          {isDonor ? "Food Requests" : "My Food Requests"}
        </h1>

        <p className="mt-3 max-w-2xl text-[#3F352C]/70">
          {isDonor
            ? "View requests from people and organizations interested in your food listings."
            : "Track the food you have requested and check the status of your requests."}
        </p>

        {loading && (
          <p className="mt-10 text-[#3F352C]/70">
            Loading food requests...
          </p>
        )}

        {error && (
          <p className="mt-10 rounded-xl bg-red-50 p-4 text-sm text-red-600">
            {error}
          </p>
        )}

        {!loading && !error && requests.length === 0 && (
          <p className="mt-10 text-[#3F352C]/70">
            {isDonor
              ? "You do not have any food requests yet."
              : "You have not made any food requests yet."}
          </p>
        )}

        {!loading && !error && requests.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {requests.map((request) => (
              <div
                key={request.id}
                className="flex h-full flex-col rounded-2xl border border-[#3F352C]/10 bg-white p-6 shadow-sm"
              >

                <div className="flex items-start justify-between gap-4">

                  <h2 className="text-xl font-bold leading-tight">
                    {request.food_name}
                  </h2>

                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                      request.status === "approved"
                        ? "bg-[#006B3F]/10 text-[#006B3F]"
                        : request.status === "completed"
                        ? "bg-[#D9A441]/20 text-[#8A6818]"
                        : request.status === "rejected"
                        ? "bg-[#C65D3A]/10 text-[#C65D3A]"
                        : "bg-[#D9A441]/15 text-[#8A6818]"
                    }`}
                  >
                    {request.status}
                  </span>

                </div>

                <div className="mt-6 space-y-4 text-sm">

                  {/* REQUESTER PROFILE */}
                  {isDonor && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                        Requested By
                      </p>

                      <Link
                        to={`/profile/${request.recipient_id}`}
                        className="mt-1 inline-block font-semibold !text-[#006B3F] hover:!text-[#004D2C] hover:underline"
                      >
                        {request.recipient_first_name}{" "}
                        {request.recipient_last_name}
                      </Link>
                    </div>
                  )}

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                      Quantity Requested
                    </p>

                    <p className="mt-1 font-semibold">
                      {request.quantity_requested}{" "}
                      {request.unit || "portions"}
                    </p>
                  </div>

                  {request.listing_quantity !== undefined && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                        Originally Listed
                      </p>

                      <p className="mt-1">
                        {request.listing_quantity}{" "}
                        {request.unit || "portions"}
                      </p>
                    </div>
                  )}

                  {request.available_quantity !== undefined && (
                    <div className="rounded-xl bg-[#FFFDF5] p-4">

                      <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                        Available
                      </p>

                      <p className="mt-1 text-lg font-bold text-[#006B3F]">
                        {request.available_quantity}{" "}
                        <span className="text-sm font-semibold">
                          {request.unit || "portions"}
                        </span>
                      </p>

                    </div>
                  )}

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                      Pickup Location
                    </p>

                    <p className="mt-1 leading-relaxed">
                      {request.pickup_location}
                    </p>
                  </div>

                  {request.expiry_date && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                        Expiry Date
                      </p>

                      <p className="mt-1">
                        {formatDisplayDate(
                          request.expiry_date
                        )}
                      </p>
                    </div>
                  )}

                  {isDonor && request.requested_at && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                        Requested On
                      </p>

                      <p className="mt-1">
                        {formatDisplayDate(
                          request.requested_at
                        )}
                      </p>
                    </div>
                  )}

                  <div className="border-t border-[#3F352C]/10 pt-5">

                    <div className="flex items-center justify-between gap-3">

                      <p className="text-xs font-semibold uppercase tracking-wide text-[#006B3F]">
                        Pickup Details
                      </p>

                      {request.pickup_status && (
                        <span
                          className={`rounded-full px-3 py-1 text-[11px] font-bold ${pickupStatusClasses(
                            request.pickup_status
                          )}`}
                        >
                          {formatPickupStatus(
                            request.pickup_status
                          )}
                        </span>
                      )}

                    </div>

                    <div className="mt-4">

                      <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                        Pickup Date
                      </p>

                      <p className="mt-1">
                        {request.pickup_date
                          ? formatDisplayDate(
                              request.pickup_date
                            )
                          : "Not scheduled yet"}
                      </p>

                    </div>

                    <div className="mt-4">

                      <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                        Pickup Time
                      </p>

                      <p className="mt-1">
                        {request.pickup_time
                          ? String(
                              request.pickup_time
                            ).slice(0, 5)
                          : "Not scheduled yet"}
                      </p>

                    </div>

                    <div className="mt-4">

                      <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                        Collection Instructions
                      </p>

                      <p className="mt-1 leading-relaxed">
                        {request.collection_instructions ||
                          "No collection instructions provided."}
                      </p>

                    </div>

                  </div>

                  {isDonor &&
                    request.status === "approved" &&
                    pickupEditingId === request.id && (

                      <div className="mt-5 rounded-2xl border border-[#006B3F]/15 bg-[#F8F6F1] p-4">

                        <p className="text-sm font-bold text-[#006B3F]">
                          Update Pickup Details
                        </p>

                        <div className="mt-4">

                          <label className="text-xs font-semibold text-[#3F352C]/60">
                            Pickup Date
                          </label>

                          <input
                            type="date"
                            name="pickup_date"
                            value={pickupForm.pickup_date}
                            onChange={handlePickupChange}
                            className="mt-1 w-full rounded-xl border border-[#3F352C]/15 bg-white px-3 py-3 text-base outline-none focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/20"
                          />

                        </div>

                        <div className="mt-4">

                          <label className="text-xs font-semibold text-[#3F352C]/60">
                            Pickup Time
                          </label>

                          <div className="mt-2 rounded-2xl border border-[#3F352C]/10 bg-white p-4">

                            <div className="mb-3 text-center">

                              <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/45">
                                Selected Time
                              </p>

                              <p className="mt-1 text-2xl font-bold tracking-wide text-[#006B3F]">
                                {pickupForm.pickup_time ||
                                  "--:--"}
                              </p>

                            </div>

                            <div className="grid grid-cols-2 gap-3">

                              <div>

                                <p className="mb-2 text-center text-[11px] font-bold uppercase tracking-wide text-[#3F352C]/45">
                                  Hour
                                </p>

                                <div className="relative h-36 overflow-y-auto rounded-xl border border-[#3F352C]/10 bg-[#F8F6F1] px-2 py-2 [scrollbar-width:thin]">

                                  <div className="space-y-1">

                                    {hours.map((hour) => {

                                      const isSelected =
                                        selectedHour ===
                                        hour;

                                      return (
                                        <button
                                          key={hour}
                                          type="button"
                                          onClick={() =>
                                            updatePickupTime(
                                              hour,
                                              selectedMinute ??
                                                0
                                            )
                                          }
                                          className={`w-full rounded-lg px-3 py-2 text-center text-sm font-semibold transition ${
                                            isSelected
                                              ? "bg-[#006B3F] text-white shadow-sm"
                                              : "text-[#3F352C] hover:bg-[#006B3F]/10"
                                          }`}
                                        >
                                          {String(
                                            hour
                                          ).padStart(
                                            2,
                                            "0"
                                          )}
                                        </button>
                                      );

                                    })}

                                  </div>

                                </div>

                              </div>

                              <div>

                                <p className="mb-2 text-center text-[11px] font-bold uppercase tracking-wide text-[#3F352C]/45">
                                  Minute
                                </p>

                                <div className="relative h-36 overflow-y-auto rounded-xl border border-[#3F352C]/10 bg-[#F8F6F1] px-2 py-2 [scrollbar-width:thin]">

                                  <div className="space-y-1">

                                    {minutes.map((minute) => {

                                      const isSelected =
                                        selectedMinute ===
                                        minute;

                                      return (
                                        <button
                                          key={minute}
                                          type="button"
                                          onClick={() =>
                                            updatePickupTime(
                                              selectedHour ??
                                                9,
                                              minute
                                            )
                                          }
                                          className={`w-full rounded-lg px-3 py-2 text-center text-sm font-semibold transition ${
                                            isSelected
                                              ? "bg-[#006B3F] text-white shadow-sm"
                                              : "text-[#3F352C] hover:bg-[#006B3F]/10"
                                          }`}
                                        >
                                          {String(
                                            minute
                                          ).padStart(
                                            2,
                                            "0"
                                          )}
                                        </button>
                                      );

                                    })}

                                  </div>

                                </div>

                              </div>

                            </div>

                            <p className="mt-3 text-center text-xs text-[#3F352C]/50">
                              Scroll through the hours and
                              minutes to choose a pickup time.
                            </p>

                          </div>

                        </div>

                        <div className="mt-4">

                          <label className="text-xs font-semibold text-[#3F352C]/60">
                            Pickup Status
                          </label>

                          <select
                            name="pickup_status"
                            value={pickupForm.pickup_status}
                            onChange={handlePickupChange}
                            className="mt-1 w-full rounded-xl border border-[#3F352C]/15 bg-white px-3 py-3 text-base outline-none focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/20"
                          >
                            <option value="scheduled">
                              Scheduled
                            </option>

                            <option value="ready_for_pickup">
                              Ready for Pickup
                            </option>

                            <option value="collected">
                              Collected
                            </option>

                            <option value="missed">
                              Missed
                            </option>

                            <option value="cancelled">
                              Cancelled
                            </option>
                          </select>

                        </div>

                        <div className="mt-4">

                          <label className="text-xs font-semibold text-[#3F352C]/60">
                            Collection Instructions
                          </label>

                          <textarea
                            name="collection_instructions"
                            value={
                              pickupForm.collection_instructions
                            }
                            onChange={handlePickupChange}
                            rows="3"
                            placeholder="Example: Please collect from the security desk."
                            className="mt-1 w-full resize-none rounded-xl border border-[#3F352C]/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/20"
                          />

                        </div>

                        <div className="mt-4 flex gap-3">

                          <button
                            onClick={() =>
                              updatePickupDetails(
                                request.id
                              )
                            }
                            disabled={
                              updatingId === request.id
                            }
                            className="flex-1 rounded-xl bg-[#006B3F] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#005531] disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {updatingId === request.id
                              ? "Saving..."
                              : "Save Pickup"}
                          </button>

                          <button
                            onClick={closePickupEditor}
                            disabled={
                              updatingId === request.id
                            }
                            className="rounded-xl border border-[#3F352C]/15 bg-white px-4 py-2.5 text-sm font-bold transition hover:bg-[#F8F6F1] disabled:opacity-60"
                          >
                            Cancel
                          </button>

                        </div>

                      </div>

                    )}

                </div>

                {isDonor &&
                  request.status === "pending" && (

                    <div className="mt-auto flex gap-3 pt-6">

                      <button
                        onClick={() =>
                          updateRequestStatus(
                            request.id,
                            "approved"
                          )
                        }
                        disabled={
                          updatingId === request.id
                        }
                        className="flex-1 rounded-xl bg-[#006B3F] px-4 py-3 font-bold text-white transition hover:bg-[#005531] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {updatingId === request.id
                          ? "Updating..."
                          : "Approve"}
                      </button>

                      <button
                        onClick={() =>
                          updateRequestStatus(
                            request.id,
                            "rejected"
                          )
                        }
                        disabled={
                          updatingId === request.id
                        }
                        className="flex-1 rounded-xl border-2 border-red-500 px-4 py-3 font-bold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        Reject
                      </button>

                    </div>
                  )}

                {isDonor &&
                  request.status === "approved" && (

                    <div className="mt-auto space-y-3 pt-6">

                      {pickupEditingId !== request.id && (
                        <button
                          onClick={() =>
                            openPickupEditor(request)
                          }
                          className="w-full rounded-xl border-2 border-[#006B3F] px-4 py-3 font-bold text-[#006B3F] transition hover:bg-[#006B3F] hover:text-white"
                        >
                          {request.pickup_date
                            ? "Edit Pickup Details"
                            : "Schedule Pickup"}
                        </button>
                      )}

                      <button
                        onClick={() =>
                          updateRequestStatus(
                            request.id,
                            "completed"
                          )
                        }
                        disabled={
                          updatingId === request.id
                        }
                        className="w-full rounded-xl bg-[#D9A441] px-4 py-3 font-bold text-white transition hover:bg-[#B8892F] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {updatingId === request.id
                          ? "Updating..."
                          : "Mark as Completed"}
                      </button>

                    </div>
                  )}

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default FoodRequests;