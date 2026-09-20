import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const isDonor = user?.account_type === "donor";

  const [requests, setRequests] = useState([]);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (!user) {
      return;
    }

    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (isDonor) {
          const [listingsResponse, requestsResponse] =
            await Promise.all([
              fetch(
                `http://localhost:5000/api/food-listings/donor/${user.id}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              ),

              fetch(
                `http://localhost:5000/api/food-requests/donor/${user.id}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              ),
            ]);

          const listingsData = await listingsResponse.json();
          const requestsData = await requestsResponse.json();

          if (listingsResponse.ok) {
            setListings(listingsData);
          }

          if (requestsResponse.ok) {
            setRequests(requestsData);
          }
        } else {
          const response = await fetch(
            `http://localhost:5000/api/food-requests/recipient/${user.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const data = await response.json();

          if (response.ok) {
            setRequests(data);
          }
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, [isDonor, user]);

  if (!user) {
    navigate("/login");
    return null;
  }

  // =========================================================
  // REQUEST COUNTS
  // =========================================================

  const pendingRequests = requests.filter(
    (request) => request.status === "pending"
  ).length;

  const approvedRequests = requests.filter(
    (request) => request.status === "approved"
  ).length;

  const completedRequests = requests.filter(
    (request) => request.status === "completed"
  ).length;

  const rejectedRequests = requests.filter(
    (request) => request.status === "rejected"
  ).length;

  // =========================================================
  // PICKUP COUNTS
  // =========================================================

  const scheduledPickups = requests.filter(
    (request) => request.pickup_status === "scheduled"
  ).length;

  const readyPickups = requests.filter(
    (request) => request.pickup_status === "ready_for_pickup"
  ).length;

  const collectedPickups = requests.filter(
    (request) => request.pickup_status === "collected"
  ).length;

  // =========================================================
  // DONOR LISTING COUNTS
  // =========================================================

  const activeListings = listings.filter(
    (listing) => listing.status === "available"
  ).length;

  const closedListings = listings.filter(
    (listing) => listing.status === "closed"
  ).length;

  // =========================================================
  // PICKUP STATUS HELPERS
  // =========================================================

  const formatPickupStatus = (status) => {
    if (!status) return "";

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

  // =========================================================
  // PICKUP TIME FORMAT
  // =========================================================

  const formatPickupTime = (time) => {
    if (!time) return "";

    const timeString = String(time).slice(0, 5);

    const [hoursString, minutesString] = timeString.split(":");

    const hours = Number(hoursString);
    const minutes = Number(minutesString);

    if (
      Number.isNaN(hours) ||
      Number.isNaN(minutes)
    ) {
      return timeString;
    }

    const period = hours >= 12 ? "PM" : "AM";
    const displayHour = hours % 12 || 12;

    return `${displayHour}:${String(minutes).padStart(
      2,
      "0"
    )} ${period}`;
  };

  // =========================================================
  // PICKUP DATE FORMAT
  // =========================================================
  // We do NOT use new Date() here.
  // PostgreSQL returns the date as YYYY-MM-DD.
  // We simply rearrange the parts.

  const formatPickupDate = (date) => {
    if (!date) return "";

    const dateString = String(date).trim();

    // Handle YYYY-MM-DD
    const match = dateString.match(
      /^(\d{4})-(\d{2})-(\d{2})/
    );

    if (match) {
      const [, year, month, day] = match;

      return `${day}/${month}/${year}`;
    }

    // If the backend sends something unexpected,
    // show the original value instead of "Invalid Date".
    return dateString;
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#2F2A25]">

      {/* ===================================================== */}
      {/* GHANA FLAG ACCENT */}
      {/* ===================================================== */}

      <div className="h-2 w-full bg-[linear-gradient(to_right,#006B3F_33.33%,#FCD116_33.33%,#FCD116_66.66%,#CE1126_66.66%)]"></div>

      {/* ===================================================== */}
      {/* TOP HEADER */}
      {/* ===================================================== */}

      <section className="border-b border-[#2F2A25]/10 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>

              <div className="mb-3 flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#006B3F]"></span>

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#006B3F]">
                  {isDonor
                    ? "Donor Dashboard"
                    : "Recipient Dashboard"}
                </p>

              </div>

              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                Welcome back, {user.first_name}
              </h1>

              <p className="mt-3 max-w-2xl text-base leading-7 text-[#2F2A25]/60">
                {isDonor
                  ? "Keep track of your food donations, listings and incoming requests."
                  : "Find available food and keep track of your requests in one place."}
              </p>

            </div>

            <button
              onClick={() => navigate("/food-listings")}
              className="w-full rounded-xl bg-[#006B3F] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#005531] md:w-auto"
            >
              {isDonor
                ? "+ Add Food Listing"
                : "Browse Available Food"}
            </button>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* MAIN DASHBOARD */}
      {/* ===================================================== */}

      <main className="mx-auto max-w-7xl px-6 py-10 md:px-10">

        {isDonor ? (

          <>
            {/* ================================================= */}
            {/* DONOR OVERVIEW */}
            {/* ================================================= */}

            <section>

              <div className="mb-5">

                <h2 className="text-xl font-bold">
                  Your Overview
                </h2>

                <p className="mt-1 text-sm text-[#2F2A25]/55">
                  A snapshot of your FoodBridge activity.
                </p>

              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                {/* ACTIVE LISTINGS */}

                <div className="rounded-2xl border border-[#2F2A25]/8 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

                  <div className="flex items-center justify-between">

                    <p className="text-sm font-medium text-[#2F2A25]/55">
                      Active Listings
                    </p>

                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#006B3F]/10 text-[#006B3F]">
                      ↗
                    </span>

                  </div>

                  <p className="mt-4 text-3xl font-bold text-[#006B3F]">
                    {activeListings}
                  </p>

                  <p className="mt-1 text-xs text-[#2F2A25]/45">
                    Currently available
                  </p>

                </div>

                {/* CLOSED LISTINGS */}

                <div className="rounded-2xl border border-[#2F2A25]/8 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

                  <div className="flex items-center justify-between">

                    <p className="text-sm font-medium text-[#2F2A25]/55">
                      Closed Listings
                    </p>

                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2F2A25]/5 text-[#2F2A25]/60">
                      ✓
                    </span>

                  </div>

                  <p className="mt-4 text-3xl font-bold">
                    {closedListings}
                  </p>

                  <p className="mt-1 text-xs text-[#2F2A25]/45">
                    Previously completed
                  </p>

                </div>

                {/* PENDING REQUESTS */}

                <div className="rounded-2xl border border-[#2F2A25]/8 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

                  <div className="flex items-center justify-between">

                    <p className="text-sm font-medium text-[#2F2A25]/55">
                      Pending Requests
                    </p>

                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D9A441]/15 text-[#9A731D]">
                      !
                    </span>

                  </div>

                  <p className="mt-4 text-3xl font-bold text-[#9A731D]">
                    {pendingRequests}
                  </p>

                  <p className="mt-1 text-xs text-[#2F2A25]/45">
                    Awaiting your response
                  </p>

                </div>

                {/* SCHEDULED PICKUPS */}

                <div className="rounded-2xl border border-[#2F2A25]/8 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

                  <div className="flex items-center justify-between">

                    <p className="text-sm font-medium text-[#2F2A25]/55">
                      Scheduled Pickups
                    </p>

                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#006B3F]/10 text-[#006B3F]">
                      ↗
                    </span>

                  </div>

                  <p className="mt-4 text-3xl font-bold text-[#006B3F]">
                    {scheduledPickups}
                  </p>

                  <p className="mt-1 text-xs text-[#2F2A25]/45">
                    Pickup arrangements
                  </p>

                </div>

              </div>

            </section>

            {/* ================================================= */}
            {/* DONOR PICKUP SNAPSHOT */}
            {/* ================================================= */}

            <section className="mt-10 rounded-2xl border border-[#006B3F]/10 bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#006B3F]">
                    Pickup Overview
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Keep your pickups on track
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#2F2A25]/60">
                    Manage scheduled collections and keep recipients
                    informed about when their food is ready.
                  </p>

                </div>

                <button
                  onClick={() => navigate("/food-requests")}
                  className="w-full rounded-xl border-2 border-[#006B3F] px-5 py-3 text-sm font-bold text-[#006B3F] transition hover:bg-[#006B3F] hover:text-white md:w-auto"
                >
                  Manage Pickups
                </button>

              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">

                <div className="rounded-xl bg-[#F8F6F1] p-5">

                  <p className="text-xs font-semibold uppercase tracking-wide text-[#2F2A25]/50">
                    Scheduled
                  </p>

                  <p className="mt-2 text-2xl font-bold text-[#006B3F]">
                    {scheduledPickups}
                  </p>

                </div>

                <div className="rounded-xl bg-[#F8F6F1] p-5">

                  <p className="text-xs font-semibold uppercase tracking-wide text-[#2F2A25]/50">
                    Ready
                  </p>

                  <p className="mt-2 text-2xl font-bold text-[#006B3F]">
                    {readyPickups}
                  </p>

                </div>

                <div className="rounded-xl bg-[#F8F6F1] p-5">

                  <p className="text-xs font-semibold uppercase tracking-wide text-[#2F2A25]/50">
                    Collected
                  </p>

                  <p className="mt-2 text-2xl font-bold text-[#8A6818]">
                    {collectedPickups}
                  </p>

                </div>

              </div>

            </section>

            {/* ================================================= */}
            {/* DONOR ACTIONS */}
            {/* ================================================= */}

            <section className="mt-10 grid gap-6 lg:grid-cols-2">

              <div className="rounded-2xl border border-[#2F2A25]/8 bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#006B3F]">
                      Donations
                    </p>

                    <h2 className="mt-2 text-2xl font-bold">
                      My Food Listings
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-6 text-[#2F2A25]/60">
                      Create, view and manage the surplus food you have
                      made available through FoodBridge.
                    </p>

                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#006B3F]/10 text-xl text-[#006B3F] sm:flex">
                    +
                  </div>

                </div>

                <button
                  onClick={() => navigate("/food-listings")}
                  className="mt-6 rounded-xl bg-[#006B3F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#005531]"
                >
                  Manage Listings
                </button>

              </div>

              <div className="rounded-2xl border border-[#2F2A25]/8 bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#9A731D]">
                      Requests
                    </p>

                    <h2 className="mt-2 text-2xl font-bold">
                      Food Requests
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-6 text-[#2F2A25]/60">
                      Review requests from recipients and manage the next
                      step for your available food.
                    </p>

                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9A441]/15 text-xl text-[#9A731D] sm:flex">
                    !
                  </div>

                </div>

                <button
                  onClick={() => navigate("/food-requests")}
                  className="mt-6 rounded-xl border border-[#006B3F] px-5 py-3 text-sm font-bold text-[#006B3F] transition hover:bg-[#006B3F] hover:text-white"
                >
                  View Requests
                </button>

              </div>

            </section>

            {/* ================================================= */}
            {/* DONOR RECENT ACTIVITY */}
            {/* ================================================= */}

            <section className="mt-10">

              <div className="mb-5 flex items-end justify-between">

                <div>

                  <h2 className="text-xl font-bold">
                    Recent Activity
                  </h2>

                  <p className="mt-1 text-sm text-[#2F2A25]/55">
                    Your latest food requests.
                  </p>

                </div>

                <button
                  onClick={() => navigate("/food-requests")}
                  className="text-sm font-semibold text-[#006B3F] hover:underline"
                >
                  View all
                </button>

              </div>

              <div className="overflow-hidden rounded-2xl border border-[#2F2A25]/8 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

                {requests.length === 0 ? (

                  <div className="px-6 py-12 text-center">

                    <p className="font-semibold">
                      No requests yet
                    </p>

                    <p className="mt-2 text-sm text-[#2F2A25]/50">
                      Requests from recipients will appear here.
                    </p>

                  </div>

                ) : (

                  <div className="divide-y divide-[#2F2A25]/8">

                    {requests.slice(0, 5).map((request) => (

                      <div
                        key={request.id}
                        className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
                      >

                        <div>

                          <p className="font-semibold">
                            {request.food_name || "Food request"}
                          </p>

                          <p className="mt-1 text-sm text-[#2F2A25]/50">
                            {request.quantity_requested} portions requested
                          </p>

                          {request.pickup_date && (
                            <p className="mt-2 text-xs font-medium text-[#2F2A25]/55">
                              Pickup:{" "}
                              {formatPickupDate(request.pickup_date)}

                              {request.pickup_time
                                ? ` · ${formatPickupTime(
                                    request.pickup_time
                                  )}`
                                : ""}
                            </p>
                          )}

                        </div>

                        <div className="flex flex-wrap items-center gap-2">

                          <span
                            className={`w-fit rounded-full px-3 py-1 text-xs font-bold capitalize ${
                              request.status === "approved"
                                ? "bg-[#006B3F]/10 text-[#006B3F]"
                                : request.status === "completed"
                                ? "bg-[#006B3F]/10 text-[#006B3F]"
                                : request.status === "rejected"
                                ? "bg-[#C65D3A]/10 text-[#C65D3A]"
                                : "bg-[#D9A441]/15 text-[#8A6818]"
                            }`}
                          >
                            {request.status}
                          </span>

                          {request.pickup_status && (
                            <span
                              className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${
                                pickupStatusClasses(
                                  request.pickup_status
                                )
                              }`}
                            >
                              {formatPickupStatus(
                                request.pickup_status
                              )}
                            </span>
                          )}

                        </div>

                      </div>

                    ))}

                  </div>

                )}

              </div>

            </section>
          </>

        ) : (

          <>
            {/* ================================================= */}
            {/* RECIPIENT OVERVIEW */}
            {/* ================================================= */}

            <section>

              <div className="mb-5">

                <h2 className="text-xl font-bold">
                  Your Overview
                </h2>

                <p className="mt-1 text-sm text-[#2F2A25]/55">
                  A snapshot of your food requests.
                </p>

              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                {/* PENDING */}

                <div className="rounded-2xl border border-[#2F2A25]/8 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

                  <p className="text-sm font-medium text-[#2F2A25]/55">
                    Pending
                  </p>

                  <p className="mt-4 text-3xl font-bold text-[#9A731D]">
                    {pendingRequests}
                  </p>

                  <p className="mt-1 text-xs text-[#2F2A25]/45">
                    Awaiting approval
                  </p>

                </div>

                {/* APPROVED */}

                <div className="rounded-2xl border border-[#2F2A25]/8 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

                  <p className="text-sm font-medium text-[#2F2A25]/55">
                    Approved
                  </p>

                  <p className="mt-4 text-3xl font-bold text-[#006B3F]">
                    {approvedRequests}
                  </p>

                  <p className="mt-1 text-xs text-[#2F2A25]/45">
                    Approved by donors
                  </p>

                </div>

                {/* READY FOR COLLECTION */}

                <div className="rounded-2xl border border-[#2F2A25]/8 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

                  <p className="text-sm font-medium text-[#2F2A25]/55">
                    Ready for Collection
                  </p>

                  <p className="mt-4 text-3xl font-bold text-[#006B3F]">
                    {readyPickups}
                  </p>

                  <p className="mt-1 text-xs text-[#2F2A25]/45">
                    Food is ready for pickup
                  </p>

                </div>

                {/* COMPLETED */}

                <div className="rounded-2xl border border-[#2F2A25]/8 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

                  <p className="text-sm font-medium text-[#2F2A25]/55">
                    Completed
                  </p>

                  <p className="mt-4 text-3xl font-bold text-[#006B3F]">
                    {completedRequests}
                  </p>

                  <p className="mt-1 text-xs text-[#2F2A25]/45">
                    Successfully completed
                  </p>

                </div>

              </div>

            </section>

            {/* ================================================= */}
            {/* RECIPIENT PICKUP SNAPSHOT */}
            {/* ================================================= */}

            <section className="mt-10 rounded-2xl border border-[#006B3F]/10 bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#006B3F]">
                    Pickup Overview
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Your upcoming collections
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#2F2A25]/60">
                    Check your scheduled pickup information and see
                    when food is ready for collection.
                  </p>

                </div>

                <button
                  onClick={() => navigate("/food-requests")}
                  className="w-full rounded-xl border-2 border-[#006B3F] px-5 py-3 text-sm font-bold text-[#006B3F] transition hover:bg-[#006B3F] hover:text-white md:w-auto"
                >
                  View Pickup Details
                </button>

              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">

                <div className="rounded-xl bg-[#F8F6F1] p-5">

                  <p className="text-xs font-semibold uppercase tracking-wide text-[#2F2A25]/50">
                    Scheduled
                  </p>

                  <p className="mt-2 text-2xl font-bold text-[#006B3F]">
                    {scheduledPickups}
                  </p>

                </div>

                <div className="rounded-xl bg-[#F8F6F1] p-5">

                  <p className="text-xs font-semibold uppercase tracking-wide text-[#2F2A25]/50">
                    Ready
                  </p>

                  <p className="mt-2 text-2xl font-bold text-[#006B3F]">
                    {readyPickups}
                  </p>

                </div>

                <div className="rounded-xl bg-[#F8F6F1] p-5">

                  <p className="text-xs font-semibold uppercase tracking-wide text-[#2F2A25]/50">
                    Collected
                  </p>

                  <p className="mt-2 text-2xl font-bold text-[#8A6818]">
                    {collectedPickups}
                  </p>

                </div>

              </div>

            </section>

            {/* ================================================= */}
            {/* RECIPIENT ACTIONS */}
            {/* ================================================= */}

            <section className="mt-10 grid gap-6 lg:grid-cols-2">

              {/* FIND FOOD */}

              <div className="rounded-2xl border border-[#2F2A25]/8 bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#006B3F]">
                  Find Food
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Available Food
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#2F2A25]/60">
                  Browse surplus food currently available for
                  redistribution and submit a request.
                </p>

                <button
                  onClick={() => navigate("/food-listings")}
                  className="mt-6 rounded-xl bg-[#006B3F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#005531]"
                >
                  Browse Food
                </button>

              </div>

              {/* MY REQUESTS */}

              <div className="rounded-2xl border border-[#2F2A25]/8 bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#9A731D]">
                  Your Activity
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  My Requests
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#2F2A25]/60">
                  Track your requests, pickup details and collection
                  status in one place.
                </p>

                <button
                  onClick={() => navigate("/food-requests")}
                  className="mt-6 rounded-xl border border-[#006B3F] px-5 py-3 text-sm font-bold text-[#006B3F] transition hover:bg-[#006B3F] hover:text-white"
                >
                  View Requests
                </button>

              </div>

            </section>

            {/* ================================================= */}
            {/* RECENT REQUESTS */}
            {/* ================================================= */}

            <section className="mt-10">

              <div className="mb-5 flex items-end justify-between">

                <div>

                  <h2 className="text-xl font-bold">
                    Recent Requests
                  </h2>

                  <p className="mt-1 text-sm text-[#2F2A25]/55">
                    Your latest food requests.
                  </p>

                </div>

                <button
                  onClick={() => navigate("/food-requests")}
                  className="text-sm font-semibold text-[#006B3F] hover:underline"
                >
                  View all
                </button>

              </div>

              <div className="overflow-hidden rounded-2xl border border-[#2F2A25]/8 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)]">

                {requests.length === 0 ? (

                  <div className="px-6 py-12 text-center">

                    <p className="font-semibold">
                      No requests yet
                    </p>

                    <p className="mt-2 text-sm text-[#2F2A25]/50">
                      Your food requests will appear here.
                    </p>

                  </div>

                ) : (

                  <div className="divide-y divide-[#2F2A25]/8">

                    {requests.slice(0, 5).map((request) => (

                      <div
                        key={request.id}
                        className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
                      >

                        <div>

                          <p className="font-semibold">
                            {request.food_name || "Food request"}
                          </p>

                          <p className="mt-1 text-sm text-[#2F2A25]/50">
                            {request.quantity_requested} portions requested
                          </p>

                          {request.pickup_date && (
                            <p className="mt-2 text-xs font-medium text-[#2F2A25]/55">
                              Pickup:{" "}
                              {formatPickupDate(request.pickup_date)}

                              {request.pickup_time
                                ? ` · ${formatPickupTime(
                                    request.pickup_time
                                  )}`
                                : ""}
                            </p>
                          )}

                        </div>

                        <div className="flex flex-wrap items-center gap-2">

                          <span
                            className={`w-fit rounded-full px-3 py-1 text-xs font-bold capitalize ${
                              request.status === "approved"
                                ? "bg-[#006B3F]/10 text-[#006B3F]"
                                : request.status === "completed"
                                ? "bg-[#006B3F]/10 text-[#006B3F]"
                                : request.status === "rejected"
                                ? "bg-[#C65D3A]/10 text-[#C65D3A]"
                                : "bg-[#D9A441]/15 text-[#8A6818]"
                            }`}
                          >
                            {request.status}
                          </span>

                          {request.pickup_status && (
                            <span
                              className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${
                                pickupStatusClasses(
                                  request.pickup_status
                                )
                              }`}
                            >
                              {formatPickupStatus(
                                request.pickup_status
                              )}
                            </span>
                          )}

                        </div>

                      </div>

                    ))}

                  </div>

                )}

              </div>

            </section>
          </>
        )}

      </main>
    </div>
  );
}

export default Dashboard;