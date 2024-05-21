import { LeftDash } from "../Dashboard/LeftDash";
import RightDash from "../Dashboard/RightDash";
import Common from "../Dashboard/Common";
import cp1 from "../../../assets/offer/cp1.svg";
import cp2 from "../../../assets/offer/cp2.svg";

const Offer = () => {
  return (
    <div className="bg-[#ffffff] smd:grid smd:grid-cols-[1fr_2.5fr_1.5fr] slg:grid-cols-[.9fr_3fr_1fr] lg:grid-cols-[.8fr_3fr_1.1fr] h-[100vh]">
      <LeftDash />
      <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style]:hidden [scrollbar-width]:hidden">
        <Common />
        <div className="px-[20px] smd:px-[50px] py-[20px]">
          <img src={cp1} alt="cp1" className="w-full" />
          <img src={cp2} alt="cp2" className="w-full mt-[30px]" />
        </div>
      </div>
      <RightDash />
    </div>
  );
};

export default Offer;
