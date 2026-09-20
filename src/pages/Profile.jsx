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
    phone: storedUser?.phone || "",
    profile_photo: storedUser?.profile_photo || "",
    display_name: storedUser?.display_name || "",
    profile_type: storedUser?.profile_type || "individual",
    bio: storedUser?.bio || "",
    location: storedUser?.location || ""
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

  const profileTypeLabels = {
    individual: "Individual",
    food_business: "Food Business",
    organization: "Organization"
  };

  const profileType =
    profileTypeLabels[user.profile_type] ||
    "Individual";

  const formatDate = (date) => {
    if (!date) return "";

    const dateString = String(date).slice(0, 10);

    const match = dateString.match(
      /^(\d{4})-(\d{2})-(\d{2})$/
    );

    if (!match) {
      return dateString;
    }

    const [, year, month, day] = match;

    return `${day}/${month}/${year}`;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleEdit = () => {
    setFormData({
      first_name: user.first_name || "",
      last_name: user.last_name || "",
      phone: user.phone || "",
      profile_photo: user.profile_photo || "",
      display_name: user.display_name || "",
      profile_type: user.profile_type || "individual",
      bio: user.bio || "",
      location: user.location || ""
    });

    setMessage("");
    setError("");
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData({
      first_name: user.first_name || "",
      last_name: user.last_name || "",
      phone: user.phone || "",
      profile_photo: user.profile_photo || "",
      display_name: user.display_name || "",
      profile_type: user.profile_type || "individual",
      bio: user.bio || "",
      location: user.location || ""
    });

    setMessage("");
    setError("");
    setIsEditing(false);
  };

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

      setUser(data.user);

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
            Manage the information people see about you
            on FoodBridge.
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

            /* ==================================================
               EDIT PROFILE
               ================================================== */

            <form onSubmit={handleSave}>

              {/* PROFILE PHOTO URL */}
              <div className="mb-6">

                <label
                  htmlFor="profile_photo"
                  className="mb-2 block text-sm font-semibold"
                >
                  Profile Photo
                </label>

                <input
                  id="profile_photo"
                  name="profile_photo"
                  type="url"
                  value={formData.profile_photo}
                  onChange={handleChange}
                  placeholder="Paste your profile photo URL"
                  className="w-full rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/10"
                />

                <p className="mt-2 text-xs text-[#3F352C]/50">
                  You can add a profile photo later. For now,
                  FoodBridge stores the photo URL.
                </p>

              </div>

              {/* FIRST + LAST NAME */}
              <div className="grid gap-6 md:grid-cols-2">

                <div className="mb-2">

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

                <div className="mb-2">

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

              </div>

              {/* DISPLAY NAME */}
              <div className="mt-6 mb-6">

                <label
                  htmlFor="display_name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Display Name
                </label>

                <input
                  id="display_name"
                  name="display_name"
                  type="text"
                  value={formData.display_name}
                  onChange={handleChange}
                  placeholder="e.g. Ama's Kitchen or Kumasi Community Outreach"
                  className="w-full rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/10"
                />

                <p className="mt-2 text-xs text-[#3F352C]/50">
                  Use this if you want your profile to have a
                  name different from your personal name.
                </p>

              </div>

              {/* PROFILE TYPE */}
              <div className="mb-6">

                <label
                  htmlFor="profile_type"
                  className="mb-2 block text-sm font-semibold"
                >
                  Profile Type
                </label>

                <select
                  id="profile_type"
                  name="profile_type"
                  value={formData.profile_type}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/10"
                >
                  <option value="individual">
                    Individual
                  </option>

                  <option value="food_business">
                    Food Business
                  </option>

                  <option value="organization">
                    Organization
                  </option>
                </select>

                <p className="mt-2 text-xs text-[#3F352C]/50">
                  This describes the kind of profile you
                  represent on FoodBridge.
                </p>

              </div>

              {/* BIO */}
              <div className="mb-6">

                <label
                  htmlFor="bio"
                  className="mb-2 block text-sm font-semibold"
                >
                  About You
                </label>

                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows="4"
                  maxLength="500"
                  placeholder="Tell the FoodBridge community a little about yourself or your organization..."
                  className="w-full resize-none rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/10"
                />

                <p className="mt-2 text-xs text-[#3F352C]/50">
                  Maximum 500 characters.
                </p>

              </div>

              {/* LOCATION */}
              <div className="mb-6">

                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-semibold"
                >
                  General Location
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Kumasi, Ghana"
                  className="w-full rounded-xl border border-[#3F352C]/15 bg-[#FFFDF5] px-4 py-3 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/10"
                />

                <p className="mt-2 text-xs text-[#3F352C]/50">
                  Use a general area rather than your exact
                  home address.
                </p>

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
                  FoodBridge Account Type
                </p>

                <span className="inline-block rounded-full bg-[#E8F3EC] px-4 py-2 text-sm font-semibold text-[#006B3F]">
                  {accountType}
                </span>

                <p className="mt-2 text-xs text-[#3F352C]/50">
                  Your account type determines whether you
                  donate or receive food.
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

            /* ==================================================
               PROFILE DISPLAY
               ================================================== */

            <>

              {/* PROFILE HEADER */}
              <div className="flex flex-col gap-5 border-b border-[#3F352C]/10 pb-8 sm:flex-row sm:items-center">

                {/* PROFILE IMAGE */}
                <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#E8F3EC] text-3xl font-bold text-[#006B3F]">

                  {user.profile_photo ? (
                    <img
                      src={user.profile_photo}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    `${user.first_name?.charAt(0) || ""}${user.last_name?.charAt(0) || ""}`
                  )}

                </div>

                <div>

                  <div className="flex flex-wrap items-center gap-3">

                    <h2 className="text-2xl font-bold">
                      {user.display_name ||
                        `${user.first_name} ${user.last_name}`}
                    </h2>

                    {user.is_verified && (
                      <span className="rounded-full bg-[#E8F3EC] px-3 py-1 text-xs font-bold text-[#006B3F]">
                        ✓ Verified
                      </span>
                    )}

                  </div>

                  <p className="mt-2 text-sm text-[#3F352C]/60">
                    {profileType} · {accountType}
                  </p>

                  {user.location && (
                    <p className="mt-2 text-sm text-[#3F352C]/60">
                      📍 {user.location}
                    </p>
                  )}

                </div>

              </div>

              {/* BIO */}
              {user.bio && (
                <div className="border-b border-[#3F352C]/10 py-6">

                  <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                    About
                  </p>

                  <p className="mt-3 leading-7 text-[#3F352C]/80">
                    {user.bio}
                  </p>

                </div>
              )}

              {/* FULL NAME */}
              <div className="border-b border-[#3F352C]/10 py-6">

                <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                  Full Name
                </p>

                <p className="mt-2 text-lg font-bold">
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

              {/* PROFILE TYPE */}
              <div className="border-b border-[#3F352C]/10 py-6">

                <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                  Profile Type
                </p>

                <span className="mt-2 inline-block rounded-full bg-[#F8F1E5] px-4 py-2 text-sm font-semibold text-[#3F352C]">
                  {profileType}
                </span>

              </div>

              {/* ACCOUNT TYPE */}
              <div className="border-b border-[#3F352C]/10 py-6">

                <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                  FoodBridge Account
                </p>

                <span className="mt-2 inline-block rounded-full bg-[#E8F3EC] px-4 py-2 text-sm font-semibold text-[#006B3F]">
                  {accountType}
                </span>

              </div>

              {/* MEMBER SINCE */}
              <div className="pt-6">

                <p className="text-xs font-semibold uppercase tracking-wide text-[#3F352C]/50">
                  Member Since
                </p>

                <p className="mt-2">
                  {formatDate(user.created_at)}
                </p>

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