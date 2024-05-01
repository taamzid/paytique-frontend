import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="mt-[80px] flex items-center justify-between text-[#ffffff] bg-gradient-to-r from-[#196BFE] from-0% to-[#0F4098] to-100% w-[533px] h-[66px] rounded-full py-[20px] pl-[20px] pr-[15px]">
        <h1 className="text-[18px] font-bold">
          50$ bonus for first time users.
        </h1>
        <div className="bg-[#ffffff] px-4 py-2 rounded-full text-[16px] font-bold text-[#10439F] w-[182px] h-[40px] cursor-pointer">
          <h1>Grab the Deal Now!</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
