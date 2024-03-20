import React, { useState} from "react";
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

    // <div>
    <>
      {/* <div className={active && "fixed top-0 left-0 w-full h-full bg-[#000] bg-opacity-[0.7] z-1 overflow-hidden"}/> */}
      {active && (
        <CardPopup item={item} active={active} setActive={setActive} handleClosePopUp={handleClosePopUp}/>
      )}
    

     
      
        <img
          src={POSTER_CDN + item?.poster_path} alt=""
          className="h-32 sm:h-36 md:h-60"
          onClick={()=>posterPopupHandler(item)}
        />
     </>
    // </div>
  
  );
};

export default Card;
