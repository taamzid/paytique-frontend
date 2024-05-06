import React from "react";
import logo from "../../../assets/home/nav/Paytique_Bird.svg";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center lg:pr-[160px]">
      <div className="flex items-cente text-[#ffffff]">
        <img src={logo} className="cursor-pointer" />
        <h1 className="smd:text-[24px] lg:text-[32px] font-SFSemiBold cursor-pointer ml-[10px]">
          Paytique Financial
        </h1>
      </div>
      <div className="flex items-center text-[#ffffff]">
        <div className="flex items-center smd:gap-[30px] pl-[300px] lg:gap-[64px] smd:text-[14px] lg:text-[16px] font-SFSemiBold">
          <h1 className="cursor-pointer">Home</h1>
          <h1 className="cursor-pointer">Company</h1>
          <h1 className="cursor-pointer">Product</h1>
          <h1 className="cursor-pointer">Support</h1>
        </div>
      </div>
      <div className="flex items-center text-[#ffffff] pl-[352px] lg:gap-[42px] smd:text-[14px] lg:text-[16px] font-SFSemiBold">
        <h1 className="cursor-pointer">Log In</h1>
        <button className="text-center text-[#003AA1] rounded-full font-bold bg-[#ffffff] w-[154px] h-[56px]">Register Now</button>
      </div>
    </div>
  );
};

export default NavBar;
