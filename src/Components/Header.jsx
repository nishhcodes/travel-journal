import React from "react";
import "./../App.css";

const Header = () => {
  return (
    <div className="flex justify-center lg:my-4">
      <header className="bg-rose-500 w-full px-2 py-4 lg:w-6/12 text-center lg:rounded-2xl flex justify-center gap-4">
        <img src="./assests/earth.png" className="h-10 filter invert" />
        <p className="text-3xl lg:text-4xl text-gray-50">my travel journal.</p>
      </header>
    </div>
  );
};

export default Header;
