import { useAuth0 } from "@auth0/auth0-react";
import dropdown from "../../../assets/dashboard/center/dropdown.svg";
import notif from "../../../assets/dashboard/center/Notif.svg";
import mobileLogo from "../../../assets/common/mobileLogo.svg";
import Bell from "../../../assets/dashboard/center/Bell.svg";
import Search from "../../../assets//dashboard/center/Search.svg";
import bell from "../../../assets/common/Bell.svg";
import search from "../../../assets/common/Search.svg";
import Menu from "../../../assets/common/Menu.svg";
import { useRef, useState } from "react";
import { DashMenu } from "./DashMenu";
import { Link } from "react-router-dom";
import { FaMixer } from "react-icons/fa6";

const Common = () => {
  const { user, isAuthenticated } = useAuth0();
  const [menuClicked, setMenuClicked] = useState(false);
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
  const [isNotifVisible, setIsNotifVisible] = useState(false);
  const searchFormRef = useRef(null);
  const notifRef = useRef(null);

  const handleMenuClicked = () => {
    setMenuClicked((prev) => !prev);
  };

  const handleNotifClick = () => {
    setIsNotifVisible((prev) => !prev);
  };

  const handleNotifClose = () => {
    setIsNotifVisible(false);
  };

  const handleSearchClick = () => {
    setIsSearchFormVisible((prev) => !prev);
  };

  return (
    <div>
      <div className="hidden smd:block">
        {isAuthenticated && (
          <div className="flex items-center justify-between py-[40px] mr-[40px]">
            <div className="ml-[40px] flex items-center gap-[12px]">
              {user?.picture && (
                <img
                  src={user.picture}
                  alt="img"
                  className="rounded-full w-[40px]"
                />
              )}
              <div className="flex items-center gap-[15px]">
                <h1 className="font-SFMeidum text-[#828282]">{user?.name}</h1>
                <img src={dropdown} alt="dropdown" className="cursor-pointer" />
              </div>
            </div>

            <form
              ref={searchFormRef}
              className="w-[42%] lg:w-[30%] mx-auto mr-[10px]"
            >
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full h-[40px] px-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute h-[25px] top-2 end-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[12px] text-sm px-2 pb-[1px] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="flex items-center gap-[18px] indicator">
              {/* {!isSearchFormVisible && (
                <img
                  src={Search}
                  alt="search"
                  className="cursor-pointer"
                  onClick={handleSearchClick}
                />
              )} */}
              <div onClick={handleNotifClick}>
                <img src={Bell} alt="bell" className="cursor-pointer" />
                <span className="indicator-item cursor-pointer">
                  <img
                    src={notif}
                    alt="notif"
                    className="w-[14px] mr-[8px] mt-[5px]"
                  />
                </span>
              </div>
              {isNotifVisible && (
                <div
                  ref={notifRef}
                  className="z-[100] absolute top-[35px] right-[0px] bg-[#f4f6f7] shadow-md rounded-lg p-4 smd:w-[300px] slg:w-[400px] smd:mt-[10px]"
                >
                  <div className="text-gray-800 pb-[10px]">
                    <div className="flex items-center justify-between">
                      <h2 className="smd:text-[24px] font-semibold">
                        Notifications
                      </h2>
                      <h1
                        className="font-bold cursor-pointer"
                        onClick={handleNotifClose}
                      >
                        <FaMixer />
                      </h1>
                    </div>
                    <ul>
                      <li className="mt-4 bg-[#ffffff] p-3 rounded-lg font-semibold shadow-sm cursor-pointer hover:bg-[#e9ebd9]">
                        <span className="text-[#7091c6]">Received</span> $50
                        from <span className="text-[#196BFE]">John Doe</span>
                      </li>
                      <li className="mt-2 bg-[#ffffff] p-3 rounded-lg font-semibold shadow-sm cursor-pointer hover:bg-[#e9ebd9]">
                        <span className="text-success">Successfully</span>{" "}
                        transfered $20 to{" "}
                        <span className="text-[#196BFE]">James Doe</span>
                      </li>
                      <li className="mt-2 bg-[#ffffff] p-3 rounded-lg font-semibold shadow-sm cursor-pointer hover:bg-[#e9ebd9]">
                        Payment <span className="text-error">failed</span> $50
                        to <span className="text-[#196BFE]">Paytique</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="px-[20px] block pt-[50px] max-h-[288px] smd:hidden bg-[url('./assets/common/bgMobile.svg')] bg-cover rounded-bl-[30px] rounded-br-[30px]">
        {menuClicked && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleMenuClicked}
          ></div>
        )}
        <div
          className={`fixed inset-x-0 top-0 transform ${
            menuClicked ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 ease-in-out bg-white z-50`}
        >
          <DashMenu />
        </div>
        <div className="flex items-center justify-between">
          <Link to="/dashboard">
            <img src={mobileLogo} alt="mobileLogo" />
          </Link>
          <img src={Menu} alt="menu" onClick={handleMenuClicked} />
        </div>
        <div>
          <div className="pr-[10px] flex items-center justify-between mt-[20px] pb-[20px]">
            <div>
              <h1 className="text-medium text-[13px] text-[#ffffff]">
                Good Morning,
              </h1>
              <h1 className="text-semibold text-[23px] text-[#ffffff]">
                {user?.given_name}
              </h1>
            </div>
            <div className="flex items-center gap-[18px]">
              {!isSearchFormVisible && (
                <img
                  src={Search}
                  alt="search"
                  className="cursor-pointer"
                  onClick={handleSearchClick}
                />
              )}
              <div className="indicator">
                <img
                  src={bell}
                  alt="bell"
                  className="cursor-pointer"
                  onClick={handleNotifClick}
                />
                <span className="indicator-item cursor-pointer">
                  <img
                    src={notif}
                    alt="notif"
                    className="w-[14px] mr-[8px] mt-[5px]"
                  />
                </span>
              </div>

              {isNotifVisible && (
                <div
                  ref={notifRef}
                  className="z-[100] absolute top-[170px] smd:top-[35px] right-[0px] bg-[#f4f6f7] shadow-md rounded-lg p-4 text-[14px] smd:text-[16px] w-[270px] smd:w-[300px] slg:w-[400px]"
                >
                  <div className="text-gray-800 pb-[10px]">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[18px] smd:text-[24px] font-semibold">
                        Notifications
                      </h2>
                      <h1
                        className="font-bold cursor-pointer"
                        onClick={handleNotifClose}
                      >
                        <FaMixer />
                      </h1>
                    </div>

                    <ul>
                      <li className="mt-4 bg-[#ffffff] p-3 rounded-lg font-semibold shadow-sm cursor-pointer hover:bg-[#e9ebd9]">
                        <span className="text-[#7091c6]">Received</span> $50
                        from <span className="text-[#196BFE]">John Doe</span>
                      </li>
                      <li className="mt-2 bg-[#ffffff] p-3 rounded-lg font-semibold shadow-sm cursor-pointer hover:bg-[#e9ebd9]">
                        <span className="text-success">Successfully</span>{" "}
                        transfered $20 to{" "}
                        <span className="text-[#196BFE]">James Doe</span>
                      </li>
                      <li className="mt-2 bg-[#ffffff] p-3 rounded-lg font-semibold shadow-sm cursor-pointer hover:bg-[#e9ebd9]">
                        Payment <span className="text-error">failed</span> $50
                        to <span className="text-[#196BFE]">Paytique</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {isAuthenticated && (
                <div>
                  {user?.picture && (
                    <img
                      src={user.picture}
                      alt="img"
                      className="rounded-full w-[36px]"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
          {isSearchFormVisible && (
            <form
              ref={searchFormRef}
              className="w-[80%] smd:w-[42%] lg:w-[30%] mx-auto pb-[10px]"
            >
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full h-[40px] px-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute h-[25px] top-2 end-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[12px] text-sm px-2 pb-[1px] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Common;
