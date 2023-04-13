import React from "react";
import "../styles/nav.css";

const NavbarComp = () => {
  return (
    <div className="container">
      <nav className=" flex justify-between gap-96 px-28 pt-6 pb-3">
        <img src="/images/logo.png" className=" h-6" alt="Visitto" />
        <ul className=" flex gap-4  text-white">
          <li className="link">
            <a className="" href="/">
              Home
            </a>
          </li>
          <li className="link">
            <a href="#faq">FAQ</a>
          </li>
          <li className="link">
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default NavbarComp;
