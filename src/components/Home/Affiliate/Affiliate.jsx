import { useRef } from "react";
import leftImage from "../../../assets/home/affiliate/left.svg";
import rightImage from "../../../assets/home/affiliate/right.svg";
import { useIsVisible } from "../Home";

const Affiliate = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      ref={ref1}
      className={`transition-opacity ease-in duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative mt-[60px] smd:mt-[80px] mb-[55px] smd:mb-[100px]">
        <div className="hidden smd:block">
          <img
            src={leftImage}
            alt="leftImage"
            className="absolute left-0 top-[-82px]"
          />
          <img
            src={rightImage}
            alt="rightImage"
            className="absolute right-0 top-[-82px]"
          />
        </div>
        <div className="">
          <h1 className="text-[48px] smd:text-[60px] slg:text-[80px] text-center font-medium">
            Affiliated With
          </h1>
          <div className="px-[65px] smd:px-[0px] smd:flex items-center justify-center mt-[35px] smd:mt-[70px] smd:gap-[50px] slg:gap-[120px] lg:gap-[145px]">
            <div>
              <h1 className="text-[#196BFE] text-center smd:text-left text-[32px] smd:text-[28px] slg:text-[36px] font-bold">
                1.8 Billion USD
              </h1>
              <h1 className="text-[12px] mt-[15px] hidden lg:block">
                Receive fund instantly without slowing down <br />
                from bank bureaucratic.
              </h1>
              <h1 className="text-[12px] mt-[15px] hidden smd:block lg:hidden">
                Receive fund instantly without <br />
                slowing down from bank bureaucratic.
              </h1>
              <h1 className="text-center text-[12px] mt-[18px] smd:mt-[15px] smd:hidden">
                Receive fund instantly without slowing down from bank
                bureaucratic.
              </h1>
            </div>
            <div className="mt-[35px] smd:mt-[0px]">
              <h1 className="text-[#196BFE] text-center smd:text-left text-[32px] smd:text-[28px] slg:text-[36px] font-bold">
                More than 4.5
              </h1>
              <h1 className="text-[12px] mt-[15px] hidden lg:block">
                Receive fund instantly without slowing down <br />
                from bank bureaucratic.
              </h1>
              <h1 className="text-[12px] mt-[15px] hidden smd:block lg:hidden">
                Receive fund instantly without <br />
                slowing down from bank bureaucratic.
              </h1>
              <h1 className="text-center text-[12px] mt-[18px] smd:mt-[15px] smd:hidden">
                Receive fund instantly without slowing down from bank
                bureaucratic.
              </h1>
            </div>
            <div className="mt-[35px] smd:mt-[0px]">
              <h1 className="text-[#196BFE] text-center smd:text-left text-[30px] smd:text-[28px] slg:text-[36px] font-bold">
                113 Organization
              </h1>
              <h1 className="text-[12px] mt-[15px] hidden lg:block">
                Receive fund instantly without slowing down <br />
                from bank bureaucratic.
              </h1>
              <h1 className="text-[12px] mt-[15px] hidden smd:block lg:hidden">
                Receive fund instantly without <br />
                slowing down from bank bureaucratic.
              </h1>
              <h1 className="text-center text-[12px] mt-[18px] smd:mt-[15px] smd:hidden">
                Receive fund instantly without slowing down from bank
                bureaucratic.
              </h1>
            </div>
            <div className="mt-[35px] smd:mt-[0px]">
              <h1 className="text-[#196BFE] text-center smd:text-left text-[30px] smd:text-[28px] slg:text-[36px] font-bold">
                40K+ Customers
              </h1>
              <h1 className="text-[12px] mt-[15px] hidden lg:block">
                Receive fund instantly without slowing down <br />
                from bank bureaucratic.
              </h1>
              <h1 className="text-[12px] mt-[15px] hidden smd:block lg:hidden">
                Receive fund instantly without <br />
                slowing down from bank bureaucratic.
              </h1>
              <h1 className="text-center text-[12px] mt-[18px] smd:mt-[15px] smd:hidden">
                Receive fund instantly without slowing down from bank
                bureaucratic.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
