import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PublicProfile() {
  const { id } = useParams();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://foodbridge-backend-l3b0.onrender.com/api/profiles/${id}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "Failed to load profile"
          );
        }

        setProfile(data.profile);
      } catch (error) {
        console.error("Error loading profile:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  const getInitials = () => {
    if (!profile) return "";

    const first =
      profile.first_name?.charAt(0) || "";

    const last =
      profile.last_name?.charAt(0) || "";

    return `${first}${last}`.toUpperCase();
  };

  const formatProfileType = (type) => {
    if (!type) return "Individual";

    if (type === "food_business") {
      return "Food Business";
    }

    if (type === "organization") {
      return "Organization";
    }

    return "Individual";
  };

  const formatAccountType = (type) => {
    if (!type) return "";

    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const formatMemberSince = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#FCFBF7] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[#6B6259]">
            Loading profile...
          </p>
        </div>
      </main>
    );
  }

  if (error || !profile) {
    return (
      <main className="min-h-screen bg-[#FCFBF7] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[#E7DED2] bg-white p-10 text-center shadow-sm">
            <h1 className="text-2xl font-semibold text-[#2F2A25]">
              Profile unavailable
            </h1>

            <p className="mt-3 text-[#6B6259]">
              {error || "We could not find this profile."}
            </p>

            <Link
              to="/dashboard"
              className="mt-6 inline-block rounded-xl bg-[#1F5D42] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#174A34]"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FCFBF7] px-6 py-12 text-[#2F2A25]">
      <div className="mx-auto max-w-4xl">

        {/* BACK LINK */}
        <Link
          to="/dashboard"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#1F5D42] hover:underline"
        >
          ← Back to Dashboard
        </Link>

        {/* PROFILE HEADER */}
        <section className="overflow-hidden rounded-3xl border border-[#E7DED2] bg-white shadow-sm">

          <div className="h-32 bg-[#1F5D42]" />

          <div className="px-6 pb-8 sm:px-10">

            {/* PROFILE IMAGE */}
            <div className="-mt-16 mb-6 flex items-end justify-between">

              {profile.profile_photo ? (
                <img
                  src={profile.profile_photo}
                  alt={profile.display_name || profile.full_name}
                  className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-md"
                />
              ) : (
                <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-[#D9A441] text-3xl font-bold text-[#2F2A25] shadow-md">
                  {getInitials()}
                </div>
              )}

              {profile.is_verified && (
                <span className="mb-2 rounded-full bg-[#EEF7F1] px-4 py-2 text-sm font-semibold text-[#1F5D42]">
                  ✓ Verified
                </span>
              )}
            </div>

            {/* NAME */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                {profile.display_name ||
                  profile.full_name}
              </h1>

              {profile.display_name && (
                <p className="mt-1 text-sm text-[#7A7067]">
                  {profile.full_name}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#F8F1E5] px-4 py-2 text-sm font-medium text-[#6A5530]">
                  {formatProfileType(
                    profile.profile_type
                  )}
                </span>

                <span className="rounded-full bg-[#F1F4F2] px-4 py-2 text-sm font-medium text-[#1F5D42]">
                  {formatAccountType(
                    profile.account_type
                  )}
                </span>
              </div>
            </div>

            {/* BIO */}
            {profile.bio && (
              <div className="mt-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#7A7067]">
                  About
                </h2>

                <p className="mt-2 max-w-2xl leading-7 text-[#4D4640]">
                  {profile.bio}
                </p>
              </div>
            )}

            {/* DETAILS */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {profile.location && (
                <div className="rounded-2xl bg-[#FCFBF7] p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8178]">
                    Location
                  </p>

                  <p className="mt-2 font-medium text-[#2F2A25]">
                    {profile.location}
                  </p>
                </div>
              )}

              {profile.created_at && (
                <div className="rounded-2xl bg-[#FCFBF7] p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8178]">
                    Member Since
                  </p>

                  <p className="mt-2 font-medium text-[#2F2A25]">
                    {formatMemberSince(
                      profile.created_at
                    )}
                  </p>
                </div>
              )}

            </div>

          </div>
        </section>

        {/* TRUST MESSAGE */}
        <section className="mt-6 rounded-2xl border border-[#E7DED2] bg-[#F8F1E5] p-6">
          <h2 className="font-semibold text-[#2F2A25]">
            FoodBridge Community Profile
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#6B6259]">
            Public profile information helps FoodBridge
            members understand who they are interacting
            with while keeping private account information
            protected.
          </p>
        </section>

      </div>
    </main>
  );
}

export default PublicProfile;