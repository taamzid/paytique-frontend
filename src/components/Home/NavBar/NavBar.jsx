import React from "react";
import logo from "../../../assets/home/nav/Paytique_Bird.svg";

const NavBar = () => {
  return (
    <div>
      <div className="flex items-center">
        <img src={logo} className="cursor-pointer" />
        <div className="flex items-center smd:gap-[30px] lg:gap-[60px] ml-[10px] text-[#ffffff]">
          <h1 className="smd:text-[24px] lg:text-[32px] font-semibold cursor-pointer">
            Paytique Financial
          </h1>
          <div className="flex items-center smd:gap-[30px] lg:gap-[60px] smd:text-[14px] lg:text-[16px] font-semibold">
            <h1 className="cursor-pointer">Home</h1>
            <h1 className="cursor-pointer">Company</h1>
            <h1 className="cursor-pointer">Product</h1>
            <h1 className="cursor-pointer">Support</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
