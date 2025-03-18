import React from "react";

import Card from "./Card";
import data from "./../data";

const Hero = () => {
  const travelData = data.map((item, index) => {
    return (
      <Card
        key={index}
        id={item.id}
        img={item.img}
        title={item.title}
        country={item.country}
        dates={item.dates}
        googleMapLink={item.googleMapLink}
        text={item.text}
      />
    );
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
