/** @format */

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import rootImage from "../../../assets/root/Root.jpg";
import OMLogo from "../../../assets/root/logoOM_new_trans.png";
import rootDot_1 from "../../../assets/root/star1.png";
import rootDot_2 from "../../../assets/root/star2.png";
import rootDot_3 from "../../../assets/root/star3.png";
import rootDot_4 from "../../../assets/root/star4.png";
import { useLocation } from "react-router";
import { dataCompanyCulture } from "../../../model/mockData";
import { CardCompanyCulture } from "../../../components";
import { LazyComponent } from "../../../utils/constants"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

const Root = ({ id }) => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const location = useLocation();

  const [selectedPoint, setSelectedPoint] = useState(null);
  const width = window.innerWidth;
  const [isMobile, setIsMobile] = useState(false);

  const handlePointClick = (point) => {
    setSelectedPoint((prevPoint) => (prevPoint === point ? null : point));
  };

  useEffect(() => {
    if (isVisible) {
      setSelectedPoint(3);
    }

    if (isVisible && location.hash === "#_root") {
      setSelectedPoint(4);
    }

    if (!isVisible) {
      setSelectedPoint(null);
    }
  }, [isVisible, location.hash]);

  // break point resize sidebar
  useEffect(() => {
    if (width <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div ref={ref} id={id} className={`mx-auto min-h-[10vh] w-[100%]  relative`}>
      <LazyComponent component={() => {
        return (
          <img
            className="object-cover z-[-3] c_root_img"
            src={rootImage}
            alt="root"
            width="100%"
            onClick={() => {
              setSelectedPoint(null);
            }}
          />
        )
      }} />
      <div className="w-full h-[120px] p-[5px] bg-transparent absolute left-0 bottom-0 mb-[20px]">
        <div className="w-full h-full flex justify-between items-center max-w-[1240px] m-auto c_Root_OMLogo">

          <img
            className="object-fill w-[120px] h-full"
            src={OMLogo}
            alt="OM logo"
          />

        </div>
      </div>

      <div
        className="absolute bottom-[16.5%] left-[22.5%] cursor-pointer rootDot_1"
        onClick={() => handlePointClick(1)}
        onMouseEnter={() => {
          if (!isMobile) {
            handlePointClick(1);
          }
        }}
      >
        <div className="w-full h-full relative">
          <div className=" w-40 h-40 pv:max-md:w-32 pv:max-md:h-32  rounded-full">

            <img
              className="w-full h-full object-cover absolute top-0 left-0"
              src={rootDot_1}
              alt="rootDot"
            />

          </div>
        </div>
      </div>
      <div
        className="absolute top-[38.5%] left-[30%] cursor-pointer rootDot_2"
        onClick={() => handlePointClick(2)}
        onMouseEnter={() => {
          if (!isMobile) {
            handlePointClick(2);
          }
        }}
      >
        <div className="w-full h-full relative">
          <div className="w-40 h-40 pv:max-md:w-32 pv:max-md:h-32 rounded-full"></div>

          <img
            className="w-full h-full object-cover absolute top-0 left-0"
            src={rootDot_4}
            alt="rootDot"
          />

        </div>
      </div>
      <div
        className="absolute top-[25%] right-[33.5%] cursor-pointer rootDot_3"
        onClick={() => handlePointClick(3)}
        onMouseEnter={() => {
          if (!isMobile) {
            handlePointClick(3);
          }
        }}
      >
        <div className="w-full h-full relative">
          <div className="w-40 h-40 pv:max-md:w-32 pv:max-md:h-32 rounded-full"></div>

          <img
            className="w-full h-full object-cover absolute top-0 left-0"
            src={rootDot_2}
            alt="rootDot"
          />

        </div>
      </div>
      <div
        className="absolute top-[37%] right-[14.5%] cursor-pointer rootDot_4"
        onClick={() => handlePointClick(4)}
        onMouseEnter={() => {
          if (!isMobile) {
            handlePointClick(4);
          }
        }}
      >
        <div className="w-full h-full relative">
          <div className="w-40 h-40 pv:max-md:w-32 pv:max-md:h-32 rounded-full"></div>

          <img
            className="w-full h-full object-cover absolute top-0 left-0"
            src={rootDot_3}
            alt="rootDot"
          />

        </div>
      </div>
      <div
        className="absolute bottom-[15%] right-[22%] cursor-pointer rootDot_5"
        onClick={() => handlePointClick(5)}
        onMouseEnter={() => {
          if (!isMobile) {
            handlePointClick(5);
          }
        }}
      >
        <div className="w-full h-full relative">
          <div className="w-40 h-40 pv:max-md:w-32 pv:max-md:h-32 rounded-full">

            <img
              className="w-full h-full object-cover absolute top-0 left-0"
              src={rootDot_1}
              alt="rootDot"
            />

          </div>
        </div>
      </div>

      {selectedPoint === 1 && (
        <div className=" absolute bottom-[18%] left-[25%]  bg-[#11422d]  pv:max-ph:left-[10%] ph:max-sm:left-[10%]  sm:max-md:left-[12%] bg-opacity-70  rounded-lg mx-auto    ">
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            // autoplay={{
            //   delay: 6000,
            // }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className=" w-[640px] xl:max-2xl:w-[640px] lg:max-xl:w-[500px] phm:max-lg:w-[500px]  pv:max-ph:w-[300px]   sm:max-md:w-[500px]  md:max-lg:w-[500px]  ph:max-sm:w-[400px] rounded-lg"
          >
            {dataCompanyCulture.map((item, index) => {
              return (
                <SwiperSlide className="">
                  <CardCompanyCulture
                    title={item.title}
                    desc={item.desc}
                  ></CardCompanyCulture>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}

      {selectedPoint === 2 && (
        <div className="text-[14px]  absolute top-[40%] left-[38.5%] mt-4 ml-4 bg-[#11422d] bg-opacity-70 p-3 rounded-md shadow-md w-[200px] flex flex-col gap-[3px] rootContent_2  ">
          <motion.div
            className="text-white italic"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            Our Mission
          </motion.div>
          <motion.p
            className=" text-white italic pv:max-ph:text-left"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          >
            We are an exceptional investment firm in Vietnam with an all-win
            all-happiness philosophy where our clients, partners, shareholders,
            and communities all benefit as the results our the collective
            advance. Drawing from our deep experience working with the world’s
            leading multinational corporations and entrepreneurs as well as
            leading local corporates and leaders, we mobilize our assets,
            technologies, ideas, and ecosystem to advance the collective success
            supported by our shared values of{" "}
            <b className="font-extrabold">
              {" "}
              good deeds - hard work - strong ethics - wisdom - willpower -
              harmonious - grateful
            </b>
            .
          </motion.p>
        </div>
      )}

      {selectedPoint === 3 && (
        <div className="text-[14px] absolute top-[24%] right-[42%] mt-4 ml-4 bg-[#11422d] bg-opacity-70 p-3 rounded-md shadow-md w-[35vh] flex flex-col gap-[3px] max-w-[170px] max-h-[400px] rootContent_3">
          <motion.div
            className=" text-white italic"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            Our Vision
          </motion.div>
          <motion.p
            className="text-white italic text-left"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          >
            Together we build a better world, a better universe Where happiness
            comes to all beings and things A place where development is
            sustainable and nature is protected
          </motion.p>
        </div>
      )}

      {selectedPoint === 4 && (
        <div className="text-[14px] absolute top-[20%] right-[20%] mt-4 ml-4 bg-[#11422d] bg-opacity-70 p-3 rounded-md shadow-md w-[300px] flex flex-col gap-[3px] rootContent_4">
          <motion.div
            className=" text-white italic"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            Who we are - Our Identity
          </motion.div>
          <motion.p
            className=" text-white italic text-left "
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          >
            Hoang Thanh Group is an investment holding company with M&A and principle investments in financial institutions as our core businesses. Through our group and portfolio companies our activities also expand to digital solutions investment and development, real estate and hospitality, warehousing & logistics, architect & interior designs. Our senior management team have combine decades of investment banking experiences in Vietnam with a solid track record. The management team is supported by a team of senior industry experts both local and international, each with many years of experience and deep knowledge in their own field. Drawing from our deep experience working with the world’s leading multinational corporations and entrepreneurs and driven by our shared DNA values, Hoang Thanh Group mobilize our assets, technologies, ideas, and ecosystem to advance the success of the collective with the goal of accelerating economic progress and strength bonds between Vietnam and the international communities.
          </motion.p>
        </div>
      )}

      {selectedPoint === 5 && (
        <div className="text-[14px] absolute bottom-[20%] right-[27%] mt-4 ml-4 bg-[#11422d] opacity-70 p-3 rounded-md shadow-md w-[300px] flex flex-col gap-[3px] rootContent_5">
          <motion.div
            className=" text-white italic"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            Our Purpose
          </motion.div>
          <motion.p
            className=" text-white italic text-left"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          >
            We believe the all-win, all-happiness approach where our clients,
            partners, shareholders, and communities all benefit as the results.
            Our purpose is united by our shared values of good deeds - hard work
            - strong ethics - wisdom - willpower - harmonious - greatful. We
            work to amplify our ideas and living philosophy to help advance our
            businesses and communities in an accountable and sustainable manner.
          </motion.p>
        </div>
      )}
    </div>
  );
};
export default Root;
