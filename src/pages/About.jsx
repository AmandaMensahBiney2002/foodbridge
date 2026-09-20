import { Link } from "react-router-dom";

import aboutHeroImage from "../assets/about hero.jpg";
import ourStoryImage from "../assets/our story.jpg";
import whereWeComeFromImage from "../assets/where we come from.jpg";
import howFoodBridgeHelpsImage from "../assets/how foodbridge helps.jpg";
import foodBridgeIdeaImage from "../assets/foodbrideg_idea.jpg";
import feedImage from "../assets/feed.jpg";

function About() {
  return (
    <main className="overflow-hidden bg-[#FCFBF7] text-[#2F2A25]">

      {/* ===================================================== */}
      {/* PAGE INTRO */}
      {/* ===================================================== */}

      <section className="relative min-h-[500px] overflow-hidden bg-[#17241E]">

        {/* Hero image */}
        <img
          src={aboutHeroImage}
          alt="FoodBridge community"
          className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17241E]/95 via-[#17241E]/65 to-[#17241E]/20"></div>

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#17241E]/60 to-transparent"></div>

        {/* Subtle gold glow */}
        <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-[#D9A441]/10 blur-3xl"></div>

        {/* Content */}
        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 md:px-10 md:py-24">

          <div className="max-w-3xl">

            {/* Label */}
            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-[#F3D98B]"></span>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F3D98B]">
                About FoodBridge
              </p>

            </div>


            {/* Heading */}
            <h1 className="mt-5 text-5xl font-bold leading-[1.04] tracking-tight text-white md:text-6xl lg:text-7xl">

              More than food.

              <span className="block text-[#F3D98B]">
                A bridge between people.
              </span>

            </h1>


            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              FoodBridge is a digital platform designed to make the
              redistribution of surplus food more visible, accessible,
              and organized.
            </p>


            {/* Cultural detail */}
            <div className="mt-8 flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#F3D98B]/40 bg-[#17241E]/30 text-lg text-[#F3D98B] backdrop-blur-sm">
                ✦
              </div>

              <div>

                <p className="text-sm font-semibold text-white">
                  A Ghanaian idea with an African outlook.
                </p>

                <p className="mt-1 text-sm text-white/50">
                  Community • Connection • Shared resources
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* GHANA ACCENT */}
      {/* ===================================================== */}

      <div className="flex h-1.5 w-full">
        <div className="w-1/3 bg-[#CE1126]"></div>
        <div className="w-1/3 bg-[#FCD116]"></div>
        <div className="w-1/3 bg-[#006B3F]"></div>
      </div>


      {/* ===================================================== */}
      {/* OUR STORY */}
      {/* ===================================================== */}

      <section className="px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[0.9fr_1.1fr]">

          <div className="relative">

            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full border-[14px] border-[#D9A441]/15"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={ourStoryImage}
                alt="Food being prepared for community sharing"
                className="h-[400px] w-full object-cover md:h-[520px]"
              />
            </div>

          </div>


          <div>

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C65D3A]">
              Our Story
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
              An idea shaped by a real community challenge.
            </h2>

            <div className="mt-7 max-w-2xl space-y-5 text-lg leading-8 text-[#665E55]">

              <p>
                FoodBridge began with a simple observation: edible food can
                become surplus while people and organizations within the same
                communities may still need access to food.
              </p>

              <p>
                Restaurants, hotels, supermarkets, caterers, bakeries,
                farms and other organizations can have food remaining after
                their daily operations. Finding a practical way to connect
                that food with people who can use it is not always easy.
              </p>

              <p>
                FoodBridge was created to provide a structured digital space
                where surplus food can be listed, discovered, requested and
                coordinated for redistribution.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* THE CHALLENGE */}
      {/* ===================================================== */}

      <section className="relative bg-[#F1EBDD] px-6 py-24 md:px-10 md:py-32">

        <div className="absolute right-0 top-0 h-full w-1/3 opacity-[0.06]">
          <div className="h-full w-full bg-[radial-gradient(circle,#006B3F_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
        </div>

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-16 md:grid-cols-2">

            <div className="order-2 md:order-1">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#006B3F]">
                The Challenge
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
                Good food should not be difficult to find.
              </h2>

              <div className="mt-7 max-w-xl space-y-5 text-lg leading-8 text-[#665E55]">

                <p>
                  Food redistribution involves more than simply having food
                  available. People need to know what is available, where it
                  is located, how much is available and how it can be collected.
                </p>

                <p>
                  When information is scattered across different channels,
                  opportunities to redistribute food can easily be missed.
                </p>

              </div>

              <div className="mt-8 max-w-xl rounded-r-2xl border-l-4 border-[#D9A441] bg-white/70 px-6 py-5">
                <p className="font-bold leading-7 text-[#006B3F]">
                  FoodBridge brings these connections together in one
                  digital environment.
                </p>
              </div>

            </div>


            <div className="order-1 relative md:order-2">

              <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#C65D3A]/15"></div>

              <div className="relative overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={foodBridgeIdeaImage}
                  alt="FoodBridge idea and food redistribution"
                  className="h-[400px] w-full object-cover md:h-[500px]"
                />
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* GHANAIAN ROOTS */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#FCFBF7] px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C65D3A]">
                Where We Come From
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
                Rooted in the idea that we are stronger when we share.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#665E55]">
                FoodBridge is born from Ghana, where community, hospitality
                and the sharing of resources are deeply familiar parts of
                everyday life.
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#665E55]">
                We want to bring that spirit into a modern digital platform —
                using technology to make it easier for people and
                organizations to find one another and act on opportunities
                to share.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">

                <span className="rounded-full border border-[#006B3F]/20 bg-[#006B3F]/5 px-5 py-2.5 text-sm font-semibold text-[#006B3F]">
                  Community
                </span>

                <span className="rounded-full border border-[#D9A441]/40 bg-[#D9A441]/10 px-5 py-2.5 text-sm font-semibold text-[#7A5A15]">
                  Sharing
                </span>

                <span className="rounded-full border border-[#C65D3A]/25 bg-[#C65D3A]/5 px-5 py-2.5 text-sm font-semibold text-[#A64B30]">
                  Connection
                </span>

              </div>

            </div>


            {/* Where We Come From image */}
            <div className="relative">

              <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full bg-[#D9A441]/15"></div>

              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={whereWeComeFromImage}
                  alt="Community and food sharing in Ghana"
                  className="h-[400px] w-full object-cover md:h-[500px]"
                />
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* OUR MISSION */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#006B3F] px-6 py-28 md:px-10 md:py-36">

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(#F3D98B 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="relative mx-auto max-w-5xl text-center text-white">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F3D98B]">
            Our Mission
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-[1.05] md:text-6xl">
            Build a more connected
            <span className="block text-[#F3D98B]">
              food-sharing ecosystem.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
            Our mission is to create a reliable digital environment where
            donors, recipients and community organizations can participate
            in food redistribution with greater visibility, coordination
            and accountability.
          </p>

        </div>

      </section>


      {/* ===================================================== */}
      {/* WHAT WE BELIEVE */}
      {/* ===================================================== */}

      <section className="px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#006B3F]">
              What We Believe
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Technology can strengthen community action.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#665E55]">
              FoodBridge is built around simple principles that guide how
              the platform connects people and organizations.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-[#E5DFD3] bg-white p-8 shadow-sm">

              <span className="text-sm font-bold text-[#C65D3A]">
                01
              </span>

              <h3 className="mt-6 text-2xl font-bold">
                Community
              </h3>

              <p className="mt-4 leading-7 text-[#665E55]">
                Strong communities are built when people and organizations
                have opportunities to support one another.
              </p>

              <div className="mt-7 h-1 w-10 rounded-full bg-[#C65D3A]"></div>

            </div>


            <div className="rounded-2xl border border-[#E5DFD3] bg-white p-8 shadow-sm">

              <span className="text-sm font-bold text-[#A2761E]">
                02
              </span>

              <h3 className="mt-6 text-2xl font-bold">
                Responsibility
              </h3>

              <p className="mt-4 leading-7 text-[#665E55]">
                Available food is a valuable resource. We believe it should
                have opportunities to create value within communities.
              </p>

              <div className="mt-7 h-1 w-10 rounded-full bg-[#D9A441]"></div>

            </div>


            <div className="rounded-2xl border border-[#E5DFD3] bg-white p-8 shadow-sm">

              <span className="text-sm font-bold text-[#006B3F]">
                03
              </span>

              <h3 className="mt-6 text-2xl font-bold">
                Sustainability
              </h3>

              <p className="mt-4 leading-7 text-[#665E55]">
                Better food-sharing systems can encourage more thoughtful
                use of resources and help reduce avoidable food waste.
              </p>

              <div className="mt-7 h-1 w-10 rounded-full bg-[#006B3F]"></div>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* HOW FOODBRIDGE HELPS */}
      {/* ===================================================== */}

      <section className="bg-[#F1EBDD] px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#006B3F]">
              How FoodBridge Helps
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
              Turning disconnected opportunities into meaningful connections.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#665E55]">
              FoodBridge gives donors a place to share information about
              surplus food and gives recipients a way to discover available
              opportunities.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#665E55]">
              By bringing these activities together, the platform can make
              food redistribution easier to organize and participate in.
            </p>


            <div className="mt-9 space-y-5">

              <div className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#006B3F]"></span>

                <p className="leading-7 text-[#665E55]">
                  Make surplus food easier to discover.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#D9A441]"></span>

                <p className="leading-7 text-[#665E55]">
                  Improve communication between donors and recipients.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#C65D3A]"></span>

                <p className="leading-7 text-[#665E55]">
                  Support more organized food redistribution.
                </p>
              </div>

            </div>

          </div>


          <div className="relative">

            <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full border-[12px] border-[#006B3F]/10"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={howFoodBridgeHelpsImage}
                alt="People packing and distributing food"
                className="h-[400px] w-full object-cover md:h-[500px]"
              />
            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* FEED / PURPOSE */}
      {/* ===================================================== */}

      <section className="px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          <div className="relative">

            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-[#C65D3A]/10"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={feedImage}
                alt="Food prepared to feed people"
                className="h-[400px] w-full object-cover md:h-[500px]"
              />
            </div>

          </div>


          <div>

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C65D3A]">
              Why This Matters
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
              Food is more than a resource. It connects people.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#665E55]">
              Food has always been part of how communities come together.
              FoodBridge builds on that familiar human connection by creating
              a digital pathway for surplus food to move toward people who
              can use it.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#665E55]">
              We believe technology should not replace community. It should
              help communities coordinate, communicate and act more easily.
            </p>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* AFRICAN VISION */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#17241E] px-6 py-28 md:px-10 md:py-36">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[50px] border-[#D9A441]/10"></div>

        <div className="relative mx-auto max-w-7xl">

          <div className="text-center text-white">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F3D98B]">
              Our African Vision
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-[1.05] md:text-6xl">
              Born in Ghana.
              <span className="block text-[#F3D98B]">
                Built for Africa.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/70">
              FoodBridge begins with a Ghanaian perspective and a vision
              that extends beyond one community.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/70">
              As the platform develops, our goal is to support food
              redistribution across different African communities while
              respecting their unique needs, cultures and realities.
            </p>

            <div className="mx-auto mt-9 h-px w-20 bg-[#D9A441]"></div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#006B3F] px-6 py-24 md:px-10 md:py-32">

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(#F3D98B 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        ></div>

        <div className="relative mx-auto max-w-4xl text-center text-white">

          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#F3D98B]"></span>
            <span className="h-2 w-2 rounded-full bg-[#F3D98B]"></span>
            <span className="h-px w-10 bg-[#F3D98B]"></span>
          </div>

          <p className="font-bold uppercase tracking-[0.18em] text-[#F3D98B]">
            Be Part of the Bridge
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Together, we can make food sharing easier.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Whether you are a food business, organization or community
            member, there is a role for you in building a better food
            redistribution system.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/signup"
              className="rounded-lg bg-[#F3D98B] px-8 py-4 font-bold text-[#2F2A25] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Join FoodBridge
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-white/60 px-8 py-4 font-bold text-white transition hover:border-white hover:bg-white hover:text-[#006B3F]"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* GHANA COLOUR ACCENT */}
      {/* ===================================================== */}

      <div className="flex h-1.5 w-full">
        <div className="w-1/3 bg-[#CE1126]"></div>
        <div className="w-1/3 bg-[#FCD116]"></div>
        <div className="w-1/3 bg-[#006B3F]"></div>
      </div>

    </main>
  );
}

export default About;