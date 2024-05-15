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
import Ellipse from "../../../assets/dashboard/left/Ellipse.svg";
import logoutt from "../../../assets/dashboard/left/logout.svg";
import rightArrow from "../../../assets/dashboard/right/rightArrow.svg";
import card1 from "../../../assets/dashboard/right/card1.svg";
import card2 from "../../../assets/dashboard/right/card2.svg";
import eye from "../../../assets/dashboard/right/Eye.svg";
import dropdown from "../../../assets/dashboard/center/dropdown.svg";
import bell from "../../../assets/dashboard/center/Bell.svg";
import search from "../../../assets/dashboard/center/Search.svg";
import notif from "../../../assets/dashboard/center/Notif.svg";
import Profile from "../Profile/Profile";
import { useState } from "react";
import Balance from "../Balance/Balance";
import { Offer } from "../Offer/Offer";
import { Overview } from "../Overview/Overview";
import Support from "../Support/Support";
import Settings from "../Settings/Settings";
import { Qr } from "../Qr/Qr";

export const Dashboard = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [hoveredSection, setHoveredSection] = useState(null);

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <Profile />;
      case "balance":
        return <Balance />;
      case "offer":
        return <Offer />;
      case "overview":
        return <Overview />;
      case "support":
        return <Support />;
      case "settings":
        return <Settings />;
      case "qr":
        return <Qr />;
      default:
    }
  };

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
    "smd:p-[10px] lg:p-[15px] flex items-center smd:mt-[15px] slg:mt-[32px] gap-[16px] font-bold cursor-pointer";

  return (
    <div className="grid smd:grid-cols-[1fr_2.5fr_1.5fr] slg:grid-cols-[.9fr_3fr_1fr] lg:grid-cols-[.8fr_3fr_1.1fr]">
      <div className="flex smd:pl-[12px] slg:pl-[32px] shadow-md">
        <div className="flex flex-col">
          <div className="mt-[32px] smd:mb-[25px] slg:mb-[50px] flex item-center gap-[10px]">
            <img
              src={logo}
              alt="logo"
              className="smd:h-[32px] slg:h-[35px] smd:w-[26px] slg:w-[35px]"
            />
            <h1 className="font-SFMedium text-[22px] text-[#0790FF]">
              Paytique Financial
            </h1>
          </div>
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
          <div
            className={`${sharedStyle} ${getSectionClass("qr")} ${hoverStyle}`}
            onClick={() => setActiveSection("qr")}
            onMouseEnter={() => setHoveredSection("qr")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <img src={getImageSrc("qr", qr1, qr0)} alt="qr0" />
            <h1>QR Code</h1>
          </div>
          {isAuthenticated && (
            <div className="ml-[15px] mt-[32px] smd:mb-[30px] slg:mb-[67px] flex items-center gap-[10px] absolute bottom-0 cursor-pointer">
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
      <div>
        {isAuthenticated && (
          <div className="flex items-center justify-between py-[40px] mr-[40px]">
            <div className="ml-[40px] flex items-center gap-[12px]">
              {user?.picture && (
                <img
                  src={user.picture}
                  alt={user?.name}
                  className="rounded-full w-[40px]"
                />
              )}
              <div className="flex items-center gap-[15px]">
                <h1 className="font-SFMeidum text-[#828282]">{user?.name}</h1>
                <img src={dropdown} alt="dropdown" className="cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center gap-[18px] indicator">
              <img src={search} alt="search" className="cursor-pointer" />
              <img src={bell} alt="bell" className="cursor-pointer" />
              <span className="indicator-item cursor-pointer">
                <img
                  src={notif}
                  alt="notif"
                  className="w-[14px] mr-[8px] mt-[5px]"
                />
              </span>
            </div>
          </div>
        )}
        {renderContent()}
      </div>
      <div className="flex items-start justify-center shadow-xl h-[100vh]">
        <div className="px-[32px]">
          <div className="mt-[24px] flex items-center justify-end gap-[8px]">
            <h1 className="text-[12px] font-bold text-[#0790FF]">View Less</h1>
            <img src={rightArrow} alt="rightArrow" />
          </div>
          <div className="flex items-center justify-end">
            <div>
              <h1 className="mt-[8px] text-[20px] text-[#0D0D0D] font-bold">
                Payment Cards
              </h1>
              <h1 className="mt-[32px] text-[18px] text-[#2356B2] font-semibold">
                Primary
              </h1>
              <img src={card1} alt="card1" className="mt-[16px] lg:w-[350px]" />
            </div>
          </div>
          <div className="mt-[16px] flex items-center justify-end gap-[5px]">
            <h1 className="text-[11px] text-[#8F8F8F] font-medium">
              Show info
            </h1>
            <img src={eye} alt="eye" />
          </div>
          <div className="flex items-center justify-end">
            <div>
              <h1 className="mt-[52px] text-[18px] text-[#2356B2] font-semibold">
                Shopping
              </h1>
              <img src={card2} alt="card1" className="mt-[16px]" />
            </div>
          </div>
          <div className="mt-[16px] flex items-center justify-end gap-[5px]">
            <h1 className="text-[11px] text-[#8F8F8F] font-medium">
              Show info
            </h1>
            <img src={eye} alt="eye" />
          </div>
        </div>
      </div>
    </div>
  );
};
