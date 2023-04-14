import React from "react";

const BenefitsComp = ({ choose }) => {
  return (
    <div className="container flex gap-12 lg:gap-44 px-4 lg:px-48 justify-center mx-auto py-20 flex-wrap">
      {choose.map((item) => (
        <div className="flex flex-col justify-center">
          <img src={item.img} className="h-16 w-16 mx-auto" alt="" />
          <h4 className=" font-semibold px-3">{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default BenefitsComp;
