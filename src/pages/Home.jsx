import { Link } from "react-router-dom";
import AfricanPattern from "../components/AfricanPattern";

function Home() {
  return (
    <main className="bg-[#F8F1E5] text-[#202020]">

      {/* ========================= */}
      {/* HERO SECTION */}
      {/* ========================= */}

      <section className="relative overflow-hidden bg-[#1F5D42]">
        <AfricanPattern />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 lg:py-28">

          <div className="text-center text-white md:text-left">

            <span className="inline-block rounded-full bg-[#D9A441] px-4 py-2 text-sm font-semibold text-[#202020]">
              Born in Ghana. Built for Africa.
            </span>

            <h1 className="mt-6 max-w-2xl text-5xl font-bold leading-tight md:text-6xl">
              Good food should
              <span className="block text-[#D9A441]">
                reach people.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-green-50 md:mx-0">
              FoodBridge connects restaurants, businesses, organizations,
              and communities to help surplus food reach people who need it
              instead of going to waste.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">

              <Link
                to="/signup"
                className="rounded-lg bg-[#D9A441] px-7 py-3 text-center font-bold text-[#202020] transition hover:bg-[#E5B95C]"
              >
                Get Started
              </Link>

              <Link
                to="/about"
                className="rounded-lg border-2 border-white px-7 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-[#1F5D42]"
              >
                Discover FoodBridge
              </Link>

            </div>
          </div>


          {/* Hero Visual */}

          <div className="relative mx-auto w-full max-w-lg">

            <div className="rounded-[2rem] bg-[#D9A441] p-3 shadow-2xl">

              <div className="flex min-h-[390px] items-center justify-center rounded-[1.5rem] bg-[#F8F1E5] p-8">

                <div className="text-center">

                  <div className="text-8xl">
                    🍲
                  </div>

                  <h2 className="mt-6 text-3xl font-bold text-[#1F5D42]">
                    Share food.
                  </h2>

                  <h2 className="text-3xl font-bold text-[#C65D3A]">
                    Strengthen communities.
                  </h2>

                  <p className="mx-auto mt-4 max-w-sm text-gray-600">
                    A simple connection between surplus food and people who
                    need it.
                  </p>

                </div>

              </div>

            </div>


            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-5 shadow-xl">

              <p className="text-sm text-gray-500">
                Our mission
              </p>

              <p className="mt-1 font-bold text-[#1F5D42]">
                Less waste. More food.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ========================= */}
{/* WHY FOODBRIDGE */}
{/* ========================= */}

<section className="relative overflow-hidden bg-[#F8F1E5] px-6 py-20 md:px-10">

  <AfricanPattern />

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* Section Heading */}

    <div className="mx-auto max-w-3xl text-center">

      <p className="font-bold uppercase tracking-wider text-[#C65D3A]">
        Why FoodBridge?
      </p>

      <h2 className="mt-3 text-3xl font-bold text-[#202020] md:text-4xl">
        Turning surplus into opportunity.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
        Across communities, perfectly usable food can become surplus while
        people and organizations struggle to access enough food.
        FoodBridge is designed to help bridge that gap.
      </p>

    </div>


    {/* ========================= */}
    {/* IMPACT CARDS */}
    {/* ========================= */}

    <div className="mx-auto mt-14 grid max-w-6xl items-stretch gap-8 md:grid-cols-3">


      {/* ========================= */}
      {/* REDUCE FOOD WASTE */}
      {/* ========================= */}

      <div className="group flex h-full flex-col rounded-3xl bg-[#E4F0E9] p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {/* Icon */}

        <div className="mx-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#1F5D42] text-5xl">
          🍽️
        </div>

        {/* Title */}

        <h3 className="mt-6 text-2xl font-bold text-[#1F5D42]">
          Reduce Food Waste
        </h3>

        {/* Description */}

        <p className="mt-4 flex-1 leading-7 text-[#202020]/70">
          Give edible surplus food an opportunity to serve a purpose
          before it becomes waste.
        </p>

        {/* Bottom Message */}

        <div className="mt-6 border-t border-[#1F5D42]/20 pt-5">

          <p className="text-sm font-semibold text-[#1F5D42]">
            Save food from going to waste.
          </p>

        </div>

      </div>


      {/* ========================= */}
      {/* SUPPORT COMMUNITIES */}
      {/* ========================= */}

      <div className="group flex h-full flex-col rounded-3xl bg-[#B84A39] p-8 text-center text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {/* Icon */}

        <div className="mx-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#F4D98A] text-5xl">
          🤝
        </div>

        {/* Title */}

        <h3 className="mt-6 text-2xl font-bold">
          Support Communities
        </h3>

        {/* Description */}

        <p className="mt-4 flex-1 leading-7 text-white/85">
          Help connect available food with people and organizations
          within communities.
        </p>

        {/* Bottom Message */}

        <div className="mt-6 border-t border-white/20 pt-5">

          <p className="text-sm font-semibold text-[#F4D98A]">
            Food is better when shared.
          </p>

        </div>

      </div>


      {/* ========================= */}
      {/* SUSTAINABLE IMPACT */}
      {/* ========================= */}

      <div className="group flex h-full flex-col rounded-3xl bg-[#7B5E3B] p-8 text-center text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {/* Icon */}

        <div className="mx-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#D9A441] text-5xl">
          🌍
        </div>

        {/* Title */}

        <h3 className="mt-6 text-2xl font-bold">
          Create Sustainable Impact
        </h3>

        {/* Description */}

        <p className="mt-4 flex-1 leading-7 text-white/85">
          Track the amount of food redistributed and the communities
          reached through the platform.
        </p>

        {/* Bottom Message */}

        <div className="mt-6 border-t border-white/20 pt-5">

          <p className="text-sm font-semibold text-[#F4D98A]">
            Measure the difference we make.
          </p>

        </div>

      </div>

    </div>


    {/* Supporting Message */}

    <div className="mx-auto mt-12 max-w-2xl text-center">

      <p className="text-sm leading-6 text-gray-500">
        FoodBridge brings technology and community together to make
        food redistribution easier, more organized and more meaningful.
      </p>

    </div>

  </div>

