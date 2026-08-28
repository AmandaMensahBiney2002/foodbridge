import { Link } from "react-router-dom";
import GhanaPattern from "../components/GhanaPattern";

function About() {
  return (
    <main className="bg-[#F8F1E5] text-[#202020]">

      {/* ========================= */}
      {/* PAGE HERO */}
      {/* ========================= */}

      <section className="relative overflow-hidden bg-[#1F5D42] px-6 py-20 md:px-10 lg:py-28">

        <GhanaPattern />

        <div className="relative z-10 mx-auto max-w-5xl text-center text-white">

          <p className="font-bold uppercase tracking-wider text-[#D9A441]">
            About FoodBridge
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Connecting food with people.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-50">
            FoodBridge is a digital food redistribution platform designed to
            connect surplus food with people and organizations who need it.
          </p>

        </div>

      </section>


      {/* ========================= */}
      {/* OUR STORY */}
      {/* ========================= */}

      <section className="relative overflow-hidden px-6 py-20 md:px-10">

        <GhanaPattern />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">

          <div>

            <p className="font-bold uppercase tracking-wider text-[#C65D3A]">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Turning a problem into an opportunity.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Every day, food businesses can have perfectly usable food left
              over from their operations. Restaurants, hotels, supermarkets,
              caterers, bakeries and other businesses may have surplus food
              that would otherwise be discarded.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              At the same time, individuals, families, charities, community
              groups and other organizations may need access to food.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              FoodBridge was created to help bridge this gap by providing a
              digital space where surplus food can be listed, discovered,
              requested and redistributed.
            </p>

          </div>


          {/* Story Highlight */}

          <div className="rounded-3xl bg-[#D9A441] p-8 shadow-xl md:p-10">

            <div className="rounded-2xl bg-[#F8F1E5] p-8">

              <div className="text-6xl">
                🌍
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#1F5D42]">
                Born in Ghana.
              </h3>

              <h3 className="text-2xl font-bold text-[#C65D3A]">
                Built for Africa.
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                FoodBridge begins with a Ghanaian foundation while being
                designed with the potential to serve communities across
                Africa.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ========================= */}
      {/* THE PROBLEM */}
      {/* ========================= */}

      <section className="relative overflow-hidden bg-[#EFE5D5] px-6 py-20 md:px-10">

        <GhanaPattern />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-bold uppercase tracking-wider text-[#C65D3A]">
              The Problem
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Food can be available and still go to waste.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              The challenge is not always the absence of food. Sometimes the
              challenge is connecting available surplus with people and
              organizations that can make use of it.
            </p>

          </div>


          <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-3">

            {/* Problem 1 */}

            <div className="rounded-3xl bg-[#B84A39] p-8 text-center text-white shadow-lg">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F4D98A] text-5xl">
                🍽️
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Surplus Food
              </h3>

              <p className="mt-4 leading-7 text-white/85">
                Businesses may have edible food that is no longer needed for
                their normal operations.
              </p>

            </div>


            {/* Problem 2 */}

            <div className="rounded-3xl bg-[#176B5B] p-8 text-center text-white shadow-lg">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#D9A441] text-5xl">
                🔗
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                The Connection Gap
              </h3>

              <p className="mt-4 leading-7 text-white/85">
                Without an organized system, available food may not reach
                people who could benefit from it.
              </p>

            </div>


            {/* Problem 3 */}

            <div className="rounded-3xl bg-[#6B3F69] p-8 text-center text-white shadow-lg">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F4D98A] text-5xl">
                🤝
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Community Need
              </h3>

              <p className="mt-4 leading-7 text-white/85">
                Individuals and organizations may need access to available
                food within their communities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ========================= */}
      {/* OUR MISSION */}
      {/* ========================= */}

      <section className="relative overflow-hidden bg-[#1F5D42] px-6 py-20 md:px-10">

        <GhanaPattern />

        <div className="relative z-10 mx-auto max-w-5xl text-center text-white">

          <p className="font-bold uppercase tracking-wider text-[#D9A441]">
            Our Mission
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Make food redistribution easier.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-50">
            Our mission is to provide a reliable digital platform that makes
            it easier for food donors and recipients to connect, coordinate
            and redistribute surplus food within their communities.
          </p>

        </div>

      </section>


      {/* ========================= */}
      {/* HOW FOODBRIDGE HELPS */}
      {/* ========================= */}

      <section className="relative overflow-hidden bg-white px-6 py-20 md:px-10">

        <GhanaPattern />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-bold uppercase tracking-wider text-[#C65D3A]">
              How FoodBridge Helps
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              A simple bridge between surplus and need.
            </h2>

          </div>


          <div className="mx-auto mt-14 grid max-w-6xl gap-10 md:grid-cols-3 lg:gap-12">

            {/* Share */}

            <div className="flex h-full flex-col rounded-3xl bg-[#E4F0E9] p-8 text-center shadow-lg">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#1F5D42] text-5xl">
                🍲
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#1F5D42]">
                Share
              </h3>

              <p className="mt-4 flex-1 leading-7 text-gray-600">
                Donors list available surplus food with important details
                such as quantity, location and collection time.
              </p>

            </div>


            {/* Connect */}

            <div className="flex h-full flex-col rounded-3xl bg-[#F4D98A] p-8 text-center shadow-lg">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#C65D3A] text-5xl">
                🔗
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#7B3F2F]">
                Connect
              </h3>

              <p className="mt-4 flex-1 leading-7 text-gray-700">
                Recipients discover available food and submit requests based
                on their needs and location.
              </p>

            </div>


            {/* Redistribute */}

            <div className="flex h-full flex-col rounded-3xl bg-[#E7D7E5] p-8 text-center shadow-lg">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#6B3F69] text-5xl">
                🤝
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#6B3F69]">
                Redistribute
              </h3>

              <p className="mt-4 flex-1 leading-7 text-gray-700">
                Donors and recipients coordinate collection and completed
                donations contribute to FoodBridge's impact records.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ========================= */}
      {/* AFRICAN VISION */}
      {/* ========================= */}

      <section className="relative overflow-hidden bg-[#7B5E3B] px-6 py-20 md:px-10">

        <GhanaPattern />

        <div className="relative z-10 mx-auto max-w-5xl text-center text-white">

          <p className="font-bold uppercase tracking-wider text-[#F4D98A]">
            Our African Vision
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            A bridge that can cross borders.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85">
            FoodBridge is inspired by Ghanaian values of community,
            generosity and shared responsibility. Our vision is to develop
            the platform into a system that can support food redistribution
            across communities and countries in Africa.
          </p>

        </div>

      </section>


      {/* ========================= */}
      {/* CALL TO ACTION */}
      {/* ========================= */}

      <section className="relative overflow-hidden bg-[#F8F1E5] px-6 py-20 md:px-10">

        <GhanaPattern />

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-bold text-[#1F5D42] md:text-5xl">
            Be part of the bridge.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Whether you have surplus food to share or you are looking for
            available food within your community, FoodBridge is built to
            connect you.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/signup"
              className="rounded-lg bg-[#C65D3A] px-8 py-3 font-bold text-white transition hover:bg-[#A94B2E]"
            >
              Join FoodBridge
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border-2 border-[#1F5D42] px-8 py-3 font-bold text-[#1F5D42] transition hover:bg-[#1F5D42] hover:text-white"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;