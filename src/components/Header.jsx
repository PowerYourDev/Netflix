import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// import netflixLogo from "../Assets/svg/netflixLogo.svg";
import { netflixLogo } from "../constant";
import { removeUser } from "../redux/sliceReducers/userSlice";
import { profileIcon } from "../constant";
import { makingToIntialState } from "../redux/sliceReducers/movieSlice";
import { addCurrentUserTab } from "../redux/sliceReducers/userTabSlice";
import ProfileDropDown from "../utilis/common/ProfileDropDown";
import search from "../Assets/svg/search.svg"
import MultiLangselect from "../utilis/common/multiLangselect";

const Header = () => {
  const userData = useSelector((state) => state?.userSlice);
  const activeItem = useSelector((state) => state?.userTab?.currentUserTab);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [headerEffect, setHeaderEffect] = useState(false);
  const [profileDropDown,setProfileDropDown]=useState(false)

  const handleHeadeEffect = () => {
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

  let timeoutId;

  const handleProfileDropDownOnEnter = () => {
    setProfileDropDown(true);
    clearTimeout(timeoutId); 
  };

  const handleProfileDropDownOnLeave = () => {
    timeoutId = setTimeout(() => {
      setProfileDropDown(false);
    }, 300); 
  };

  const handleNavigate = (item) => {
    if(item !== location?.pathname) {
      dispatch(makingToIntialState());
      dispatch(addCurrentUserTab(item));
      navigate(item);
    }
   
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeadeEffect);
    return () => window.removeEventListener("scroll", handleHeadeEffect);
  }, []);

  useEffect(() => {
   
    dispatch(makingToIntialState());
    dispatch(addCurrentUserTab(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId); 
    };
  }, []);

  return (
    <>
      {userData ? (
        <div
          className={`${
            headerEffect ? "bg-[#141414]" : "bg-transparent"
          } bg-gradient-to-b from-black to-transparent fixed top-0 left-0 z-30 w-full h-[70px]  px-[3%] transition-all duration-500 ease-in flex justify-between items-center`}
        >
          <div className="flex items-center gap-x-10">
            <img src={netflixLogo} alt="" className="w-[150px] h-[50px] " />

            <ul className="flex gap-x-5 text-[#e5e5e5] text-[14px]">
              <li
                className={`${
                  activeItem === "/movies-browse" && "font-bold"
                } cursor-pointer hover:text-[#b3b3b3]`}
                onClick={() => handleNavigate("/movies-browse")}
              >
                Home
              </li>
              <li
                className={`${
                  activeItem === "/tv-shows" && "font-bold"
                } cursor-pointer hover:text-[#b3b3b3]`}
                onClick={() => handleNavigate("/tv-shows")}
              >
                Tv Shows
              </li>
              <li
                className={`${
                  activeItem === "/movies" && "font-bold"
                } cursor-pointer hover:text-[#b3b3b3]`}
                onClick={() => handleNavigate("/movies")}
              >
                Movies
              </li>
              <li
                className={`${
                  activeItem === "/my-lists" && "font-bold"
                } cursor-pointer hover:text-[#b3b3b3]`}
                onClick={() => handleNavigate("/my-lists")}
              >
                My List
              </li>
              <li
                className={`${
                  activeItem === "/new-popular" && "font-bold"
                } cursor-pointer hover:text-[#b3b3b3]`}
                onClick={() => handleNavigate("/new-popular")}
              >
                New & Popular
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex gap-5 text-[#e5e5e5] items-center">
                 <li className="">
                  <div className="border-[0.5px] border-white bg-black  flex py-[6px] px-2 items-center">
                    <img src={search} alt="" className="pr-2" />
                  <input type="text" className="border-none outline-none bg-transparent" placeholder="search for time waste"/>
                  </div>
               
                 </li>
              {/* tv shows Top rated children */}
              <li
                className={`${
                  activeItem === "/new-popular" && "font-bold"
                } cursor-pointer hover:text-[#b3b3b3]`}
              >
                Children
              </li>
             <li onMouseEnter={handleProfileDropDownOnEnter} onMouseLeave={handleProfileDropDownOnLeave} className="relative">
             <img src={profileIcon} alt="" />

             {profileDropDown&&
              <ProfileDropDown handleLogout={handleLogout} profileDropDown={profileDropDown}/>
            }
             </li>

           
            </ul>
          </div>
        </div>
      ) : (

        <div> 
        <div className="bg-gradient-to-b from-black absolute w-full">
          <img src={netflixLogo} alt="" className="w-52 ml-[9%]" />
          {/* <button onClick={handleLogout}>logout</button> */}
        
        </div>

        <MultiLangselect header="header"/>
        </div>
      )}
    </>
  );
};

export default Header;
