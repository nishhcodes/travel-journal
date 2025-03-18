// import mountFuji from "./../assets/mount-fuji.jpg";
// import norway from "./../assets/norway.jpg";
// import sydney from "./../assets/sydney_opera_house.jpg";

export default [
  {
    id: 1,
    img: {
      src: "./assests/mount-fuji.jpg",
      alt: "Mount Fuji",
    },
    title: "Mount Fuji",
    marker: "./assests/earth.png",
    country: "JAPAN",
    dates: "12 Jan, 2021 - 24 Jan, 2021",
    googleMapLink:
      "https://www.google.com/maps?q=35.36107954314633,138.7275350059971",
    text: `Mount Fuji is the tallest mountain in Japan, standing at 3,776
                meters (12,380 feet). Mount Fuji is the single most popular
                tourist site in Japan for both Japanese and foreign tourists.`,
  },
  {
    id: 2,
    img: {
      src: "./assests/sydney_opera_house.jpg",
      alt: "Sydney Opera House",
    },
    marker: "assests/earth.png",
    title: "Sydney Opera House",
    dates: "27 May, 2021 - 8 Jun, 2021",
    country: "AUSTRALIA",
    googleMapLink:
      "https://www.google.com/maps?q=-33.85666847963728, 151.21525376079146",
    text: `The Sydney Opera House is a multi-venue performing arts center
                    in Sydney. Located on the banks of the Sydney Harbour, it is
                    often regarded as one of the 20th century's most famous and
                    distinctive buildings.`,
  },
  {
    id: 3,
    img: {
      src: "./assests/norway.jpg",
      alt: "Geirangerfjord",
    },
    marker: "assests/earth.png",
    title: "Geirangerfjord",
    dates: "01 Oct, 2021 - 18 Nov, 2021",
    country: "NORWAY",
    googleMapLink:
      "https://www.google.com/maps?q=62.1023995107754, 7.205403106621378",
    text: `The Geirangerfjord is a fjord in the Sunnmore region of More og
                Romsdal county, Norway. It is located entirely in the Stranda
                Municipality.`,
  },
];
