import React from "react";


import Card from "./Card";
import { useTranslation } from "react-i18next";

const Cardrow = ({ title, data }) => {
  const {t}=useTranslation()
 
  return (
    <div className="ml-[4%]">
      <h1 className="text-white mb-[0.5%]  text-[1.4vw]">{title}</h1>
      {/* my-10 flex gap-1 px-1 py-56 overflow-visible overflow-x-auto */}
      <div
        className={`${
          title === t("My List")
            ? "flex-wrap gap-y-4"
            : "overflow-x-scroll no-scrollbar overflow-visible"
        } flex gap-x-4`}
      >
        {data && data?.map((item) => <Card key={item.id} item={item}  />)}
      </div>
    </div>
  );
};

export default Cardrow;
