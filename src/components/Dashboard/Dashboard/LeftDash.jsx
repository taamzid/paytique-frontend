import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../../assets/home/footer/footer.svg";
import d0 from "../../../assets/dashboard/left/d0.svg";
import d1 from "../../../assets/dashboard/left/d1.svg";
import p0 from "../../../assets/dashboard/left/p0.svg";
import p1 from "../../../assets/dashboard/left/p1.svg";
import b0 from "../../../assets/dashboard/left/b0.svg";
import b1 from "../../../assets/dashboard/left/b1.svg";
import m0 from "../../../assets/dashboard/left/m0.svg";
import m1 from "../../../assets/dashboard/left/m1.svg";
import o0 from "../../../assets/dashboard/left/o0.svg";
import o1 from "../../../assets/dashboard/left/o1.svg";
import s0 from "../../../assets/dashboard/left/s0.svg";
import s1 from "../../../assets/dashboard/left/s1.svg";
import se0 from "../../../assets/dashboard/left/se0.svg";
import se1 from "../../../assets/dashboard/left/se1.svg";
import qr0 from "../../../assets/dashboard/left/q0.svg";
import qr1 from "../../../assets/dashboard/left/q1.svg";
import logoutt from "../../../assets/dashboard/left/logout.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const LeftDash = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  const [hoveredSection, setHoveredSection] = useState(null);

  const getSectionClass = (isActive) => {
    return isActive
      ? "bg-[#E3F2FE] text-[#0790FF] rounded-[12px]"
      : "text-[#828282]";
  };

  const getImageSrc = (section, activeImage, inactiveImage, isActive) => {
    return isActive || hoveredSection === section ? activeImage : inactiveImage;
  };

  const hoverStyle =
    "hover:bg-[#E3F2FE] hover:text-[#0790FF] hover:rounded-[12px]";

  const sharedStyle =
    "smd:p-[10px] lg:p-[15px] flex items-center smd:mt-[15px] slg:mt-[24px] gap-[16px] font-SFSemiBold cursor-pointer";

  return (
    <div className="hidden smd:flex smd:pl-[12px] slg:pl-[32px] shadow-md">
      <div className="flex flex-col">
        <div className="mt-[32px] smd:mb-[25px] slg:mb-[35px] flex item-center gap-[10px]">
          <img
            src={logo}
            alt="logo"
            className="smd:h-[32px] slg:h-[35px] smd:w-[26px] slg:w-[35px]"
          />
          <h1 className="font-SFMedium text-[22px] text-[#0790FF]">
            Paytique Financial
          </h1>
        </div>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${sharedStyle} ${getSectionClass(isActive)} ${hoverStyle}`
          }
          onMouseEnter={() => setHoveredSection("dashboard")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {({ isActive }) => (
            <>
              <img
                src={getImageSrc("dashboard", d1, d0, isActive)}
                alt="dashboard"
              />
              <h1>Dashboard</h1>
            </>
          )}
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${sharedStyle} ${getSectionClass(isActive)} ${hoverStyle}`
          }
          onMouseEnter={() => setHoveredSection("profile")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {({ isActive }) => (
            <>
              <img
                src={getImageSrc("profile", p1, p0, isActive)}
                alt="profile"
              />
              <h1 className="ml-[5px]">Profile</h1>
            </>
          )}
        </NavLink>
        <NavLink
          to="/balance"
          className={({ isActive }) =>
            `${sharedStyle} ${getSectionClass(isActive)} ${hoverStyle}`
          }
          onMouseEnter={() => setHoveredSection("balance")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {({ isActive }) => (
            <>
              <img
                src={getImageSrc("balance", b1, b0, isActive)}
                alt="balance"
              />
              <h1 className="ml-[3px]">Balance</h1>
            </>
          )}
        </NavLink>
        <NavLink
          to="/offers"
          className={({ isActive }) =>
            `${sharedStyle} ${getSectionClass(isActive)} ${hoverStyle}`
          }
          onMouseEnter={() => setHoveredSection("offer")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {({ isActive }) => (
            <>
              <img src={getImageSrc("offer", m1, m0, isActive)} alt="offer" />
              <h1 className="ml-[3px]">My Offers</h1>
            </>
          )}
        </NavLink>

        <NavLink
          to="/overview"
          className={({ isActive }) =>
            `${sharedStyle} ${getSectionClass(isActive)} ${hoverStyle}`
          }
          onMouseEnter={() => setHoveredSection("overview")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {({ isActive }) => (
            <>
              <img
                src={getImageSrc("overview", o1, o0, isActive)}
                alt="overview"
              />
              <h1 className="ml-[2px]">Overview</h1>
            </>
          )}
        </NavLink>

        <NavLink
          to="/support"
          className={({ isActive }) =>
            `${sharedStyle} ${getSectionClass(isActive)} ${hoverStyle}`
          }
          onMouseEnter={() => setHoveredSection("support")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {({ isActive }) => (
            <>
              <img
                src={getImageSrc("support", s1, s0, isActive)}
                alt="support"
              />
              <h1 className="ml-[2px]">Support</h1>
            </>
          )}
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${sharedStyle} ${getSectionClass(isActive)} ${hoverStyle}`
          }
          onMouseEnter={() => setHoveredSection("settings")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {({ isActive }) => (
            <>
              <img
                src={getImageSrc("settings", se1, se0, isActive)}
                alt="settings"
              />
              <h1 className="ml-[4px]">Settings</h1>
            </>
          )}
        </NavLink>

        <NavLink
          to="/qr-code"
          className={({ isActive }) =>
            `${sharedStyle} ${getSectionClass(isActive)} ${hoverStyle}`
          }
          onMouseEnter={() => setHoveredSection("qr")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {({ isActive }) => (
            <>
              <img src={getImageSrc("qr", qr1, qr0, isActive)} alt="qr" />
              <h1>QR Code</h1>
            </>
          )}
        </NavLink>

        {isAuthenticated && (
          <div className="ml-[15px] mt-[32px] smd:mb-[25px] slg:mb-[40px] flex items-center gap-[10px] absolute bottom-0 cursor-pointer">
            <img src={logoutt} alt="logout" />
            <h1
              className="font-bold text-[#E5613E] ml-[6px] cursor-pointer"
              onClick={() => logout()}
            >
              Logout
            </h1>
          </div>
        )}
        {/* <img
      src={Ellipse}
      alt="Ellipse"
      className="w-[194px] h-[140px] slg:w-[250px] slg:h-[300px] lg:w-[280px] lg:h-[230px] absolute bottom-0 left-0"
    /> */}
      </div>
      {/* <div className="smd:ml-[22px] lg:ml-[50px]">
    <div className="w-[2px] h-[100vh] bg-[#D9D9D9]"></div>
  </div> */}
    </div>
  );
};
