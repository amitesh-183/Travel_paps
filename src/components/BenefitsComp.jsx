import React from "react";

const BenefitsComp = ({ choose }) => {
  return (
    <div className="container flex gap-28 px-48 py-20 flex-wrap">
      {choose.map((item) => (
        <div className=" flex flex-col justify-center">
          <img src={item.img} className="h-16 w-16 mx-auto" alt="" />
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default BenefitsComp;
