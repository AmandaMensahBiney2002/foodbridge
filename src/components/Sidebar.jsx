import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <aside className="flex min-h-screen w-64 flex-col bg-[#006B3F] p-6 text-white">
      
      {/* LOGO */}
      <div className="mb-10">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <img
              src="/images/logo.png"
              alt="FoodBridge logo"
              className="h-8 w-8 object-contain"
            />
          </div>

          <span className="text-xl font-bold">FoodBridge</span>
        </Link>
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-col gap-2">
        <Link
          to="/dashboard"
          className="rounded-lg px-4 py-3 font-medium transition hover:bg-white/10"
        >
          Dashboard
        </Link>

        <Link
          to="/donations"
          className="rounded-lg px-4 py-3 font-medium transition hover:bg-white/10"
        >
          My Donations
        </Link>

        <Link
          to="/food"
          className="rounded-lg px-4 py-3 font-medium transition hover:bg-white/10"
        >
          Available Food
        </Link>

        <Link
          to="/requests"
          className="rounded-lg px-4 py-3 font-medium transition hover:bg-white/10"
        >
          My Requests
        </Link>

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