//package imports
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { doc, setDoc } from "firebase/firestore";

//components imports
import Header from "./Header";
import { netflixBgimage } from "../constant";
import { auth, db } from "../utilis/firebase";
import { addUser } from "../redux/sliceReducers/userSlice";
import { fetchMyListData } from "../redux/sliceReducers/myListSlice";
import { useTranslation } from "react-i18next";

const Login = () => {
 const {t} =useTranslation()
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((store) => store?.userSlice);

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

        if (isSignedIn?.user) {
          const { accessToken, email, photoURL } = isSignedIn?.user;

          dispatch(addUser({ accessToken, email, photoURL }));
          navigate("/movies-browse");
          dispatch(fetchMyListData(isSignedIn?.user));
          toast.success(t("Login successful. Welcome back!"));
        }
      } catch (error) {
        if (error?.code === "auth/invalid-credential") {
          toast.error(t("Invalid login credentials. Please try again!"));
        } else {
          toast.error(t("Something went wrong, please try again later!"));
        }
        // console.log(error)
        // const errorCode = error.code;
        // const errorMessage = error.message;

        // console.log(errorCode + "---" + errorMessage);
      }
    } else {
      //sign-up
      try {
        const isUserCreated = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setDoc(doc(db, "users", email), {
          myListItem: [],
        });

        if (isUserCreated?.user) {
          toast.success(t("Account created successfully. Please sign in.!"));
          setSignIn(false);
        }
     
      } catch (error) {
        if (error?.code === "auth/email-already-in-use") {
          toast.error(t("Email already exist!"));
        } else {
          toast.error(t("Something went wrong, please try again later!"));
        }

        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorCode + "---" + errorMessage);
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

  useEffect(() => {
    if (userData) {
      navigate("/movies-browse");
    }
  });

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
        <div className="w-5/6 md:w-1/2 lg:w-1/4 bg-[rgba(0,0,0,0.7)] flex flex-col  px-[4%] py-[48px]">
          <h1 className="font-bold text-[2rem] mb-4">
            {signIn ? t("sign In"): t("sign Up")}
          </h1>
          {!signIn && (
            <input
              type="text"
              placeholder={t("Full Name")}
              className="bg-[#333333] p-2 rounded-md mt-3"
              {...register("fullName", {
                required: {
                  value: true,
                  message: t("fullName is required"),
                },
              })}
            />
          )}
          {!signIn && errors?.fullName && (
            <p className="text-red-500">{errors?.fullName?.message}</p>
          )}

          <input
            type="email"
            placeholder={t("Email")}
            className="bg-[#333333] p-2 rounded-md mt-3"
            {...register("email", {
              required: {
                value: true,
                message: t("email is required"),
              },
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: t("invalid email"),
              },
            })}
          />
          {errors?.email && (
            <p className="text-red-500">{errors?.email?.message}</p>
          )}
          <input
            type="password"
            placeholder={t("Password")}
            className="bg-[#333333] p-2 rounded-md mt-3"
            {...register("password", {
              required: { value: true, message: t("password is required") },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  t("Password must be at least 8 characters and include a letter, a digit, and a special character."),
              },
            })}
          />
          {errors?.password && (
            <p className="text-red-500">{errors?.password?.message}</p>
          )}
          <button type="submit" className="bg-[#E50914] p-2 rounded-md mt-8">
            {signIn ? t("sign In") : t("sign Up")}
          </button>

          <h5 className="font-normal text-base text-[rgba(255,255,255,0.7)] mt-3">
            {signIn ? t("Already registered?") : t("New to Netflix?")}
            <span
              onClick={toggleSignIn}
              className="font-medium text-[rgb(255,255,255)] cursor-pointer"
            >
              {!signIn ? t("Sign in now") : t("Sign up now")}
            </span>
          </h5>
        </div>
      </form>
    </div>
  );
};

export default Login;
