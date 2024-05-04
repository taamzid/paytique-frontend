import { useState } from "react";
import card from "../../../assets/login/card.svg";
import leftBackground from "../../../assets/login/left.svg"; // Import the background image
import logo from "../../../assets/login/logo.svg";

const Type = () => {
  const [selectedAccountType, setSelectedAccountType] = useState(null);

  const handleAccountTypeSelection = (type) => {
    setSelectedAccountType(type);
  };

  return (
    <div className="grid grid-cols-2 ">
      {/* Left section with image, text, and button */}
      <div
        className="bg-cover sm:pl-28 lg:pl-16 pt-40  text-white  pb-64"
        style={{ backgroundImage: `url(${leftBackground})` }}
      >
        <img src={logo} alt="Placeholder" className="-pt-14 pb-32" />
        <img src={card} alt="Placeholder" className="" />
        <h1 className=" text-[64.84px] mt-4	 font-medium ">
          Find The Best Way <br /> To Send Your Money
        </h1>
        <p className="lg:text-[21.84px] font-SFMedium mt-5 ">
          If you are seeing this than this might be good.
        </p>
        <p className="lg:text-[21.84px] font-SFMedium mt-24">
          Don’t Have an Account?{" "}
        </p>
        <button className="bg-[#196BFE] w-[230px] smd:h-[55px] lg:h-[34px] rounded-full mt-2  ">
          Register
        </button>
      </div>

      {/* Right section with account type selection */}
      <div className=" ml-8 pt-28 flex flex-col justify-center align-middle ">
        <h1 className="text-[32px] mt-4 text-center	 font-medium  text-[#3F4254]">
          Choose An Account Type
        </h1>
        <div className="flex justify-center mt-8">
          <div className="flex items-center mr-6">
            <input
              type="radio"
              id="proprietorship"
              name="accountType"
              className="mr-2 "
              value="proprietorship"
              checked={selectedAccountType === "proprietorship"}
              onChange={() => handleAccountTypeSelection("proprietorship")}
            />
            <label
              htmlFor="proprietorship"
              className="text-sm cursor-pointer text-[20px]  text-center	 font-medium  text-[#3F4254]"
            >
              Proprietorship
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="personal"
              name="accountType"
              className="mr-2"
              value="personal"
              checked={selectedAccountType === "personal"}
              onChange={() => handleAccountTypeSelection("personal")}
            />
            <label
              htmlFor="personal"
              className="text-sm cursor-pointer text-[20px]  text-center	 font-medium  text-[#3F4254]"
            >
              Personal
            </label>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Type;
