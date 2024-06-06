import { Link } from "react-router-dom";
import heroImg from "../../../assets/home/hero/heroImg.svg";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse smd:flex-row lg:justify-center smd:gap-[160px] slg:gap-[350px] lg:gap-[420px]">
      <div className="smd:pl-[50px] pr-[29px] smd:pr-[0px]">
        <div className="mt-[40px] smd:mt-[90px] lg:mt-[107px] flex items-center justify-between text-[#ffffff] bg-gradient-to-r from-[#196BFE] from-0% to-[#0F4098] to-100% smd:w-[520px] lg:w-[533px] smd:h-[50px] lg:h-[66px] rounded-full py-[10px] smd:py-[20px] pl-[18px] smd:pl-[32px] pr-[10px] smd:pr-[10px] lg:pr-[19px]">
          <h1 className="text-[12px] smd:text-[18px] font-SFBold">
            50$ bonus for first time users.
          </h1>
          <div className="bg-[#ffffff] rounded-full text-[11px] smd:text-[16px] flex items-center justify-center text-center font-SFBold text-[#10439F] px-[7px] smd:w-[182px] h-[27px] smd:h-[35px] lg:h-[40px] cursor-pointer">
            <h1>Grab the Deal Now!</h1>
          </div>
        </div>
        <div className="text-[#ffffff] font-SFMedium text-[42px] smd:text-[50px] leading-[45px] smd:leading-[50px] slg:text-[75px] slg:leading-[80px] mt-[50px]">
          <h1>Get Paid. Anytime,</h1>
          <h1>Anywhere.</h1>
        </div>
        <div className="slg:text-[18px] text-[#ffffff] smd:mt-[30px] lg:mt-[40px]">
          <h1 className="font-SFRegular hidden smd:block">
            Tired of waiting 1-10 Business days for your international deposit?
            Send & <br />
            receive money instantly and globally with one click.{" "}
            <span className="font-bold">
              No Transaction Limits!
            </span> <br /> Receive funds in minutes with the{" "}
            <span className="font-bold">lowest fees possible.</span>
          </h1>
          <h1 className="mt-[20px] text-[16px] smd:hidden smd:pr-[30px]">
            Tired of waiting 1-10 Business days for your international deposit?
            Send & receive money instantly and globally with one click.{" "}
            <span className="font-bold">No Transaction Limits!</span> Receive
            funds in minutes with the{" "}
            <span className="font-bold">lowest fees possible.</span>
          </h1>
        </div>
        {/* <div className="text-[#ffffff] smd:text-[18px] lg:text-[20px] font-SFMedium smd:mt-[25px] lg:mt-[50px]">
          <h1>Send Money. The Fastest Way Possible.</h1>
        </div> */}
        <div className="mt-[35px] relative max-w-[400px]">
          <div className="mt-[30px] flex justify-between">
            <Link to="signup">
              <button className="border border-[#D9D9D9] rounded-md text-[#ffffff] font-SFRegular text-center w-[180px] smd:w-[200px] h-[43px]">
                Open an Account
              </button>
            </Link>
            <Link to="login">
              <button className="bg-[#196BFE] rounded-md text-[#ffffff] font-SFRegular text-center w-[147px] h-[43px]">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex smd:block items-center justify-center pr-[29px] lg:pr-[350px] mt-[40px] smd:mt-[60px]">
        <img
          src={heroImg}
          alt="heroImg"
          className="w-[205px] smd:w-[250px] lg:w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
