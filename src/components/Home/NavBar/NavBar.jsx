import React from "react";
import logo from "../../../assets/home/nav/Paytique_Bird.svg";
import menu from "../../../assets/home/nav/hamburgerMenu.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="smd:flex items-center smd:justify-center pr-[29px] smd:pr-[50px] lg:pr-[160px]">
      <div className="flex items-center justify-between text-[#ffffff]">
        <div className="flex items-center">
          <img
            src={logo}
            className="cursor-pointer w-[33px] h-[33px] smd:w-[48px] smd:h-[47px]"
          />
          <h1 className="text-[22.25px] smd:text-[24px] lg:text-[32px] font-SFSemiBold cursor-pointer ml-[7px] smd:ml-[10px]">
            Paytique Financial
          </h1>
        </div>
        <div className="">
          <img src={menu} alt="menu" className="smd:hidden" />
        </div>
      </div>
      <div className="hidden smd:flex items-center text-[#ffffff]">
        <div className="flex items-center smd:gap-[30px] smd:pl-[200px] lg:pl-[300px] lg:gap-[64px] smd:text-[14px] lg:text-[16px] font-SFSemiBold">
          <h1 className="cursor-pointer hover:underline underline-offset-[20px] decoration-[3px] decoration-[#196BFE]">
            Home
          </h1>
          <h1 className="cursor-pointer hover:underline underline-offset-[20px] decoration-[3px] decoration-[#196BFE]">
            Company
          </h1>
          <h1 className="cursor-pointer hover:underline underline-offset-[20px] decoration-[3px] decoration-[#196BFE]">
            Product
          </h1>
          <h1 className="cursor-pointer hover:underline underline-offset-[20px] decoration-[3px] decoration-[#196BFE]">
            Support
          </h1>
        </div>
      </div>
      <div className="hidden smd:flex items-center text-[#ffffff] smd:pl-[220px] lg:pl-[352px] smd:gap-[30px] lg:gap-[42px] smd:text-[14px] lg:text-[16px] font-SFSemiBold">
        <Link to="login">
          <h1 className="cursor-pointer">Log In</h1>
        </Link>
        <Link to="/signup">
          <button className="text-center text-[#003AA1] rounded-full font-bold bg-[#ffffff] w-[154px] h-[56px]">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