</section>



      {/* ========================= */}
{/* HOW IT WORKS */}
{/* ========================= */}

<section className="relative overflow-hidden bg-white px-6 py-20 md:px-10">

  <AfricanPattern />

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* Section Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <p className="font-bold uppercase tracking-wider text-[#C65D3A]">
        How it works
      </p>

      <h2 className="mt-3 text-3xl font-bold text-[#202020] md:text-4xl">
        Three steps. One shared purpose.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
        FoodBridge makes food redistribution easier by connecting those
        who have surplus food with those who need it.
      </p>

    </div>


    {/* How It Works Cards */}

    <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-3">


      {/* ========================= */}
      {/* DONATE CARD */}
      {/* ========================= */}

      <div className="group rounded-3xl bg-[#1F5D42] p-8 text-center text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {/* Number */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D9A441] text-xl font-bold text-[#202020] shadow-md">
          01
        </div>

        {/* Icon */}
        <div className="mx-auto mt-7 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-5xl">
          🍲
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Donate
        </h3>

        <p className="mt-4 leading-7 text-green-50">
          Food businesses and organizations can list their available
          surplus food, including the quantity, location and collection
          information.
        </p>

        <div className="mt-6 border-t border-white/20 pt-5">

          <p className="text-sm font-semibold text-[#F4D98A]">
            Share what you have.
          </p>

        </div>

      </div>


      {/* ========================= */}
      {/* CONNECT CARD */}
      {/* ========================= */}

      <div className="group rounded-3xl bg-[#D9A441] p-8 text-center text-[#202020] shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {/* Number */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1F5D42] text-xl font-bold text-white shadow-md">
          02
        </div>

        {/* Icon */}
        <div className="mx-auto mt-7 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/40 text-5xl">
          🤝
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Connect
        </h3>

        <p className="mt-4 leading-7 text-[#202020]/75">
          Recipients can discover available food, search by location and
          availability, and submit requests for food that meets their
          needs.
        </p>

        <div className="mt-6 border-t border-[#202020]/20 pt-5">

          <p className="text-sm font-semibold text-[#1F5D42]">
            Find what you need.
          </p>

        </div>

      </div>


      {/* ========================= */}
      {/* REDISTRIBUTE CARD */}
      {/* ========================= */}

      <div className="group rounded-3xl bg-[#C65D3A] p-8 text-center text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {/* Number */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F8F1E5] text-xl font-bold text-[#C65D3A] shadow-md">
          03
        </div>

        {/* Icon */}
        <div className="mx-auto mt-7 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-5xl">
          🧺
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Redistribute
        </h3>

        <p className="mt-4 leading-7 text-orange-50">
          Approved requests are coordinated for collection, helping ensure
          surplus food reaches people and communities instead of becoming
          waste.
        </p>

        <div className="mt-6 border-t border-white/20 pt-5">

          <p className="text-sm font-semibold text-[#F4D98A]">
            Turn surplus into impact.
          </p>

        </div>

      </div>

    </div>


    {/* Small supporting message */}

    <div className="mx-auto mt-12 max-w-2xl text-center">

      <p className="text-sm leading-6 text-gray-500">
        From the moment surplus food is listed to the moment it reaches
        someone who needs it, FoodBridge helps make the process more
        visible, organized and connected.
      </p>

    </div>

  </div>

</section>

      {/* ========================= */}
{/* WHO IS FOODBRIDGE FOR */}
{/* ========================= */}

