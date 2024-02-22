import React from "react";
import {useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


// import netflixLogo from "../Assets/svg/netflixLogo.svg";
import { netflixLogo } from "../constant";
import {removeUser} from "../redux/sliceReducers/userSlice"



const Header = () => {
  const dispatch=useDispatch()
  const navigate =useNavigate()
  const handleLogout=()=>{
    dispatch(removeUser())
    navigate("/")
  }
  return (
    <div className="bg-gradient-to-b from-black absolute">
      <img src={netflixLogo} alt="" className="w-52 ml-[9%]" />
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Header;
