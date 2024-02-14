import React from "react";
// import netflixLogo from "../Assets/svg/netflixLogo.svg";
import { netflixLogo } from "../constant";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-black">
      <img src={netflixLogo} alt="" className="w-52 ml-[9%]" />
    </div>
  );
};

export default Header;
