import React from "react";

const FooterComp = () => {
  return (
    <div className="text-white flex justify-between px-28 py-10">
      <img src="images/logo.png" className="h-8 justify-start" alt="" />
      <p className="">All Rights Reserved @ 2023</p>
      <div className="flex gap-4 ">
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
