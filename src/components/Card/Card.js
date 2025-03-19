/** @format */

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Card = ({ img, title, desc, imggeo }) => {
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const variants_title = {
    visible: { opacity: 1, x: 0 },
    hidden: {
      opacity: 0,

      x: -20,
    },
  };

  const variants_description = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,

      y: -30,
    },
  };
  const variants_img = {
    visible: { scale: 1, x: 0 },
    hidden: {
      scale: 1.1,
      x: 50,
    },
  };
  return (
    <motion.div className="py-10 ">
      <div className="overflow-hidden cursor-pointer rounded-md">
        <motion.img
          // animate={inView ? "visible" : "hidden"}
          // variants={variants_img}
          // transition={{ duration: 1, ease: "easeOut" }}
          // ref={ref}
          className="object-cover w-full h-[306px] hover:scale-110 duration-300 ease-in "
          src={img}
        ></motion.img>
      </div>
      <div className="">
        <motion.p
          animate={inView ? "visible" : "hidden"}
          variants={variants_title}
          transition={{ duration: 0.75, ease: "easeOut" }}
          ref={ref}
          className="py-10 pb-3 text-[20px] cursor-pointer"
        >
          {title}
        </motion.p>
        <motion.p
          animate={inView ? "visible" : "hidden"}
          variants={variants_description}
          transition={{ duration: 0.75, ease: "easeOut" }}
          ref={ref}
          className="text-[12px] text-[#707070] leading-8"
        >
          {desc}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Card;
