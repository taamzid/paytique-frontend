import { Link } from "react-router-dom";
import card from "../../../assets/login/card.svg";
import icloud from "../../../assets/login/cloud.svg";
import google from "../../../assets/login/google.svg";
import logo from "../../../assets/login/logo.svg";
import outlook from "../../../assets/login/outlook.svg";
import { useAuth0 } from "@auth0/auth0-react";

const SignUp = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className="grid grid-cols-2">
      {/* Left section with image, text, and button */}
      <div className="bg-[url('./assets/login/left.svg')] bg-cover bg-center smd:pl-[50px] lg:pl-[60px] smd:pt-[55px] lg:pt-[65px] text-white h-[100vh]">
        <Link to="/">
          <img src={logo} alt="logo" className="smd:mb-[80px] lg:mb-[135px]" />
        </Link>
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
      <div className="flex items-center justify-center">
        {!isAuthenticated && (
          <button
            onClick={() =>
              loginWithRedirect({
                authorizationParams: {
                  screen_hint: "signup",
                },
              })
            }
            className="bg-[#196BFE] smd:w-[170px] lg:w-[253px] smd:h-[31px] lg:h-[50px] smd:mt-[10px] lg:mt-[20px] text-[#ffffff] smd:text-[14px] lg:text-[18px] font-bold"
          >
            Sign Up
          </button>
        )}
      </div>
    </div>
  );
};

export default SignUp;
