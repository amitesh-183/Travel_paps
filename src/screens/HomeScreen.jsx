import React from "react";
import HeroComp from "../components/HeroComp";
import NavbarComp from "../components/NavbarComp";
import HeadingComp from "../components/HeadingComp";
import DestinationComp from "../components/DestinationComp";
import data from "../data/destination_data.json";
import BenefitsComp from "../components/BenefitsComp";

const HomeScreen = () => {
  return (
    <div>
      <main>
        <NavbarComp />
        <HeroComp />

        {/* Destination section ------------------------- */}
        <section className="bg-white">
          <HeadingComp
            number="01."
            text="Destination"
            heading="Find Your Perfect Destination With Vsitto"
          />
        </section>
        <section className="bg-white pb-8">
          <button className="flex justify-end float-right mx-6 mb-6 py-3 px-4 rounded-full bg-yellow-300">
            <img src="images/side.png" className="h-4" alt="" />
          </button>

          <div className="container flex flex-row gap-28 px-28">
            <DestinationComp destinations={data.destinations} />
          </div>
        </section>

        {/* top places---------------------------------- */}
        <section className="bg-black text-white">
          <HeadingComp
            number="02."
            text="Explore"
            heading="Explore Recommended Top Destinations"
          />
        </section>
        <section className="text-white pb-8">
          <button className="flex justify-end float-right mx-6 mb-6 py-3 px-4 rounded-full bg-yellow-300">
            <img src="images/side.png" className="h-4" alt="" />
          </button>

          <div className="container flex flex-row gap-28 px-28">
            <DestinationComp destinations={data.destinations} />
          </div>
        </section>

        {/* Benefits section--------------------------------------------- */}
        <section className="bg-white">
          <HeadingComp
            number="03."
            text="Why Choose Us"
            heading="Choose Vsitto & Get Wide Range Of Travel Benefits"
          />
        </section>
        <section className="bg-white">
          <BenefitsComp choose={data.choose} />
        </section>

        {/*  */}
        <section className="bg-black text-white">
          <HeadingComp
            number="04."
            text="Download"
            heading="Download and Get Started!"
          />
        </section>
      </main>
    </div>
  );
};

export default HomeScreen;
