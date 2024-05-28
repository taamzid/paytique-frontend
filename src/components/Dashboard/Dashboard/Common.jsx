import { useAuth0 } from "@auth0/auth0-react";
import dropdown from "../../../assets/dashboard/center/dropdown.svg";
import notif from "../../../assets/dashboard/center/Notif.svg";
import mobileLogo from "../../../assets/common/mobileLogo.svg";
import Bell from "../../../assets/dashboard/center/Bell.svg";
import Search from "../../../assets//dashboard/center/Search.svg";
import bell from "../../../assets/common/Bell.svg";
import search from "../../../assets/common/Search.svg";
import Menu from "../../../assets/common/Menu.svg";
import avatar from "../../../assets/common/avatar.svg";
import { useState } from "react";
import { DashMenu } from "./DashMenu";
import { Link } from "react-router-dom";

const Common = () => {
  const { user, isAuthenticated } = useAuth0();
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClicked = () => {
    setMenuClicked((prev) => !prev);
  };

  return (
    <div>
      <div className="hidden smd:block">
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
              <img src={Search} alt="search" className="cursor-pointer" />
              <img src={Bell} alt="bell" className="cursor-pointer" />
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
      </div>
      <div className="px-[20px] block pt-[50px] max-h-[288px] smd:hidden bg-[url('./assets/common/bgMobile.svg')] bg-cover rounded-bl-[30px] rounded-br-[30px]">
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
        <div className="flex items-center justify-between">
          <Link to="/dashboard">
            <img src={mobileLogo} alt="mobileLogo" />
          </Link>
          <img src={Menu} alt="menu" onClick={handleMenuClicked} />
        </div>
        <div>
          <div className="pr-[10px] flex items-center justify-between mt-[20px] pb-[40px]">
            <div>
              <h1 className="text-medium text-[13px] text-[#ffffff]">
                Good Morning,
              </h1>
              <h1 className="text-semibold text-[23px] text-[#ffffff]">
                Robert Fox
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
              <img src={avatar} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Common;
