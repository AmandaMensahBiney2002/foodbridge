
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const storedUser = JSON.parse(
    localStorage.getItem("user")
  );

  const [user, setUser] = useState(storedUser);

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    first_name: storedUser?.first_name || "",
    last_name: storedUser?.last_name || "",
    phone: storedUser?.phone || ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  if (!user) {
    navigate("/login");
    return null;
  }

  const accountType =
    user.account_type === "donor"
      ? "Donor"
      : "Recipient";

  // Handle form changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  // Start editing
  const handleEdit = () => {
    setFormData({
      first_name: user.first_name || "",
      last_name: user.last_name || "",
      phone: user.phone || ""
    });

    setMessage("");
    setError("");
    setIsEditing(true);
  };

  // Cancel editing
  const handleCancel = () => {
    setFormData({
      first_name: user.first_name || "",
      last_name: user.last_name || "",
      phone: user.phone || ""
    });

    setMessage("");
    setError("");
    setIsEditing(false);
  };

  // Save profile
  const handleSave = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");
    setSaving(true);

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/profile",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to update profile"
        );
      }

      // Update the user information
      setUser(data.user);

      // Update localStorage
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      setMessage("Profile updated successfully.");
      setIsEditing(false);
    } catch (error) {
      console.error(
        "Error updating profile:",
        error
      );

      setError(error.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] px-6 py-12 text-[#3F352C] md:px-12">

      <div className="mx-auto max-w-4xl">

        {/* HEADER */}
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#006B3F]">
            FoodBridge
          </p>

          <h1 className="text-3xl font-bold md:text-4xl">
            My Profile
          </h1>

          <p className="mt-3 text-[#3F352C]/65">
            Manage your FoodBridge account information.
          </p>
        </div>

        {/* PROFILE CARD */}
        <div className="mt-10 rounded-2xl border border-[#3F352C]/10 bg-white p-6 shadow-sm md:p-8">

          {/* SUCCESS MESSAGE */}
          {message && (
            <div className="mb-6 rounded-xl border border-[#006B3F]/20 bg-[#E8F3EC] px-4 py-3 text-sm font-semibold text-[#006B3F]">
              {message}
            </div>
          )}

          {/* ERROR MESSAGE */}
          {error && (
            <div className="mb-6 rounded-xl border border-[#C65D3A]/20 bg-[#FFF0EB] px-4 py-3 text-sm font-semibold text-[#C65D3A]">
              {error}
            </div>
          )}

          {isEditing ? (

            /* =========================
               EDIT PROFILE FORM
               ========================= */

            <form onSubmit={handleSave}>

              {/* FIRST NAME */}
              <div className="mb-6">

                <label
                  htmlFor="first_name"
                  className="mb-2 block text-sm font-semibold"
                >
                  First Name
                </label>

                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/10"
                />

              </div>

              {/* LAST NAME */}
              <div className="mb-6">

                <label
                  htmlFor="last_name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Last Name
                </label>

                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/10"
                />

              </div>

              {/* EMAIL */}
              <div className="mb-6">

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={user.email}
                  disabled
                  className="w-full cursor-not-allowed rounded-xl border border-[#3F352C]/10 bg-gray-100 px-4 py-3 text-[#3F352C]/55"
                />

                <p className="mt-2 text-xs text-[#3F352C]/50">
                  Email address cannot be changed here.
                </p>

              </div>

              {/* PHONE */}
              <div className="mb-6">

                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/10"
                />

              </div>

              {/* ACCOUNT TYPE */}
              <div className="mb-8">

                <p className="mb-2 text-sm font-semibold">
                  Account Type
                </p>

                <span className="inline-block rounded-full bg-[#E8F3EC] px-4 py-2 text-sm font-semibold text-[#006B3F]">
                  {accountType}
                </span>

                <p className="mt-2 text-xs text-[#3F352C]/50">
                  Account type cannot be changed here.
                </p>

              </div>

              {/* BUTTONS */}
              <div className="flex flex-col gap-3 sm:flex-row">

                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-xl bg-[#006B3F] px-6 py-3 font-bold text-white transition hover:bg-[#005531] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving
                    ? "Saving..."
                    : "Save Changes"}
                </button>

                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={saving}
                  className="rounded-xl border-2 border-[#3F352C]/15 px-6 py-3 font-bold transition hover:bg-[#FFFDF5] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Cancel
                </button>

              </div>

            </form>

          ) : (

            /* =========================
               PROFILE DISPLAY
               ========================= */

            <>

              {/* NAME */}
              <div className="border-b border-[#3F352C]/10 pb-6">

                <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                  Full Name
                </p>

                <p className="mt-2 text-xl font-bold">
                  {user.first_name} {user.last_name}
                </p>

              </div>

              {/* EMAIL */}
              <div className="border-b border-[#3F352C]/10 py-6">

                <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                  Email Address
                </p>

                <p className="mt-2">
                  {user.email}
                </p>

              </div>

              {/* PHONE */}
              <div className="border-b border-[#3F352C]/10 py-6">

                <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                  Phone Number
                </p>

                <p className="mt-2">
                  {user.phone || "Not provided"}
                </p>

              </div>

              {/* ACCOUNT TYPE */}
              <div className="pt-6">

                <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                  Account Type
                </p>

                <span className="mt-2 inline-block rounded-full bg-[#E8F3EC] px-4 py-2 text-sm font-semibold text-[#006B3F]">
                  {accountType}
                </span>

              </div>

              {/* EDIT BUTTON */}
              <div className="mt-8 border-t border-[#3F352C]/10 pt-6">

                <button
                  onClick={handleEdit}
                  className="rounded-xl bg-[#006B3F] px-6 py-3 font-bold text-white transition hover:bg-[#005531]"
                >
                  Edit Profile
                </button>

              </div>

            </>

          )}

        </div>

      </div>

    </div>
  );
}

export default Profile;
