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
import usa from "../../../assets/dashboard/center/usa.svg";
import ca from "../../../assets/dashboard/center/ca.svg";
import euro from "../../../assets/dashboard/center/eu.svg";

const Common = () => {
  const { user, isAuthenticated } = useAuth0();

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
      <div className="px-[20px] block pt-[50px] max-h-[288px] smd:hidden bg-[url('./assets/common/bgMobile.svg')] bg-cover">
        <div className="flex items-center justify-between">
          <img src={mobileLogo} alt="mobileLogo" />
          <img src={Menu} alt="menu" />
        </div>
        <div>
          <div className="pr-[10px] flex items-center justify-between mt-[20px]">
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
          <h1 className="mt-[10px] pb-[80px] text-medium text-[20px] text-[#ffffff]">
            Balance
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Common;
