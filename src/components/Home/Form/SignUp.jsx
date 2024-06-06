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
    <div className="">
      {/* Left section with image, text, and button */}
      <div className="flex flex-col items-center justify-center smd:flex smd:items-center smd:justify-center bg-[url('./assets/login/loginMobile.svg')] bg-cover smd:bg-[url('./assets/login/loginPcV.svg')] smd:bg-cover bg-center text-white h-[100vh] smd:h-[100vh]">
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
        <div className="mt-[30px] smd:mt-[50px] lg:mt-[70px] flex items-center justify-center">
          {!isAuthenticated && (
            <button
              onClick={() =>
                loginWithRedirect({
                  authorizationParams: {
                    screen_hint: "signup",
                  },
                })
              }
              className=" bg-[#196BFE] w-[170px] lg:w-[253px] h-[31px] rounded-full mt-[10px] text-[14px] font-bold"
            >
              Register
            </button>
          )}
        </div>
        <p className="mt-[40px] lg:text-[24px] font-SFMedium ">
          Already have an Account?{" "}
        </p>
        <div className="flex items-center justify-center">
          {!isAuthenticated && (
            <button
              onClick={() => loginWithRedirect()}
              className=" bg-[#196BFE] w-[170px] lg:w-[253px] h-[31px] rounded-full mt-[10px] text-[14px] font-bold"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
