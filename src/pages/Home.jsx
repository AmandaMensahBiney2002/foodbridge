
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="bg-[#FFF9E8] text-[#3F352C]">

      {/* HERO */}
      <section className="relative min-h-[680px] overflow-hidden">
        <img
          src="/images/home-hero.jpg"
          alt="Community members sharing food"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-24 md:px-10">
          <div className="max-w-3xl text-white">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FCD116]">
              Born in Ghana. Built for Africa.
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Good food should
              <span className="block text-[#FCD116]">
                reach people.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
              FoodBridge connects restaurants, businesses, organizations,
              and communities to help surplus food reach people who need it
              instead of going to waste.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/signup"
                className="rounded-lg bg-[#FCD116] px-8 py-3.5 text-center font-bold text-black transition hover:bg-[#E6BC00]"
              >
                Get Started
              </Link>

              <Link
                to="/about"
                className="rounded-lg border-2 border-white px-8 py-3.5 text-center font-semibold text-white transition hover:bg-white hover:text-[#006B3F]"
              >
                Learn More
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* GHANA COLOUR STRIPE */}
      <div className="flex h-2 w-full">
        <div className="w-1/3 bg-[#CE1126]"></div>
        <div className="w-1/3 bg-[#FCD116]"></div>
        <div className="w-1/3 bg-[#006B3F]"></div>
      </div>


      {/* THE CHALLENGE */}
      <section className="bg-[#FFF9E8] px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div>
            <p className="font-bold uppercase tracking-wider text-[#CE1126]">
              The Challenge
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#006B3F] md:text-4xl">
              Good food can become surplus while people still need it.
            </h2>

            <p className="mt-6 leading-8 text-[#6B5E52]">
              Restaurants, caterers, hotels, supermarkets and other
              organizations may have edible food left over after daily
              operations.
            </p>

            <p className="mt-5 leading-8 text-[#6B5E52]">
              At the same time, individuals, charities and community
              organizations may need access to food.
            </p>

            <p className="mt-5 border-l-4 border-[#FCD116] pl-5 font-semibold leading-7 text-[#006B3F]">
              FoodBridge helps close the gap between available surplus food
              and community need.
            </p>
          </div>


          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/food-surplus.jpg"
              alt="Surplus food prepared for redistribution"
              className="h-[380px] w-full object-cover md:h-[460px]"
            />
          </div>

        </div>
      </section>


      {/* WHAT FOODBRIDGE DOES */}
      <section className="bg-[#F6E7C1] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-wider text-[#CE1126]">
              What FoodBridge Does
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#006B3F] md:text-4xl">
              One platform. Three connected actions.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6B5E52]">
              FoodBridge makes it easier to move surplus food from those who
              have it to those who need it.
            </p>
          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {/* DONATE */}
            <div className="rounded-2xl border-t-4 border-[#CE1126] bg-[#FFF9E8] p-8 shadow-sm">
              <span className="text-sm font-bold text-[#CE1126]">
                01
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#006B3F]">
                Donate
              </h3>

              <p className="mt-4 leading-7 text-[#6B5E52]">
                Food businesses and organizations can list surplus food
                with details about quantity, location and collection.
              </p>
            </div>


            {/* DISCOVER */}
            <div className="rounded-2xl border-t-4 border-[#FCD116] bg-[#FFF9E8] p-8 shadow-sm">
              <span className="text-sm font-bold text-[#B08A00]">
                02
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#006B3F]">
                Discover
              </h3>

              <p className="mt-4 leading-7 text-[#6B5E52]">
                Individuals and organizations can discover available food
                opportunities within their communities.
              </p>
            </div>


            {/* REDISTRIBUTE */}
            <div className="rounded-2xl border-t-4 border-[#006B3F] bg-[#FFF9E8] p-8 shadow-sm">
              <span className="text-sm font-bold text-[#006B3F]">
                03
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#006B3F]">
                Redistribute
              </h3>

              <p className="mt-4 leading-7 text-[#6B5E52]">
                Requests can be coordinated for collection so surplus food
                can reach people instead of becoming waste.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="bg-[#FFF3D0] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 md:grid-cols-2">

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/food-distribution.jpg"
                alt="People packing and distributing food"
                className="h-[380px] w-full object-cover md:h-[460px]"
              />
            </div>


            <div>
              <p className="font-bold uppercase tracking-wider text-[#CE1126]">
                How It Works
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#006B3F] md:text-4xl">
                From surplus food to community impact.
              </h2>

              <p className="mt-5 leading-8 text-[#6B5E52]">
                FoodBridge provides a structured way for donors and recipients
                to connect and coordinate food redistribution.
              </p>


              <div className="mt-8 space-y-6">

                {/* STEP 1 */}
                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#CE1126] font-bold text-white">
                    1
                  </div>

                  <div>
                    <h3 className="font-bold text-[#006B3F]">
                      Food is listed
                    </h3>

                    <p className="mt-1 leading-6 text-[#6B5E52]">
                      A donor provides information about available surplus
                      food.
                    </p>
                  </div>
                </div>


                {/* STEP 2 */}
                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FCD116] font-bold text-black">
                    2
                  </div>

                  <div>
                    <h3 className="font-bold text-[#006B3F]">
                      Food is discovered
                    </h3>

                    <p className="mt-1 leading-6 text-[#6B5E52]">
                      Recipients can find food that is available in their
                      area.
                    </p>
                  </div>
                </div>


                {/* STEP 3 */}
                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#006B3F] font-bold text-white">
                    3
                  </div>

                  <div>
                    <h3 className="font-bold text-[#006B3F]">
                      Collection is coordinated
                    </h3>

                    <p className="mt-1 leading-6 text-[#6B5E52]">
                      Donors and recipients coordinate how and when the food
                      will be collected.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      

