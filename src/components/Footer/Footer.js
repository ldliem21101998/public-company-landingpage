/** @format */

import logo from "../../assets/logoHT.svg";
import logo_2 from "../../assets/logo_om.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Footer = ({ customStyle, id }) => {
  const year = new Date().getFullYear();
  const { state } = useLocation();
  const { targetId } = state || {};
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView();
    }
  }, [targetId]);
  return (
    <div
      id={"footer"}
      className={`w-full pt-[0.8rem] flex justify-between gap-10  bg-[#6da4da] pv:max-ph:py-4 md:max-phm:px-[1%] px-[5%] pv:max-ph:text-[12px]  pv:max-ph:px-2  lg:max-xl:text-[13px] md:max-lg:text-[13px] pv:max-ph:gap-0 ph:max-md:gap-0 ph:max-md:text-[12px]  c_footer ${customStyle} `}
    >
      <div className="flex flex-col  bg-[#6da4da] pv:max-ph:flex-col  pv:max-ph:items-start   justify-center pv:max-ph:gap-0">
        <div className="flex gap-[1.5rem] pb-[0.8rem] pt-[0.5rem] pv:max-ph:pb-[1rem] ">
          <img
            src={logo}
            className="w-[80px] h-[80px] pv:max-ph:w-[40px] pv:max-ph:h-[40px] ph:max-md:w-[60px] ph:max-md:h-[60px]  border-[1px] border-white"
          />
          <img
            src={logo_2}
            className="w-[80px] h-[80px]  pv:max-ph:w-[40px] pv:max-ph:h-[40px] ph:max-md:w-[60px] ph:max-md:h-[60px] border-[1px] border-white  "
          />
        </div>

        <p className="text-white align-text-bottom text-[16px] pv:max-ph:text-[13px] pb-[7px] pv:max-ph:pb-[0.9rem] md:max-phm:text-[12px]">
          HOANG THANH CAPITAL & PARTNERS CO. LTD
        </p>
        <p className="text-white align-text-bottom text-[14px] pv:max-ph:text-[11px] pb-[0.9rem] pv:max-ph:pb-[1rem] md:max-phm:text-[10px] ">
          Copyright © {year} Hoang Thanh ®
        </p>
      </div>

      <div className="flex flex-col  text-white justify-around  pb-[0.8rem] md:max-phm:text-[10px] pv:max-ph:pb-[1rem] ph:max-md:pb-[0.8rem]">
        <p className=" pv:max-ph:pt-[0]">Suite 6, Floor 1, Hoang Thanh Tower</p>
        <p className="">114 Mai Hac De Street</p>
        <p className="">Hai Ba Trung District, Hanoi (HO)</p>
        <p className=" pv:max-ph:pb-[0]">Tel: (+84) 24 3926 4083 </p>
      </div>
      <div className="flex flex-col text-white justify-around pb-[0.8rem] md:max-phm:text-[10px]  pv:max-ph:pb-[0.8rem] ph:max-md:pb-[0.8rem]  ">
        <p className=" pv:max-ph:pt-[0]">98-100-102 Le Lai Street</p>
        <p className="">Ben Thanh Ward, District 1</p>
        <p className="">Ho Chi Minh City, Vietnam</p>
        <p className=" pv:max-ph:pb-[0]">Tel: (+84) 28 3931 1039 </p>
      </div>
    </div>
  );
};

export default Footer;
