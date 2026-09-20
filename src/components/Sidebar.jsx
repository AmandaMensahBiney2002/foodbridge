
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const storedUser = JSON.parse(
    localStorage.getItem("user")
  );

  const accountType = storedUser?.account_type;

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <aside className="flex min-h-screen w-64 flex-col bg-[#006B3F] p-6 text-white">

      {/* LOGO */}
      <div className="mb-10">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white">
            <img
              src="/images/logo.jpg"
              alt="FoodBridge logo"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>

          <span className="text-xl font-bold">
            FoodBridge
          </span>
        </Link>
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-col gap-2">

        {/* DASHBOARD */}
        <Link
          to="/dashboard"
          className="rounded-lg px-4 py-3 font-medium transition hover:bg-white/10"
        >
          Dashboard
        </Link>

        {/* DONOR NAVIGATION */}
        {accountType === "donor" && (
          <>
            <Link
              to="/food-listings"
              className="rounded-lg px-4 py-3 font-medium transition hover:bg-white/10"
            >
              My Donations
            </Link>

            <Link
              to="/food-requests"
              className="rounded-lg px-4 py-3 font-medium transition hover:bg-white/10"
            >
              Food Requests
            </Link>
          </>
        )}

        {/* RECIPIENT NAVIGATION */}
        {accountType === "recipient" && (
          <>
            <Link
              to="/food-listings"
              className="rounded-lg px-4 py-3 font-medium transition hover:bg-white/10"
            >
              Available Food
            </Link>

            <Link
              to="/food-requests"
              className="rounded-lg px-4 py-3 font-medium transition hover:bg-white/10"
            >
              My Requests
            </Link>
          </>
        )}

        {/* PROFILE */}
        <Link
          to="/profile"
          className="rounded-lg px-4 py-3 font-medium transition hover:bg-white/10"
        >
          Profile
        </Link>

      </nav>

      {/* LOGOUT */}
      <div className="mt-auto border-t border-white/20 pt-6">
        <button
          type="button"
          onClick={handleLogout}
          className="w-full rounded-lg border border-white/30 px-4 py-3 text-left font-medium transition hover:bg-white/10"
        >
          Log Out
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;
