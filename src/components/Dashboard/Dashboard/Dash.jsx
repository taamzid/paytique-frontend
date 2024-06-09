import usa from "../../../assets/dashboard/center/usa.svg";
import ca from "../../../assets/dashboard/center/ca.svg";
import euro from "../../../assets/dashboard/center/eu.svg";
import d0 from "../../../assets/dashboard/center/d0.svg";
import d1 from "../../../assets/dashboard/center/d1.svg";
import w0 from "../../../assets/dashboard/center/w0.svg";
import w1 from "../../../assets/dashboard/center/w1.svg";
import avatar from "../../../assets/dashboard/center/avatar.svg";
import threedots from "../../../assets/dashboard/center/threedots.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import bell from "../../../assets/common/Bell.svg";
import search from "../../../assets/common/Search.svg";
import Menu from "../../../assets/common/Menu.svg";
import mobileLogo from "../../../assets/common/mobileLogo.svg";
import notif from "../../../assets/dashboard/center/Notif.svg";
import { DashMenu } from "./DashMenu";
import { useAuth0 } from "@auth0/auth0-react";

const Dash = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const [menuClicked, setMenuClicked] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  const handleMenuClicked = () => {
    setMenuClicked((prev) => !prev);
  };

  const sharedStyle0 =
    "h-[80px] smd:w-[133px] slg:w-[156px] smd:h-[120px] slg:h-[156px] flex items-center justify-center border border-[#CBE5FB] rounded-xl cursor-pointer";
  const hoverStyle0 = "hover:bg-[#CBE5FB] hover:border-none";
  const activeStyle = "bg-[#CBE5FB] border-none";
  const textStyle = "text-[#3F4254] font-semibold mt-[22px]";

  return (
    <div className="">
      <div>
        <div className="px-[20px] slg:px-[40px]">
          <div className="hidden smd:block bg-[url('./assets/dashboard/center/card.svg')] rounded-bl-[20px] rounded-br-[20px] lg:rounded-br-[40px] slg:rounded-bl-[40px] bg-cover">
            <h1 className="text-[#ffffff] slg:text-[24px] font-semibold ml-[20px] slg:ml-[45px] pt-[20px] slg:pt-[45px]">
              Good Morning, {user?.name}
            </h1>
            <h1 className="text-[#ffffff] text-[18px] font-semibold ml-[20px] slg:ml-[45px] pt-[10px] slg:pt-[30px]">
              Balance
            </h1>
            <div className="flex mx-[20px] slg:mx-[45px] mt-[10px] slg:mt-[25px] gap-[10px] overflow-auto dWidth dTrack dThumb">
              <div className="slg:mb-[25px] cursor-pointer">
                <div className="bg-[#ffffff] pt-[8px] slg:pt-[22px] pb-[6px] slg:pb-[18px] px-[8px] slg:px-[15px] rounded-tl-[10px] rounded-tr-[60px] slg:rounded-tr-[100px] w-[110px] slg:w-[170px]">
                  <img
                    src={usa}
                    alt="usa"
                    className="w-[32px] slg:w-[65px] h-[22px] slg:h-[41px]"
                  />
                  <h1 className="text-[#2356B2] text-[11px] mt-[15px] font-light">
                    US Dollar
                  </h1>
                  <h1 className="text-[18px] slg:text-[25px] font-semibold text-[#2356B2]">
                    $8224.50
                  </h1>
                </div>
              </div>
              <div className="mb-[15px] slg:mb-[25px] cursor-pointer">
                <div className="bg-[#ffffff] pt-[8px] slg:pt-[22px] pb-[6px] slg:pb-[18px] px-[8px] slg:px-[15px] rounded-tl-[10px] rounded-tr-[60px] slg:rounded-tr-[100px] w-[110px] slg:w-[170px]">
                  <img
                    src={ca}
                    alt="ca"
                    className="w-[33px] slg:w-[65px] h-[22px] slg:h-[41px]"
                  />
                  <h1 className="text-[#2356B2] text-[11px] mt-[15px] font-light">
                    Canadian Dollar
                  </h1>
                  <h1 className="text-[18px] slg:text-[25px] font-semibold text-[#2356B2]">
                    C$8224.50
                  </h1>
                </div>
              </div>
              <div className="mb-[15px] slg:mb-[25px] cursor-pointer">
                <div className="bg-[#ffffff] pt-[8px] slg:pt-[22px] pb-[6px] slg:pb-[18px] px-[8px] slg:px-[15px] rounded-tl-[10px] rounded-tr-[60px] slg:rounded-tr-[100px] w-[110px] slg:w-[170px]">
                  <img
                    src={euro}
                    alt="euro"
                    className="w-[33px] slg:w-[65px] h-[22px] slg:h-[41px]"
                  />
                  <h1 className="text-[#2356B2] text-[11px] mt-[15px] font-light">
                    Euro
                  </h1>
                  <h1 className="text-[18px] slg:text-[25px] font-semibold text-[#2356B2]">
                    €8224.50
                  </h1>
                </div>
              </div>
              <div className="mb-[15px] slg:mb-[25px] cursor-pointer">
                <div className="bg-[#ffffff] pt-[8px] slg:pt-[22px] pb-[6px] slg:pb-[18px] px-[8px] slg:px-[15px] rounded-tl-[10px] rounded-tr-[60px] slg:rounded-tr-[100px] w-[110px] slg:w-[170px]">
                  <img
                    src={ca}
                    alt="ca"
                    className="w-[33px] slg:w-[65px] h-[22px] slg:h-[41px]"
                  />
                  <h1 className="text-[#2356B2] text-[11px] mt-[15px] font-light">
                    Canadian Dollar
                  </h1>
                  <h1 className="text-[18px] slg:text-[25px] font-semibold text-[#2356B2]">
                    C$8224.50
                  </h1>
                </div>
              </div>
              <div className="mb-[15px] slg:mb-[25px] cursor-pointer">
                <div className="bg-[#ffffff] pt-[8px] slg:pt-[22px] pb-[6px] slg:pb-[18px] px-[8px] slg:px-[15px] rounded-tl-[10px] rounded-tr-[60px] slg:rounded-tr-[100px] w-[110px] slg:w-[170px]">
                  <img
                    src={ca}
                    alt="ca"
                    className="w-[33px] slg:w-[65px] h-[22px] slg:h-[41px]"
                  />
                  <h1 className="text-[#2356B2] text-[11px] mt-[15px] font-light">
                    Canadian Dollar
                  </h1>
                  <h1 className="text-[18px] slg:text-[25px] font-semibold text-[#2356B2]">
                    C$8224.50
                  </h1>
                </div>
              </div>
              <div className="mb-[15px] slg:mb-[25px] cursor-pointer">
                <div className="bg-[#ffffff] pt-[8px] slg:pt-[22px] pb-[6px] slg:pb-[18px] px-[8px] slg:px-[15px] rounded-tl-[10px] rounded-tr-[60px] slg:rounded-tr-[100px] w-[110px] slg:w-[170px]">
                  <img
                    src={ca}
                    alt="ca"
                    className="w-[33px] slg:w-[65px] h-[22px] slg:h-[41px]"
                  />
                  <h1 className="text-[#2356B2] text-[11px] mt-[15px] font-light">
                    Canadian Dollar
                  </h1>
                  <h1 className="text-[18px] slg:text-[25px] font-semibold text-[#2356B2]">
                    C$8224.50
                  </h1>
                </div>
              </div>
              <div className="mb-[15px] slg:mb-[25px] cursor-pointer">
                <div className="bg-[#ffffff] pt-[8px] slg:pt-[22px] pb-[6px] slg:pb-[18px] px-[8px] slg:px-[15px] rounded-tl-[10px] rounded-tr-[60px] slg:rounded-tr-[100px] w-[110px] slg:w-[170px]">
                  <img
                    src={ca}
                    alt="ca"
                    className="w-[33px] slg:w-[65px] h-[22px] slg:h-[41px]"
                  />
                  <h1 className="text-[#2356B2] text-[11px] mt-[15px] font-light">
                    Canadian Dollar
                  </h1>
                  <h1 className="text-[18px] slg:text-[25px] font-semibold text-[#2356B2]">
                    C$8224.50
                  </h1>
                </div>
              </div>
              <div className="mb-[15px] slg:mb-[25px] cursor-pointer">
                <div className="bg-[#ffffff] pt-[8px] slg:pt-[22px] pb-[6px] slg:pb-[18px] px-[8px] slg:px-[15px] rounded-tl-[10px] rounded-tr-[60px] slg:rounded-tr-[100px] w-[110px] slg:w-[170px]">
                  <img
                    src={ca}
                    alt="ca"
                    className="w-[33px] slg:w-[65px] h-[22px] slg:h-[41px]"
                  />
                  <h1 className="text-[#2356B2] text-[11px] mt-[15px] font-light">
                    Canadian Dollar
                  </h1>
                  <h1 className="text-[18px] slg:text-[25px] font-semibold text-[#2356B2]">
                    C$8224.50
                  </h1>
                </div>
              </div>
              <div className="mb-[15px] slg:mb-[25px] cursor-pointer">
                <div className="bg-[#ffffff] pt-[8px] slg:pt-[22px] pb-[6px] slg:pb-[18px] px-[8px] slg:px-[15px] rounded-tl-[10px] rounded-tr-[60px] slg:rounded-tr-[100px] w-[110px] slg:w-[170px]">
                  <img
                    src={ca}
                    alt="ca"
                    className="w-[33px] slg:w-[65px] h-[22px] slg:h-[41px]"
                  />
                  <h1 className="text-[#2356B2] text-[11px] mt-[15px] font-light">
                    Canadian Dollar
                  </h1>
                  <h1 className="text-[18px] slg:text-[25px] font-semibold text-[#2356B2]">
                    C$8224.50
                  </h1>
                </div>
              </div>
            </div>
            <div className="pb-[10px]"></div>
          </div>
        </div>
        <div className="relative smd:hidden">
          {menuClicked && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={handleMenuClicked}
            ></div>
          )}
          <div
            className={`fixed inset-x-0 top-0 transform ${
              menuClicked ? "translate-y-0" : "-translate-y-full"
            } transition-transform duration-300 ease-in-out bg-white z-50`}
          >
            <DashMenu />
          </div>
          <div className="px-[20px] block pt-[50px] max-h-[288px] smd:hidden bg-[url('./assets/common/bgMobile.svg')] bg-cover rounded-bl-[30px] rounded-br-[30px]">
            <div className="flex items-center justify-between">
              <img src={mobileLogo} alt="mobileLogo" />
              <img src={Menu} alt="menu" onClick={handleMenuClicked} />
            </div>
            <div>
              <div className="pr-[10px] flex items-center justify-between mt-[20px]">
                <div>
                  <h1 className="text-medium text-[13px] text-[#ffffff]">
                    Good Morning,
                  </h1>
                  <h1 className="text-semibold text-[23px] text-[#ffffff]">
                    {user?.name}
                  </h1>
                </div>
                <div className="flex items-center gap-[18px]">
                  <img src={search} alt="search" className="cursor-pointer" />
                  <div className="indicator">
                    <img src={bell} alt="bell" className="cursor-pointer" />
                    <span className="indicator-item cursor-pointer">
                      <img
                        src={notif}
                        alt="notif"
                        className="w-[14px] mr-[8px] mt-[5px]"
                      />
                    </span>
                  </div>
                  {/* <img src={avatar} alt="avatar" /> */}
                  {isAuthenticated && (
                    <Link to="/profile">
                      <div>
                        {user?.picture && (
                          <img
                            src={user.picture}
                            alt={user?.name}
                            className="rounded-full w-[36px]"
                          />
                        )}
                      </div>
                    </Link>
                  )}
                </div>
              </div>
              <h1 className="mt-[10px] pb-[80px] text-medium text-[20px] text-[#ffffff]">
                Balance
              </h1>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="pl-[20px] smd:hidden">
            <div className="absolute top-[-66%]">
              <div className="flex gap-[7px]">
                <div className="slg:mb-[25px] cursor-pointer">
                  <div className="bg-[#ffffff] shadow-sm pt-[8px] slg:pt-[22px] pb-[6px] slg:pb-[18px] px-[8px] slg:px-[15px] rounded-tl-[10px] rounded-tr-[60px] slg:rounded-tr-[100px] w-[110px] slg:w-[170px]">
                    <img
                      src={usa}
                      alt="usa"
                      className="w-[32px] slg:w-[65px] h-[22px] slg:h-[41px]"
                    />
                    <h1 className="text-[#2356B2] text-[11px] mt-[15px] font-light">
                      US Dollar
                    </h1>
                    <h1 className="text-[18px] slg:text-[25px] font-semibold text-[#2356B2]">
                      $8224.50
                    </h1>
                  </div>
                </div>
                <div className="mb-[15px] slg:mb-[25px] cursor-pointer">
                  <div className="bg-[#ffffff] shadow-sm pt-[8px] slg:pt-[22px] pb-[6px] slg:pb-[18px] px-[8px] slg:px-[15px] rounded-tl-[10px] rounded-tr-[60px] slg:rounded-tr-[100px] w-[110px] slg:w-[170px]">
                    <img
                      src={ca}
                      alt="ca"
                      className="w-[33px] slg:w-[65px] h-[22px] slg:h-[41px]"
                    />
                    <h1 className="text-[#2356B2] text-[11px] mt-[15px] font-light">
                      Canadian Dollar
                    </h1>
                    <h1 className="text-[18px] slg:text-[25px] font-semibold text-[#2356B2]">
                      C$8224.50
                    </h1>
                  </div>
                </div>
                <div className="mb-[15px] slg:mb-[25px] cursor-pointer">
                  <div className="bg-[#ffffff] shadow-sm pt-[8px] slg:pt-[22px] pb-[6px] slg:pb-[18px] px-[8px] slg:px-[15px] rounded-tl-[10px] rounded-tr-[60px] slg:rounded-tr-[100px] w-[110px] slg:w-[170px]">
                    <img
                      src={euro}
                      alt="euro"
                      className="w-[33px] slg:w-[65px] h-[22px] slg:h-[41px]"
                    />
                    <h1 className="text-[#2356B2] text-[11px] mt-[15px] font-light">
                      Euro
                    </h1>
                    <h1 className="text-[18px] slg:text-[25px] font-semibold text-[#2356B2]">
                      €8224.50
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="px-[20px] slg:px-[40px] text-[20px] font-bold text-[#0D0D0D] mt-[50px] smd:mt-[32px]">
            Our features
          </h1>
          <div className="px-[20px] slg:px-[40px] mt-[22px] grid grid-cols-4 smd:flex items-center justify-center smd:justify-normal gap-[15px]">
            <Link to="/deposit">
              <div className="cursor-pointer">
                <div>
                  <div
                    className={`${sharedStyle0} ${
                      activeFeature === "deposit" ? activeStyle : hoverStyle0
                    }`}
                    onClick={() => setActiveFeature("deposit")}
                    onMouseEnter={() => setHoveredFeature("deposit")}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div>
                      <img
                        src={
                          activeFeature === "deposit" ||
                          hoveredFeature === "deposit"
                            ? d1
                            : d0
                        }
                        alt="deposit"
                        className="w-[38px] smd:w-[76px]"
                      />
                    </div>
                  </div>
                  <div
                    className={`${textStyle} ${
                      activeFeature === "deposit" ||
                      hoveredFeature === "deposit"
                        ? "text-blue-600 font-extrabold"
                        : ""
                    }`}
                    onClick={() => setActiveFeature("deposit")}
                    onMouseEnter={() => setHoveredFeature("deposit")}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <h1 className="ml-[5px] text-[12px] smd:text-[16px]">
                      Deposit
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/withdraw">
              <div>
                <div
                  className={`${sharedStyle0} ${
                    activeFeature === "withdraw" ? activeStyle : hoverStyle0
                  }`}
                  onClick={() => setActiveFeature("withdraw")}
                  onMouseEnter={() => setHoveredFeature("withdraw")}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div>
                    <img
                      src={
                        activeFeature === "withdraw" ||
                        hoveredFeature === "withdraw"
                          ? w1
                          : w0
                      }
                      alt="withdraw"
                      className="w-[38px] smd:w-[76px]"
                    />
                  </div>
                </div>
                <div
                  className={`${textStyle} ${
                    activeFeature === "withdraw" ||
                    hoveredFeature === "withdraw"
                      ? "text-blue-600 font-extrabold"
                      : ""
                  }`}
                  onClick={() => setActiveFeature("withdraw")}
                  onMouseEnter={() => setHoveredFeature("withdraw")}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <h1 className="ml-[5px] text-[12px] smd:text-[16px]">
                    Withdraw
                  </h1>
                </div>
              </div>
            </Link>
            <Link to="/transfer">
              <div>
                <div
                  className={`${sharedStyle0} ${
                    activeFeature === "transfer" ? activeStyle : hoverStyle0
                  }`}
                  onClick={() => setActiveFeature("transfer")}
                  onMouseEnter={() => setHoveredFeature("transfer")}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div>
                    <img
                      src={
                        activeFeature === "transfer" ||
                        hoveredFeature === "transfer"
                          ? w1
                          : w0
                      }
                      alt="transfer"
                      className="w-[38px] smd:w-[76px]"
                    />
                  </div>
                </div>
                <div
                  className={`${textStyle} ${
                    activeFeature === "transfer" ||
                    hoveredFeature === "transfer"
                      ? "text-blue-600 font-extrabold"
                      : ""
                  }`}
                  onClick={() => setActiveFeature("transfer")}
                  onMouseEnter={() => setHoveredFeature("transfer")}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <h1 className="ml-[5px] text-[12px] smd:text-[16px]">
                    Transfer
                  </h1>
                </div>
              </div>
            </Link>
            <Link to="/request">
              <div>
                <div
                  className={`${sharedStyle0} ${
                    activeFeature === "request" ? activeStyle : hoverStyle0
                  }`}
                  onClick={() => setActiveFeature("request")}
                  onMouseEnter={() => setHoveredFeature("request")}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div>
                    <img
                      src={
                        activeFeature === "request" ||
                        hoveredFeature === "request"
                          ? w1
                          : w0
                      }
                      alt="request"
                      className="w-[38px] smd:w-[76px]"
                    />
                  </div>
                </div>
                <div
                  className={`${textStyle} ${
                    activeFeature === "request" || hoveredFeature === "request"
                      ? "text-blue-600 font-extrabold"
                      : ""
                  }`}
                  onClick={() => setActiveFeature("request")}
                  onMouseEnter={() => setHoveredFeature("request")}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <h1 className="ml-[5px] text-[12px] smd:text-[16px]">
                    Request
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-[#ffffff] smd:bg-transparent px-[20px] slg:px-[40px] pb-[40px]">
          <div className="flex items-center justify-between mt-[40px]">
            <h1 className="text-[18px] smd:text-[20px] font-bold text-[#0D0D0D] ">
              Transactions
            </h1>
            <h1 className="font-bold text-[#196BFE]">View All</h1>
          </div>
          <div className="mt-[16px] border-2 h-[60px] px-[16px] rounded-[6px] flex items-center justify-between cursor-pointer">
            <div>
              <div className="flex items-center gap-[10px]">
                <img src={avatar} alt="avatar" />
                <div>
                  <h1 className="text-[#3F4254] text-[14px] smd:text-[16px] font-medium">
                    Gikari Nekrey
                  </h1>
                  <h1 className="text-[12px] text-[#8d8d8f]">03 April 2023</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[6px]">
              <h1 className="text-[#3F4254] font-medium text-[14px] smd:text-[18px]">
                -$346.00
              </h1>
              <div className="bg-[#FFCBCB] rounded-full">
                <h1 className="text-[#db5353] w-[35px] smd:w-[48px] h-[18px] smd:h-[20px] text-[8px] smd:text-[10px] font-bold flex items-center justify-center">
                  SENT
                </h1>
              </div>
            </div>
            <div>
              <img src={threedots} alt="threedots" />
            </div>
          </div>
          <div className="mt-[16px] border-2 h-[60px] px-[16px] rounded-[6px] flex items-center justify-between cursor-pointer">
            <div>
              <div className="flex items-center gap-[10px]">
                <img src={avatar} alt="avatar" />
                <div>
                  <h1 className="text-[#3F4254] text-[14px] smd:text-[16px] font-medium">
                    Gikari Nekrey
                  </h1>
                  <h1 className="text-[12px] text-[#8d8d8f]">03 April 2023</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[6px]">
              <h1 className="text-[#3F4254] font-medium text-[14px] smd:text-[18px]">
                -$346.00
              </h1>
              <div className="bg-[#FFCBCB] rounded-full">
                <h1 className="text-[#db5353] w-[35px] smd:w-[48px] h-[18px] smd:h-[20px] text-[8px] smd:text-[10px] font-bold flex items-center justify-center">
                  SENT
                </h1>
              </div>
            </div>
            <div>
              <img src={threedots} alt="threedots" />
            </div>
          </div>
          <div className="mt-[16px] border-2 h-[60px] px-[16px] rounded-[6px] flex items-center justify-between cursor-pointer">
            <div>
              <div className="flex items-center gap-[10px]">
                <img src={avatar} alt="avatar" />
                <div>
                  <h1 className="text-[#3F4254] text-[14px] smd:text-[16px] font-medium">
                    Gikari Nekrey
                  </h1>
                  <h1 className="text-[12px] text-[#8d8d8f]">03 April 2023</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[6px]">
              <h1 className="text-[#3F4254] font-medium text-[14px] smd:text-[18px]">
                -$346.00
              </h1>
              <div className="bg-[#FFCBCB] rounded-full">
                <h1 className="text-[#db5353] w-[35px] smd:w-[48px] h-[18px] smd:h-[20px] text-[8px] smd:text-[10px] font-bold flex items-center justify-center">
                  SENT
                </h1>
              </div>
            </div>
            <div>
              <img src={threedots} alt="threedots" />
            </div>
          </div>
          <div className="mt-[16px] border-2 h-[60px] px-[16px] rounded-[6px] flex items-center justify-between cursor-pointer">
            <div>
              <div className="flex items-center gap-[10px]">
                <img src={avatar} alt="avatar" />
                <div>
                  <h1 className="text-[#3F4254] text-[14px] smd:text-[16px] font-medium">
                    Gikari Nekrey
                  </h1>
                  <h1 className="text-[12px] text-[#8d8d8f]">03 April 2023</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[6px]">
              <h1 className="text-[#3F4254] font-medium text-[14px] smd:text-[18px]">
                -$346.00
              </h1>
              <div className="bg-[#FFCBCB] rounded-full">
                <h1 className="text-[#db5353] w-[35px] smd:w-[48px] h-[18px] smd:h-[20px] text-[8px] smd:text-[10px] font-bold flex items-center justify-center">
                  SENT
                </h1>
              </div>
            </div>
            <div>
              <img src={threedots} alt="threedots" />
            </div>
          </div>
          <div className="mt-[16px] border-2 h-[60px] px-[16px] rounded-[6px] flex items-center justify-between cursor-pointer">
            <div>
              <div className="flex items-center gap-[10px]">
                <img src={avatar} alt="avatar" />
                <div>
                  <h1 className="text-[#3F4254] text-[14px] smd:text-[16px] font-medium">
                    Gikari Nekrey
                  </h1>
                  <h1 className="text-[12px] text-[#8d8d8f]">03 April 2023</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[6px]">
              <h1 className="text-[#3F4254] font-medium text-[14px] smd:text-[18px]">
                -$346.00
              </h1>
              <div className="bg-[#FFCBCB] rounded-full">
                <h1 className="text-[#db5353] w-[35px] smd:w-[48px] h-[18px] smd:h-[20px] text-[8px] smd:text-[10px] font-bold flex items-center justify-center">
                  SENT
                </h1>
              </div>
            </div>
            <div>
              <img src={threedots} alt="threedots" />
            </div>
          </div>
          <div className="mt-[16px] border-2 h-[60px] px-[16px] rounded-[6px] flex items-center justify-between cursor-pointer">
            <div>
              <div className="flex items-center gap-[10px]">
                <img src={avatar} alt="avatar" />
                <div>
                  <h1 className="text-[#3F4254] text-[14px] smd:text-[16px] font-medium">
                    Gikari Nekrey
                  </h1>
                  <h1 className="text-[12px] text-[#8d8d8f]">03 April 2023</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[6px]">
              <h1 className="text-[#3F4254] font-medium text-[14px] smd:text-[18px]">
                -$346.00
              </h1>
              <div className="bg-[#FFCBCB] rounded-full">
                <h1 className="text-[#db5353] w-[35px] smd:w-[48px] h-[18px] smd:h-[20px] text-[8px] smd:text-[10px] font-bold flex items-center justify-center">
                  SENT
                </h1>
              </div>
            </div>
            <div>
              <img src={threedots} alt="threedots" />
            </div>
          </div>
          <div className="mt-[16px] border-2 h-[60px] px-[16px] rounded-[6px] flex items-center justify-between cursor-pointer">
            <div>
              <div className="flex items-center gap-[10px]">
                <img src={avatar} alt="avatar" />
                <div>
                  <h1 className="text-[#3F4254] text-[14px] smd:text-[16px] font-medium">
                    Gikari Nekrey
                  </h1>
                  <h1 className="text-[12px] text-[#8d8d8f]">03 April 2023</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[6px]">
              <h1 className="text-[#3F4254] font-medium text-[14px] smd:text-[18px]">
                -$346.00
              </h1>
              <div className="bg-[#FFCBCB] rounded-full">
                <h1 className="text-[#db5353] w-[35px] smd:w-[48px] h-[18px] smd:h-[20px] text-[8px] smd:text-[10px] font-bold flex items-center justify-center">
                  SENT
                </h1>
              </div>
            </div>
            <div>
              <img src={threedots} alt="threedots" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
