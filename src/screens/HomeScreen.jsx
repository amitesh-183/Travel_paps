import React from "react";
import HeroComp from "../components/HeroComp";
import NavbarComp from "../components/NavbarComp";
import HeadingComp from "../components/HeadingComp";

const HomeScreen = () => {
  return (
    <div>
      <main className="img">
        <NavbarComp />
        <HeroComp />
        <section className="bg-white">
          <HeadingComp
            number="01."
            text="Destination"
            heading="Find Your Perfect Destination With Vsitto"
          />
        </section>
        <section className="bg-black text-white">
          <HeadingComp
            number="02."
            text="Explore"
            heading="Explore Recommended Top Destinations"
          />
        </section>
        <section className="bg-white">
          <HeadingComp
            number="03."
            text="Why Choose Us"
            heading="Choose Vsitto & Get Wide
Range Of Travel Benefits"
          />
        </section>
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
