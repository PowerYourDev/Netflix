import React, { useState, useRef, useEffect } from "react";

import { POSTER_CDN } from "../../../constant";
import CardPopup from "../../../utilis/common/CardPopup";

const Card = ({ item }) => {
  const [active, setActive] = useState(false);

  const posterPopupHandler = () => {
    setActive(true);
  };

  return (
    <div>
      <div className="h-[131px] w-[230px]">
        <img
          src={POSTER_CDN + item.poster_path}
          className="w-full h-full"
          onClick={posterPopupHandler}
        />

        <div>{active && <CardPopup item={item} active={active} />}</div>
      </div>
    </div>
  );
};

export default Card;
