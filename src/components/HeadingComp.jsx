import React from "react";

const HeadingComp = (props) => {
  return (
    <div className="container pt-16 ">
      <section className="pb-8 px-60 flex gap-96 justify-between">
        <div className="flex gap-6">
          <span className=" font-bold">{props.number} </span>
          <p className="font-bold w-32">{props.text} </p>
        </div>
        <div>
          <h2 className="px-0 tracking-wide text-left justify-end text-4xl font-semibold">
            {props.heading}
          </h2>
        </div>
      </section>
      <hr className="mx-52" />
    </div>
  );
};

export default HeadingComp;
