
import { useEffect, useState } from "react";

function FoodRequests() {
  const user = JSON.parse(localStorage.getItem("user"));
  const isDonor = user?.account_type === "donor";

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  const fetchRequests = async () => {
    try {
      const token = localStorage.getItem("token");

      const endpoint = isDonor
        ? `http://localhost:5000/api/food-requests/donor/${user.id}`
        : `http://localhost:5000/api/food-requests/recipient/${user.id}`;

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
    fetchRequests();
  }, []);

  const updateRequestStatus = async (requestId, status) => {
    try {
      setUpdatingId(requestId);
      setError("");

      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:5000/api/food-requests/${requestId}`,
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

  return (
    <div className="min-h-screen bg-[#FFFDF5] px-6 py-12 text-[#3F352C] md:px-12">
      <div className="mx-auto max-w-6xl">

        {/* Page Header */}
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

        {/* Loading */}
        {loading && (
          <p className="mt-10 text-[#3F352C]/70">
            Loading food requests...
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="mt-10 rounded-xl bg-red-50 p-4 text-sm text-red-600">
            {error}
          </p>
        )}

        {/* Empty State */}
        {!loading && !error && requests.length === 0 && (
          <p className="mt-10 text-[#3F352C]/70">
            {isDonor
              ? "You do not have any food requests yet."
              : "You have not made any food requests yet."}
          </p>
        )}

        {/* Request Cards */}
        {!loading && !error && requests.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {requests.map((request) => (
              <div
                key={request.id}
                className="flex h-full flex-col rounded-2xl border border-[#3F352C]/10 bg-white p-6 shadow-sm"
              >
                {/* Food Name + Status */}
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-bold leading-tight">
                    {request.food_name}
                  </h2>

                  <span className="shrink-0 rounded-full bg-[#E8F3EC] px-3 py-1 text-xs font-semibold capitalize text-[#006B3F]">
                    {request.status}
                  </span>
                </div>

                {/* Request Details */}
                <div className="mt-6 space-y-4 text-sm">

                  {/* Donor View */}
                  {isDonor && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                        Requested By
                      </p>

                      <p className="mt-1">
                        {request.recipient_first_name}{" "}
                        {request.recipient_last_name}
                      </p>
                    </div>
                  )}

                  {/* Quantity Requested */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                      Quantity Requested
                    </p>

                    <p className="mt-1 font-semibold">
                      {request.quantity_requested}{" "}
                      {request.unit || "portions"}
                    </p>
                  </div>

                  {/* Original Listing Quantity */}
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

                  {/* Available Quantity */}
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

                  {/* Pickup */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                      Pickup Location
                    </p>

                    <p className="mt-1 leading-relaxed">
                      {request.pickup_location}
                    </p>
                  </div>

                  {/* Expiry Date */}
                  {request.expiry_date && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                        Expiry Date
                      </p>

                      <p className="mt-1">
                        {new Date(
                          request.expiry_date
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  )}

                  {/* Donor View Date */}
                  {isDonor && request.requested_at && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                        Requested On
                      </p>

                      <p className="mt-1">
                        {new Date(
                          request.requested_at
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>

                {/* Pending Actions */}
                {isDonor && request.status === "pending" && (
                  <div className="mt-auto flex gap-3 pt-6">
                    <button
                      onClick={() =>
                        updateRequestStatus(
                          request.id,
                          "approved"
                        )
                      }
                      disabled={updatingId === request.id}
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
                      disabled={updatingId === request.id}
                      className="flex-1 rounded-xl border-2 border-red-500 px-4 py-3 font-bold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Reject
                    </button>
                  </div>
                )}

                {/* Approved Action */}
                {isDonor && request.status === "approved" && (
                  <div className="mt-auto pt-6">
                    <button
                      onClick={() =>
                        updateRequestStatus(
                          request.id,
                          "completed"
                        )
                      }
                      disabled={updatingId === request.id}
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

