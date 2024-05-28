import React, { useState } from "react";
import logo from "../../../assets/home/nav/Paytique_Bird.svg";
import menu from "../../../assets/home/nav/hamburgerMenu.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClicked = () => {
    setMenuClicked((prev) => !prev);
  };

  return (
    <div className="smd:flex items-center smd:justify-between lg:justify-center pr-[29px] smd:pr-[50px] slg:pr-[160px]">
      <div className="flex items-center justify-between text-[#ffffff]">
        <div className="flex items-center">
          <img
            src={logo}
            className="cursor-pointer w-[33px] h-[33px] smd:w-[48px] smd:h-[47px]"
          />
          <h1 className="text-[22.25px] smd:text-[24px] slg:text-[32px] font-SFSemiBold cursor-pointer ml-[7px] smd:ml-[10px]">
            Paytique Financial
          </h1>
        </div>
        <div className="">
          <img
            src={menu}
            alt="menu"
            className="smd:hidden"
            onClick={handleMenuClicked}
          />
        </div>
      </div>
      <div className="hidden smd:flex items-center text-[#ffffff]">
        <div className="flex items-center smd:gap-[30px] lg:pl-[280px] slg:gap-[64px] smd:text-[14px] slg:text-[16px] font-SFSemiBold">
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
      <div className="hidden smd:flex items-center text-[#ffffff] lg:pl-[352px] smd:gap-[30px] lg:gap-[42px] smd:text-[14px] slg:text-[16px] font-SFSemiBold">
        <Link to="login">
          <h1 className="cursor-pointer">Log In</h1>
        </Link>
        <Link to="/signup">
          <button className="text-center text-[#003AA1] rounded-full font-bold bg-[#ffffff] w-[154px] h-[56px]">
            Register Now
          </button>
        </Link>
      </div>
      {menuClicked && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleMenuClicked}
        ></div>
      )}
      <div
        className={`fixed inset-x-0 top-0 transform ${
          menuClicked ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out bg-white z-50 smd:hidden`}
      >
        <div className="bg-[#537ac1] flex flex-col items-center text-[#000000] p-4">
          <div className="flex flex-col items-center gap-[15px] text-[16px] font-SFSemiBold">
            <h1 className="text-[#ffffff] cursor-pointer hover:underline underline-offset-[10px] decoration-[3px] decoration-[#ffffff]">
              Home
            </h1>
            <h1 className="text-[#ffffff] cursor-pointer hover:underline underline-offset-[10px] decoration-[3px] decoration-[#ffffff]">
              Company
            </h1>
            <h1 className="text-[#ffffff] cursor-pointer hover:underline underline-offset-[10px] decoration-[3px] decoration-[#ffffff]">
              Product
            </h1>
            <h1 className="text-[#ffffff] cursor-pointer hover:underline underline-offset-[10px] decoration-[3px] decoration-[#ffffff]">
              Support
            </h1>
          </div>
          <div className="flex flex-col items-center gap-[20px] mt-[50px]">
            <Link to="login">
              <h1 className="cursor-pointer text-[#ffffff]">Log In</h1>
            </Link>
            <Link to="/signup">
              <button className="text-center text-[#196BFE] rounded-full font-bold bg-[#ffffff] w-[154px] h-[56px]">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
