import { LeftDash } from "../Dashboard/LeftDash";
import RightDash from "../Dashboard/RightDash";
import Common from "../Dashboard/Common";
import AccManagement from "./AccManagement";
import Security from "./Security";
import AppSettings from "./AppSettings";
import PrivacyData from "./PrivacyData";

const Settings = () => {
  return (
    <div className="bg-[#ffffff] smd:grid smd:grid-cols-[1fr_2.5fr_1.5fr] slg:grid-cols-[.9fr_3fr_1fr] lg:grid-cols-[.8fr_3fr_1.1fr] h-[100vh]">
      <LeftDash />
      <div className="overflow-y-auto pb-[30px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style]:hidden [scrollbar-width]:hidden">
        <Common />
        <div className="mt-[25px] smd:mt-[0px] px-[20px] smd:px-[40px]">
          <AccManagement />
          <Security />
          <AppSettings />
          <PrivacyData />
        </div>
      </div>
      <RightDash />
    </div>
  );
};

export default Settings;
