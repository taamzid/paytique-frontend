import { LeftDash } from "../Dashboard/LeftDash";
import RightDash from "../Dashboard/RightDash";
import Common from "../Dashboard/Common";
import dp from "../../../assets/profile/dp.svg";
import edit from "../../../assets/profile/edit.svg";
import { useState } from "react";

const Profile = () => {
  const [isEditVisible, setEditVisible] = useState(false);

  const [isNameEditable, setNameEditable] = useState(false);
  const [isPassEditable, setPassEditable] = useState(false);
  const [isEmailEditable, setEmailEditable] = useState(false);
  const [isCardEditable, setCardEditable] = useState(false);
  const [isSecurityEditable, setSecurityEditable] = useState(false);
  const [isCNumberEditable, setCNumberEditable] = useState(false);
  const [isExpEditable, setExpEditable] = useState(false);
  const [isCVVEditable, setCVVEditable] = useState(false);
  const [isPNEditable, setPNEditable] = useState(false);

  const [name, setName] = useState("Robert Fox");
  const [password, setPassword] = useState("pert@d453ca");
  const [email, setEmail] = useState("robert@gmail.com");
  const [card, setCard] = useState("Robert A. Foxyron");
  const [security, setSecurity] = useState("353845342");
  const [cn, setCn] = useState("1235 4235 5464 2343");
  const [exp, setExp] = useState("12/03/2045");
  const [cvv, setCVV] = useState("399");
  const [pn, setPn] = useState("0192745235235");

  const handleEditInformationClick = () => {
    setEditVisible((prev) => !prev);
    if (
      isNameEditable ||
      isPassEditable ||
      isEmailEditable ||
      isCardEditable ||
      isSecurityEditable ||
      isCNumberEditable ||
      isExpEditable ||
      isCVVEditable ||
      isPNEditable
    ) {
      setNameEditable(false);
      setPassEditable(false);
      setEmailEditable(false);
      setCardEditable(false);
      setSecurityEditable(false);
      setCNumberEditable(false);
      setExpEditable(false);
      setCVVEditable(false);
      setPNEditable(false);
    }
  };

  const handleNameEditClick = () => {
    setNameEditable((prev) => !prev);
    setPassEditable(false);
    setEmailEditable(false);
    setCardEditable(false);
    setSecurityEditable(false);
    setCNumberEditable(false);
    setExpEditable(false);
    setCVVEditable(false);
    setPNEditable(false);
  };

  const handlePassEditClick = () => {
    setNameEditable(false);
    setPassEditable((prev) => !prev);
    setEmailEditable(false);
    setCardEditable(false);
    setSecurityEditable(false);
    setCNumberEditable(false);
    setExpEditable(false);
    setCVVEditable(false);
    setPNEditable(false);
  };

  const handleEmailEditClick = () => {
    setNameEditable(false);
    setPassEditable(false);
    setEmailEditable((prev) => !prev);
    setCardEditable(false);
    setSecurityEditable(false);
    setCNumberEditable(false);
    setExpEditable(false);
    setCVVEditable(false);
    setPNEditable(false);
  };
  const handleCardEditClick = () => {
    setNameEditable(false);
    setPassEditable(false);
    setEmailEditable(false);
    setCardEditable((prev) => !prev);
    setSecurityEditable(false);
    setCNumberEditable(false);
    setExpEditable(false);
    setCVVEditable(false);
    setPNEditable(false);
  };
  const handleSecurityEditClick = () => {
    setNameEditable(false);
    setPassEditable(false);
    setEmailEditable(false);
    setCardEditable(false);
    setSecurityEditable((prev) => !prev);
    setCNumberEditable(false);
    setExpEditable(false);
    setCVVEditable(false);
    setPNEditable(false);
  };
  const handleCNumberEditClick = () => {
    setNameEditable(false);
    setPassEditable(false);
    setEmailEditable(false);
    setCardEditable(false);
    setSecurityEditable(false);
    setCNumberEditable((prev) => !prev);
    setExpEditable(false);
    setCVVEditable(false);
    setPNEditable(false);
  };
  const handleEXPEditClick = () => {
    setNameEditable(false);
    setPassEditable(false);
    setEmailEditable(false);
    setCardEditable(false);
    setSecurityEditable(false);
    setCNumberEditable(false);
    setExpEditable((prev) => !prev);
    setCVVEditable(false);
    setPNEditable(false);
  };
  const handleCVVEditClick = () => {
    setNameEditable(false);
    setPassEditable(false);
    setEmailEditable(false);
    setCardEditable(false);
    setSecurityEditable(false);
    setCNumberEditable(false);
    setExpEditable(false);
    setCVVEditable((prev) => !prev);
    setPNEditable(false);
  };
  const handlePNEditClick = () => {
    setNameEditable(false);
    setPassEditable(false);
    setEmailEditable(false);
    setCardEditable(false);
    setSecurityEditable(false);
    setCNumberEditable(false);
    setExpEditable(false);
    setCVVEditable(false);
    setPNEditable((prev) => !prev);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePassChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleCardChange = (event) => {
    setCard(event.target.value);
  };
  const handleSecurityChange = (event) => {
    setSecurity(event.target.value);
  };
  const handleCNChange = (event) => {
    setCn(event.target.value);
  };
  const handleExpChange = (event) => {
    setExp(event.target.value);
  };
  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };
  const handlePNChange = (event) => {
    setPn(event.target.value);
  };

  const labelStyle =
    "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto";
  const inputStyle =
    "border border-[#D9D9D9] block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#3F4254] bg-transparent rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0";

  return (
    <div className="grid smd:grid-cols-[1fr_2.5fr_1.5fr] slg:grid-cols-[.9fr_3fr_1fr] lg:grid-cols-[.8fr_3fr_1.1fr] h-[100vh]">
      <LeftDash />
      <div>
        <Common />
        <div className="px-[30px] slg:mt-[20px]">
          <div className="mx-auto max-w-[520px] slg:max-w-[720px]">
            <div className="flex items-center justify-between mb-[40px] ">
              <div className="flex items-center gap-[16px]">
                <img src={dp} alt="dp" />
                <div className="text-[#828282]">
                  <h1 className="text-[24px] font-semibold">Robert Fox</h1>
                  <h1 className="font-medium">robert@gmail.com</h1>
                </div>
              </div>
              <div
                onClick={handleEditInformationClick}
                className="bg-[#E3F2FE] p-[10px] flex items-center justify-center rounded-[6px] cursor-pointer"
              >
                <h1 className="text-[14px] text-[#196BFE]">
                  {" "}
                  {isEditVisible ? "Save" : "Edit Information"}
                </h1>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div>
              <div className="flex items-center justify-center gap-[20px]">
                <div class="relative w-[250px] slg:w-[350px]">
                  <input
                    type="text"
                    id="default_outlined"
                    className={`${inputStyle} ${
                      isNameEditable ? "border-blue-600" : ""
                    } focus:border-blue-600 peer`}
                    placeholder=""
                    value={name}
                    onChange={handleNameChange}
                    disabled={!isNameEditable}
                  />
                  <label
                    for="default_outlined"
                    className={`${labelStyle} ${
                      isEditVisible
                        ? "peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                        : "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"
                    }`}
                  >
                    Name
                  </label>
                  {isEditVisible && (
                    <img
                      src={edit}
                      alt="edit"
                      className="absolute top-[12px] right-[12px] cursor-pointer"
                      onClick={handleNameEditClick}
                    />
                  )}
                </div>
                <div class="relative w-[250px] slg:w-[350px]">
                  <input
                    type="text"
                    id="default_outlined"
                    className={`${inputStyle} ${
                      isPassEditable ? "border-blue-600" : ""
                    } focus:border-blue-600 peer`}
                    placeholder=""
                    value={password}
                    onChange={handlePassChange}
                    disabled={!isPassEditable}
                  />
                  <label
                    for="default_outlined"
                    className={`${labelStyle} ${
                      isEditVisible
                        ? "peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                        : "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"
                    }`}
                  >
                    Password
                  </label>
                  {isEditVisible && (
                    <img
                      src={edit}
                      alt="edit"
                      className="absolute top-[12px] right-[12px] cursor-pointer"
                      onClick={handlePassEditClick}
                    />
                  )}
                </div>
              </div>
              <div class="relative w-[520px] slg:w-[720px] mt-[20px]">
                <input
                  type="text"
                  id="default_outlined"
                  className={`${inputStyle} ${
                    isEmailEditable ? "border-blue-600" : ""
                  } focus:border-blue-600 peer`}
                  placeholder=""
                  value={email}
                  onChange={handleEmailChange}
                  disabled={!isEmailEditable}
                />
                <label
                  for="default_outlined"
                  className={`${labelStyle} ${
                    isEditVisible
                      ? "peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                      : "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"
                  }`}
                >
                  Email
                </label>
                {isEditVisible && (
                  <img
                    src={edit}
                    alt="edit"
                    className="absolute top-[12px] right-[12px] cursor-pointer"
                    onClick={handleEmailEditClick}
                  />
                )}
              </div>
              <div>
                <h1 className="text-[#3F4254] text-[18px] font-semibold text-center mt-[20px] mb-[15px]">
                  Card Info
                </h1>
                <div className="flex items-end justify-center gap-[70px]">
                  <div>
                    <input
                      type="radio"
                      name="topping"
                      value="Regular"
                      id="regular"
                    />
                    <label htmlFor="regular" className="ml-[10px]">
                      Primary
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="topping"
                      value="Regular"
                      id="regular"
                    />
                    <label htmlFor="regular" className="ml-[10px]">
                      Secondary
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[20px] mt-[20px]">
                <div class="relative w-[250px] slg:w-[350px]">
                  <input
                    type="text"
                    id="default_outlined"
                    className={`${inputStyle} ${
                      isCardEditable ? "border-blue-600" : ""
                    } focus:border-blue-600 peer`}
                    placeholder=""
                    value={card}
                    onChange={handleCardChange}
                    disabled={!isCardEditable}
                  />
                  <label
                    for="default_outlined"
                    className={`${labelStyle} ${
                      isEditVisible
                        ? "peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                        : "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"
                    }`}
                  >
                    Card Name
                  </label>
                  {isEditVisible && (
                    <img
                      src={edit}
                      alt="edit"
                      className="absolute top-[12px] right-[12px] cursor-pointer"
                      onClick={handleCardEditClick}
                    />
                  )}
                </div>
                <div class="relative w-[250px] slg:w-[350px]">
                  <input
                    type="text"
                    id="default_outlined"
                    className={`${inputStyle} ${
                      isSecurityEditable ? "border-blue-600" : ""
                    } focus:border-blue-600 peer`}
                    placeholder=""
                    value={security}
                    onChange={handleSecurityChange}
                    disabled={!isSecurityEditable}
                  />
                  <label
                    for="default_outlined"
                    className={`${labelStyle} ${
                      isEditVisible
                        ? "peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                        : "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"
                    }`}
                  >
                    Security Code
                  </label>
                  {isEditVisible && (
                    <img
                      src={edit}
                      alt="edit"
                      className="absolute top-[12px] right-[12px] cursor-pointer"
                      onClick={handleSecurityEditClick}
                    />
                  )}
                </div>
              </div>
              <div class="relative w-[520px] slg:w-[720px] mt-[20px]">
                <input
                  type="text"
                  id="default_outlined"
                  className={`${inputStyle} ${
                    isCNumberEditable ? "border-blue-600" : ""
                  } focus:border-blue-600 peer`}
                  placeholder=""
                  value={cn}
                  onChange={handleCNChange}
                  disabled={!isCNumberEditable}
                />
                <label
                  for="default_outlined"
                  className={`${labelStyle} ${
                    isEditVisible
                      ? "peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                      : "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"
                  }`}
                >
                  Card Number
                </label>
                {isEditVisible && (
                  <img
                    src={edit}
                    alt="edit"
                    className="absolute top-[12px] right-[12px] cursor-pointer"
                    onClick={handleCNumberEditClick}
                  />
                )}
              </div>
              <div className="flex items-center justify-center gap-[20px] mt-[20px]">
                <div class="relative w-[250px] slg:w-[350px]">
                  <input
                    type="text"
                    id="default_outlined"
                    className={`${inputStyle} ${
                      isExpEditable ? "border-blue-600" : ""
                    } focus:border-blue-600 peer`}
                    placeholder=""
                    value={exp}
                    onChange={handleExpChange}
                    disabled={!isExpEditable}
                  />
                  <label
                    for="default_outlined"
                    className={`${labelStyle} ${
                      isEditVisible
                        ? "peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                        : "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"
                    }`}
                  >
                    Card Expiry Date
                  </label>
                  {isEditVisible && (
                    <img
                      src={edit}
                      alt="edit"
                      className="absolute top-[12px] right-[12px] cursor-pointer"
                      onClick={handleEXPEditClick}
                    />
                  )}
                </div>
                <div class="relative w-[250px] slg:w-[350px]">
                  <input
                    type="text"
                    id="default_outlined"
                    className={`${inputStyle} ${
                      isCVVEditable ? "border-blue-600" : "border-[#D9D9D9]"
                    } focus:border-blue-600 peer`}
                    placeholder=""
                    value={cvv}
                    onChange={handleCVVChange}
                    disabled={!isCVVEditable}
                  />
                  <label
                    for="default_outlined"
                    className={`${labelStyle} ${
                      isEditVisible
                        ? "peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                        : "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"
                    }`}
                  >
                    CVV
                  </label>
                  {isEditVisible && (
                    <img
                      src={edit}
                      alt="edit"
                      className="absolute top-[12px] right-[12px] cursor-pointer"
                      onClick={handleCVVEditClick}
                    />
                  )}
                </div>
              </div>
              <div class="relative w-[520px] slg:w-[720px] mt-[20px]">
                <input
                  type="text"
                  id="default_outlined"
                  className={`${inputStyle} ${
                    isPNEditable ? "border-blue-600" : ""
                  } focus:border-blue-600 peer`}
                  placeholder=""
                  value={pn}
                  onChange={handlePNChange}
                  disabled={!isPNEditable}
                />
                <label
                  for="default_outlined"
                  className={`${labelStyle} ${
                    isEditVisible
                      ? "peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                      : "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"
                  }`}
                >
                  Phone Number
                </label>
                {isEditVisible && (
                  <img
                    src={edit}
                    alt="edit"
                    className="absolute top-[12px] right-[12px] cursor-pointer"
                    onClick={handlePNEditClick}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightDash />
    </div>
  );
};

export default Profile;
