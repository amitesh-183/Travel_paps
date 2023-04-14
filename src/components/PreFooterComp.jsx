import React from "react";
import { Link } from "react-router-dom";

const PreFooterComp = () => {
  return (
    <div className="text-[#969696] flex justify-between py-10 mx-auto px-28">
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
      <div className="flex gap-10 basis-96 flex-wrap">
        <div className="px-16">
          <h3 className=" pb-3">Resources</h3>
          <ul>
            <Link to="/faq">
              <li className="text-[#565656] duration-300 hover:text-yellow-300">
                FAQ
              </li>
            </Link>
            <Link to="/blog">
              <li className="text-[#565656] duration-300 hover:text-yellow-300">
                Blog
              </li>
            </Link>
          </ul>
        </div>
        <div className="px-10">
          <h3 className=" pb-3">VISITTO</h3>
          <ul>
            <Link to="/about">
              <li className="text-[#565656] duration-300 hover:text-yellow-300">
                About
              </li>
            </Link>
            <Link to="/careers">
              <li className="text-[#565656] duration-300 hover:text-yellow-300">
                Careers
              </li>
            </Link>
          </ul>
        </div>
        <div className="text-[#565656] pl-56">
          <p>(+91) 7000xxxxxx</p>
          <p>vsitto@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default PreFooterComp;