<section className="relative overflow-hidden bg-[#EFE5D5] px-6 py-20 md:px-10">

  <AfricanPattern />

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* Section Heading */}

    <div className="mx-auto max-w-3xl text-center">

      <p className="font-bold uppercase tracking-wider text-[#C65D3A]">
        Who is FoodBridge for?
      </p>

      <h2 className="mt-3 text-3xl font-bold text-[#202020] md:text-4xl">
        Everyone can help bridge the gap.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
        FoodBridge brings together food businesses, organizations and
        individuals to create a stronger culture of food sharing.
      </p>

    </div>


    {/* ========================= */}
    {/* USER TYPE CARDS */}
    {/* ========================= */}

    <div className="mx-auto mt-14 grid max-w-6xl items-stretch gap-8 md:grid-cols-3">


      {/* ========================= */}
      {/* FOOD BUSINESSES */}
      {/* ========================= */}

      <div className="group flex h-full flex-col rounded-3xl bg-[#C98232] p-8 text-center text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {/* Icon */}

        <div className="mx-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#F8F1E5] text-5xl">
          🏪
        </div>


        {/* Title */}

        <h3 className="mt-6 text-2xl font-bold">
          Food Businesses
        </h3>


        {/* Description */}

        <p className="mt-4 flex-1 leading-7 text-white/85">
          Restaurants, hotels, supermarkets, caterers, bakeries, farms
          and other businesses can share their surplus food.
        </p>


        {/* Bottom Message */}

        <div className="mt-6 border-t border-white/20 pt-5">

          <p className="text-sm font-semibold text-[#FFF0C2]">
            Share your surplus.
          </p>

        </div>

      </div>


      {/* ========================= */}
      {/* ORGANIZATIONS */}
      {/* ========================= */}

      <div className="group flex h-full flex-col rounded-3xl bg-[#176B5B] p-8 text-center text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {/* Icon */}

        <div className="mx-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#D9A441] text-5xl">
          🤝
        </div>


        {/* Title */}

        <h3 className="mt-6 text-2xl font-bold">
          Organizations
        </h3>


        {/* Description */}

        <p className="mt-4 flex-1 leading-7 text-white/85">
          Charities, NGOs, shelters and community organizations can
          discover available food and coordinate collections.
        </p>


        {/* Bottom Message */}

        <div className="mt-6 border-t border-white/20 pt-5">

          <p className="text-sm font-semibold text-[#F4D98A]">
            Strengthen your community.
          </p>

        </div>

      </div>


      {/* ========================= */}
      {/* INDIVIDUALS */}
      {/* ========================= */}

      <div className="group flex h-full flex-col rounded-3xl bg-[#6B3F69] p-8 text-center text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {/* Icon */}

       <div className="mx-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#F4D98A] text-5xl">
  👥
</div>


        {/* Title */}

        <h3 className="mt-6 text-2xl font-bold">
          Individuals
        </h3>


        {/* Description */}

        <p className="mt-4 flex-1 leading-7 text-white/85">
          Individuals can discover available food opportunities within
          their communities and participate in food redistribution.
        </p>


        {/* Bottom Message */}

        <div className="mt-6 border-t border-white/20 pt-5">

          <p className="text-sm font-semibold text-[#F4D98A]">
            Connect with your community.
          </p>

        </div>

      </div>

    </div>


    {/* Supporting Message */}

    <div className="mx-auto mt-12 max-w-2xl text-center">

      <p className="text-sm leading-6 text-gray-500">
        Whether you are donating surplus food or looking for available
        food, there is a place for you in the FoodBridge community.
      </p>

    </div>

  </div>

</section>


      {/* ========================= */}
      {/* AFRICA VISION */}
      {/* ========================= */}

      <section className="relative overflow-hidden bg-[#1F5D42] px-6 py-20 md:px-10">

        <AfricanPattern />

        <div className="relative z-10 mx-auto max-w-5xl text-center text-white">

          <p className="font-bold uppercase tracking-wider text-[#D9A441]">
            Our vision
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Born in Ghana. Built for Africa.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-50">
            FoodBridge begins with a Ghanaian foundation and a vision that
            extends beyond borders. The platform is designed to grow with
            communities across Africa and make food redistribution easier,
            more organized, and more accessible.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-block rounded-lg bg-[#D9A441] px-8 py-3 font-bold text-[#202020] transition hover:bg-[#E5B95C]"
          >
            Learn About Our Vision
          </Link>

        </div>

      </section>


      {/* ========================= */}
      {/* FINAL CTA */}
      {/* ========================= */}

      <section className="relative overflow-hidden bg-[#F8F1E5] px-6 py-20 md:px-10">

        <AfricanPattern />

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-bold text-[#1F5D42] md:text-5xl">
            Have surplus food?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Your surplus could become someone's opportunity. Join FoodBridge
            and help build a stronger culture of food sharing.
          </p>

          <Link
            to="/signup"
            className="mt-8 inline-block rounded-lg bg-[#C65D3A] px-8 py-3 font-bold text-white transition hover:bg-[#A94B2E]"
          >
            Join FoodBridge
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;