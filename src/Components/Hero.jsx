import React from "react";

import Card from "./Card";
import data from "./../data";

const Hero = () => {
  const travelData = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <div className="lg:w-6/12 flex-col mx-auto justify-center items-center">
        {travelData}
      </div>
    </>
  );
};

export default Hero;
