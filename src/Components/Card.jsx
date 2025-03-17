import React from "react";
import mountFuji from "./../assets/mount-fuji.jpg";
import norway from "./../assets/norway.jpg";
import sydney from "./../assets/sydney_opera_house.jpg";
import marker from "./../assets/gps.png";

const Card = (props) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 lg:h-72 lg:my-2 mb-8">
        <div
          className="w-full h-96 sm:h-80 md:h-96 lg:h-72 lg:w-1/4 bg-cover bg-center lg:rounded-lg"
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>

        <div className="w-full px-2 lg:w-2/4 flex flex-col justify-center">
          <div className="flex gap-2 items-center">
            <img src={marker} className="h-6" />
            <p className="tracking-widest font-semibold">{props.title}</p>
            <a
              href={props.coordinate}
              className="underline text-gray-400 ml-2"
              target="e_blank"
            >
              view on Google Maps
            </a>
          </div>
          <div>
            <h1 className="text-4xl font-semibold">{props.name}</h1>
            <p className="font-bold mt-4 mb-2">12 Jan, 2021 - 24 Jan, 2021</p>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
