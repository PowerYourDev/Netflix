import React,{useState,useRef} from "react";

import { POSTER_CDN } from "../../../constant";
const MovieRow = ({ title, data }) => {

  const [remove, setRemove] = useState(true);
  const [active, setActive] = useState(false);

  const timeoutRef = useRef(0);
  const [muted, setMuted] = useState(true);
  const toggleMute = () => {
    setMuted(!muted);
  };

  const onMouseEnter = (e) => {
    clearInterval(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActive(true);
      setRemove(false);
      // setVideo(true);
    }, 1000);
  };
  const onMouseLeave = (e) => {
    setActive(false);
    // setVideo(false);
    console.log(e);
  };

  const ref = useRef(null);


  return (
    <div className="ml-[4%] ">
      <h1 className="text-white mb-[0.5%]  text-[1.4vw]">{title}</h1>
      <div className="flex  gap-x-4 overflow-x-scroll no-scrollbar  ">
  {data.map((movie, index) => (
  <div  onMouseEnter={onMouseEnter}
  onMouseLeave={onMouseLeave} key={index} className="flex-shrink-0 flex-grow-0 flex-basis-auto h-auto w-auto relative">
      <img className="h-[150px] w-[230px] object-cover cursor-pointer" src={POSTER_CDN + movie.poster_path} alt="" />
   


{!remove && (
        <div
          ref={ref}
          className="bg-transparent rounded-md overflow-hidden z-[2] absolute shadow-[0px_5px_15px_rgba(0,0,0,0.07)]"
          style={{
            top: 0,
            left: 0,
            animationName: active ? "card" : "card-exit",
            animationDuration: "0.6s",
            animationFillMode: "forwards",
            animationTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
            // animationDelay: !active ? "0.1s" : "0s",
            // transform: "scale(1.5)",
          }}
          onAnimationEnd={(e) => {
            if (e.animationName === "card-exit") {
              setRemove(true);
              // setVideo(false);
            }
          }}
>
  
<div className="">
            <div>
              <div
                className={`relative w-[233px] h-[131px]`}
                style={{
                  backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(64, 64, 64, 1) 0%,
                    rgba(64, 64, 64, 0) 10%,
                    rgba(64, 64, 64, 0) 90%,
                    rgba(64, 64, 64, 1) 100%
                )`,
                }}
              >
                <img className="h-[150px] w-[230px] object-cover cursor-pointer" src={POSTER_CDN + data[0].poster_path} alt="" />

</div>
</div>
</div>
</div>
)}

</div>
  ))}
</div>
    </div>
  );
};

export default MovieRow;
