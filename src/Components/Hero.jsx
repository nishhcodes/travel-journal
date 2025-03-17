import React from "react";
import mountFuji from "./../assets/mount-fuji.jpg";
import norway from "./../assets/norway.jpg";
import sydney from "./../assets/sydney_opera_house.jpg";
import Card from "./Card";

const Hero = () => {
  return (
    <>
      <div className="lg:w-6/12 flex-col mx-auto justify-center items-center">
        <Card
          img={mountFuji}
          name="Mount Fuji"
          title="JAPAN"
          coordinate="https://www.google.com/maps?q=35.36107954314633,138.7275350059971"
          description="Mount Fuji is the tallest mountain in Japan, standing at 3,776
                meters (12,380 feet). Mount Fuji is the single most popular
                tourist site in Japan for both Japanese and foreign tourists."
        />
        <Card
          img={sydney}
          name="Sydney Opera House"
          title="SYDNEY"
          coordinate="https://www.google.com/maps?q=-33.85666847963728, 151.21525376079146"
          description="The Sydney Opera House is a multi-venue performing arts center
                in Sydney. Located on the banks of the Sydney Harbour, it is
                often regarded as one of the 20th century's most famous and
                distinctive buildings."
        />
        <Card
          img={norway}
          name="Geirangerfjord"
          title="NORWAY"
          coordinate="https://www.google.com/maps?q=62.1023995107754, 7.205403106621378"
          description="The Geirangerfjord is a fjord in the Sunnmore region of More og
                Romsdal county, Norway. It is located entirely in the Stranda
                Municipality."
        />
      </div>
    </>
  );
};

export default Hero;
