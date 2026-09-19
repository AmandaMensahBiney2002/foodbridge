
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
        console.error(
          "Error fetching dashboard data:",
          error
        );
      }
    };

    fetchDashboardData();
  }, [isDonor, user]);

  if (!user) {
    navigate("/login");
    return null;
  }

  // Recipient request counts
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

  // Donor listing counts
  const activeListings = listings.filter(
    (listing) => listing.status === "available"
  ).length;

  const closedListings = listings.filter(
    (listing) => listing.status === "closed"
  ).length;

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3F352C]">

      {/* HEADER */}
      <section className="bg-[#006B3F] px-6 py-12 text-white md:px-12">

        <div className="mx-auto max-w-6xl">

          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#FCD116]">
            FoodBridge
          </p>

          <h1 className="text-3xl font-bold md:text-4xl">
            Welcome, {user.first_name}!
          </h1>

          <p className="mt-3 text-white/80">
            {isDonor
              ? "Manage your food donations and help reduce food waste."
              : "Discover surplus food and connect with available donations."
            }
          </p>

        </div>

      </section>

      {/* DASHBOARD */}
      <main className="mx-auto max-w-6xl px-6 py-12 md:px-12">

        {isDonor ? (

          <>
            <h2 className="text-2xl font-bold">
              Donor Dashboard
            </h2>

            <p className="mt-2 text-[#3F352C]/65">
              Manage your food listings and incoming requests.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              {/* FOOD LISTINGS */}
              <div className="rounded-2xl border border-[#3F352C]/10 bg-white p-6 shadow-sm">

                <h3 className="text-xl font-bold">
                  My Food Listings
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#3F352C]/65">
                  Create and manage surplus food listings that are
                  available for redistribution.
                </p>

                <button
                  onClick={() => navigate("/food-listings")}
                  className="mt-5 rounded-xl bg-[#006B3F] px-5 py-3 font-bold text-white transition hover:bg-[#005531]"
                >
                  Manage Listings
                </button>

              </div>

              {/* REQUESTS */}
              <div className="rounded-2xl border border-[#3F352C]/10 bg-white p-6 shadow-sm">

                <h3 className="text-xl font-bold">
                  Food Requests
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#3F352C]/65">
                  View and manage requests from people and organizations
                  requesting your food.
                </p>

                <button
                  onClick={() => navigate("/food-requests")}
                  className="mt-5 rounded-xl border-2 border-[#006B3F] px-5 py-3 font-bold text-[#006B3F] transition hover:bg-[#006B3F] hover:text-white"
                >
                  View Requests
                </button>

              </div>

            </div>

            {/* DONOR OVERVIEW */}
            <section className="mt-10">

              <h3 className="text-xl font-bold">
                Donation Overview
              </h3>

              <p className="mt-2 text-sm text-[#3F352C]/65">
                A quick look at your food listings and incoming requests.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

                {/* ACTIVE LISTINGS */}
                <div className="rounded-2xl border border-[#3F352C]/10 bg-white p-5 shadow-sm">

                  <p className="text-sm font-semibold text-[#3F352C]/60">
                    Active Listings
                  </p>

                  <p className="mt-2 text-3xl font-bold text-[#006B3F]">
                    {activeListings}
                  </p>

                </div>

                {/* CLOSED LISTINGS */}
                <div className="rounded-2xl border border-[#3F352C]/10 bg-white p-5 shadow-sm">

                  <p className="text-sm font-semibold text-[#3F352C]/60">
                    Closed Listings
                  </p>

                  <p className="mt-2 text-3xl font-bold text-[#3F352C]">
                    {closedListings}
                  </p>

                </div>

                {/* PENDING REQUESTS */}
                <div className="rounded-2xl border border-[#3F352C]/10 bg-white p-5 shadow-sm">

                  <p className="text-sm font-semibold text-[#3F352C]/60">
                    Pending Requests
                  </p>

                  <p className="mt-2 text-3xl font-bold text-[#D9A441]">
                    {pendingRequests}
                  </p>

                </div>

                {/* APPROVED REQUESTS */}
                <div className="rounded-2xl border border-[#3F352C]/10 bg-white p-5 shadow-sm">

                  <p className="text-sm font-semibold text-[#3F352C]/60">
                    Approved Requests
                  </p>

                  <p className="mt-2 text-3xl font-bold text-[#006B3F]">
                    {approvedRequests}
                  </p>

                </div>

                {/* COMPLETED REQUESTS */}
                <div className="rounded-2xl border border-[#3F352C]/10 bg-white p-5 shadow-sm">

                  <p className="text-sm font-semibold text-[#3F352C]/60">
                    Completed Requests
                  </p>

                  <p className="mt-2 text-3xl font-bold text-[#006B3F]">
                    {completedRequests}
                  </p>

                </div>

              </div>

            </section>
          </>

        ) : (

          <>
            <h2 className="text-2xl font-bold">
              Recipient Dashboard
            </h2>

            <p className="mt-2 text-[#3F352C]/65">
              Browse available food and manage your requests.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              {/* BROWSE FOOD */}
              <div className="rounded-2xl border border-[#3F352C]/10 bg-white p-6 shadow-sm">

                <h3 className="text-xl font-bold">
                  Available Food
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#3F352C]/65">
                  Browse surplus food that is currently available for
                  collection.
                </p>

                <button
                  onClick={() => navigate("/food-listings")}
                  className="mt-5 rounded-xl bg-[#006B3F] px-5 py-3 font-bold text-white transition hover:bg-[#005531]"
                >
                  Browse Food
                </button>

              </div>

              {/* MY REQUESTS */}
              <div className="rounded-2xl border border-[#3F352C]/10 bg-white p-6 shadow-sm">

                <h3 className="text-xl font-bold">
                  My Requests
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#3F352C]/65">
                  Track the food you have requested and check your
                  request status.
                </p>

                <button
                  onClick={() => navigate("/food-requests")}
                  className="mt-5 rounded-xl border-2 border-[#006B3F] px-5 py-3 font-bold text-[#006B3F] transition hover:bg-[#006B3F] hover:text-white"
                >
                  View Requests
                </button>

              </div>

            </div>

            {/* REQUEST OVERVIEW */}
            <section className="mt-10">

              <h3 className="text-xl font-bold">
                Request Overview
              </h3>

              <p className="mt-2 text-sm text-[#3F352C]/65">
                A quick look at the status of your food requests.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                {/* PENDING */}
                <div className="rounded-2xl border border-[#3F352C]/10 bg-white p-5 shadow-sm">

                  <p className="text-sm font-semibold text-[#3F352C]/60">
                    Pending
                  </p>

                  <p className="mt-2 text-3xl font-bold text-[#D9A441]">
                    {pendingRequests}
                  </p>

                </div>

                {/* APPROVED */}
                <div className="rounded-2xl border border-[#3F352C]/10 bg-white p-5 shadow-sm">

                  <p className="text-sm font-semibold text-[#3F352C]/60">
                    Approved
                  </p>

                  <p className="mt-2 text-3xl font-bold text-[#006B3F]">
                    {approvedRequests}
                  </p>

                </div>

                {/* COMPLETED */}
                <div className="rounded-2xl border border-[#3F352C]/10 bg-white p-5 shadow-sm">

                  <p className="text-sm font-semibold text-[#3F352C]/60">
                    Completed
                  </p>

                  <p className="mt-2 text-3xl font-bold text-[#006B3F]">
                    {completedRequests}
                  </p>

                </div>

                {/* REJECTED */}
                <div className="rounded-2xl border border-[#3F352C]/10 bg-white p-5 shadow-sm">

                  <p className="text-sm font-semibold text-[#3F352C]/60">
                    Rejected
                  </p>

                  <p className="mt-2 text-3xl font-bold text-[#C65D3A]">
                    {rejectedRequests}
                  </p>

                </div>

              </div>

            </section>

          </>

        )}

      </main>

    </div>
  );
}

export default Dashboard;
