import card from "../../../assets/login/card.svg";
import icloud from "../../../assets/login/cloud.svg";
import google from "../../../assets/login/google.svg";
import leftBackground from "../../../assets/login/left.svg"; // Import the background image
import logo from "../../../assets/login/logo.svg";
import outlook from "../../../assets/login/outlook.svg";

const Login = () => {
  return (
    <div className="grid grid-cols-2 font-sfpro-display">
      {/* Left section with image, text, and button */}
      <div
        className="bg-cover sm:pl-28 lg:pl-16 pt-40  text-white "
        style={{ backgroundImage: `url(${leftBackground})` }}
      >
        <img src={logo} alt="Placeholder" className="pt-14 pb-32" />
        <img src={card} alt="Placeholder" className="" />
        <h1 className="text-xl mt-4   text-2xl	 ">
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

      {/* Right section with login form and social login options */}
      <div className="text-white ml-8 pt-28">
        <h1 className="text-center">Welcome</h1>
        <p>Let’s Begin Your Journey With Paytique</p>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Username"
            className="mt-2 px-4 py-2 rounded border border-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-2 px-4 py-2 rounded border border-gray-400"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="mt-2 px-4 py-2 rounded border border-gray-400"
          />
          <div className="flex items-center mt-2">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm">
              I accept the Paytique Financial Agreement hleopopdsxzd
            </label>
          </div>
          <div className="mt-4 space-x-4 flex justify-between">
            <button className="bg-transparent text-black border px-4 py-2 rounded hover:bg-gray-500">
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Procced
            </button>
          </div>
        </form>
        <div className="mt-4 text-center align-middle justify-center">
          <p className="text-sm text-black">Or login with:</p>
          <div className="flex items-center space-x-4 mt-2 text-black justify-center  ">
            {/* Icons for social login options */}
            <div className="   ">
              <img
                src={google}
                alt="Google"
                className="w-6 h-6 border border-black"
              />
            </div>
            <span>or</span>
            <div>
              <img
                src={icloud}
                alt="icloud"
                className="w-6 h-6 border border-black"
              />
            </div>
            <span>or</span>
            <div>
              <img
                src={outlook}
                alt="outlook"
                className="w-6 h-6 border border-black hover:border-dotted border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