{/* ================= WHO FOODBRIDGE IS FOR ================= */}
<section className="bg-[#1C1C1C] text-white py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* TEXT CONTENT */}
      <div className="order-2 md:order-1">

        <p className="text-[#FCD116] font-semibold uppercase tracking-wide mb-3">
          Who FoodBridge Is For
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Built for people, businesses and communities.
        </h2>

        <p className="text-lg text-white/90 leading-relaxed mb-8">
          FoodBridge brings different groups together around one shared goal:
          making sure good food can serve a purpose instead of becoming waste.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">

          {/* FOOD BUSINESSES */}
          <div className="border-l-4 border-[#FCD116] pl-4">
            <h3 className="font-bold text-[#FCD116]">
              Food Businesses
            </h3>

            <p className="text-sm text-white/85 mt-1">
              Restaurants, hotels, supermarkets, caterers, bakeries, farms
              and other businesses.
            </p>
          </div>


          {/* ORGANIZATIONS */}
          <div className="border-l-4 border-[#CE1126] pl-4">
            <h3 className="font-bold text-white">
              Organizations
            </h3>

            <p className="text-sm text-white/85 mt-1">
              Charities, NGOs, shelters and community organizations.
            </p>
          </div>


          {/* INDIVIDUALS */}
          <div className="border-l-4 border-[#006B3F] pl-4">
            <h3 className="font-bold text-white">
              Individuals
            </h3>

            <p className="text-sm text-white/85 mt-1">
              People looking for available food opportunities within their
              communities.
            </p>
          </div>


          {/* VOLUNTEERS */}
          <div className="border-l-4 border-[#FCD116] pl-4">
            <h3 className="font-bold text-[#FCD116]">
              Volunteers
            </h3>

            <p className="text-sm text-white/85 mt-1">
              People who want to support food redistribution efforts.
            </p>
          </div>

        </div>

      </div>


      {/* IMAGE */}
      <div className="order-1 md:order-2">

        <img
          src="/images/foodbridge-community.jpg"
          alt="People participating in a community food initiative"
          className="w-full h-[420px] object-cover rounded-lg"
        />

      </div>

    </div>

  </div>
</section>





      {/* AFRICAN VISION */}
      <section className="bg-[#006B3F] px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/african-community.jpg"
              alt="African community and local food market"
              className="h-[400px] w-full object-cover md:h-[480px]"
            />
          </div>


          <div className="text-white">

            <p className="font-bold uppercase tracking-wider text-[#FCD116]">
              Our Vision
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              Born in Ghana.
              <span className="block text-[#FCD116]">
                Built for Africa.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-green-50">
              FoodBridge begins with a Ghanaian foundation and a vision that
              extends beyond borders. The platform is designed to grow with
              communities across Africa and make food redistribution easier,
              more organized, and more accessible.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-block rounded-lg bg-[#FCD116] px-8 py-3 font-bold text-black transition hover:bg-[#E6BC00]"
            >
              Learn About Our Vision
            </Link>

          </div>
        </div>
      </section>


      {/* IMPACT */}
      <section className="bg-[#F6E7C1] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl text-center">

          <p className="font-bold uppercase tracking-wider text-[#CE1126]">
            Our Impact
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#006B3F] md:text-4xl">
            Every connection can make a difference.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6B5E52]">
            As FoodBridge grows, the platform can help measure the food
            redistributed and the communities reached.
          </p>


          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div className="border-t-4 border-[#006B3F] pt-6">
              <p className="text-4xl font-bold text-[#006B3F]">
                0
              </p>

              <p className="mt-2 font-semibold text-[#6B5E52]">
                Meals Shared
              </p>
            </div>


            <div className="border-t-4 border-[#FCD116] pt-6">
              <p className="text-4xl font-bold text-[#006B3F]">
                0
              </p>

              <p className="mt-2 font-semibold text-[#6B5E52]">
                Food Donations
              </p>
            </div>


            <div className="border-t-4 border-[#CE1126] pt-6">
              <p className="text-4xl font-bold text-[#006B3F]">
                0
              </p>

              <p className="mt-2 font-semibold text-[#6B5E52]">
                Communities Reached
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="bg-[#CE1126] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-4xl text-center text-white">

          <h2 className="text-4xl font-bold md:text-5xl">
            Have surplus food?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Don't let good food go to waste. Help connect it with someone
            who needs it.
          </p>

          <Link
            to="/signup"
            className="mt-8 inline-block rounded-lg bg-[#FCD116] px-8 py-3.5 font-bold text-black transition hover:bg-[#E6BC00]"
          >
            Join FoodBridge
          </Link>

        </div>
      </section>


      {/* GHANA COLOUR STRIPE */}
      <div className="flex h-2 w-full">
        <div className="w-1/3 bg-[#CE1126]"></div>
        <div className="w-1/3 bg-[#FCD116]"></div>
        <div className="w-1/3 bg-[#006B3F]"></div>
      </div>

    </main>
  );
}

export default Home;

