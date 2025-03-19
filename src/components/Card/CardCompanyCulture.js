/** @format */

import React from "react";
import { motion } from "framer-motion";
const CardCompanyCulture = ({ title, desc }) => {
  return (
    <div className="w-full h-[400px]  text-[14px] pv:max-md:text-[9px] py-4 px-10  pv:max-ph:h-[300px] ph:max-sm:h-[300px]  ">
      <div className="text-white italic ">
        <p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className=""
        >
          Company Culture
        </p>
      </div>
      <div className=" text-white italic py-2">
        <p className=" ">{title}</p>
      </div>

      <div className="text-white italic text-left">
        {desc.map((item, index) => {
          return <li className="list-disc py-1">{item.content}</li>;
        })}
      </div>
    </div>
  );
};

export default CardCompanyCulture;
