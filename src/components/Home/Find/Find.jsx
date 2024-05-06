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
      <div className="bg-[#F1F6FF] flex flex-col-reverse smd:flex-row items-center justify-center smd:gap-[60px] lg:gap-[140px] pt-[60px] smd:pt-[80px] smd:pb-[320px] lg:pb-[480px] px-[32px] smd:px-[40px] lg:px-[0px]">
        <div className="smd:flex items-center justify-center smd:gap-[25px] lg:gap-[46px]">
          <div>
            <div className="bg-[#ffffff] border border-[#8b8a8a] rounded-[15px] mt-[60px] smd:mt-[0px] w-[305px] smd:w-[295px] lg:w-[305px] h-[182px] p-[30px] shadow-xl">
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
            <div className="bg-[#ffffff] border border-[#8b8a8a] rounded-[15px] w-[305px] smd:w-[295px] lg:w-[305px] h-[182px] p-[30px] mt-[30px] smd:mt-[32px] shadow-xl">
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
          <div className="bg-[#ffffff] border border-[#8b8a8a] rounded-[15px] mb-[60px] smd:mb-[0px] mt-[30px] smd:mt-[0px] w-[305px] smd:w-[295px] lg:w-[305px] h-[182px] p-[30px] shadow-xl">
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
          <h1 className="hidden lg:block smd:text-[35px] lg:text-[48px] font-SFMedium lg:leading-[55px]">
            Find out why thousands of people <br /> worldwide are using{" "}
            <span className="text-[#196BFE]">Paytique.</span>
          </h1>
          <h1 className="smd:block lg:hidden text-center smd:text-start text-[32px] smd:text-[35px] lg:text-[48px] font-SFMedium leading-[45px]">
            Find out why thousands of people worldwide are using{" "}
            <span className="text-[#196BFE]">Paytique.</span>
          </h1>
          <h1 className="hidden lg:block text-[24px] leading-[30px] mt-[25px]">
            No Transaction Limits! Receive funds in minutes with the lowest fees{" "}
            <br />
            possible.
          </h1>
          <h1 className="text-[20px] smd:text-[18px] lg:hidden leading-[28px] smd:leading-[30px] mt-[30px] smd:mt-[25px]">
            No Transaction Limits! Receive funds in minutes with the lowest fees{" "}
            possible.
          </h1>
          <div className="flex smd:block items-center justify-center">
            <button className="bg-[#196BFE] flex items-center justify-center gap-[15px] rounded-md text-[#ffffff] text-[18px] text-center w-[160px] h-[53px] mt-[30px] smd:mt-[25px]">
              Start Today
              <img src={exclude} alt="exclude" />
            </button>
          </div>
        </div>
      </div>
      <img src={c1} alt="c1" className="hidden smd:block smd:absolute" />
      <div className="mt-[50px] px-[15px] smd:px-[0px] block smd:absolute smd:left-1/2 smd:transform smd:-translate-x-1/2 smd:-translate-y-1/2">
        <div className="flex items-center justify-center">
          <div className="py-[45px] smd:py-[0px] px-[40px] flex flex-col smd:flex-row items-center justify-center smd:gap-[70px] lg:gap-[150px] bg-[#003AA1] smd:pb-[60px] lg:pb-[60px] smd:w-[1150px] lg:w-[1640px] smd:h-[550px] lg:h-[760px] rounded-3xl">
            <div>
              <div className="text-[#ffffff] text-[42px] leading-[50px] smd:text-[60px] smd:leading-[80px] lg:text-[96px] lg:leading-[110px] smd:mt-[30px] lg:mt-[0px]">
                <h1>Instant. Secure.</h1>
                <h1>One Link.</h1>
              </div>
              <div className="hidden lg:block text-[#ffffff] text-[22px] mt-[40px]">
                Tired of waiting 1-10 Business days for your international
                deposit? <br />
                Send & receive money instantly and globally with one click. No{" "}
                <br />
                Transaction Limits!
              </div>
              <div className="hidden smd:block lg:hidden text-[#ffffff] smd:text-[18px] lg:text-[22px] mt-[40px]">
                Tired of waiting 1-10 Business days for your international{" "}
                <br />
                deposit? Send & receive money instantly and globally with one
                click. No Transaction Limits!
              </div>
              <div className="block smd:hidden text-[#ffffff] text-[22px] mt-[36px]">
                Tired of waiting 1-10 Business days for your international{" "}
                deposit? Send & receive money instantly and globally with one
                click. No Transaction Limits!
              </div>
              <div className="mt-[42px] smd:mt-[40px]">
                <button className="bg-[#196BFE] w-[294px] h-[64px] smd:h-[55px] lg:h-[64px] rounded-full">
                  <h1 className="smd:text-[18px] lg:text-[20px] text-[#ffffff] font-SFMedium">
                    Download Our Mobile App
                  </h1>
                </button>
              </div>
            </div>
            <div>
              <img
                src={mobile}
                alt="mobile"
                className="h-full mt-[42px] smd:mt-[0px]"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src={c2}
        alt="c2"
        className="hidden smd:block smd:absolute right-0"
      />
      <div className="mt-[60px] smd:mt-[340px] lg:mt-[470px] relative">
        <div>
          <h1 className="text-[42px] smd:text-[60px] lg:text-[80px] text-[#1E1E1E] text-center font-SFMedium">
            How to Get Started
          </h1>
        </div>
        <div className="smd:flex items-center justify-center smd:gap-[20px] lg:gap-[30px] mt-[36px] mb-[50px] smd:my-[60px] mx-[35px] smd:mx-[30px] lg:mx-[0px]">
          <div className="border border-[#dbd8d8] rounded-3xl smd:px-5 lg:px-8 py-6 shadow-xl w-[325px] smd:w-[350px] lg:w-[388px] h-[300px] smd:h-[310px] lg:h-[359px]">
            <h1 className="text-[#196BFE] text-[48px] smd:text-[60px] lg:text-[74px] px-[24px] smd:px-[0px]">
              1.
            </h1>
            <h1 className="px-[24px] smd:px-[0px] text-[24px] lg:text-[29px] font-SFMedium smd:leading-[35px] lg:leading-[40px]">
              <span className="text-[#196BFE]">Just a Random</span> Text that is
              here to show what type of content can be written here.
            </h1>
          </div>
          <div className="border border-[#dbd8d8] mt-[25px] smd:mt-[0px] rounded-3xl smd:px-5 lg:px-8 py-6 shadow-xl w-[325px] smd:w-[350px] lg:w-[388px] h-[300px] smd:h-[310px] lg:h-[359px]">
            <h1 className="text-[#196BFE] text-[48px] smd:text-[60px] lg:text-[74px] px-[24px] smd:px-[0px]">
              2.
            </h1>
            <h1 className="px-[24px] smd:px-[0px] text-[24px] lg:text-[29px] font-SFMedium smd:leading-[35px] lg:leading-[40px]">
              <span className="text-[#196BFE]">Just a Random</span> Text that is
              here to show what type of content can be written here.
            </h1>
          </div>
          <div className="border border-[#dbd8d8] mt-[25px] smd:mt-[0px] rounded-3xl smd:px-5 lg:px-8 py-6 shadow-xl w-[325px] smd:w-[350px] lg:w-[388px] h-[300px] smd:h-[310px] lg:h-[359px]">
            <h1 className="text-[#196BFE] text-[48px] smd:text-[60px] lg:text-[74px] px-[24px] smd:px-[0px]">
              3.
            </h1>
            <h1 className="px-[24px] smd:px-[0px] text-[24px] lg:text-[29px] font-SFMedium smd:leading-[35px] lg:leading-[40px]">
              <span className="text-[#196BFE]">Just a Random</span> Text that is
              here to show what type of content can be written here.
            </h1>
          </div>
          <div className="border border-[#dbd8d8] mt-[25px] smd:mt-[0px] rounded-3xl smd:px-5 lg:px-8 py-6 shadow-xl w-[325px] smd:w-[350px] lg:w-[388px] h-[300px] smd:h-[310px] lg:h-[359px]">
            <h1 className="text-[#196BFE] text-[48px] smd:text-[60px] lg:text-[74px] px-[24px] smd:px-[0px]">
              4.
            </h1>
            <h1 className="px-[24px] smd:px-[0px] text-[24px] lg:text-[29px] font-SFMedium smd:leading-[35px] lg:leading-[40px]">
              <span className="text-[#196BFE]">Just a Random</span> Text that is
              here to show what type of content can be written here.
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[40px] mb-[127px]">
          <button className="bg-[#196BFE] w-[299px] smd:w-[366px] h-[72px] smd:h-[55px] lg:h-[64px] rounded-full">
            <h1 className="text-[28px] smd:text-[18px] lg:text-[28px] text-[#ffffff] font-SFMedium">
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
