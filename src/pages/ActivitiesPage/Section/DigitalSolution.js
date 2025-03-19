/** @format */

import React, { useRef } from "react";
import img from "../../../assets/rawimage/Digital_solution_2.png";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sacredgeo_2 from "../../../assets/sacredGeo/Artboard2.png";
import sacredgeo_8 from "../../../assets/sacredGeo/Asset 5.svg";

const DigitalSolution = ({ id, removeList }) => {
  const [ref, inView, entry] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });
  const variants_img_5 = {
    visible: { x: 0, y: 0 },
    hidden: {
      x: -200,
      y: -200,
    },
  };
  const [ref_1, inView1, entry1] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });
  const [ref_3, inView3, entry3] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });
  const variants_img_3 = {
    visible: { scale: 1 },
    hidden: { scale: 0.1 },
  };
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
    visible: { scale: 1 },
    hidden: {
      scale: 0.95,
    },
  };

  return (
    <div
      id={id}
      className=" py-32  grid grid-cols-2 mx-auto w-[60%] gap-10 pv:max-ph:grid-cols-1  pv:max-ph:w-[90%] ph:max-sm:grid-cols-1 ph:max-sm:w-[70%] sm:max-md:grid-cols-2 sm:max-md:w-[95%] md:max-lg:grid-cols-2 md:max-lg:w-[90%] lg:max-xl:grid-cols-2 lg:max-xl:w-[80%] xl:max-dv:grid-cols-2 xl:max-dv:w-[80%] "
    >
      <div className="overflow-hidden rounded-md ">
        <div className=" hover:scale-105 duration-300  h-[600px]  ease-in-out w-full rounded-md pv:max-md:h-[300px] md:max-lg:h-[400px] cursor-pointer">
          <motion.img
            src={img}
            className="object-cover rounded-md w-full h-[600px]  pv:max-md:h-[300px] md:max-lg:h-[400px] "
            animate={inView ? "visible" : "hidden"}
            variants={variants_img}
            transition={{ duration: 0.75, ease: "easeOut" }}
            ref={ref}
          ></motion.img>
        </div>
      </div>

      <div className=" flex-col justify-center flex  pv:max-md:col-span-1 w-full relative ">
        <motion.p
          className="text-[20px] font-[400px] text-black cursor-pointer"
          animate={inView ? "visible" : "hidden"}
          variants={variants_title}
          transition={{ duration: 2, ease: "easeOut" }}
          ref={ref}
        >
          Digital Solutions Consultancy & Development
        </motion.p>
        <div className="relative">
          <motion.p
            className="text-[12px] leading-8 font-sans pt-4 text-[#707070] text-start"
            animate={inView ? "visible" : "hidden"}
            variants={variants_description}
            transition={{ duration: 2, ease: "easeOut" }}
            ref={ref}
          >
            We understand the importance technology play in defining the future
            profitability and sustainability of businesses. Leveraging from our
            global partner network, we constantly engage with global
            institutions as well as technology vendors and owners, enabling us
            to keep up with the latest market development and trend. On the
            other hand, our deep local knowledge and relation withs corporations
            in Vietnam enable us to understand the priorities and visions of our
            clients from the technology view. This vantage position enables us
            to deliver projects quickly, efficiently, minimizing cost and risk
            for all parties.
          </motion.p>
          {/* Geometry_3 */}
          <div className="w-[80%] h-[80%] centerDivAbsolute pv:max-md:hidden ">
            <motion.div
              ref={ref_3}
              animate={inView3 ? "visible" : "hidden"}
              variants={variants_img_3}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className=" w-full h-full  z-[-100]  "
            >
              <img className="opacity-50" src={sacredgeo_2}></img>
            </motion.div>
          </div>
          <motion.div
            ref={ref_1}
            animate={inView1 ? "visible" : "hidden"}
            variants={variants_img_5}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-[400px] h-[400px] sm:max-dh_max:hidden lg:max-xl:left-[58%] lg:max-xl:top-[30%]  lg:max-xl:w-[300px] lg:max-xl:h-[300px]  xl:max-dv:top-[30%] xl:max-dv:right-[15%] xl:max-dv:h-[300px] xl:max-dv:w-[300px]   pv:max-ph:w-[250px]  pv:max-ph:h-[250px]  pv:max-ph:right-[0%]  pv:max-ph:top-[50%] ph:max-sm:w-[200px] ph:max-sm:h-[200px] ph:max-sm:left-[31%] ph:max-sm:top-[35%]  absolute dhm:max-dh:top-[25%] dhm:max-dh:right-[6%] sm:max-md:w-[200px] sm:max-md:h-[200px] sm:max-md:top-[32%] sm:max-md:right-[10%] top-[22%]  md:max-lg:w-[300px] md:max-lg:h-[300px] md:max-lg:top-[35%] md:max-lg:right-[5%]  right-[6%] z-[-100] opacity-50"
          >
            <img className="" src={sacredgeo_8}></img>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSolution;
