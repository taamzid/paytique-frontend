import heroImg from "../../../assets/home/hero/heroImg.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex justify-center lg:gap-[420px]">
      <div className="pl-[50px]">
        <div className="smd:mt-[40px] lg:mt-[107px] flex items-center justify-between text-[#ffffff] bg-gradient-to-r from-[#196BFE] from-0% to-[#0F4098] to-100% w-[533px] smd:h-[50px] lg:h-[66px] rounded-full py-[20px] pl-[32px] smd:pr-[10px] lg:pr-[19px]">
          <h1 className="text-[18px] font-SFBold">
            50$ bonus for first time users.
          </h1>
          <div className="bg-[#ffffff] rounded-full lg:text-[16px] flex items-center justify-center text-center font-SFBold text-[#10439F] w-[182px] smd:h-[35px] lg:h-[40px] cursor-pointer">
            <h1>Grab the Deal Now!</h1>
          </div>
        </div>
        <div className="text-[#ffffff] font-SFMedium smd:text-[50px] smd:leading-[50px] lg:text-[80px] lg:leading-[80px] mt-[50px]">
          <h1>Get Paid. Anytime,</h1>
          <h1>Anywhere.</h1>
        </div>
        <div className="text-[18px] text-[#ffffff] smd:mt-[30px] lg:mt-[40px]">
          <h1 className="smd:hidden lg:block font-SFRegular">
            Tired of waiting 1-10 Business days for your international deposit?
            Send & <br />
            receive money instantly and globally with one click.{" "}
            <span className="font-bold">
              No Transaction Limits!
            </span> <br /> Receive funds in minutes with the{" "}
            <span className="font-bold">lowest fees possible.</span>
          </h1>
          <h1 className="text-[16px] smd:block lg:hidden smd:pr-[30px]">
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
        <div className="mt-[35px] relative max-w-[560px]">
          <div className="mt-[30px] flex justify-between">
            <Link to="signup">
              <button className="border border-[#D9D9D9] rounded-md text-[#ffffff] font-SFRegular text-center smd:w-[200px] h-[43px]">
                Open an Account
              </button>
            </Link>
            <Link to="login">
              <button className="bg-[#196BFE] rounded-md text-[#ffffff] font-SFRegular text-center smd:w-[147px] h-[43px]">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="pr-[350px] mt-[60px]">
        <img src={heroImg} alt="heroImg" className="" />
      </div>
    </div>
  );
};

export default Hero;
