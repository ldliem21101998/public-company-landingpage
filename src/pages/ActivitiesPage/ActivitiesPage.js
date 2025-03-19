/** @format */

import { DigitalSolution } from "../../pages";
import { Footer, Header } from "../../components";
import imgBanner from "../../assets/HT_mosaic.jpg";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

import sacredgeo_1 from "../../assets/sacredGeo/item1.svg";
import sacredgeo_3 from "../../assets/sacredGeo/item5.svg";
import sacredgeo_5 from "../../assets/sacredGeo/item4_1.svg";
import sacredgeo_8 from "../../assets/sacredGeo/Asset 5.svg";
import imgPrincipal from "../../assets/principal.png";
import imgTrading from "../../assets/retail.png";
import imgInterior from "../../assets/rawimage/interior.png";
import imgRealEstate from "../../assets/Realestate.png";
import imgMA from "../../assets/rawimage/m_a.png";
import sacredgeo_2 from "../../assets/sacredGeo/Artboard2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router";

const ActivitiesPage = () => {
  const [ref_invest, inViewinvest] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [ref_m_a, inViewm_a] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [ref_trading, inView_trading] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [ref_1, inView1] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [ref_2, inView2] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [ref_3, inView3] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  const [ref_4, inView4] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [ref_5, inView5] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const variants_img_1 = {
    visible: { x: 0, y: 0 },
    hidden: {
      x: -200,
      y: -200,
    },
  };
  const variants_img_3 = {
    visible: { scale: 1 },
    hidden: { scale: 0.1 },
  };
  const variants_img_4 = {
    visible: { x: 0, y: 0 },
    hidden: {
      x: 100,
      y: -120,
    },
  };
  const variants_img_5 = {
    visible: { x: 0, y: 0 },
    hidden: {
      x: -200,
      y: -200,
    },
  };
  const variants_img_6 = {
    visible: { x: 0, y: 0 },
    hidden: {
      x: -200,
      y: -200,
    },
  };

  const [ref, inView] = useInView({
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

  const location = useLocation();
  useEffect(() => {
    // Check if the location contains a fragment identifier
    const fragment = location.hash;
    if (fragment) {
      // Extract the section id from the fragment
      const sectionId = fragment.substring(1);
      // Scroll to the section with the corresponding id
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="relative overflow-hidden">
      <Header />
      <motion.div
        id="removeLandingBanner"
        className="relative h-[100vh] pv:max-md:h-[40vh]"
      >
        <img
          className="w-full h-full object-cover z-[-1]"
          src={imgBanner}
          alt="banner"
        />
        <motion.p
          className=" font-sans text-white text-5xl absolute top-[40%] left-[50%] w-[80%] text-center z-[1] p_Landing_Title"
          style={{ transform: "translate(-50%)" }}
        >
          HOANG THANH CAPITAL & PARTNERS
        </motion.p>

        <div className="w-full h-full bg-gradient-to-t from-slate-600 absolute bottom-0 z-[0]"></div>
      </motion.div>
      <div
        id="activities_content"
        className="grid grid-cols-2 mx-auto w-[60%] gap-10 pv:max-ph:grid-cols-1  pv:max-ph:w-[90%] ph:max-sm:grid-cols-1 ph:max-sm:w-[70%] sm:max-md:grid-cols-2 sm:max-md:w-[95%] md:max-lg:grid-cols-2 md:max-lg:w-[80%] lg:max-xl:grid-cols-2 lg:max-xl:w-[80%] xl:max-dv:grid-cols-2 xl:max-dv:w-[80%]"
      >
        {/* Section M&A */}
        <motion.div className="py-10 ">
          <div className="overflow-hidden cursor-pointer rounded-md">
            <motion.img
              className="object-cover w-full h-[306px] hover:scale-110 duration-300 ease-in "
              src={imgMA}
              alt="M&A"
            ></motion.img>
          </div>
          <div className="relative">
            <motion.p
              animate={inViewm_a ? "visible" : "hidden"}
              variants={variants_title}
              transition={{ duration: 0.75, ease: "easeOut" }}
              ref={ref_m_a}
              className="py-10 pb-3 text-[20px] cursor-pointer"
            >
              M&A
            </motion.p>

            <motion.p
              animate={inViewm_a ? "visible" : "hidden"}
              variants={variants_description}
              transition={{ duration: 0.75, ease: "easeOut" }}
              ref={ref_m_a}
              className="text-[12px] text-[#707070] leading-8"
            >
              Hoang Thanh Group has a solid track record and strong market
              reputation with decades of combined investment banking experience
              in Vietnam. Drawing from our deep experiences working with
              Governmental institutions, multinational corporations, global
              financial institutions and top Vietnamese corporations, we aim to
              provide a unique investment banking services experience to clients
              that share our core values.
            </motion.p>
            <motion.div
              ref={ref_1}
              // style={{ translateX: geo_1 }}
              animate={inView1 ? "visible" : "hidden"}
              variants={variants_img_1}
              transition={{ duration: 1.75, ease: "easeInOut" }}
              className="absolute w-[70%] h-[70%] ph:max-sm:h-[350px] ph:max-sm:w-[350px]   top-[-40%] left-[-40%] z-[-100] md:max-lg:left-0 md:max-lg:top-[40%] sm:max-md:left-0 sm:max-md:top-[40%] pv:max-ph:top-[10%] pv:max-ph:left-[10%]  opacity-40"
            >
              <img className="" src={sacredgeo_1} alt="scaredGeo"></img>
            </motion.div>
          </div>
        </motion.div>
        {/* Section Pricipal Investments */}
        <motion.div className="py-10 ">
          <div className="overflow-hidden cursor-pointer rounded-md">
            <motion.img
              className="object-cover w-full h-[306px] hover:scale-110 duration-300 ease-in "
              src={imgPrincipal}
              alt="principle investment"
            ></motion.img>
          </div>
          <div className="relative">
            <motion.p
              animate={inViewinvest ? "visible" : "hidden"}
              variants={variants_title}
              transition={{ duration: 0.75, ease: "easeOut" }}
              ref={ref_invest}
              className="py-10 pb-3 text-[20px] cursor-pointer"
            >
              Principal Investments
            </motion.p>
            <div className="w-[70%] h-[70%] centerDivAbsolute md:max-dh_max:hidden  ">
              <motion.div
                ref={ref_3}
                animate={inView3 ? "visible" : "hidden"}
                variants={variants_img_3}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className=" w-full h-full  z-[-100]  "
              >
                <img className="opacity-50" src={sacredgeo_2} alt="scaredGeo"></img>
              </motion.div>
            </div>
            <div className="relative">
              <motion.p
                animate={inViewinvest ? "visible" : "hidden"}
                variants={variants_description}
                transition={{ duration: 0.75, ease: "easeOut" }}
                ref={ref_invest}
                className="text-[12px] text-[#707070] leading-8"
              >
                Drawing from our deep experience working with the world’s
                leading multinational corporations and entrepreneurs as well as
                leading local corporates and leaders, Hoang Thanh Group has
                equity investments in financial institutions, distribution,
                hospitality, digital technology companies and others.
              </motion.p>

              <motion.div
                ref={ref_2}
                animate={inView2 ? "visible" : "hidden"}
                variants={variants_img_5}
                transition={{ duration: 2, ease: "easeOut" }}
                className="w-[70%] h-[70%]  absolute top-[0] right-[-40%] md:max-lg:bottom-[20%] md:max-lg:right-0 sm:max-md:left-0 sm:max-md:top-[40%] ph:max-sm:w-[300px]  ph:max-sm:h-[300px] pv:max-md:hidden   z-[-100] opacity-50"
              >
                <img className="" src={sacredgeo_8} alt="scaredGeo"></img>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section Digital solution */}
      <DigitalSolution />

      <div className="grid grid-cols-2 mx-auto w-[60%] gap-10 pv:max-ph:grid-cols-1  pv:max-ph:w-[90%] ph:max-sm:grid-cols-1 ph:max-sm:w-[70%] sm:max-md:grid-cols-2 sm:max-md:w-[95%] md:max-lg:grid-cols-2 md:max-lg:w-[80%] lg:max-xl:grid-cols-2 lg:max-xl:w-[80%] xl:max-dv:grid-cols-2 xl:max-dv:w-[80%]">
        {/* section Retail Trading*/}
        <motion.div className="py-10 ">
          <div className="overflow-hidden cursor-pointer rounded-md">
            <motion.img
              className="object-cover w-full h-[306px] hover:scale-110 duration-300 ease-in "
              src={imgTrading}
              alt="retail trading"
            ></motion.img>
          </div>
          <div className="relative">
            <motion.p
              animate={inView_trading ? "visible" : "hidden"}
              variants={variants_title}
              transition={{ duration: 0.75, ease: "easeOut" }}
              ref={ref_trading}
              className="py-10 pb-3 text-[20px] cursor-pointer"
            >
              Retail Trading
            </motion.p>
            <motion.p
              animate={inView_trading ? "visible" : "hidden"}
              variants={variants_description}
              transition={{ duration: 0.75, ease: "easeOut" }}
              ref={ref_trading}
              className="text-[12px] text-[#707070] leading-8"
            >
              Through our portfolio company, Hoang Thanh Group is active in
              retail trading offering services such as end-to-end B2B or B2C
              distribution, delivering products to Vietnamese consumers through
              a value chain of planning, organizing, marketing, warehousing and
              delivery.
            </motion.p>
            <motion.div
              ref={ref_4}
              animate={inView4 ? "visible" : "hidden"}
              variants={variants_img_6}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="  w-[70%] h-[70%] ph:max-lg:w-[300px] ph:max-lg:h-[300px] absolute top-[-20%] left-0 z-[-100]  opacity-60"
            >
              <img className="" src={sacredgeo_3} alt="scaredGeo"></img>
            </motion.div>
          </div>
        </motion.div>

        {/* section Real Estate & Hospitality and archittect */}
        <motion.div className="py-10 ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={{
              delay: 20000,
              disableOnInteraction: false,
            }}
            className="w-[100%] rounded-md swiperactivities"
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <div className="overflow-hidden cursor-pointer rounded-md">
                <motion.img
                  className="object-fill w-full h-[306px] hover:scale-110 duration-300 ease-in "
                  src={imgRealEstate}
                  alt="real estate"
                ></motion.img>
              </div>
              <div className="relative">
                <motion.p
                  animate={inView ? "visible" : "hidden"}
                  variants={variants_title}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                  ref={ref}
                  className="py-10 pb-3 text-[20px] cursor-pointer"
                >
                  Real Estate & Hospitality
                </motion.p>
                <motion.p
                  animate={inView ? "visible" : "hidden"}
                  variants={variants_description}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                  ref={ref}
                  className="text-[12px] text-[#707070] leading-8"
                >
                  Hoang Thanh Group owns, design, and operates a number of
                  mixed-used luxury office buildings and hotels in Hanoi and
                  HCMC.
                </motion.p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" overflow-hidden cursor-pointer rounded-md">
                <motion.img
                  className="object-cover w-full h-[306px] hover:scale-110 duration-300 ease-in "
                  src={imgInterior}
                  alt="Interior"
                ></motion.img>
              </div>
              <div className="relative">
                <motion.p
                  // animate={inView ? "visible" : "hidden"}
                  // variants={variants_title}
                  // transition={{ duration: 0.75, ease: "easeOut" }}
                  // ref={ref}
                  className="py-10 pb-3 text-[20px] cursor-pointer"
                >
                  Architect & Interior Designs
                </motion.p>
                <motion.p
                  // animate={inView ? "visible" : "hidden"}
                  // variants={variants_description}
                  // transition={{ duration: 0.75, ease: "easeOut" }}
                  // ref={ref}
                  className="text-[12px] text-[#707070] leading-8"
                >
                  Hoang Thanh Group also own an architect and interior design
                  subsidiary with its philosophy centered around eat clean,
                  breath clean, brain clean, work clean and live clean.
                </motion.p>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>        
      </div>

      {/* geomety  */}
      <motion.div
        ref={ref_5}
        animate={inView5 ? "visible" : "hidden"}
        variants={variants_img_4}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-[300px] w-[300px] pv:max:md:h-[250px] pv:max:md:w-[250px] z-[-100] absolute bottom-[4%] right-[12%]  opacity-60"
      >
        <img className="" src={sacredgeo_5} alt="scaredGeo"></img>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ActivitiesPage;
