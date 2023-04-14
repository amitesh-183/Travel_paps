import React from "react";

const FooterComp = () => {
  return (
    <div className="text-white flex gap-6 lg:gap-7 lg:flex-row lg:justify-between px-10 flex-col  lg:px-28 py-10">
      <img
        src="images/logo.png"
        className="px-36 lg:px-0 lg:h-8 lg:justify-start justify-center"
        alt=""
      />
      <p className="">All Rights Reserved @ 2023</p>
      <div className="flex justify-center lg:justify-end gap-4 ">
        <a href="/">
          <img className="h-4 " src="images/instagram.png" alt="" />
        </a>
        <a href="/">
          <img className="h-4 " src="images/facebook.png" alt="" />
        </a>
        <a href="/">
          <img className="h-4 " src="images/twitter.png" alt="" />
        </a>
        <a href="/">
          <img className="h-4 " src="images/linkedin.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default FooterComp;
