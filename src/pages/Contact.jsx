import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("");
    setError("");
    setSending(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to send your message."
        );
      }

      setStatus(
        "Your message has been sent successfully. We will get back to you soon."
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setError(
        error.message ||
          "Unable to send your message. Please try again later."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="bg-[#F8F6F1] text-[#2F2A25]">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#163F32] text-white">

        {/* Ghana accent */}
        <div className="h-1.5 w-full bg-[linear-gradient(to_right,#CE1126_33.33%,#FCD116_33.33%,#FCD116_66.66%,#006B3F_66.66%)]"></div>

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D9A441]/10 blur-3xl"></div>

        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-[#F3D98B]"></span>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F3D98B]">
                Get in touch
              </p>

            </div>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Let’s start a
              <span className="block text-[#F3D98B]">
                conversation.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              Have a question, want to partner with FoodBridge, or need
              help using the platform? We’re here to listen.
            </p>

          </div>

        </div>
      </section>


      {/* ===================================================== */}
      {/* CONTACT AREA */}
      {/* ===================================================== */}

      <section className="py-16 md:py-24">

        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* ================================================= */}
          {/* CONTACT INFORMATION */}
          {/* ================================================= */}

          <div className="flex flex-col justify-center">

            <div className="max-w-lg">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#006B3F]">
                Contact FoodBridge
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                Let’s give surplus food a purpose.
              </h2>

              <p className="mt-5 text-base leading-7 text-[#2F2A25]/65 md:text-lg">
                FoodBridge connects food businesses, organizations,
                volunteers, and communities to help move surplus food
                where it can make a difference.
              </p>

            </div>


            {/* CONTACT DETAILS */}

            <div className="mt-10 border-t border-[#2F2A25]/10 pt-8">

              <div className="space-y-7">

                {/* EMAIL */}

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#006B3F]/10 text-[#006B3F]">
                    <span className="text-lg">✉</span>
                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2F2A25]/45">
                      Email
                    </p>

                    <a
                      href="mailto:Foodbridge.notifications@gmail.com"
                      className="mt-1 block font-medium transition hover:text-[#006B3F]"
                    >
                      Foodbridge.notifications@gmail.com
                    </a>

                  </div>

                </div>


                {/* PHONE */}

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D9A441]/15 text-[#8A681F]">
                    <span className="text-lg">☎</span>
                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2F2A25]/45">
                      Phone
                    </p>

                    <a
                      href="tel:+233558696221"
                      className="mt-1 block font-medium transition hover:text-[#006B3F]"
                    >
                      +233 558 696 221
                    </a>

                  </div>

                </div>


                {/* LOCATION */}

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C65D3A]/10 text-[#C65D3A]">
                    <span className="text-lg">●</span>
                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2F2A25]/45">
                      Location
                    </p>

                    <p className="mt-1 font-medium">
                      Ghana
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* SMALL BRAND MESSAGE */}

            <div className="mt-10 rounded-2xl border border-[#D9A441]/20 bg-[#D9A441]/8 p-5">

              <p className="text-sm font-semibold text-[#2F2A25]">
                Born in Ghana. Built for Africa.
              </p>

              <p className="mt-2 text-sm leading-6 text-[#2F2A25]/60">
                Every conversation helps us understand how FoodBridge
                can better serve the communities it is built for.
              </p>

            </div>

          </div>


          {/* ================================================= */}
          {/* CONTACT FORM */}
          {/* ================================================= */}

          <div className="rounded-[28px] border border-[#2F2A25]/8 bg-white p-6 shadow-[0_18px_55px_rgba(47,42,37,0.08)] md:p-9 lg:p-10">

            <div className="border-b border-[#2F2A25]/8 pb-6">

              <div className="flex items-center justify-between gap-4">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#006B3F]">
                    Send a message
                  </p>

                  <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                    How can we help?
                  </h2>

                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#006B3F]/10 text-[#006B3F] sm:flex">
                  ✉
                </div>

              </div>

              <p className="mt-3 max-w-lg text-sm leading-6 text-[#2F2A25]/55">
                Fill in the details below and our team will get back
                to you as soon as possible.
              </p>

            </div>


            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >

              {/* NAME + EMAIL */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full rounded-xl border border-[#2F2A25]/12 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#2F2A25]/30 focus:border-[#006B3F] focus:bg-white focus:ring-4 focus:ring-[#006B3F]/8"
                  />

                </div>


                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-[#2F2A25]/12 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#2F2A25]/30 focus:border-[#006B3F] focus:bg-white focus:ring-4 focus:ring-[#006B3F]/8"
                  />

                </div>

              </div>


              {/* SUBJECT */}

              <div>

                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to talk about?"
                  required
                  className="w-full rounded-xl border border-[#2F2A25]/12 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#2F2A25]/30 focus:border-[#006B3F] focus:bg-white focus:ring-4 focus:ring-[#006B3F]/8"
                />

              </div>


              {/* MESSAGE */}

              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  required
                  className="w-full resize-none rounded-xl border border-[#2F2A25]/12 bg-[#F8F6F1] px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-[#2F2A25]/30 focus:border-[#006B3F] focus:bg-white focus:ring-4 focus:ring-[#006B3F]/8"
                ></textarea>

              </div>


              {/* SUCCESS MESSAGE */}

              {status && (
                <div className="flex items-start gap-3 rounded-xl border border-[#006B3F]/15 bg-[#006B3F]/8 px-4 py-3.5 text-sm font-medium text-[#006B3F]">

                  <span className="mt-0.5">✓</span>

                  <span>{status}</span>

                </div>
              )}


              {/* ERROR MESSAGE */}

              {error && (
                <div className="flex items-start gap-3 rounded-xl border border-[#C65D3A]/15 bg-[#C65D3A]/8 px-4 py-3.5 text-sm font-medium text-[#A64B31]">

                  <span className="mt-0.5">!</span>

                  <span>{error}</span>

                </div>
              )}


              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-xl bg-[#006B3F] px-6 py-3.5 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#005631] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              <p className="text-center text-xs leading-5 text-[#2F2A25]/45">
                We’ll only use your information to respond to your
                message.
              </p>

            </form>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* WHO CAN CONTACT US */}
      {/* ===================================================== */}

      <section className="border-y border-[#2F2A25]/8 bg-[#EFE8DC] py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="max-w-2xl">

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-[#C65D3A]"></span>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C65D3A]">
                Who can reach out?
              </p>

            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              There’s a place for everyone in the FoodBridge community.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#2F2A25]/65 md:text-lg">
              Whether you have food to share, want to support
              redistribution, or need help using the platform, we’d
              love to hear from you.
            </p>

          </div>


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* FOOD BUSINESSES */}

            <div className="group rounded-2xl border border-[#2F2A25]/6 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="mb-6 h-1 w-10 rounded-full bg-[#006B3F] transition-all group-hover:w-14"></div>

              <h3 className="font-bold">
                Food Businesses
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#2F2A25]/60">
                Ask about donating surplus food through FoodBridge.
              </p>

            </div>


            {/* ORGANIZATIONS */}

            <div className="group rounded-2xl border border-[#2F2A25]/6 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="mb-6 h-1 w-10 rounded-full bg-[#D9A441] transition-all group-hover:w-14"></div>

              <h3 className="font-bold">
                Organizations
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#2F2A25]/60">
                Explore ways to work with us to support communities.
              </p>

            </div>


            {/* INDIVIDUALS */}

            <div className="group rounded-2xl border border-[#2F2A25]/6 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="mb-6 h-1 w-10 rounded-full bg-[#C65D3A] transition-all group-hover:w-14"></div>

              <h3 className="font-bold">
                Individuals
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#2F2A25]/60">
                Get help using FoodBridge or finding available food.
              </p>

            </div>


            {/* VOLUNTEERS */}

            <div className="group rounded-2xl border border-[#2F2A25]/6 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="mb-6 h-1 w-10 rounded-full bg-[#006B3F] transition-all group-hover:w-14"></div>

              <h3 className="font-bold">
                Volunteers
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#2F2A25]/60">
                Find out how you can contribute to food redistribution.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* FINAL CTA */}
      {/* ===================================================== */}

      <section className="bg-[#163F32] py-16 text-white md:py-20">

        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F3D98B]">
            FoodBridge
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Let’s build a stronger food system together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
            Join FoodBridge and become part of a growing movement to
            redistribute surplus food and strengthen communities.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/signup"
              className="rounded-xl bg-[#D9A441] px-7 py-3.5 font-bold text-[#2F2A25] transition hover:-translate-y-0.5 hover:bg-[#c89432]"
            >
              Join FoodBridge
            </Link>

            <a
              href="mailto:Foodbridge.notifications@gmail.com"
              className="rounded-xl border border-white/25 px-7 py-3.5 font-bold text-white transition hover:border-white hover:bg-white hover:text-[#163F32]"
            >
              Email Us
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;