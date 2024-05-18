import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/home/nav/Paytique_Bird.svg";
import closeIcon from "../../../assets/home/nav/closeIcon.svg.svg";
import menu from "../../../assets/home/nav/hamburgerMenu.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="smd:flex items-center smd:justify-between lg:justify-between pr-[29px] smd:pr-[50px] slg:pr-[160px]">
        <div className="flex items-center justify-between text-[#ffffff]">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
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
              className="smd:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
        <div className="hidden smd:flex items-center text-[#ffffff] lg:pl-[352px] smd:gap-[30px] lg:gap-[42px] smd:text-[14px] slg:text-[16px] font-SFSemiBold">
          <Link to="/login">
            <h1 className="cursor-pointer">Log In</h1>
          </Link>
          <Link to="/signup">
            <button className="text-center text-[#003AA1] rounded-full font-bold bg-[#ffffff] w-[154px] h-[56px]">
              Register Now
            </button>
          </Link>
        </div>
      </div>
      {/* Responsive Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/5 bg-[#001540] z-20 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5">
          <img
            src={closeIcon}
            alt="close"
            className="cursor-pointer w-6 h-6 smd:hidden"
            onClick={toggleMenu}
          />
        </div>
        <div className="flex flex-col items-center   text-[#f5f5f5]">
          <Link to="/" onClick={toggleMenu}>
            <h1 className="cursor-pointer hover:underline">Home</h1>
          </Link>
          <Link to="/company" onClick={toggleMenu}>
            <h1 className="cursor-pointer hover:underline">Company</h1>
          </Link>
          <Link to="/product" onClick={toggleMenu}>
            <h1 className="cursor-pointer hover:underline">Product</h1>
          </Link>
          <Link to="/support" onClick={toggleMenu}>
            <h1 className="cursor-pointer hover:underline">Support</h1>
          </Link>
          <Link to="/login" onClick={toggleMenu}>
            <h1 className="cursor-pointer hover:underline">Log In</h1>
          </Link>
          <Link to="/signup" onClick={toggleMenu}>
            <h1 className="cursor-pointer hover:underline">Register Now</h1>
          </Link>
        </div>
      </div>
      {/* Responsive Menu Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black opacity-50 z-10 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
};

export default NavBar;
