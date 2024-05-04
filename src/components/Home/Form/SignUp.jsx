import card from "../../../assets/login/card.svg";
import icloud from "../../../assets/login/cloud.svg";
import google from "../../../assets/login/google.svg";
import leftBackground from "../../../assets/login/left.svg"; // Import the background image
import logo from "../../../assets/login/logo.svg";
import outlook from "../../../assets/login/outlook.svg";

const SignUp = () => {
  return (
    <div className="grid grid-cols-2 ">
      {/* Left section with image, text, and button */}
      <div
        className="bg-cover sm:pl-28 lg:pl-16 pt-40  text-white  pb-64"
        style={{ backgroundImage: `url(${leftBackground})` }}
      >
        <img src={logo} alt="Placeholder" className=" pb-32" />
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

      {/* Right section with login form and social login options */}
      <div className="text-white ml-8 flex flex-col justify-center align-middle">
        <h1 className="text-center lg:text-[40px] font-medium text-[#3F4254]">
          Welcome
        </h1>
        <p className="text-center lg:text-[14px] font-SFMedium text-[#3F4254]">
          Let’s Begin Your Journey With Paytique
        </p>
        <form className="flex flex-col mt-3 gap-7">
          <input
            type="text"
            placeholder="Username"
            className="mt-2 px-4 py-4  mx-6 rounded border border-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-2 px-4 py-4 mx-6  rounded border border-gray-400"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="mt-2 px-4 py-4 mx-6  rounded border border-gray-400"
          />
          <div className="flex items-center mt-2">
            <input type="checkbox" id="terms" className="mr-2 mx-6 " />
            <label
              htmlFor="terms"
              className="text-center lg:text-[14px] font-SFMedium text-[#3F4254]"
            >
              I accept the Paytique Financial Agreement hleopopdsxzd
            </label>
          </div>
          <div className="mt-4 space-x-4 flex justify-between mx-6">
            <button className="bg-transparent text-black border px-4 py-2 rounded hover:bg-gray-500">
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Procced
            </button>
          </div>
        </form>
        <div className="mt-4 text-center align-middle justify-center mt-5">
          <p className="lg:text-[16px] font-SFMedium text-[#3F4254]">
            Sign In With Outlook
          </p>
          <div className="flex items-center space-x-4 mt-2 text-black justify-center  ">
            {/* Icons for social login options */}
            <div className=" border border-black px-6 py-3  ">
              <img src={google} alt="Google" className="w-10 h-6 " />
            </div>
            <span>or</span>
            <div className=" border border-black px-6 py-3 ">
              <img src={icloud} alt="icloud" className="w-6 h-6 " />
            </div>
            <span>or</span>
            <div className=" border border-black px-6 py-3  hover:border-dotted ">
              <img src={outlook} alt="outlook" className="w-6 h-6 border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
