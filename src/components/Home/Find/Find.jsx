import exclude from "../../../assets/home/find/Exclude.svg";
import one from "../../../assets/home/find/One.svg";
import two from "../../../assets/home/find/Two.svg";
import three from "../../../assets/home/find/Three.svg";
import mobile from "../../../assets/home/find/mobile.svg";
import c1 from "../../../assets/home/find/c1.svg";
import c2 from "../../../assets/home/find/c2.svg";

const Find = () => {
  return (
    <div>
      <div className="bg-[#F1F6FF] flex items-center justify-center smd:gap-[60px] lg:gap-[140px] pt-[80px] smd:pb-[320px] lg:pb-[480px] smd:px-[40px] lg:px-[0px]">
        <div className="flex items-center justify-center smd:gap-[25px] lg:gap-[45px]">
          <div>
            <div className="bg-[#ffffff] border border-[#2F2F2F] rounded-[15px] smd:w-[295px] lg:w-[305px] h-[182px] p-[30px] shadow-xl">
              <div>
                <div className="flex items-center ml-[-12px]">
                  <img src={one} alt="one" />
                  <h1 className="text-[18px] font-medium">Instant Payment</h1>
                </div>
                <h1 className="text-[12px] mt-[15px]">
                  Receive fund instantly without slowing down from bank
                  bureaucratic.
                </h1>
              </div>
            </div>
            <div className="bg-[#ffffff] border border-[#2F2F2F] rounded-[15px] smd:w-[295px] lg:w-[305px] h-[182px] p-[30px] mt-[30px] shadow-xl">
              <div>
                <div className="flex items-center ml-[-12px]">
                  <img src={two} alt="two" />
                  <h1 className="text-[18px] font-medium">Safe & Secure</h1>
                </div>
                <h1 className="text-[12px] mt-[15px]">
                  Leveraging the security from advanced <br />
                  blockchain technology.
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-[#ffffff] border border-[#2F2F2F] rounded-[15px] smd:w-[295px] lg:w-[305px] h-[182px] p-[30px] shadow-xl">
            <div>
              <div className="flex items-center ml-[-12px]">
                <img src={three} alt="three" />
                <h1 className="text-[18px] font-medium">Payment Habit</h1>
              </div>
              <h1 className="text-[12px] mt-[15px]">
                Respect users’ habit without hassles but <br />
                lowest fees possible.
              </h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="smd:hidden lg:block smd:text-[35px] lg:text-[48px] font-SFMedium lg:leading-[55px]">
            Find out why thousands of people <br /> worldwide are using{" "}
            <span className="text-[#196BFE]">Paytique.</span>
          </h1>
          <h1 className="smd:block lg:hidden smd:text-[35px] lg:text-[48px] font-SFMedium leading-[45px]">
            Find out why thousands of people worldwide are using{" "}
            <span className="text-[#196BFE]">Paytique.</span>
          </h1>
          <h1 className="smd:hidden lg:block text-[24px] leading-[30px] mt-[25px]">
            No Transaction Limits! Receive funds in minutes with the lowest fees{" "}
            <br />
            possible.
          </h1>
          <h1 className="smd:text-[18px] lg:hidden leading-[30px] mt-[25px]">
            No Transaction Limits! Receive funds in minutes with the lowest fees{" "}
            possible.
          </h1>
          <button className="bg-[#196BFE] flex items-center justify-center gap-[15px] rounded-md text-[#ffffff] text-[18px] text-center smd:w-[160px] h-[53px] mt-[25px]">
            Start Today
            <img src={exclude} alt="exclude" />
          </button>
        </div>
      </div>
      <img src={c1} alt="c1" className="absolute" />
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-center">
          <div className="px-[40px] flex items-center justify-center smd:gap-[70px] lg:gap-[150px] bg-[#003AA1] smd:pb-[60px] lg:pb-[60px] smd:w-[1150px] lg:w-[1640px] smd:h-[550px] lg:h-[760px] rounded-3xl">
            <div>
              <div className="text-[#ffffff] smd:text-[60px] smd:leading-[80px] lg:text-[96px] lg:leading-[110px] smd:mt-[30px] lg:mt-[0px]">
                <h1>Instant. Secure.</h1>
                <h1>One Link.</h1>
              </div>
              <div className="smd:hidden lg:block text-[#ffffff] text-[22px] mt-[40px]">
                Tired of waiting 1-10 Business days for your international
                deposit? <br />
                Send & receive money instantly and globally with one click. No{" "}
                <br />
                Transaction Limits!
              </div>
              <div className="smd:block lg:hidden text-[#ffffff] smd:text-[18px] lg:text-[22px] mt-[40px]">
                Tired of waiting 1-10 Business days for your international{" "}
                <br />
                deposit? Send & receive money instantly and globally with one
                click. No Transaction Limits!
              </div>
              <div className="mt-[40px]">
                <button className="bg-[#196BFE] w-[294px] smd:h-[55px] lg:h-[64px] rounded-full">
                  <h1 className="smd:text-[18px] lg:text-[20px] text-[#ffffff] font-SFMedium">
                    Download Our Mobile App
                  </h1>
                </button>
              </div>
            </div>
            <div>
              <img src={mobile} alt="mobile" className="h-full" />
            </div>
          </div>
        </div>
      </div>
      <img src={c2} alt="c2" className="absolute right-0" />
      <div className="smd:mt-[340px] lg:mt-[470px] relative">
        <div>
          <h1 className="smd:text-[60px] lg:text-[80px] text-[#1E1E1E] text-center font-SFMedium">
            How to Get Started
          </h1>
        </div>
        <div className="flex items-center justify-center smd:gap-[20px] lg:gap-[30px] my-[60px] smd:mx-[30px] lg:mx-[0px]">
          <div className="border border-[#dbd8d8] rounded-3xl smd:px-5 lg:px-8 py-6 shadow-xl smd:w-[350px] lg:w-[388px] smd:h-[310px] lg:h-[359px]">
            <h1 className="text-[#196BFE] smd:text-[60px] lg:text-[74px]">
              1.
            </h1>
            <h1 className="smd:text-[24px] lg:text-[29px] font-SFMedium smd:leading-[35px] lg:leading-[40px]">
              <span className="text-[#196BFE]">Just a Random</span> Text that is
              here to show what type of content can be written here.
            </h1>
          </div>
          <div className="border border-[#dbd8d8] rounded-3xl smd:px-5 lg:px-8 py-6 shadow-xl smd:w-[350px] lg:w-[388px] smd:h-[310px] lg:h-[359px]">
            <h1 className="text-[#196BFE] smd:text-[60px] lg:text-[74px]">
              2.
            </h1>
            <h1 className="smd:text-[24px] lg:text-[29px] font-SFMedium smd:leading-[35px] lg:leading-[40px]">
              <span className="text-[#196BFE]">Just a Random</span> Text that is
              here to show what type of content can be written here.
            </h1>
          </div>
          <div className="border border-[#dbd8d8] rounded-3xl smd:px-5 lg:px-8 py-6 shadow-xl smd:w-[350px] lg:w-[388px] smd:h-[310px] lg:h-[359px]">
            <h1 className="text-[#196BFE] smd:text-[60px] lg:text-[74px]">
              3.
            </h1>
            <h1 className="smd:text-[24px] lg:text-[29px] font-SFMedium smd:leading-[35px] lg:leading-[40px]">
              <span className="text-[#196BFE]">Just a Random</span> Text that is
              here to show what type of content can be written here.
            </h1>
          </div>
          <div className="border border-[#dbd8d8] rounded-3xl smd:px-5 lg:px-8 py-6 shadow-xl smd:w-[350px] lg:w-[388px] smd:h-[310px] lg:h-[359px]">
            <h1 className="text-[#196BFE] smd:text-[60px] lg:text-[74px]">
              4.
            </h1>
            <h1 className="smd:text-[24px] lg:text-[29px] font-SFMedium smd:leading-[35px] lg:leading-[40px]">
              <span className="text-[#196BFE]">Just a Random</span> Text that is
              here to show what type of content can be written here.
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[40px] mb-[127px]">
          <button className="bg-[#196BFE] w-[366px] smd:h-[55px] lg:h-[64px] rounded-full">
            <h1 className="smd:text-[18px] lg:text-[28px] text-[#ffffff] font-SFMedium">
              Register Now
            </h1>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Find;
