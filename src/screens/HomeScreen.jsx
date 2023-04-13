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
          <button className="flex justify-end float-right mx-28 my-6 py-3 px-4 rounded-full bg-yellow-300">
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
          <button className="flex justify-end float-right mx-28 my-6 py-3 px-4 rounded-full bg-yellow-300">
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

        {/* App section ----------------------------------------------------- */}
        <section className="bg-black text-white">
          <HeadingComp
            number="04."
            text="Download"
            heading="Download and Get Started!"
          />
        </section>
        <section className="flex justify-around px-96 mx-auto py-28">
          <div className="text-white font-black text-2xl">
            <h3 className="pb-4">Apple Store</h3>
            <button className="flex text-black py-6 gap-4 px-7 bg-white rounded-full">
              <img src="images/apple.png" className="h-7" alt="" />
              <span className="my-auto text-xl">Download The App</span>
            </button>
          </div>
          <div className="text-white font-black text-2xl">
            <h3 className="pb-4">Play Store</h3>
            <button className="flex text-black py-6 gap-4 px-7 bg-white rounded-full">
              <img src="images/playstore.png" className="h-7" alt="" />
              <span className="my-auto text-xl">Download The App</span>
            </button>
          </div>
        </section>

        {/* About section ------------------------------------------------------ */}
        <section className="bg-white flex flex-col justify-between mx-auto px-56 py-8 gap-14">
          <div className=" text-left">
            <h6 className=" font-bold pb-4">About VSITTO:</h6>
            <p className=" font-semibold">
              VSITTO is an app developed and maintained by a technology company
              called YALA Inc. YALA Inc. was founded in 2023 by a team of
              experienced travel enthusiasts and technology experts. The
              company's mission is to revolutionize the travel industry by
              providing innovative and user-friendly technology solutions that
              make travel planning and management easy and enjoyable for
              everyone.
            </p>
          </div>
          <div className="text-left">
            <h6 className=" font-bold pb-4">Values:</h6>
            <ol className=" font-semibold" type="number">
              <li>
                1. Innovation: We embrace change and are always looking for new
                and creative ways to improve our products and services.
              </li>
              <li>
                2.User-Centric Design: We put our users first and strive to
                create technology solutions that are intuitive, user-friendly,
                and accessible to everyone.{" "}
              </li>
              <li>
                3. Quality Service: We are dedicated to providing exceptional
                customer service and support, and always go the extra mile to
                ensure our users have a positive experience.
              </li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeScreen;
