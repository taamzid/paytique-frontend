import Dash from "./Dash";
import { LeftDash } from "./LeftDash";
import RightDash from "./RightDash";
import Common from "./Common";

export const Dashboard = () => {
  return (
    <div className="bg-[#ffffff] smd:grid smd:grid-cols-[1fr_2.5fr_1.5fr] slg:grid-cols-[.9fr_3fr_1fr] lg:grid-cols-[.8fr_3fr_1.1fr] h-[100vh]">
      <LeftDash />
      <div className="overflow-y-auto pb-[40px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style]:hidden [scrollbar-width]:hidden">
        <div className="hidden smd:block">
          <Common />
        </div>
        <div className="">
          <Dash />
        </div>
      </div>
      <RightDash />
    </div>
  );
};
