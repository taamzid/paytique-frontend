import leftImage from "../../../assets/home/affiliate/left.svg";
import rightImage from "../../../assets/home/affiliate/right.svg";

const Affiliate = () => {
  return (
    <div className="relative mt-[80px] mb-[100px]">
      <div>
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
      <div>
        <h1 className="smd:text-[60px] lg:text-[80px] text-center font-medium">
          Affiliated With
        </h1>
        <div className="flex items-center justify-center mt-[70px] smd:gap-[50px] lg:gap-[145px]">
          <div>
            <h1 className="text-[#196BFE] smd:text-[28px] lg:text-[36px] font-bold">
              1.8 Billion USD
            </h1>
            <h1 className="text-[12px] mt-[15px] smd:hidden lg:block">
              Receive fund instantly without slowing down <br />
              from bank bureaucratic.
            </h1>
            <h1 className="text-[12px] mt-[15px] smd:block lg:hidden">
              Receive fund instantly without <br />
              slowing down from bank bureaucratic.
            </h1>
          </div>
          <div>
            <h1 className="text-[#196BFE] smd:text-[28px] lg:text-[36px] font-bold">
              More than 4.5
            </h1>
            <h1 className="text-[12px] mt-[15px] smd:hidden lg:block">
              Receive fund instantly without slowing down <br />
              from bank bureaucratic.
            </h1>
            <h1 className="text-[12px] mt-[15px] smd:block lg:hidden">
              Receive fund instantly without <br />
              slowing down from bank bureaucratic.
            </h1>
          </div>
          <div>
            <h1 className="text-[#196BFE] smd:text-[28px] lg:text-[36px] font-bold">
              113 Organization
            </h1>
            <h1 className="text-[12px] mt-[15px] smd:hidden lg:block">
              Receive fund instantly without slowing down <br />
              from bank bureaucratic.
            </h1>
            <h1 className="text-[12px] mt-[15px] smd:block lg:hidden">
              Receive fund instantly without <br />
              slowing down from bank bureaucratic.
            </h1>
          </div>
          <div>
            <h1 className="text-[#196BFE] smd:text-[28px] lg:text-[36px] font-bold">
              40K+ Customers
            </h1>
            <h1 className="text-[12px] mt-[15px] smd:hidden lg:block">
              Receive fund instantly without slowing down <br />
              from bank bureaucratic.
            </h1>
            <h1 className="text-[12px] mt-[15px] smd:block lg:hidden">
              Receive fund instantly without <br />
              slowing down from bank bureaucratic.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
