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
      <div className="bg-[url('./assets/login/left.svg')] bg-cover bg-center smd:pl-[50px] lg:pl-[60px] smd:pt-[55px] lg:pt-[65px] text-white h-[100vh]">
        <img src={logo} alt="logo" className="smd:mb-[80px] lg:mb-[135px]" />
        <img src={card} alt="card" />
        <h1 className="smd:text-[50px] lg:text-[62.84px] mt-[35px] font-SFSemibold smd:leading-[60px] lg:leading-[75px]">
          Find The Best Way <br /> To Send Your Money
        </h1>
        <p className="lg:text-[21px] mt-[20px] ">
          If you are seeing this than this might be good.
        </p>
        <p className="lg:text-[24px] font-SFMedium smd:mt-[70px] lg:mt-[90px]">
          Don’t Have an Account?{" "}
        </p>
        <button className="bg-[#196BFE] smd:w-[170px] lg:w-[253px] h-[31px] rounded-full smd:mt-[10px] lg:mt-[20px] text-[14px] font-bold">
          Register
        </button>
      </div>

      {/* Right section with account type selection */}
      <div className="ml-8 pt-28 flex flex-col justify-center align-middle ">
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
