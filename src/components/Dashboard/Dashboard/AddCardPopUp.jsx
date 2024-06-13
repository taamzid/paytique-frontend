import { useState } from "react";

const AddCardPopUp = ({ onClose }) => {
  const [card, setCard] = useState("Robert A. Foxyron");
  const [security, setSecurity] = useState("353845342");
  const [cn, setCn] = useState("1235 4235 5464 2343");
  const [exp, setExp] = useState("12/03/2045");
  const [cvv, setCVV] = useState("399");
  const [pn, setPn] = useState("0192745235235");

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 smd:p-8">
        <div>
          <div>
            <h1 className="text-[#3F4254] text-[18px] font-semibold text-center mt-[20px] mb-[15px]">
              Add Card Details
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
          <div className="mx-auto max-w-[520px] slg:max-w-[720px]">
            <div className="bg-[#ffffff] smd:flex items-center justify-center gap-[20px] mt-[20px]">
              <div class="relative w-[320px] smd:w-full slg:w-[350px] mt-[25px] smd:mt-[0px">
                <input
                  type="text"
                  id="default_outlined"
                  className={inputStyle}
                  placeholder=""
                  value={card}
                  onChange={handleCardChange}
                />
                <label
                  for="default_outlined"
                  className={`${labelStyle} "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"`}
                >
                  Card Name
                </label>
              </div>
              <div class="bg-[#ffffff] relative w-[320px] smd:w-full slg:w-[350px] mt-[25px]">
                <input
                  type="text"
                  id="default_outlined"
                  className={inputStyle}
                  placeholder=""
                  value={security}
                  onChange={handleSecurityChange}
                />
                <label
                  for="default_outlined"
                  className={`${labelStyle} "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"`}
                >
                  Security Code
                </label>
              </div>
            </div>
            <div class="bg-[#ffffff] relative w-[320px] smd:w-[520px] slg:w-[720px] mt-[20px]">
              <input
                type="text"
                id="default_outlined"
                className={inputStyle}
                placeholder=""
                value={cn}
                onChange={handleCNChange}
              />
              <label
                for="default_outlined"
                className={`${labelStyle} "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"`}
              >
                Card Number
              </label>
            </div>
            <div className="bg-[#ffffff] smd:flex items-center justify-center gap-[20px] mt-[20px]">
              <div class="relative w-[320px] slg:w-[350px]">
                <input
                  type="text"
                  id="default_outlined"
                  className={inputStyle}
                  placeholder=""
                  value={exp}
                  onChange={handleExpChange}
                />
                <label
                  for="default_outlined"
                  className={`${labelStyle} "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"`}
                >
                  Card Expiry Date
                </label>
              </div>
              <div class="bg-[#ffffff] relative w-[320px] smd:w-full slg:w-[350px] mt-[25px] smd:mt-[0px]">
                <input
                  type="text"
                  id="default_outlined"
                  className={inputStyle}
                  placeholder=""
                  value={cvv}
                  onChange={handleCVVChange}
                />
                <label
                  for="default_outlined"
                  className={`${labelStyle} "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"`}
                >
                  CVV
                </label>
              </div>
            </div>
            <div class="bg-[#ffffff] relative w-[320px] smd:w-[520px] slg:w-[720px] mt-[20px]">
              <input
                type="text"
                id="default_outlined"
                className={inputStyle}
                placeholder=""
                value={pn}
                onChange={handlePNChange}
              />
              <label
                for="default_outlined"
                className={`${labelStyle} "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2"`}
              >
                Phone Number
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-[10px] smd:mb-[0px]">
          <button
            onClick={onClose}
            className="mt-4 text-black px-4 py-2 rounded border border-[#E1E3EA]"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCardPopUp;
