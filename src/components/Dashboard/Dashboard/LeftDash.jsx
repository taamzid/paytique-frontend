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
import { Link } from "react-router-dom";
import { useState } from "react";

export const LeftDash = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [hoveredSection, setHoveredSection] = useState(null);

  const getSectionClass = (section) => {
    return activeSection === section
      ? "bg-[#E3F2FE] text-[#0790FF] rounded-[12px]"
      : "text-[#828282]";
  };

  const getImageSrc = (section, activeImage, inactiveImage) => {
    if (hoveredSection === section || activeSection === section) {
      return activeImage;
    }
    return inactiveImage;
  };

  const hoverStyle =
    "hover:bg-[#E3F2FE] hover:text-[#0790FF] hover:rounded-[12px]";

  const sharedStyle =
    "smd:p-[10px] lg:p-[15px] flex items-center smd:mt-[15px] slg:mt-[24px] gap-[16px] font-SFSemiBold cursor-pointer";

  return (
    <div className="flex smd:pl-[12px] slg:pl-[32px] shadow-md">
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
        <Link to="/dashboard">
          <div
            className={`${sharedStyle} ${getSectionClass(
              "dashboard"
            )} ${hoverStyle}`}
            onClick={() => setActiveSection("dashboard")}
            onMouseEnter={() => setHoveredSection("dashboard")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <img src={getImageSrc("dashboard", d1, d0)} alt="dashboard" />
            <h1>Dashboard</h1>
          </div>
        </Link>

        <Link to="/profile">
          <div
            className={`${sharedStyle} ${getSectionClass(
              "profile"
            )} ${hoverStyle}`}
            onClick={() => setActiveSection("profile")}
            onMouseEnter={() => setHoveredSection("profile")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <img src={getImageSrc("profile", p1, p0)} alt="p0" />
            <h1 className="ml-[5px]">Profile</h1>
          </div>
        </Link>
        <Link to="/balance">
          <div
            className={`${sharedStyle} ${getSectionClass(
              "balance"
            )} ${hoverStyle}`}
            onClick={() => setActiveSection("balance")}
            onMouseEnter={() => setHoveredSection("balance")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <img src={getImageSrc("balance", b1, b0)} alt="b0" />
            <h1 className="ml-[3px]">Balance</h1>
          </div>
        </Link>
        <Link to="/offer">
          <div
            className={`${sharedStyle} ${getSectionClass(
              "offer"
            )} ${hoverStyle}`}
            onClick={() => setActiveSection("offer")}
            onMouseEnter={() => setHoveredSection("offer")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <img src={getImageSrc("offer", m1, m0)} alt="m0" />
            <h1 className="ml-[3px]">My Offers</h1>
          </div>
        </Link>
        <Link to="/overview">
          <div
            className={`${sharedStyle} ${getSectionClass(
              "overview"
            )} ${hoverStyle}`}
            onClick={() => setActiveSection("overview")}
            onMouseEnter={() => setHoveredSection("overview")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <img src={getImageSrc("overview", o1, o0)} alt="o0" />
            <h1 className="ml-[2px]">Overview</h1>
          </div>
        </Link>
        <Link to="/support">
          <div
            className={`${sharedStyle} ${getSectionClass(
              "support"
            )} ${hoverStyle}`}
            onClick={() => setActiveSection("support")}
            onMouseEnter={() => setHoveredSection("support")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <img src={getImageSrc("support", s1, s0)} alt="s0" />
            <h1 className="ml-[px]">Support</h1>
          </div>
        </Link>
        <Link to="/settings">
          <div
            className={`${sharedStyle} ${getSectionClass(
              "settings"
            )} ${hoverStyle}`}
            onClick={() => setActiveSection("settings")}
            onMouseEnter={() => setHoveredSection("settings")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <img src={getImageSrc("settings", se1, se0)} alt="se0" />
            <h1 className="ml-[4px]">Settings</h1>
          </div>
        </Link>
        <Link to="/qr-code">
          <div
            className={`${sharedStyle} ${getSectionClass("qr")} ${hoverStyle}`}
            onClick={() => setActiveSection("qr")}
            onMouseEnter={() => setHoveredSection("qr")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <img src={getImageSrc("qr", qr1, qr0)} alt="qr0" />
            <h1>QR Code</h1>
          </div>
        </Link>
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
