import React from "react";

const Card = ({ img, title, country, dates, text, googleMapLink }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 lg:h-72 lg:my-2 mb-8">
        <div
          className="w-full h-96 sm:h-80 md:h-96 lg:h-72 lg:w-1/4 bg-cover bg-center lg:rounded-lg"
          style={{ backgroundImage: `url(${img.src})` }}
        ></div>

        <div className="w-full px-2 lg:w-2/4 flex flex-col justify-center">
          <div className="flex gap-2 items-center">
            <img src="./assests/gps.png" className="h-6" />
            <p className="tracking-widest font-semibold">{title}</p>
            <a
              href={googleMapLink}
              className="underline text-gray-400 ml-2"
              target="e_blank"
            >
              view on Google Maps
            </a>
          </div>
          <div>
            <h1 className="text-4xl font-semibold">{country}</h1>
            <p className="font-bold mt-4 mb-2">{dates}</p>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
