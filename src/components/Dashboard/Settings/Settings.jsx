import { LeftDash } from "../Dashboard/LeftDash";
import RightDash from "../Dashboard/RightDash";
import Common from "../Dashboard/Common";
import music from "../../../assets/support/music.svg";
import term from "../../../assets/support/term.svg";
import privacy from "../../../assets/support/privacy.svg";
import about from "../../../assets/support/about.svg";
import dd from "../../../assets/overview/dd.svg";
import userM from "../../../assets/settings/userM.svg";
import userX from "../../../assets/settings/userX.svg";
import dropBlue from "../../../assets/settings/dropBlue.svg";
import { useState } from "react";

const Settings = () => {
  const [accOpen, isAccOpen] = useState(false);

  const handleAccOpen = () => {
    isAccOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#ffffff] smd:grid smd:grid-cols-[1fr_2.5fr_1.5fr] slg:grid-cols-[.9fr_3fr_1fr] lg:grid-cols-[.8fr_3fr_1.1fr] h-[100vh]">
      <LeftDash />
      <div className="overflow-y-auto pb-[30px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style]:hidden [scrollbar-width]:hidden">
        <Common />
        <div className="mt-[25px] smd:mt-[0px] px-[20px] smd:px-[40px]">
          <div
            className="flex items-center justify-center"
            onClick={handleAccOpen}
          >
            <div
              className={`flex items-center justify-between slg:mt-[20px] px-[18px] border border-[#E1E3EA] rounded-[6px] w-full h-[70px] cursor-pointer ${
                accOpen ? "bg-[#E1E3EA]" : ""
              }`}
            >
              <div className="flex items-center gap-[10px]">
                <img src={music} alt="music" />
                <h1 className="text-[#3F4254] text-[18px] font-semibold">
                  Account Management
                </h1>
              </div>
              <img src={accOpen ? dropBlue : dd} alt="dd" />
            </div>
          </div>
          {accOpen && (
            <div className="flex items-center justify-center gap-[20px] mt-[20px]">
              <div className="border rounded-[10px] w-[235px] h-[56px] flex items-center justify-center gap-[10px] cursor-pointer">
                <img src={userM} alt="userM" className="w-[24px]" />
                <h1 className="text-[#3F4254]">Deactivate Account</h1>
              </div>
              <div className="border rounded-[10px] w-[235px] h-[56px] flex items-center justify-center gap-[10px] cursor-pointer">
                <img src={userX} alt="user" className="w-[24px]" />
                <h1 className="text-[#3F4254]">Delete Account</h1>
              </div>
            </div>
          )}
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-between mt-[20px] px-[18px] border border-[#E1E3EA] rounded-[6px] w-full h-[70px] cursor-pointer">
              <div className="flex items-center gap-[10px]">
                <img src={term} alt="term" />
                <h1 className="text-[#3F4254] text-[18px] font-semibold">
                  Security
                </h1>
              </div>
              <img src={dd} alt="dd" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-between mt-[20px] px-[18px] border border-[#E1E3EA] rounded-[6px] w-full h-[70px] cursor-pointer">
              <div className="flex items-center gap-[10px]">
                <img src={privacy} alt="privacy" />
                <h1 className="text-[#3F4254] text-[18px] font-semibold">
                  App Settings
                </h1>
              </div>
              <img src={dd} alt="dd" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-between mt-[20px] px-[18px] border border-[#E1E3EA] rounded-[6px] w-full h-[70px] cursor-pointer">
              <div className="flex items-center gap-[10px]">
                <img src={about} alt="about" />
                <h1 className="text-[#3F4254] text-[18px] font-semibold">
                  Privacy & Data
                </h1>
              </div>
              <img src={dd} alt="dd" />
            </div>
          </div>
        </div>
      </div>
      <RightDash />
    </div>
  );
};

export default Settings;
