/** @format */

import React from "react";
const CardOverview = ({ img, title, desc }) => {
  return (
    <div className="bg-white shadow-2xl shadow-gray-400 p-6 rounded-xl">
      <div className="">
        <img className="object-cover" src={img}></img>
      </div>
      <div className="py-8">
        <p className="text-3xl text-start">{title}</p>
      </div>
      <div className="">
        <p className="text-start leading-8 line-clamp-4">{desc}</p>
      </div>
    </div>
  );
};

export default CardOverview;
