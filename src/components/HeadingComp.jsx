import React from "react";

const HeadingComp = (props) => {
  return (
    <div className="container pt-16 px-48">
      <section className="pb-10 flex gap-96 justify-between">
        <div className="flex gap-6">
          <span className=" font-bold">{props.number} </span>
          <p className="font-bold w-32">{props.text} </p>
        </div>
        <div className="pl-28">
          <h2 className=" tracking-wide text-left justify-end text-4xl font-semibold">
            {props.heading}
          </h2>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default HeadingComp;
