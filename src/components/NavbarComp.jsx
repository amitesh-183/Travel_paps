import React from "react";
import "../styles/nav.css";

const NavbarComp = () => {
  return (
    <div className="container">
      <nav className=" flex justify-between lg:gap-96 px-8 lg:px-28 pt-6 pb-3">
        <img src="/images/logo.png" className=" h-6" alt="Visitto" />
        <ul className=" flex lg:gap-4  text-white">
          <li className="link hidden lg:block">
            <a className="" href="/">
              Home
            </a>
          </li>
          <li className="link hidden lg:block">
            <a href="#faq">FAQ</a>
          </li>
          <li className="link hidden lg:block">
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default NavbarComp;
