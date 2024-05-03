import { useState } from "react";
import card from "../../../assets/login/card.svg";
import leftBackground from "../../../assets/login/left.svg"; // Import the background image
import logo from "../../../assets/login/logo.svg";

const SignInForm = () => {
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
        className="bg-cover sm:pl-28 lg:pl-16 pt-40 text-white"
        style={{ backgroundImage: `url(${leftBackground})` }}
      >
        <img src={logo} alt="Placeholder" className="pt-14 pb-32" />
        <img src={card} alt="Placeholder" />
        <h1 className="text-xl mt-4 text-2xl">
          Find The Best Way To Send Your Money
        </h1>
        <p className="text-sm">
          If you are seeing this than this might be good.
        </p>
        <p className="text-sm">Don’t Have an Account? </p>
        <button className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
          Register
        </button>
      </div>

      {/* Right section with form */}
      <div className="text-black ml-8 pt-28">
        <h1 className="text-center mb-6">Create An Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter Name"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="px-4 py-2 rounded border border-gray-400 w-full"
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
              className="px-4 py-2 rounded border border-gray-400 w-full"
            />
          </div>
          <div className="mb-4 flex">
            <div className="mr-2 w-1/2">
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Enter Card Expiry Date"
                value={formData.date}
                onChange={handleChange}
                className="px-4 py-2 rounded border border-gray-400 w-full"
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
                className="px-4 py-2 rounded border border-gray-400 w-full"
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
              className="px-4 py-2 rounded border border-gray-400 w-full"
            />
          </div>
          <div className="mt-6 flex justify-between">
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

export default SignInForm;
