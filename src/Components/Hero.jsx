import React from "react";
import mountFuji from "./../assets/mount-fuji.jpg";
import norway from "./../assets/norway.jpg";
import sydney from "./../assets/sydney_opera_house.jpg";
import marker from "./../assets/gps.png";

const Hero = () => {
  return (
    <>
      <div className="lg:w-6/12 flex-col mx-auto justify-center items-center">
        <div className="flex flex-col lg:flex-row gap-10 lg:h-72 lg:my-2 mb-8">
          <div
            className="w-full h-96 sm:h-80 md:h-96 lg:h-72 lg:w-1/4 bg-cover bg-center lg:rounded-lg"
            style={{ backgroundImage: `url(${mountFuji})` }}
          ></div>

          <div className="w-full px-2 lg:w-2/4 flex flex-col justify-center">
            <div className="flex gap-2 items-center">
              <img src={marker} className="h-6" />
              <p className="tracking-widest font-semibold">JAPAN</p>
              <a
                href="https://www.google.com/maps?q=35.36107954314633,138.7275350059971"
                className="underline text-gray-400 ml-2"
                target="e_blank"
              >
                view on Google Maps
              </a>
            </div>
            <div>
              <h1 className="text-4xl font-semibold">Mount Fuji</h1>
              <p className="font-bold mt-4 mb-2">12 Jan, 2021 - 24 Jan, 2021</p>
              <p>
                Mount Fuji is the tallest mountain in Japan, standing at 3,776
                meters (12,380 feet). Mount Fuji is the single most popular
                tourist site in Japan for both Japanese and foreign tourists.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:h-72 lg:my-2 mb-8">
          <div
            className="w-full h-96 sm:h-80 md:h-96 lg:h-72 lg:w-1/4 bg-cover bg-center lg:rounded-lg"
            style={{ backgroundImage: `url(${sydney})` }}
          ></div>

          <div className="w-full px-2 lg:w-2/4 flex flex-col justify-center">
            <div className="flex gap-2 items-center">
              <img src={marker} className="h-6" />
              <p className="tracking-widest font-semibold">AUSTRALIA</p>
              <a
                href="https://www.google.com/maps?q=-33.85666847963728, 151.21525376079146"
                className="underline text-gray-400 ml-2"
                target="e_blank"
              >
                view on Google Maps
              </a>
            </div>
            <div>
              <h1 className="text-4xl font-semibold">Sydney Opera House</h1>
              <p className="font-bold mt-4 mb-2">27 May, 2021 - 8 Jun, 2021</p>
              <p>
                The Sydney Opera House is a multi-venue performing arts center
                in Sydney. Located on the banks of the Sydney Harbour, it is
                often regarded as one of the 20th century's most famous and
                distinctive buildings.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:h-72 lg:my-2 mb-8">
          <div
            className="w-full h-96 sm:h-80 md:h-96 lg:h-72 lg:w-1/4 bg-cover bg-center lg:rounded-lg"
            style={{ backgroundImage: `url(${norway})` }}
          ></div>

          <div className="w-full px-2 lg:w-2/4 flex flex-col justify-center">
            <div className="flex gap-2 items-center">
              <img src={marker} className="h-6" />
              <p className="tracking-widest font-semibold">NORWAY</p>
              <a
                href="https://www.google.com/maps?q=62.1023995107754, 7.205403106621378"
                className="underline text-gray-400 ml-2"
                target="e_blank"
              >
                view on Google Maps
              </a>
            </div>
            <div>
              <h1 className="text-4xl font-semibold">Geirangerfjord</h1>
              <p className="font-bold mt-4 mb-2">21 Oct, 2021 - 18 Nov, 2021</p>
              <p>
                The Geirangerfjord is a fjord in the Sunnmore region of More og
                Romsdal county, Norway. It is located entirely in the Stranda
                Municipality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
