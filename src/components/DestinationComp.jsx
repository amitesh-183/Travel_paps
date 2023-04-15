import React from "react";

const DestinationComp = ({ destinations }) => {
  return (
    <div className="container justify-center lg:justify-evenly flex gap-16 lg:flex-nowrap flex-wrap lg:gap-20 lg:px-28 lg:py-8">
      {destinations.map((item, i) => (
        <div className="lg:flex lg:flex-col lg:justify-start" key={i}>
          <img
            className="h-32 lg:h-56 mx-auto rounded-2xl duration-300 hover:shadow-sm hover:shadow-gray-600"
            src={item.image}
            alt="First slide"
          />
          <h4 className="text-[12px] lg:text-xl lg:text-center lg:w-full lg:pb-2 w-40 lg:pl-3 font-bold">
            {item.title}
          </h4>
          <span className="flex lg:justify-center lg:gap-2 text-sm">
            <img
              src="images/location.png"
              className="h-4 lg:h-4 pl-8 lg:pl-4"
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
