import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="smd:mt-[40px] lg:mt-[80px] flex items-center justify-between text-[#ffffff] bg-gradient-to-r from-[#196BFE] from-0% to-[#0F4098] to-100% w-[533px] smd:h-[50px] lg:h-[66px] rounded-full py-[20px] pl-[20px] smd:pr-[10px] lg:pr-[15px]">
        <h1 className="text-[18px] font-bold">
          50$ bonus for first time users.
        </h1>
        <div className="bg-[#ffffff] rounded-full lg:text-[16px] flex items-center justify-center text-center font-bold text-[#10439F] w-[182px] smd:h-[35px] lg:h-[40px] cursor-pointer">
          <h1>Grab the Deal Now!</h1>
        </div>
      </div>
      <div className="text-[#ffffff] font-medium smd:text-[50px] smd:leading-[50px] lg:text-[80px] lg:leading-[80px] mt-[32px]">
        <h1>Get Paid. Anytime,</h1>
        <h1>Anywhere.</h1>
      </div>
      <div className="text-[18px] text-[#ffffff] smd:mt-[30px] lg:mt-[35px]">
        <h1 className="smd:hidden lg:block">
          Tired of waiting 1-10 Business days for your international deposit?
          Send & <br />
          receive money instantly and globally with one click.{" "}
          <span className="font-bold">No Transaction Limits!</span> <br />{" "}
          Receive funds in minutes with the{" "}
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
      <div className="text-[#ffffff] smd:text-[18px] lg:text-[20px] font-SFMedium smd:mt-[25px] lg:mt-[50px]">
        <h1>Send Money. The Fastest Way Possible.</h1>
      </div>
      <div className="mt-[35px] relative max-w-[560px]">
        <label class="relative block">
          <input
            class="placeholder:text-[#A1A5B7] block bg-transparent smd:w-[560px] smd:h-[50px] lg:h-[60px] border border-[#D9D9D9] rounded-md py-2 pl-5 pr-3 focus:outline-none focus:border-[#D9D9D9] focus:ring-[#D9D9D9] text-[16px] text-[#ffffff]"
            placeholder="Type Location"
            type="text"
            name="location"
          />
        </label>
        <label class="relative block mt-[20px]">
          <input
            class="placeholder:text-[#A1A5B7] block bg-transparent smd:w-[560px] smd:h-[50px] lg:h-[60px] border border-[#D9D9D9] rounded-md py-2 pl-5 pr-3 focus:outline-none focus:border-[#D9D9D9] focus:ring-[#D9D9D9] text-[16px] text-[#ffffff]"
            placeholder="Type Location"
            type="text"
            name="location"
          />
        </label>
        <div className="text-[#ffffff] text-[12px] font-bold bg-[#196BFE] text-center rounded-lg w-[55px] h-[20px] absolute top-[-9px] left-[20px]">
          <h1>From</h1>
        </div>
        <div className="text-[#ffffff] text-[12px] font-bold bg-[#196BFE] text-center rounded-lg w-[55px] h-[20px] absolute smd:top-[61px] lg:top-[70px] left-[20px]">
          <h1>To</h1>
        </div>
        <div className="mt-[30px] flex justify-between">
          <button className="border border-[#D9D9D9] rounded-md text-[#ffffff] font-SFRegular text-center smd:w-[200px] h-[40px]">
            Open an Account
          </button>
          <button className="bg-[#196BFE] rounded-md text-[#ffffff] text-center smd:w-[145px] h-[40px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
