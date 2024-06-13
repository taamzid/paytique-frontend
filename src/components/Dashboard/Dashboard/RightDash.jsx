import rightArrow from "../../../assets/dashboard/right/rightArrow.svg";
import card1 from "../../../assets/dashboard/right/card1.svg";
import card2 from "../../../assets/dashboard/right/card2.svg";
import eye from "../../../assets/dashboard/right/Eye.svg";
import { Link } from "react-router-dom";

const RightDash = () => {
  return (
    <div className="bg-[#ffffff] flex items-start justify-center shadow-xl">
      <div className="smd:px-[32px]">
        <div className="pt-[24px] flex items-center justify-end gap-[8px]">
          <h1 className="text-[12px] font-bold text-[#0790FF]">View Less</h1>
          <img src={rightArrow} alt="rightArrow" />
        </div>
        <div className="flex items-center justify-end">
          <div>
            <h1 className="mt-[8px] text-[20px] text-[#0D0D0D] font-bold">
              Payment Cards
            </h1>
            <h1 className="mt-[22px] smd:mt-[32px] text-[18px] text-[#2356B2] font-semibold">
              Primary
            </h1>
            <img src={card1} alt="card1" className="mt-[16px] lg:w-[350px]" />
          </div>
        </div>
        <div className="mt-[16px] flex items-center justify-end gap-[5px]">
          <h1 className="text-[11px] text-[#8F8F8F] font-medium">Show info</h1>
          <img src={eye} alt="eye" />
        </div>
        <div className="flex items-center justify-end">
          <div>
            <h1 className="mt-[30px] smd:mt-[52px] text-[18px] text-[#2356B2] font-semibold">
              Shopping
            </h1>
            <img src={card2} alt="card1" className="mt-[16px]" />
          </div>
        </div>
        <div className="mt-[16px] flex items-center justify-end gap-[5px]">
          <h1 className="text-[11px] text-[#8F8F8F] font-medium">Show info</h1>
          <img src={eye} alt="eye" />
        </div>
        <div className="mt-[40px] smd:mt-[64px] flex items-center justify-center gap-[15px] mb-[50px] cursor-pointer">
          <div className="flex items-center  justify-center bg-[#196BFE] font-SFMedium rounded-full w-[120px] smd:w-[167px] h-[40px] smd:h-[53px]">
            <Link to="/add-cards">
              <h1 className="text-center text-[#ffffff] text-[14px] smd:text-[16px]">
                Edit cards
              </h1>
            </Link>
          </div>
          <div className="flex items-center  justify-center bg-[#196BFE] font-SFMedium rounded-full w-[120px] smd:w-[167px] h-[40px] smd:h-[53px] cursor-pointer">
            <Link to="/overview">
              <h1 className="text-center text-[#ffffff] text-[14px] smd:text-[16px]">
                Overview
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightDash;
