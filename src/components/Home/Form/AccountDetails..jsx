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
    <div className="grid grid-cols-2 font-sfpro-display">
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

      {/* Right section with form */}
      <div className="text-black ml-8 pt-28 flex flex-col justify-center align-middle">
        <h1 className="text-[40px] mt-4	 font-medium text-center ">
          Account Details
        </h1>
        <p className="lg:text-[16px] font-SFMedium mt-5 text-center mb-4">
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
                placeholder="Enter Phone Cvv"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="px-2 py-4 ml-0 mr-24 rounded border border-gray-400  w-[92%]"
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
              className="px-4 py-4 ml-2 mr-6 rounded border border-gray-400 w-[95%]"
            />
          </div>
          <div className="mt-4 space-x-4 flex justify-between w-[95%] ml-2  ">
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              onClick={() => console.log("Cancel clicked")}
            >
              Cancel
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