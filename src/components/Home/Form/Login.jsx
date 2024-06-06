import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import card from "../../../assets/login/card.svg";
import logo from "../../../assets/login/logo.svg";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className="bg-[#ffffff] ">
      {/* Left section with image, text, and button */}
      <div className="flex flex-col items-center justify-center smd:flex smd:items-center smd:justify-center   h-[50vh] bg-[url('./assets/login/loginMobile.svg')] bg-cover smd:bg-[url('./assets/login/loginPcV.svg')] smd:bg-cover bg-center smd:pl-[50px] lg:pl-[60px] smd:pt-[25px] lg:pt-[35px] text-white smd:h-[100vh] ">
        <Link to="/">
          <img src={logo} alt="logo" className="smd:mb-[0px] lg:mb-[40px] " />
        </Link>
        <img src={card} alt="card" className="mt-[20px] smd:mt-[0px]" />
        <h1 className="hidden smd:block smd:text-[50px] smd:text-center lg:text-center lg:text-[62.84px] mt-[35px] font-SFSemibold smd:leading-[60px] lg:leading-[75px]">
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
        <div className=" mt-[15vh] pb-[28vh] smd:pb-[0px] smd:mt-[0px] flex items-center justify-center">
          {!isAuthenticated && (
            <button
              onClick={() => loginWithRedirect()}
              className="hidden smd:block bg-[#196BFE] w-[170px] lg:w-[253px] h-[31px] rounded-full mt-[20px] smd:mt-[10px] lg:mt-[20px] text-[14px] font-bold"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
