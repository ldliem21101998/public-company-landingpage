/** @format */

import React, { useEffect, useState } from "react";
import logo from "../../assets/logoHT.svg";
import imgmenu from "../../assets/bt2.svg";
import { LazyComponent, path } from "../../utils/constants";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";
import iconMenu from "../../assets/menuIcon.svg";
import { motion } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const closeMenu = () => setOpenMobileMenu(false);

  const handleNavbarNavigate = (pathToNavigate) => {
    closeMenu();
    navigate(`../${pathToNavigate}`);
  };

  const location = useLocation();

  return (
    <div
      // className="fixed h-[90px] w-full top-0 left-0 z-[2] bg-white"
      className="h-[90px] pv:max-sm:h-[50px] w-full top-0 left-0 z-[2] bg-white"
      id="header"
    >
      <nav className="flex justify-between items-center max-w-[1240px] m-auto h-full p-0 px-[1rem] relative">
        <a
          className="p-[5px] cursor-pointer h-full  "
          onClick={() => {
            navigate(".." + path.Landing);
          }}
        >
          <LazyComponent component={() => {
            return (
              <img
                className="w-[80px]  pv:max-sm:w-[40px] pv:max-sm:h-[40px] h-full object-cover border-[1px] border-white"
                src={logo}
                alt="logo"
              />
            )
          }} />
        </a>
        <ul
          className={`c_header_menu absolute flex items-center justify-between w-[40%] left-[50%]
                    ${openMobileMenu ? "c_header_menu_mobile" : ""}
                `}
          style={{ transform: "translate(-50%, 0)" }}
        >
          <li
            className=""
            // key={index}
            onClick={() => handleNavbarNavigate(path.Landing)}
          >
            <a
              className={`hover:pb-[12px] hover:border-b-[3px] hover:border-sky-400 cursor-pointer`}
              onClick={() => {
                navigate(path.Landing);
              }}
            >
              Home
            </a>
          </li>
          {/* {headerItem.map((item, index) => {
            return (
              <li className="" key={index}>
                <a
                  className={`hover:pb-[12px] hover:border-b-[3px] hover:border-sky-400 cursor-pointer`}
                  href={item.path}
                >
                  {item.title}
                </a>
              </li>
            );
          })} */}

          <li
            className=""
            key={"aboutus"}
            onClick={() => handleNavbarNavigate("/#_root")}
          >
            <a
              className={`hover:pb-[12px] hover:border-b-[3px] hover:border-sky-400 cursor-pointer`}
              href={"/#_root"}
            >
              About Us
            </a>
          </li>
          <li className="" key={"footer"}>
            <a
              className={`hover:pb-[12px] hover:border-b-[3px] hover:border-sky-400 cursor-pointer`}
              onClick={() => {
                closeMenu();
                if (location.state?.targetId == "footer") {
                  navigate("/activities#footer");
                } else {
                  navigate("/activities", { state: { targetId: "footer" } });
                }
              }}
            // href="/activities#footer"
            >
              Contact
            </a>
          </li>
          <li
            className=""
          // key={index}
          // onClick={() => handleNavbarNavigate(path.Activities)}
          >
            <a
              className={`hover:pb-[12px] hover:border-b-[3px] hover:border-sky-400 cursor-pointer`}
              onClick={() => {
                closeMenu();
                if (location.state?.targetId == "activities_content") {
                  navigate("/activities#activities_content");
                } else {
                  navigate("/activities", {
                    state: { targetId: "activities_content" },
                  });
                }
              }}
            >
              Activities
            </a>
          </li>
        </ul>
        <div className="c_header_hamburger hidden">
          {openMobileMenu ? (
            // <Icon
            //   className="w-[30px] h-[30px] pv:max-sm:h-[20px] pv:max-sm:w-[20px]"
            //   icon={openMobileMenu ? "la:times" : "la:bars"}
            //   onClick={() => handleClick()}
            // />
            <img
              src={iconMenu}
              className="w-[20px] h-[20px] object-cover"
              onClick={() => handleClick()}
            />
          ) : (
            <img
              className=" w-[20px] h-[20px]  object-cover"
              src={imgmenu}
              onClick={() => handleClick()}
            ></img>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
