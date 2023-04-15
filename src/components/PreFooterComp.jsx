import React from "react";
import { Link, NavLink } from "react-router-dom";

const PreFooterComp = () => {
  return (
    <div className="">
      <div className="text-[#969696] flex lg:justify-between py-10 mx-auto px-8 lg:px-28">
        <div className="pt-16">
          <h5 className=" pb-4">Subscribe To Our Newsletter</h5>
          <input
            type="text"
            className=" bg-black border-b-2  hover:border-yellow-300 text-[#565656] border-gray-600 py-2 outline-none"
            name="email"
            id="email"
            placeholder="your@gmail.com"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-10 lg:basis-96 lg:flex-wrap">
          <div className="px-16">
            <h3 className=" pb-3">Resources</h3>
            <ul>
              <li className="text-[#565656] duration-300 hover:text-yellow-300">
                <NavLink to="/faq">FAQ</NavLink>
              </li>
              <li className="text-[#565656] duration-300 hover:text-yellow-300">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="px-10">
            <h3 className=" pb-3">VISITTO</h3>
            <ul>
              <li className="text-[#565656] duration-300 hover:text-yellow-300">
                <Link to="/about">About</Link>
              </li>
              <li className="text-[#565656] duration-300 hover:text-yellow-300">
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="text-[#565656] lg:pl-56">
            <p>(+91) 7000xxxxxx</p>
            <p>vsitto@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooterComp;
