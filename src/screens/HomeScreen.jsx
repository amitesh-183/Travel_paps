import React from "react";
import HeroComp from "../components/HeroComp";
import NavbarComp from "../components/NavbarComp";

const HomeScreen = () => {
  return (
    <div>
      <main className="img">
        <NavbarComp />
        <HeroComp />
      </main>
    </div>
  );
};

export default HomeScreen;
