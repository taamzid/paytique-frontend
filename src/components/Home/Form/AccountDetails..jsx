import { useState } from "react";
import card from "../../../assets/login/card.svg";
import leftBackground from "../../../assets/login/left.svg"; // Import the background image
import logo from "../../../assets/login/logo.svg";

const AccountDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    card: "",
    date: "",
    cvv: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="grid grid-cols-2 overflow-hidden">
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

      {/* Right section with form */}
      <div className="text-black flex flex-col items-center justify-center">
        <h1 className="text-[50px] mt-4	font-medium text-center ">
          Account Details
        </h1>
        <p className="lg:text-[16px] font-SFMedium mt-[2px] text-center mb-[35px]">
          let’s add details to start transaction.
        </p>
        <form onSubmit={handleSubmit} className="gap-7 flex flex-col">
          <div className="mb-4 gap-7">
            <input
              type="text"
              placeholder="Enter Name"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="px-4 py-4 ml-2 mr-6 rounded border border-gray-400 w-[95%]"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Enter Card Number"
              id="card"
              name="card"
              value={formData.card}
              onChange={handleChange}
              className="px-4 py-4 ml-2 mr-6 rounded border border-gray-400 w-[95%]"
            />
          </div>
          <div className="mb-4 flex ">
            <div className="mr-2 w-1/2">
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Enter Card Expiry Date"
                value={formData.date}
                onChange={handleChange}
                className="px-4 py-4 ml-2 mr-6 rounded border border-gray-400 w-full"
              />
            </div>
            <div className="ml-2 w-1/2">
              <input
                type="number"
                placeholder="Enter CVV"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="px-2 py-4 ml-0 mr-24 rounded border border-gray-400 w-[92%]"
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="Enter Phone Number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-4 ml-2 mr-6 rounded border border-gray-400 w-[94.5%]"
            />
          </div>
          <div className="mt-4 space-x-4 flex justify-between w-[95%] ml-2">
            <button
              type="button"
              className="bg-transparent text-[#3F4254] px-4 py-2 rounded border border-[#E1E3EA]"
              onClick={() => console.log("Cancel clicked")}
            >
              Skip
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;
