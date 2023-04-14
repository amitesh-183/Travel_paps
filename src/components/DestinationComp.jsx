import React from "react";
// import { FontAwesomeIcon } from "react-font";

const DestinationComp = ({ destinations }) => {
  return (
    <div className=" container justify-center snap-x flex gap-0 lg:gap-20 lg:px-28 lg:py-8">
      {destinations.map((item) => (
        <div className="lg:flex snap-center lg:flex-col lg:justify-start">
          <img
            className="h-38 lg:h-56 mx-auto rounded-2xl duration-300 hover:shadow-sm hover:shadow-gray-600"
            src={item.image}
            alt="First slide"
          />
          <h4 className="text-[12px] w-40 lg:text-left lg:pl-3 font-bold">
            {item.title}
          </h4>
          <span className="flex lg:justify-start lg:gap-2 text-sm">
            <img
              src="images/location.png"
              className="h-4 lg:h-4 pl-16 pr-2 lg:pl-4"
              alt=""
            />
            {item.location}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DestinationComp;
