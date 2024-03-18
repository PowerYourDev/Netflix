import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { POSTER_CDN } from "../../../constant";
import CardPopup from "../../../utilis/common/CardPopup";
import { makingHoverToIntialState } from "../../../redux/sliceReducers/movieSlice";
import { addNowPlayingHoverMovieData } from "../../../redux/sliceReducers/movieSlice";


const Card = ({ item }) => {

  const dispatch=useDispatch()
  const [active, setActive] = useState(false);

  const posterPopupHandler = (item) => {
    setActive(true);
    dispatch(addNowPlayingHoverMovieData(item))

  };

  const handleClosePopUp=()=>{
    setActive(false)
    dispatch(makingHoverToIntialState())
  }

  return (

    <div>
      {/* <div className={active && "fixed top-0 left-0 w-full h-full bg-[#000] bg-opacity-[0.7] z-1 overflow-hidden"}/> */}
      {active && (
        <CardPopup item={item} active={active} setActive={setActive} handleClosePopUp={handleClosePopUp}/>
      )}
    

     
      <div className="h-[141px] w-[230px] cursor-pointer">
        <img
          src={POSTER_CDN + item?.poster_path}
          className="w-full h-full object-cover"
          onClick={()=>posterPopupHandler(item)}
        />
      </div>
    </div>
  
  );
};

export default Card;
