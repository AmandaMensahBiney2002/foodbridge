
function Contact() {
  return (
    <div className="bg-[#FFFDF5] text-[#3F352C]">

      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}

      <section className="bg-[#006B3F] py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-10">

          <p className="mb-3 font-semibold uppercase tracking-wide text-[#FCD116]">
            Contact FoodBridge
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Let’s connect and make a difference.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Have a question, want to partner with FoodBridge, or need help
            using the platform? We would love to hear from you.
          </p>

        </div>
      </section>


      {/* ========================= */}
      {/* GHANA COLOUR STRIPE */}
      {/* ========================= */}

      <div className="flex h-2 w-full">
        <div className="w-1/3 bg-[#CE1126]"></div>
        <div className="w-1/3 bg-[#FCD116]"></div>
        <div className="w-1/3 bg-[#006B3F]"></div>
      </div>


      {/* ========================= */}
      {/* CONTACT FORM + DETAILS */}
      {/* ========================= */}

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:px-10">

          {/* CONTACT INFORMATION */}

          <div>

            <p className="mb-3 font-semibold uppercase tracking-wide text-[#006B3F]">
              Get in Touch
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              We’re here to help.
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#3F352C]/80">
              Whether you are a food business with surplus food, an
              organization supporting your community, or someone looking for
              food opportunities, you can reach out to us.
            </p>


            {/* CONTACT DETAILS */}

            <div className="mt-8 space-y-6">

              <div>
                <h3 className="font-bold text-[#006B3F]">
                  Email
                </h3>

                <p className="mt-1">
                  hello@foodbridge.org
                </p>
              </div>


              <div>
                <h3 className="font-bold text-[#006B3F]">
                  Phone
                </h3>

                <p className="mt-1">
                  +233 XX XXX XXXX
                </p>
              </div>


              <div>
                <h3 className="font-bold text-[#006B3F]">
                  Location
                </h3>

                <p className="mt-1">
                  Ghana
                </p>
              </div>

            </div>

          </div>


          {/* ========================= */}
          {/* CONTACT FORM */}
          {/* ========================= */}

          <div className="rounded-xl bg-[#FFF3CD] p-6 shadow-sm md:p-8">

            <h2 className="text-2xl font-bold">
              Send us a message
            </h2>

            <p className="mt-2 text-sm text-[#3F352C]/70">
              Fill out the form and our team will get back to you.
            </p>


            <form className="mt-6 space-y-5">

              {/* NAME */}

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
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-[#3F352C]/20 bg-[#FFFDF5] px-4 py-3 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/20"
                />
              </div>


              {/* EMAIL */}

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
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border border-[#3F352C]/20 bg-[#FFFDF5] px-4 py-3 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/20"
                />
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
                  placeholder="What is your message about?"
                  className="w-full rounded-lg border border-[#3F352C]/20 bg-[#FFFDF5] px-4 py-3 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/20"
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
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-lg border border-[#3F352C]/20 bg-[#FFFDF5] px-4 py-3 outline-none transition focus:border-[#006B3F] focus:ring-2 focus:ring-[#006B3F]/20"
                ></textarea>
              </div>


              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="w-full rounded-lg bg-[#006B3F] px-6 py-3 font-bold text-white transition hover:bg-[#005531]"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>


      {/* ========================= */}
      {/* WHO CAN CONTACT US */}
      {/* ========================= */}

      <section className="bg-[#1C1C1C] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="max-w-3xl">

            <p className="mb-3 font-semibold uppercase tracking-wide text-[#FCD116]">
              Who Can Contact Us?
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              FoodBridge is open to everyone who wants to help.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-white/85">
              Whether you want to donate surplus food, access available food,
              support your community, or work with FoodBridge, we welcome your
              interest.
            </p>

          </div>


          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            <div className="border-l-4 border-[#FCD116] pl-4">
              <h3 className="font-bold text-[#FCD116]">
                Food Businesses
              </h3>

              <p className="mt-2 text-sm text-white/80">
                Contact us about donating surplus food through FoodBridge.
              </p>
            </div>


            <div className="border-l-4 border-[#CE1126] pl-4">
              <h3 className="font-bold">
                Organizations
              </h3>

              <p className="mt-2 text-sm text-white/80">
                Partner with us to support food access in your community.
              </p>
            </div>


            <div className="border-l-4 border-[#006B3F] pl-4">
              <h3 className="font-bold">
                Individuals
              </h3>

              <p className="mt-2 text-sm text-white/80">
                Get help using the platform or finding available food.
              </p>
            </div>


            <div className="border-l-4 border-[#FCD116] pl-4">
              <h3 className="font-bold text-[#FCD116]">
                Volunteers
              </h3>

              <p className="mt-2 text-sm text-white/80">
                Learn how you can contribute to food redistribution efforts.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ========================= */}
      {/* FINAL CTA */}
      {/* ========================= */}

      <section className="bg-[#CE1126] py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">

          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to be part of FoodBridge?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Join a growing community working together to give surplus food a
            purpose and strengthen communities.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="/signup"
              className="rounded-lg bg-[#FCD116] px-6 py-3 font-bold text-[#3F352C] transition hover:bg-[#e5bc0f]"
            >
              Join FoodBridge
            </a>

            <a
              href="mailto:hello@foodbridge.org"
              className="rounded-lg border border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#CE1126]"
            >
              Email Us
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;

