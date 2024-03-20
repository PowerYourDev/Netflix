import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// import netflixLogo from "../Assets/svg/netflixLogo.svg";
import { netflixLogo } from "../constant";
import { removeUser } from "../redux/sliceReducers/userSlice";
import { profileIcon } from "../constant";

import { addCurrentUserTab } from "../redux/sliceReducers/userTabSlice";
import ProfileDropDown from "../utilis/common/ProfileDropDown";
import search from "../Assets/svg/search.svg"
import MultiLangselect from "../utilis/common/multiLangselect";
import { useTranslation } from "react-i18next";
import hamberger from "../Assets/svg/hamberger.svg"
import crossIcon from "../Assets/svg/wrongIcon.svg"

const Header = () => {
  const {t}=useTranslation()
  const userData = useSelector((state) => state?.userSlice);
  const activeItem = useSelector((state) => state?.userTab?.currentUserTab);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [headerEffect, setHeaderEffect] = useState(false);
  const [profileDropDown,setProfileDropDown]=useState(false)
  const [sidebar,setSideBar]=useState(false)

  const handleSideBar=()=>{
    setSideBar(true)
  }

  const  handleCloseSideBar=()=>{
    setSideBar(false)
  }
  

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
    
    
      dispatch(addCurrentUserTab(item));
      navigate(item);

  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeadeEffect);
    return () => window.removeEventListener("scroll", handleHeadeEffect);
  }, []);

  useEffect(() => {
   
   
    dispatch(addCurrentUserTab(location.pathname));

  }, [location.pathname,dispatch]);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId); 
    };
  }, [timeoutId]);

  return (
    <>
  
      {userData ? (
        <>
        <div className="fixed top-0 left-0 bg-gradient-to-b from-black to-transparent w-full flex justify-between px-2 py-2 items-center lg:hidden " >
        <img src={hamberger} alt=""  onClick={handleSideBar}/>
         
         <div>
          <ul className="flex items-center gap-x-2">
          <li >
                  <div className="border-[0.5px] rounded border-white bg-black text-white flex py-[2px] px-1 items-center">
                    <img src={search} alt="" className="pr-2" />
                  <input type="text" className="border-none outline-none bg-transparent" placeholder={t("search for time waste")}/>
                  </div>
               
                 </li>

          <li onMouseEnter={handleProfileDropDownOnEnter} onMouseLeave={handleProfileDropDownOnLeave}>
             <img src={profileIcon} alt="" />

             {profileDropDown&&
              <ProfileDropDown handleLogout={handleLogout} profileDropDown={profileDropDown}/>
            }
             </li>
          </ul>

         </div>


        </div>
        <div
          className={`${
            headerEffect ? "lg:bg-[#141414]" : "lg:bg-transparent"
          } ${ sidebar ? "block" : "hidden" } bg-gradient-to-b from-black to-transparent  z-30  pt-[13%]  px-[3%] lg:py-0 transition-all duration-500 ease-in   flex flex-col h-full w-9/12 fixed left-0 top-0 gap-y-5 bg-black lg:flex-row lg:flex  lg:w-full lg:justify-between lg:items-center lg:fixed lg:top-0 lg:left-0 lg:h-[70px]`}
        >
             <img src={crossIcon} alt="" srcset="" className="absolute top-[3%] right-[5%] lg:hidden" onClick={handleCloseSideBar}/>
          <div className="flex items-center gap-y-10  lg:gap-x-10 flex-col lg:flex-row">
            <img src={netflixLogo} alt="" className="w-[150px] h-[50px]" />
           
            <ul className="flex gap-y-5 items-center lg:gap-x-5 text-[#e5e5e5] text-[14px] flex-col lg:flex-row">
              <li
                className={`${
                  activeItem === "/movies-browse" && "font-bold"
                } cursor-pointer hover:text-[#b3b3b3]`}
                onClick={() => handleNavigate("/movies-browse")}
              >
                {t("Home")}
              </li>
              <li
                className={`${
                  activeItem === "/tv-shows" && "font-bold"
                } cursor-pointer hover:text-[#b3b3b3]`}
                onClick={() => handleNavigate("/tv-shows")}
              >
                {t("Tv Shows")}
              </li>
              <li
                className={`${
                  activeItem === "/movies" && "font-bold"
                } cursor-pointer hover:text-[#b3b3b3]`}
                onClick={() => handleNavigate("/movies")}
              >
                {t("Movies")}
              </li>
              <li
                className={`${
                  activeItem === "/my-lists" && "font-bold"
                } cursor-pointer hover:text-[#b3b3b3]`}
                onClick={() => handleNavigate("/my-lists")}
              >
              {t("My List")}
              </li>
              <li
                className={`${
                  activeItem === "/new-popular" && "font-bold"
                } cursor-pointer hover:text-[#b3b3b3]`}
                onClick={() => handleNavigate("/new-popular")}
              >
                {t("New & Popular")}
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex gap-y-5 lg:gap-x-5 text-[#e5e5e5] items-center flex-col lg:flex-row">
                 <li className="hidden lg:block">
                  <div className="border-[0.5px] border-white bg-black  flex py-[6px] px-2 items-center">
                    <img src={search} alt="" className="pr-2" />
                  <input type="text" className="border-none outline-none bg-transparent" placeholder={t("search for time waste")}/>
                  </div>
               
                 </li>
              {/* tv shows Top rated children */}
              <li
                className={`${
                  activeItem === "/children" && "font-bold"
                } cursor-pointer hover:text-[#b3b3b3]`}
                onClick={() => handleNavigate("/children")}
              >
                {t("Children")}
              </li>
             <li onMouseEnter={handleProfileDropDownOnEnter} onMouseLeave={handleProfileDropDownOnLeave} className="relative hidden lg:block">
             <img src={profileIcon} alt="" />

             {profileDropDown&&
              <ProfileDropDown handleLogout={handleLogout} profileDropDown={profileDropDown}/>
            }
             </li>
          
            </ul>
          </div>
        </div>
        </>
      ) : (

        <div className="w-full bg-gradient-to-b from-black flex justify-between items-center absolute pl-[3%] pr-[3%] lg:pl-[9%] md:pl-[6%] "> 
        <div >
          <img src={netflixLogo} alt="" className="w-36  md:w-44  lg:w-52" />
          {/* <button onClick={handleLogout}>logout</button> */}
        
        </div>

       <div>
       <MultiLangselect header="header"/>
       </div>
        </div>
      )}
    </>
  );
};

export default Header;
