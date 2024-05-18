import { useAuth0 } from "@auth0/auth0-react";
import dropdown from "../../../assets/dashboard/center/dropdown.svg";
import bell from "../../../assets/dashboard/center/Bell.svg";
import search from "../../../assets/dashboard/center/Search.svg";
import notif from "../../../assets/dashboard/center/Notif.svg";

const Common = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
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
    </div>
  );
};

export default Common;
