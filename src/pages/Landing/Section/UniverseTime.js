/** @format */

import { Canvas } from "@react-three/fiber";
import React, {
  useState, useEffect
  , Suspense
} from "react";
import {
  Earth
} from "../../../components";
import { forwardRef } from "react";
import OMLogo from "../../../assets/root/logoOM_new_trans.png";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

const UniverseTime = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const [phase, setPhase] = useState(1); 
  const animateElement = ({ selector, opacity, duration, delay = 0 }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const element = document.querySelector(selector);
        if (element) {
          element.style.transition = `opacity ${duration}s ease-in-out`;
          element.style.opacity = opacity;
        }
        resolve();
      }, delay * 1000);
    });
  };
  useEffect(() => {
    const sequence = async () => {
      switch (phase) {
        case 1:
          // Phase 1 Animation Sequence
          await Promise.all([
            animateElement({
              selector: "#firstDiv",
              opacity: 1,
              duration: 5,
              delay: 0.5,
            }),
            animateElement({
              selector: "#secondDiv",
              opacity: 1,
              duration: 5,
              delay: 3,
            }),
            animateElement({
              selector: "#thirdDiv",
              opacity: 1,
              duration: 5,
              delay: 6,
            }),
            animateElement({
              selector: "#fourthDiv",
              opacity: 1,
              duration: 1,
              delay: 9,
            }),
          ]);

          await Promise.all([
            animateElement({
              selector: "#firstDiv",
              opacity: 0,
              duration: 5,
              delay: 3,
            }),
            animateElement({
              selector: "#secondDiv",
              opacity: 0,
              duration: 5,
              delay: 3,
            }),
            animateElement({
              selector: "#thirdDiv",
              opacity: 0,
              duration: 5,
              delay: 3,
            }),
            animateElement({
              selector: "#fourthDiv",
              opacity: 0,
              duration: 1,
              delay: 8,
            }),
          ]);

          // Move to phase 2 after animations complete
          setPhase(2);
          break;

        case 2:
          // Phase 2 Animation Sequence
          await Promise.all([
            animateElement({
              selector: "#secondSectionDiv",
              opacity: 1,
              duration: 5,
              delay: 0.5,
            }),
            animateElement({
              selector: "#thirdSectionDiv",
              opacity: 1,
              duration: 5,
              delay: 2,
            }),
            animateElement({
              selector: "#bgFirstDiv",
              opacity: 1,
              duration: 7,
              delay: 0.5,
            }),
            animateElement({
              selector: "#sunFirstDiv",
              opacity: 1,
              duration: 5,
              delay: 0.5,
            }),
            animateElement({
              selector: "#secondSectionDiv_2",
              opacity: 1,
              duration: 5,
              delay: 5,
            }),
          ]);

          await Promise.all([
            animateElement({
              selector: "#secondSectionDiv",
              opacity: 0,
              duration: 10,
              delay: 5,
            }),
            animateElement({
              selector: "#thirdSectionDiv",
              opacity: 0,
              duration: 10,
              delay: 5,
            }),
            animateElement({
              selector: "#bgFirstDiv",
              opacity: 0,
              duration: 10,
              delay: 5,
            }),
            animateElement({
              selector: "#sunFirstDiv",
              opacity: 0,
              duration: 10,
              delay: 5,
            }),
            animateElement({
              selector: "#secondSectionDiv_2",
              opacity: 0,
              duration: 1,
              delay: 14,
            }),
          ]);
          setPhase(1);
          break;

        default:
          break;
      }
    };

    sequence();
  }, [phase]);

  return (
    <div
      className="h-[100vh] universe_bg relative overflow-hidden"
    >
      <div class="star-field ">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>

      <div className="w-full h-full absolute top-0 left-0 boxShadowBright"
      ></div>

      <AnimatePresence>
        {phase === 2 && (
          // <motion.div className="w-[50%] h-[30%] rounded-full absolute top-[35%] left-[40%] rotate-[-30deg] boxShadowBright"
          <motion.div className="w-full h-full absolute top-0 left-0 boxShadowBright_1"
            id="bgFirstDiv"
            initial={{ opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* <Meteors number={5} /> */}

      <div className="text-white w-[60%] pv:max-ph:w-[98%] mx-auto pt-20 pv:max-ph:pt-40 md:max-xl:w-[75%] dhm:max-dh:w-[40%] dv:max-dvm:w-[50%] ph:max-md:w-[80%]">
        <AnimatePresence>
          {phase === 1 && (
            <div className="flex flex-col justify-center">
              <motion.div
                id="firstDiv"
                className="text-slate-100 text-[20px] w-[100%]  md:max-lg:text-[16px]  sm:max-md:text-[14px] ph:max-sm:text-[11px] pv:max-ph:text-[11px] pv:max-pvmax:text-[10.5px] pvmax:max-ph:text-[12px] iphone_xr:max-ph:text-[14px] italic font-serif font-thin"
                initial={{ opacity: 0 }}
              >
                "Together we build a better world a better universe
              </motion.div>

              <motion.div
                id="secondDiv"
                className="pl-10 pv:max-ph:pl-0 text-slate-100 text-[20px]  w-[100%]  md:max-lg:text-[16px]  sm:max-md:text-[14px] pv:max-pvmax:text-[9px]   ph:max-sm:text-[12px] pv:max-ph:text-[11px] pv:max-pvmax:text-[10.5px] pvmax:max-ph:text-[12px] iphone_xr:max-ph:text-[14px] italic font-serif font-thin"
                initial={{ opacity: 0 }}
              >
                Where happiness comes to all beings and all things
              </motion.div>

              <motion.div
                id="thirdDiv"
                className="pl-20 pv:max-ph:pl-0 text-slate-100 text-[20px]  w-[100%]  md:max-lg:text-[16px]  sm:max-md:text-[14px]  pv:max-pvmax:text-[9px]   ph:max-sm:text-[12px] pv:max-ph:text-[11px] pv:max-pvmax:text-[10.5px] pvmax:max-ph:text-[12px] iphone_xr:max-ph:text-[14px] italic font-serif font-thin "
                initial={{ opacity: 0 }}
              >
                A place where development is sustainable and nature is
                protected"
              </motion.div>

              <motion.div
                id="fourthDiv"
                className="text-slate-400 text-[20px]  w-[100%] italic font-serif font-thin "
                initial={{ opacity: 0 }}
              ></motion.div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase === 2 && (
            <div className="flex justify-between items-center h-full flex-col">
              <motion.img
                id="thirdSectionDiv"
                className="w-[100px] h-[100px] object-fill z-[5]"
                src={OMLogo}
                initial={{ opacity: 0 }}
              ></motion.img>
              <div className="w-full text-transparent">hidden</div>
              <motion.div
                id="secondSectionDiv"
                className="text-center text-slate-100 text-[20px] w-[100%]  md:max-lg:text-[16px]  sm:max-md:text-[14px] ph:max-sm:text-[11px] pv:max-ph:text-[11px] pv:max-pvmax:text-[10.5px] pvmax:max-ph:text-[12px] iphone_xr:max-ph:text-[14px] italic font-serif font-thin overflow-hidden z-[5]"
                initial={{ opacity: 0 }}
              >
                ... To live an excellent life
              </motion.div>
              <motion.div
                id="secondSectionDiv_2"
                className="text-center text-slate-400 text-[20px] w-[100%]  md:max-lg:text-[16px]  sm:max-md:text-[14px]  pv:max-pvmax:text-[9px] pvmax:max-ph:text-[11px]  ph:max-sm:text-[12px] italic font-serif font-thin overflow-hidden"
                initial={{ opacity: 0 }}
              ></motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      {
        width <= 768 ? (
          <div
            class="earth absolute"
            style={{
              position: "absolute",
              left: `${width === 425
                ? "26%"
                : width === 375 || height === 667
                  ? "28%"
                  : width === 540 || height === 720
                    ? "28%"
                    : width === 768 || height === 576
                      ? "28%"
                      : width === 768 || width <= 430
                        ? "28%"
                        : width === 320 || width <= 375
                          ? "15%"
                          : width === 320
                            ? "27%"
                            : width === 390
                              ? "27%"
                              : "15%"
                }`,
              top: `${width === 425
                ? "73%"
                : width === 375 || height === 667
                  ? "73%"
                  : width === 540 || height === 720
                    ? "73%"
                    : width === 768 || height === 576
                      ? "73%"
                      : width >= 375 || width <= 430
                        ? "73%"
                        : width >= 320 || width <= 375
                          ? "72%"
                          : width === 360
                            ? "72%"
                            : width === 390
                              ? "72%"
                              : width === 1024
                                ? "12%"
                                : "0%"
                }`,
            }}
          >
            <div class="earth_effect"></div>

            <AnimatePresence>
              {phase === 2 && (
                // <motion.div className="w-[50%] h-[30%] rounded-full absolute top-[35%] left-[40%] rotate-[-30deg] boxShadowBright"
                <motion.div className="sun"
                  id="sunFirstDiv"
                  initial={{ opacity: 0 }}
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            className={`w-[400px] h-[400px] relative p_UniverseTime_Globe `}
            style={{
              position: "absolute",
              left: `${
                // laptop / desktop
                width === 1366 && height === 648
                  ? "13.1%"
                  : width === 1366 && height === 720
                    ? "13.1%"
                    : width >= 1366 && width < 1440
                      ? "13.1%"
                      : width === 1280 && height === 800
                        ? "12%"
                        : width >= 1280 && width < 1366
                          ? "12%"
                          : width === 1024 && height === 768
                            ? "13%"
                            : width === 1024 && height === 576
                              ? "14%"
                              : //
                              width === 1050 && height === 600
                                ? "9%"
                                : width === 1136 && height === 640
                                  ? "10%"
                                  : width === 1152 && height === 864
                                    ? "10%"
                                    : width === 1366 && height === 1024
                                      ? "13%"
                                      : width === 1280 && height === 720
                                        ? "13%"
                                        : //
                                        width === 1440 && height === 810
                                          ? "13%"
                                          : width === 1024 && height === 600
                                            ? "14.5%"
                                            : width === 1024 && height === 1366
                                              ? "14.5%"
                                              : width >= 1024 && width < 1280
                                                ? "14.5%"
                                                : width === 1366 && height === 768
                                                  ? "13%"
                                                  : width === 1366
                                                    ? "13%"
                                                    : width === 1440 && height === 800
                                                      ? "13.1%"
                                                      : width >= 1440 && width < 1536
                                                        ? "13.1%"
                                                        : width === 1440 && height === 731
                                                          ? "13.1%"
                                                          : width === 1440 && height === 900
                                                            ? "13.4%"
                                                            : width === 1536 && height === 864
                                                              ? "14%"
                                                              : width >= 1536 && width < 1620
                                                                ? "14%"
                                                                : width === 1620 && height === 945
                                                                  ? "14.3%"
                                                                  : width >= 1620 && width < 1680
                                                                    ? "14%"
                                                                    : width === 1680 && height === 1050
                                                                      ? "15%"
                                                                      : width >= 1680 && width < 1728
                                                                        ? "15%"
                                                                        : width === 1728 && height === 992
                                                                          ? "15%"
                                                                          : width >= 1728 && width < 1920
                                                                            ? "15%"
                                                                            : width === 1920 && height === 1080
                                                                              ? "16.2%"
                                                                              : width >= 1920 && width < 2560
                                                                                ? "16.2%"
                                                                                : width === 1920 && height === 945
                                                                                  ? "16.3%"
                                                                                  : width === 2560 && height === 1440
                                                                                    ? "19.5%"
                                                                                    : width === 800 && height === 600
                                                                                      ? "11%"
                                                                                      : width >= 800 && width < 840
                                                                                        ? "12%"
                                                                                        : width === 840 && height === 480
                                                                                          ? "12%"
                                                                                          : width === 840 && width < 1024
                                                                                            ? "12%"
                                                                                            : width === 853 && height === 1280
                                                                                              ? "12%"
                                                                                              : width === 912 && height === 1368
                                                                                                ? "12%"
                                                                                                : "0%"
                }`,
              bottom: `${
                // laptop / desktop
                width === 1366 && height === 648
                  ? "0%"
                  : width === 1366 && height === 720
                    ? "2%"
                    : width >= 1366 && width < 1440
                      ? "2%"
                      : width === 1280 && height === 800
                        ? "5%"
                        : width >= 1280 && width < 1366
                          ? "5%"
                          : width === 1024 && height === 600
                            ? "8.5%"
                            : width === 1366 && height === 768
                              ? "4%"
                              : width === 1024 && height === 768
                                ? "13%"
                                : width === 1024 && height === 1366
                                  ? "17%"
                                  : width === 1024 && height === 576
                                    ? "7%"
                                    : width === 1050 && height === 600
                                      ? "0%"
                                      : width === 1136 && height === 640
                                        ? "0%"
                                        : width === 1152 && height === 864
                                          ? //
                                          "6%"
                                          : width === 1366 && height === 1024
                                            ? "13%"
                                            : width === 1280 && height === 720
                                              ? "13%"
                                              : width === 1440 && height === 810
                                                ? "13%"
                                                : width >= 1024 && width < 1280
                                                  ? "8.5%"
                                                  : width === 1440 && height === 800
                                                    ? "5%"
                                                    : width === 1440 && height === 900
                                                      ? "7.5%"
                                                      : width === 1440 && height === 765
                                                        ? "4%"
                                                        : width >= 1440 && width < 1536
                                                          ? "6%"
                                                          : width === 1536 && height === 864
                                                            ? "7%"
                                                            : width >= 1536 && width < 1620
                                                              ? "7%"
                                                              : width === 1620 && height === 945
                                                                ? "8%"
                                                                : width >= 1680 && width < 1728
                                                                  ? "8%"
                                                                  : width === 1680 && height === 1050
                                                                    ? "9.5%"
                                                                    : width === 1728 && height === 992
                                                                      ? "9%"
                                                                      : width >= 1728 && width < 1920
                                                                        ? "9%"
                                                                        : width === 1920 && height === 1080
                                                                          ? "10%"
                                                                          : width === 1920 && height === 945
                                                                            ? "8%"
                                                                            : width >= 1920 && width < 2560
                                                                              ? "8%"
                                                                              : width === 2560 && height === 1440
                                                                                ? // Tablet
                                                                                "13%"
                                                                                : width === 800 && height === 600
                                                                                  ? "8%"
                                                                                  : width >= 800 && width < 820
                                                                                    ? "8%"
                                                                                    : width === 820 && height === 1180
                                                                                      ? "15%"
                                                                                      : width >= 820 && width < 840
                                                                                        ? "15%"
                                                                                        : width === 840 && height === 480
                                                                                          ? "4%"
                                                                                          : width === 840 && width < 912
                                                                                            ? "4%"
                                                                                            : width === 853 && height === 1280
                                                                                              ? "17%"
                                                                                              : width === 912 && height === 1368
                                                                                                ? "17%"
                                                                                                : "0%"
                }`,
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 4 }}
          >
            {/* <Canvas id="_slide_" className={`slide_01`}>
              <Suspense fallback={null}>
                <Earth />
              </Suspense>
            </Canvas> */}
            <div className="earth centerDivAbsolute !w-[100px] !h-[100px]"></div>
            <div class="earth_effect"></div>

            <AnimatePresence>
              {phase === 2 && (
                <motion.div className="sun"
                  id="sunFirstDiv"
                  initial={{ opacity: 0 }}
                ></motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      }
    </div >
  );
};

export default forwardRef(UniverseTime);
