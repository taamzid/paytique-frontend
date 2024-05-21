import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../../assets/login/logo.svg";
import card from "../../../assets/login/card.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className="bg-[#ffffff] smd:grid grid-cols-2">
      {/* Left section with image, text, and button */}
      <div className="flex flex-col items-center justify-center smd:block h-[50vh] bg-[url('./assets/login/left.svg')] bg-cover bg-center smd:pl-[50px] lg:pl-[60px] smd:pt-[55px] lg:pt-[65px] text-white smd:h-[100vh]">
        <Link to="/">
          <img src={logo} alt="logo" className="smd:mb-[80px] lg:mb-[135px]" />
        </Link>
        <img src={card} alt="card" className="mt-[20px] smd:mt-[0px]" />
        <h1 className="hidden smd:block smd:text-[50px] lg:text-[62.84px] mt-[35px] font-SFSemibold smd:leading-[60px] lg:leading-[75px]">
          Find The Best Way <br /> To Send Your Money
        </h1>
        <h1 className="smd:hidden text-[14px] mt-[20px]">
          Find The Best Way To Send Your Money
        </h1>
        <p className="text-[14px] smd:text-[16px] lg:text-[21px]">
          If you are seeing this than this might be good.
        </p>
        <p className="hidden smd:block text-[14px] smd:text-[16px] lg:text-[24px] font-SFMedium smd:mt-[70px] lg:mt-[90px]">
          Don’t Have an Account?{" "}
        </p>
        <button className="hidden smd:block bg-[#196BFE] w-[170px] lg:w-[253px] h-[31px] rounded-full mt-[20px] smd:mt-[10px] lg:mt-[20px] text-[14px] font-bold">
          Register
        </button>
      </div>
      <div className="bg-[#ffffff] mt-[15vh] pb-[35vh] smd:pb-[0px] smd:mt-[0px] flex items-center justify-center">
        {!isAuthenticated && (
          <button
            onClick={() => loginWithRedirect()}
            className="bg-[#196BFE] w-[170px] lg:w-[253px] h-[40px] smd:h-[31px] lg:h-[50px] smd:mt-[10px] lg:mt-[20px] text-[#ffffff] smd:text-[14px] lg:text-[18px] font-bold"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
