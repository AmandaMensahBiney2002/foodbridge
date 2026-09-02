
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="bg-[#FFF9E8] text-[#3F352C]">

      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-[#006B3F] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-4xl text-center text-white">
          <p className="font-bold uppercase tracking-[0.2em] text-[#FCD116]">
            About FoodBridge
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Building a bridge between
            <span className="block text-[#FCD116]">
              surplus and need.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-50">
            FoodBridge is a digital platform designed to make the
            redistribution of surplus food more visible, accessible,
            and organized.
          </p>
        </div>
      </section>


      {/* GHANA COLOUR STRIPE */}
      <div className="flex h-2 w-full">
        <div className="w-1/3 bg-[#CE1126]"></div>
        <div className="w-1/3 bg-[#FCD116]"></div>
        <div className="w-1/3 bg-[#006B3F]"></div>
      </div>


      {/* OUR STORY */}
      <section className="bg-[#FFF9E8] px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div>
            <p className="font-bold uppercase tracking-wider text-[#CE1126]">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#006B3F] md:text-4xl">
              An idea shaped by a real community challenge.
            </h2>

            <p className="mt-6 leading-8 text-[#6B5E52]">
              FoodBridge began with a simple observation: edible food can
              become surplus while people and organizations within the same
              communities may still need access to food.
            </p>

            <p className="mt-5 leading-8 text-[#6B5E52]">
              Restaurants, hotels, supermarkets, caterers, bakeries,
              farms and other organizations can have food remaining after
              their daily operations. Finding a practical way to connect
              that food with people who can use it is not always easy.
            </p>

            <p className="mt-5 leading-8 text-[#6B5E52]">
              FoodBridge was created to provide a structured digital space
              where surplus food can be listed, discovered, requested and
              coordinated for redistribution.
            </p>
          </div>


          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/about-story.jpg"
              alt="Food being prepared for community sharing"
              className="h-[380px] w-full object-cover md:h-[480px]"
            />
          </div>

        </div>
      </section>


      {/* THE CHALLENGE */}
      <section className="bg-[#FFF3D0] px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/about-challenge.jpg"
              alt="Surplus food that could be redistributed"
              className="h-[380px] w-full object-cover md:h-[480px]"
            />
          </div>


          <div>
            <p className="font-bold uppercase tracking-wider text-[#CE1126]">
              The Challenge
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#006B3F] md:text-4xl">
              Good food should not be difficult to find.
            </h2>

            <p className="mt-6 leading-8 text-[#6B5E52]">
              Food redistribution involves more than simply having food
              available. People need to know what is available, where it
              is located, how much is available and how it can be collected.
            </p>

            <p className="mt-5 leading-8 text-[#6B5E52]">
              When information is scattered across different channels,
              opportunities to redistribute food can easily be missed.
            </p>

            <div className="mt-8 border-l-4 border-[#CE1126] pl-5">
              <p className="font-bold text-[#006B3F]">
                FoodBridge brings these connections together in one
                digital environment.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* OUR MISSION */}
      <section className="bg-[#006B3F] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-5xl text-center text-white">

          <p className="font-bold uppercase tracking-[0.2em] text-[#FCD116]">
            Our Mission
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Build a more connected
            <span className="block text-[#FCD116]">
              food-sharing ecosystem.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-green-50">
            Our mission is to create a reliable digital environment where
            donors, recipients and community organizations can participate
            in food redistribution with greater visibility, coordination
            and accountability.
          </p>

        </div>
      </section>


      {/* WHAT WE BELIEVE */}
      <section className="bg-[#FFF9E8] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-wider text-[#CE1126]">
              What We Believe
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#006B3F] md:text-4xl">
              Technology can strengthen community action.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6B5E52]">
              FoodBridge is built around simple principles that guide how
              the platform connects people and organizations.
            </p>
          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {/* COMMUNITY */}
            <div className="rounded-2xl border-t-4 border-[#CE1126] bg-[#FFF9E8] p-8 shadow-sm">
              <span className="text-sm font-bold text-[#CE1126]">
                01
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#006B3F]">
                Community
              </h3>

              <p className="mt-4 leading-7 text-[#6B5E52]">
                Strong communities are built when people and organizations
                have opportunities to support one another.
              </p>
            </div>


            {/* RESPONSIBILITY */}
            <div className="rounded-2xl border-t-4 border-[#FCD116] bg-[#FFF9E8] p-8 shadow-sm">
              <span className="text-sm font-bold text-[#B08A00]">
                02
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#006B3F]">
                Responsibility
              </h3>

              <p className="mt-4 leading-7 text-[#6B5E52]">
                Available food is a valuable resource. We believe it should
                have opportunities to create value within communities.
              </p>
            </div>


            {/* SUSTAINABILITY */}
            <div className="rounded-2xl border-t-4 border-[#006B3F] bg-[#FFF9E8] p-8 shadow-sm">
              <span className="text-sm font-bold text-[#006B3F]">
                03
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#006B3F]">
                Sustainability
              </h3>

              <p className="mt-4 leading-7 text-[#6B5E52]">
                Better food-sharing systems can encourage more thoughtful
                use of resources and help reduce avoidable food waste.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* HOW FOODBRIDGE HELPS */}
      <section className="bg-[#F6E7C1] px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div>
            <p className="font-bold uppercase tracking-wider text-[#CE1126]">
              How FoodBridge Helps
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#006B3F] md:text-4xl">
              Turning disconnected opportunities into meaningful
              connections.
            </h2>

            <p className="mt-6 leading-8 text-[#6B5E52]">
              FoodBridge gives donors a place to share information about
              surplus food and gives recipients a way to discover available
              opportunities.
            </p>

            <p className="mt-5 leading-8 text-[#6B5E52]">
              By bringing these activities together, the platform can make
              food redistribution easier to organize and participate in.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#CE1126]"></div>
                <p className="text-[#6B5E52]">
                  Make surplus food easier to discover.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#FCD116]"></div>
                <p className="text-[#6B5E52]">
                  Improve communication between donors and recipients.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#006B3F]"></div>
                <p className="text-[#6B5E52]">
                  Support more organized food redistribution.
                </p>
              </div>

            </div>
          </div>


          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/about-helps.jpg"
              alt="People packing and distributing food"
              className="h-[380px] w-full object-cover md:h-[480px]"
            />
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
              className="h-[400px] w-full object-cover md:h-[500px]"
            />
          </div>


          <div className="text-white">

            <p className="font-bold uppercase tracking-wider text-[#FCD116]">
              Our African Vision
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Born in Ghana.
              <span className="block text-[#FCD116]">
                Built for Africa.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-green-50">
              FoodBridge begins with a Ghanaian perspective and a vision
              that extends beyond one community.
            </p>

            <p className="mt-5 text-lg leading-8 text-green-50">
              As the platform develops, our goal is to support food
              redistribution across different African communities while
              respecting their unique needs, cultures and realities.
            </p>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-[#CE1126] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-4xl text-center text-white">

          <p className="font-bold uppercase tracking-wider text-[#FCD116]">
            Be Part of the Bridge
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Together, we can make food sharing easier.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Whether you are a food business, organization or community
            member, there is a role for you in building a better food
            redistribution system.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/signup"
              className="rounded-lg bg-[#FCD116] px-8 py-3.5 font-bold text-black transition hover:bg-[#E6BC00]"
            >
              Join FoodBridge
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border-2 border-white px-8 py-3.5 font-bold text-white transition hover:bg-white hover:text-[#CE1126]"
            >
              Contact Us
            </Link>

          </div>
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

export default About;

