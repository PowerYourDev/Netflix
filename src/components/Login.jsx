import React, { useState } from "react";
import Header from "./Header";
import { netflixBgimage } from "../constant";

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  const toggleSignIn = () => {
    setSignIn(!signIn);
  };
  return (
    <div
      className="h-lvh"
      style={{ backgroundImage: `url(${netflixBgimage})` }}
    >
      <Header />
      <form
        action=""
        className="flex justify-center items-center h-[calc(100vh-11rem)] text-white"
      >
        <div className="w-1/4 bg-[rgba(0,0,0,0.7)] flex flex-col gap-3 px-[68px] py-[48px]">
          <h1 className="font-bold text-[2rem] mb-4">
            {signIn ? "sign In" : "sign Up"}
          </h1>
          {!signIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#333333] p-2"
            />
          )}
          <input type="text" placeholder="Email" className="bg-[#333333] p-2" />
          <input
            type="password"
            placeholder="Password"
            className="bg-[#333333] p-2 "
          />
          <button type="submit" className="bg-[#E50914] p-2 ">
            {signIn ? "sign In" : "sign Up"}
          </button>

          <h5 className="font-normal text-base text-[rgba(255,255,255,0.7)]">
            {signIn ? "Already registered?" : "New to Netflix?"}
            <span
              onClick={toggleSignIn}
              className="font-medium text-[rgb(255,255,255)] cursor-pointer"
            >
              {signIn ? " Sign in now" : " Sign up now"}
            </span>
          </h5>
        </div>
      </form>
    </div>
  );
};

export default Login;
