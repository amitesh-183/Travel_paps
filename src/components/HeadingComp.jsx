import React from "react";

const HeadingComp = (props) => {
  return (
    <div className="container px-4 pt-16 lg:px-40">
      <section className="pb-4 lg:pb-10 flex gap-12  lg:gap-96 justify-between">
        <div className="flex pl-4 lg:gap-6">
          <span className="font-medium text-xs lg:font-bold">
            {props.number}{" "}
          </span>
          <p className="font-medium text-xs lg:font-bold w-28 lg:w-32">
            {props.text}{" "}
          </p>
        </div>
        <div className="lg:pl-28">
          <h2 className="lg:tracking-wide text-left  text-sm lg:text-4xl font-semibold">
            {props.heading}
          </h2>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default HeadingComp;
