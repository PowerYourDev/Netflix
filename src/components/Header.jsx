import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import netflixLogo from "../Assets/svg/netflixLogo.svg";
import { netflixLogo } from "../constant";
import { removeUser } from "../redux/sliceReducers/userSlice";
import {profileIcon} from "../constant"
import { makingToIntialState } from "../redux/sliceReducers/movieSlice";


const Header = () => {
  const userData = useSelector((state) => state?.userSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [headerEffect, setHeaderEffect] = useState(false);
  const [activeItem,setActiveItem]=useState("/movies-browse")

  const handleHeadeEffect = () => {
    console.log(window.scrollY);
    if (window.scrollY > 70) {
      setHeaderEffect(true);
    } else {
      setHeaderEffect(false);
    }
  };



  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/");
  };

  const handleNavigate=(item)=>{
  //  dispatch(makingToIntialState())
    setActiveItem(item)
    navigate(item);

  }

  useEffect(() => {
    window.addEventListener("scroll", handleHeadeEffect);
    return () => window.removeEventListener("scroll", handleHeadeEffect);
  }, []);

  return (
    <>
      {userData ? (
        <div
          className={`${
            headerEffect ? "bg-[#141414]" : "bg-transparent"
          } bg-gradient-to-b from-black to-transparent fixed top-0 left-0 z-30 w-full h-[70px]  px-[3%] transition-all duration-300 ease-in flex justify-between items-center`}
        >
          <div className="flex items-center gap-x-10">

         <img src={netflixLogo} alt="" className="w-[150px] h-[50px] " />
       
           <ul className="flex gap-x-5 text-[#e5e5e5] text-[14px]">
            
            <li className={`${activeItem ==="/movies-browse" && 'font-bold'} cursor-pointer hover:text-[#b3b3b3]`} onClick={()=>handleNavigate("/movies-browse")}>Home</li>
            <li className={`${activeItem ==="/tv-shows" && 'font-bold'} cursor-pointer hover:text-[#b3b3b3]`} onClick={()=>handleNavigate("/tv-shows")}>Tv Shows</li>
            <li className={`${activeItem ==="/movies" && 'font-bold'} cursor-pointer hover:text-[#b3b3b3]`} onClick={()=>handleNavigate("/movies")}>Movies</li>
            <li className={`${activeItem ==="/my-lists" && 'font-bold'} cursor-pointer hover:text-[#b3b3b3]`} onClick={()=>handleNavigate("/my-lists")}>My List</li>
            <li className={`${activeItem ==="/new-popular" && 'font-bold'} cursor-pointer hover:text-[#b3b3b3]`} onClick={()=>handleNavigate("/new-popular")}>New & Popular</li>
           </ul>
        </div>

        <div className="flex gap-5"> 
          <input type="text" />
         <img src={profileIcon} alt="" srcset="" />

        </div>
        </div>
      ) : (
        <div className="bg-gradient-to-b from-black absolute w-full">
          <img src={netflixLogo} alt="" className="w-52 ml-[9%]" />
          <button onClick={handleLogout}>logout</button>
        </div>
      )}
    </>
  );
};

export default Header;
