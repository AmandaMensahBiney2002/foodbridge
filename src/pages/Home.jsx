
import { Link } from "react-router-dom";

import heroImage from "../assets/hero.jpg";
import challengeImage from "../assets/the challenge.jpg";
import howItWorksImage from "../assets/how it works.jpg";
import whoFoodBridgeIsForImage from "../assets/who foodbridge is for.jpg";
import africanVisionImage from "../assets/our african vision.jpg";

function Home() {
  return (
    <main className="overflow-hidden bg-[#FCFBF7] text-[#2F2A25]">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative min-h-[680px] overflow-hidden bg-[#006B3F]">

        {/* Hero image */}
        <img
          src={heroImage}
          alt="Community members sharing food"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Darker overlay on the left, softer on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10251C]/90 via-[#10251C]/60 to-[#10251C]/20"></div>

        {/* Subtle warm glow */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#D9A441]/10 blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-24 md:px-10">

          <div className="max-w-3xl text-white">

            {/* Brand statement */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#F3D98B]/30 bg-[#10251C]/30 px-4 py-2 backdrop-blur-sm">

              <span className="h-2 w-2 rounded-full bg-[#F3D98B]"></span>

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F3D98B]">
                Born in Ghana. Built for Africa.
              </p>

            </div>


            {/* Main heading */}
            <h1 className="text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">

              Good food should

              <span className="block text-[#F3D98B]">
                reach people.
              </span>

            </h1>


            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
              FoodBridge connects food businesses, organizations and
              communities so surplus food can reach people who need it
              instead of going to waste.
            </p>


            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/signup"
                className="rounded-lg bg-[#D9A441] px-8 py-4 text-center font-bold text-[#2F2A25] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#F3D98B]"
              >
                Get Started
              </Link>

              <Link
                to="/about"
                className="rounded-lg border border-white/60 bg-white/5 px-8 py-4 text-center font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-[#006B3F]"
              >
                Discover FoodBridge
              </Link>

            </div>


            {/* Trust statement */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">

              <span>Food businesses</span>

              <span className="hidden h-1 w-1 rounded-full bg-[#D9A441] sm:block"></span>

              <span>Community organizations</span>

              <span className="hidden h-1 w-1 rounded-full bg-[#D9A441] sm:block"></span>

              <span>Individuals</span>

            </div>

          </div>

        </div>


        {/* Bottom fade into page */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FCFBF7]/80 to-transparent"></div>

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
      {/* THE CHALLENGE */}
      {/* ===================================================== */}

      <section className="relative px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          <div>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#C65D3A]"></span>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#006B3F]">
                The Challenge
              </p>
            </div>

            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
              Good food can become surplus while people still need it.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#665E55]">
              Restaurants, caterers, hotels, supermarkets and other
              organizations may have edible food left over after daily
              operations.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#665E55]">
              At the same time, individuals, charities and community
              organizations may need access to food.
            </p>

            <div className="mt-8 flex max-w-xl gap-4 rounded-r-xl border-l-4 border-[#D9A441] bg-[#F5F2EA] px-6 py-5">
              <p className="font-semibold leading-7 text-[#006B3F]">
                FoodBridge helps close the gap between available surplus food
                and community need.
              </p>
            </div>

          </div>


          <div className="relative">

            <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full border-8 border-[#D9A441]/20"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={challengeImage}
                alt="Food prepared for redistribution"
                className="h-[390px] w-full object-cover md:h-[500px]"
              />
            </div>

            <div className="absolute -right-4 -top-4 hidden rounded-xl bg-[#006B3F] px-5 py-4 text-white shadow-lg sm:block">

              <p className="text-xs uppercase tracking-wider text-[#F3D98B]">
                The FoodBridge idea
              </p>

              <p className="mt-1 font-bold">
                Food should serve a purpose.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ===================================================== */}
      {/* WHAT FOODBRIDGE DOES */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#F1EBDD] px-6 py-24 md:px-10 md:py-32">

        {/* Decorative shapes */}
        <div className="absolute -right-24 top-20 h-64 w-64 rounded-full border-[40px] border-[#D9A441]/10"></div>

        <div className="absolute -left-20 bottom-10 h-48 w-48 rounded-full border-[30px] border-[#006B3F]/5"></div>

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#D9A441]"></span>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#006B3F]">
                What FoodBridge Does
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              One platform.
              <span className="block text-[#006B3F]">
                A simpler way to share food.
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#665E55]">
              FoodBridge provides a structured connection between those who
              have surplus food and those looking for available food
              opportunities.
            </p>

          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {/* DONATE */}

            <div className="group rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#006B3F] text-sm font-bold text-white">
                01
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Donate
              </h3>

              <p className="mt-4 leading-7 text-[#665E55]">
                Food businesses and organizations can list surplus food with
                details about quantity, location and collection.
              </p>

              <div className="mt-7 h-1 w-10 rounded-full bg-[#006B3F] transition-all group-hover:w-16"></div>

            </div>


            {/* DISCOVER */}

            <div className="group rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D9A441] text-sm font-bold text-[#2F2A25]">
                02
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Discover
              </h3>

              <p className="mt-4 leading-7 text-[#665E55]">
                Individuals and organizations can discover available food
                opportunities within their communities.
              </p>

              <div className="mt-7 h-1 w-10 rounded-full bg-[#D9A441] transition-all group-hover:w-16"></div>

            </div>


            {/* REDISTRIBUTE */}

            <div className="group rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C65D3A] text-sm font-bold text-white">
                03
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Redistribute
              </h3>

              <p className="mt-4 leading-7 text-[#665E55]">
                Requests can be coordinated for collection so surplus food
                can reach people instead of becoming waste.
              </p>

              <div className="mt-7 h-1 w-10 rounded-full bg-[#C65D3A] transition-all group-hover:w-16"></div>

            </div>

          </div>

        </div>
      </section>


      {/* ===================================================== */}
      {/* HOW IT WORKS */}
      {/* ===================================================== */}

      <section className="px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          <div className="relative">

            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-[#D9A441]/15"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={howItWorksImage}
                alt="People packing and distributing food"
                className="h-[400px] w-full object-cover md:h-[510px]"
              />
            </div>

          </div>


          <div>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#006B3F]"></span>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#006B3F]">
                How It Works
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              From surplus food
              <span className="block text-[#006B3F]">
                to community impact.
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#665E55]">
              FoodBridge provides a structured way for donors and recipients
              to connect and coordinate food redistribution.
            </p>


            <div className="relative mt-10 space-y-8">

              {/* connecting line */}
              <div className="absolute bottom-5 left-5 top-5 hidden w-px bg-[#D9A441]/40 sm:block"></div>


              {/* STEP 1 */}

              <div className="relative flex gap-5">

                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#006B3F] text-sm font-bold text-white ring-8 ring-[#FCFBF7]">
                  1
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    Food is listed
                  </h3>

                  <p className="mt-1 leading-6 text-[#665E55]">
                    A donor provides information about available surplus food.
                  </p>
                </div>

              </div>


              {/* STEP 2 */}

              <div className="relative flex gap-5">

                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D9A441] text-sm font-bold text-[#2F2A25] ring-8 ring-[#FCFBF7]">
                  2
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    Food is discovered
                  </h3>

                  <p className="mt-1 leading-6 text-[#665E55]">
                    Recipients can find food that is available in their
                    communities.
                  </p>
                </div>

              </div>


              {/* STEP 3 */}

              <div className="relative flex gap-5">

                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C65D3A] text-sm font-bold text-white ring-8 ring-[#FCFBF7]">
                  3
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    Collection is coordinated
                  </h3>

                  <p className="mt-1 leading-6 text-[#665E55]">
                    Donors and recipients coordinate how and when the food
                    will be collected.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ===================================================== */}
      {/* WHO FOODBRIDGE IS FOR */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#17241E] px-6 py-24 text-white md:px-10 md:py-32">

        {/* Decorative gold circle */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border-[45px] border-[#D9A441]/10"></div>

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-16 md:grid-cols-2">

            <div className="order-2 md:order-1">

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#F3D98B]"></span>

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F3D98B]">
                  Who FoodBridge Is For
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Built for people,
                <span className="block text-[#F3D98B]">
                  businesses and communities.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                FoodBridge brings different groups together around one shared
                goal: making sure good food can serve a purpose instead of
                becoming waste.
              </p>


              <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">

                {/* Food Businesses */}

                <div className="border-l-2 border-[#F3D98B] pl-5">

                  <h3 className="font-bold text-[#F3D98B]">
                    Food Businesses
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Restaurants, hotels, supermarkets, caterers, bakeries,
                    farms and other businesses.
                  </p>

                </div>


                {/* Organizations */}

                <div className="border-l-2 border-white/20 pl-5">

                  <h3 className="font-bold">
                    Organizations
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Charities, NGOs, shelters and community organizations.
                  </p>

                </div>


                {/* Individuals */}

                <div className="border-l-2 border-white/20 pl-5">

                  <h3 className="font-bold">
                    Individuals
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    People looking for available food opportunities within
                    their communities.
                  </p>

                </div>


                {/* Volunteers */}

                <div className="border-l-2 border-[#F3D98B] pl-5">

                  <h3 className="font-bold text-[#F3D98B]">
                    Volunteers
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    People who want to support food redistribution efforts.
                  </p>

                </div>

              </div>

            </div>


            <div className="relative order-1 md:order-2">

              <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full bg-[#D9A441]/20"></div>

              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={whoFoodBridgeIsForImage}
                  alt="People participating in a community food initiative"
                  className="h-[430px] w-full object-cover md:h-[520px]"
                />
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ===================================================== */}
      {/* AFRICAN VISION */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#006B3F] px-6 py-24 md:px-10 md:py-32">

        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(#F3D98B 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          <div className="relative">

            <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full border-[12px] border-[#F3D98B]/20"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">

              <img
                src={africanVisionImage}
                alt="African community and local food market"
                className="h-[410px] w-full object-cover md:h-[490px]"
              />

            </div>

          </div>


          <div className="text-white">

            <div className="flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-[#F3D98B]"></span>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F3D98B]">
                Our Vision
              </p>

            </div>

            <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">

              Born in Ghana.

              <span className="block text-[#F3D98B]">
                Built for Africa.
              </span>

            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
              FoodBridge begins with a Ghanaian foundation and a vision that
              extends beyond borders. The platform is designed to grow with
              communities across Africa and make food redistribution easier,
              more organized and more accessible.
            </p>

            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#F3D98B] px-8 py-4 font-bold text-[#2F2A25] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Learn About Our Vision
              <span aria-hidden="true">→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* IMPACT */}
      {/* ===================================================== */}

      <section className="relative bg-[#FCFBF7] px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-2xl text-center">

            <div className="flex items-center justify-center gap-3">

              <span className="h-2 w-2 rounded-full bg-[#C65D3A]"></span>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#006B3F]">
                Our Impact
              </p>

              <span className="h-2 w-2 rounded-full bg-[#C65D3A]"></span>

            </div>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Building toward measurable impact.
            </h2>

            <p className="mx-auto mt-5 text-lg leading-8 text-[#665E55]">
              FoodBridge is being built to help communities track the food
              redistributed and the people reached as the platform grows.
            </p>

          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {/* IMPACT 1 */}

            <div className="rounded-2xl border border-[#E8E3D8] bg-white p-8 shadow-sm">

              <div className="text-4xl font-bold text-[#006B3F]">
                01
              </div>

              <p className="mt-6 text-xl font-bold">
                Food redistribution
              </p>

              <p className="mt-3 leading-7 text-[#665E55]">
                Connecting surplus food with people and organizations that
                need it.
              </p>

            </div>


            {/* IMPACT 2 */}

            <div className="rounded-2xl border border-[#E8E3D8] bg-white p-8 shadow-sm">

              <div className="text-4xl font-bold text-[#D9A441]">
                02
              </div>

              <p className="mt-6 text-xl font-bold">
                Community connection
              </p>

              <p className="mt-3 leading-7 text-[#665E55]">
                Creating a structured way for donors and recipients to
                connect.
              </p>

            </div>


            {/* IMPACT 3 */}

            <div className="rounded-2xl border border-[#E8E3D8] bg-white p-8 shadow-sm">

              <div className="text-4xl font-bold text-[#C65D3A]">
                03
              </div>

              <p className="mt-6 text-xl font-bold">
                A growing African vision
              </p>

              <p className="mt-3 leading-7 text-[#665E55]">
                Building a platform designed to grow with communities across
                Africa.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* FINAL CTA */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#17241E] px-6 py-28 text-white md:px-10 md:py-36">

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full border-[45px] border-[#D9A441]/10"></div>

        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full border-[55px] border-[#006B3F]/30"></div>

        <div className="relative mx-auto max-w-4xl text-center">

          <div className="mx-auto mb-7 flex items-center justify-center gap-3">

            <span className="h-px w-10 bg-[#D9A441]"></span>

            <span className="h-2 w-2 rounded-full bg-[#D9A441]"></span>

            <span className="h-px w-10 bg-[#D9A441]"></span>

          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Have surplus food?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
            Don't let good food go to waste. Help connect it with someone
            who needs it.
          </p>

          <Link
            to="/signup"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#D9A441] px-9 py-4 font-bold text-[#2F2A25] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#F3D98B]"
          >
            Join FoodBridge
            <span aria-hidden="true">→</span>
          </Link>

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

export default Home;

