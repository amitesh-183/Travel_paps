import React from "react";
// import { FontAwesomeIcon } from "react-font";

const DestinationComp = ({ destinations }) => {
  return (
    <div className=" container flex gap-20 px-28 py-8">
      {destinations.map((item) => (
        <div className=" flex flex-col justify-start">
          <img
            className="h-56 rounded-2xl duration-300 hover:shadow-sm hover:shadow-gray-600"
            src={item.image}
            alt="First slide"
          />
          <h4 className=" text-left pl-3 font-bold">{item.title}</h4>
          <span className="flex justify-start gap-2 text-sm">
            <img src="images/location.png" className="h-4 pt-0 pl-4" alt="" />
            {item.location}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DestinationComp;
