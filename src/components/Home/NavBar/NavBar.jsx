import React from "react";
import logo from "../../../assets/home/nav/Paytique_Bird.svg";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center smd:pr-[50px] lg:pr-[160px]">
      <div className="flex items-center text-[#ffffff]">
        <img src={logo} className="cursor-pointer" />
        <h1 className="smd:text-[24px] lg:text-[32px] font-SFSemiBold cursor-pointer ml-[10px]">
          Paytique Financial
        </h1>
      </div>
      <div className="flex items-center text-[#ffffff]">
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
      <div className="flex items-center text-[#ffffff] smd:pl-[220px] lg:pl-[352px] smd:gap-[30px] lg:gap-[42px] smd:text-[14px] lg:text-[16px] font-SFSemiBold">
        <h1 className="cursor-pointer">Log In</h1>
        <button className="text-center text-[#003AA1] rounded-full font-bold bg-[#ffffff] w-[154px] h-[56px]">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default NavBar;
