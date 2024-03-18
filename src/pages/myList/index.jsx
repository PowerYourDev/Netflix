import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Header from "../../components/Header";
import Cardrow from "../../components/MoviesBrowse/movieLists/cardRow";
import { db } from "../../utilis/firebase";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";
import ShimmerUi from "../../components/shimmerUi";
import { useTranslation } from "react-i18next";

const MyList = () => {
   const {t}=useTranslation()

  const userData = useSelector((state) => state?.userSlice);
  const myListData = useSelector((state) => state?.MyList?.myListData);

 

  if(!myListData) return <ShimmerUi/>

  return (
    <div className="bg-black h-screen">
      <Header />

      {myListData.length > 0 ? (
        <div className="pt-[70px]">
          <Cardrow title={t("My List")} data={myListData} />
        </div>
      ) : (
        //   <h1 className='text-white flex justify-center items-center h-screen'>Your list seems lonely without any movies. Let's change that!</h1>
        <div className="flex justify-center items-center h-screen">
          <p className="text-center text-gray-600 text-lg bg-gray-100 py-4 px-6 rounded-md shadow-md">
            {t("Your list seems lonely without any movies. Let's change that!")}
          </p>
        </div>
      )}
    </div>
  );
};

export default MyList;
