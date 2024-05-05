import card from "../../../assets/login/card.svg";
import icloud from "../../../assets/login/cloud.svg";
import google from "../../../assets/login/google.svg";
import logo from "../../../assets/login/logo.svg";
import outlook from "../../../assets/login/outlook.svg";

const SignUp = () => {
  return (
    <div className="grid grid-cols-2">
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
              className="text-center lg:text-[14px] font-SFMedium text-[#3F4254] underline"
            >
              I accept the Paytique Financial Agreement
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
        <div className="mt-4 text-center align-middle justify-center">
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
