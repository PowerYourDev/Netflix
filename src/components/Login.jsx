//package imports
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { doc,setDoc } from "firebase/firestore";

//components imports
import Header from "./Header";
import { netflixBgimage } from "../constant";
import { auth,db } from "../utilis/firebase";
import { addUser } from "../redux/sliceReducers/userSlice";


const Login = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const dispatch= useDispatch()

  const userData=useSelector((store)=>store?.userSlice)
  console.log(userData)
  

  //------state varabiles----
  const [signIn, setSignIn] = useState(true);

  //sign in or sign up function
  const onSubmit = async (data) => {
    const { email, password } = data;

    if (signIn) {
      //sign -in
      try {
        const isSignedIn = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if(isSignedIn?.user){
           const {accessToken,email,photoURL}=isSignedIn?.user
            
            console.log(isSignedIn?.user)
          dispatch(addUser({accessToken,email,photoURL}))
          navigate("/movies-browse")
        }
        console.log(isSignedIn.user);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "-" + errorMessage);
      }
    } else {
      //sign-up
      try {
        const isUserCreated = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setDoc(doc(db,"users",email),{
          myListItem:[]
        })
        console.log(isUserCreated.user);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "-" + errorMessage);
        console.log(error);
      }
    }
  };

  //---different handler functions---

  //toggle  sing  in/up handler
  const toggleSignIn = () => {
    setSignIn(!signIn);
    reset();
  };

  //--useEffects--

  useEffect(()=>{
    if(userData){
        navigate("/movies-browse")
    }
  })

  return (
    <div
      className="h-screen"
      style={{ backgroundImage: `url(${netflixBgimage})` }}
    >
      <Header />
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center h-screen text-white"
      >
        <div className="sm:w-1/4 bg-[rgba(0,0,0,0.7)] flex flex-col  px-[4%] py-[48px]">
          <h1 className="font-bold text-[2rem] mb-4">
            {signIn ? "sign In" : "sign Up"}
          </h1>
          {!signIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#333333] p-2 rounded-md mt-3"
              {...register("fullName", {
                required: {
                  value: true,
                  message: "fullName is required",
                },
              })}
            />
          )}
          {!signIn && errors?.fullName && (
            <p className="text-red-500">{errors?.fullName?.message}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            className="bg-[#333333] p-2 rounded-md mt-3"
            {...register("email", {
              required: {
                value: true,
                message: "email is required",
              },
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "invalid email",
              },
            })}
          />
          {errors?.email && (
            <p className="text-red-500">{errors?.email?.message}</p>
          )}
          <input
            type="password"
            placeholder="Password"
            className="bg-[#333333] p-2 rounded-md mt-3"
            {...register("password", {
              required: { value: true, message: "password is required" },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters and include a letter, a digit, and a special character.",
              },
            })}
          />
          {errors?.password && (
            <p className="text-red-500">{errors?.password?.message}</p>
          )}
          <button type="submit" className="bg-[#E50914] p-2 rounded-md mt-8">
            {signIn ? "sign In" : "sign Up"}
          </button>

          <h5 className="font-normal text-base text-[rgba(255,255,255,0.7)] mt-3">
            {signIn ? "Already registered?" : "New to Netflix?"}
            <span
              onClick={toggleSignIn}
              className="font-medium text-[rgb(255,255,255)] cursor-pointer"
            >
              {!signIn ? " Sign in now" : " Sign up now"}
            </span>
          </h5>
        </div>
      </form>
    </div>
  );
};

export default Login;
