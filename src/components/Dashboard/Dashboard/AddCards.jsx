import React, { useState } from "react";
import { LeftDash } from "./LeftDash";
import Common from "./Common";
import card1 from "../../../assets/dashboard/right/card1.svg";
import card2 from "../../../assets/dashboard/right/card2.svg";
import add from "../../../assets/dashboard/right/right.svg";
import AddCardPopUp from "./AddCardPopUp";

const AddCards = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleAddClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="bg-[#ffffff] smd:grid smd:grid-cols-[1fr_4fr] slg:grid-cols-[.9fr_4fr] lg:grid-cols-[.8fr_4.1fr] h-[100vh]">
      <LeftDash />
      <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style]:hidden [scrollbar-width]:hidden">
        <div>
          <Common />
        </div>
        <div className="smd:px-[40px]">
          <h1 className="font-bold smd:text-[20px] mt-[30px] smd:mt-[0px] text-center smd:text-left">
            All Cards
          </h1>
          <div className="flex flex-col smd:flex-row items-center smd:gap-[32px]">
            <div>
              <h1 className="font-semibold text-[18px] mt-[32px] mb-[16px] text-[#2356B2]">
                Primary
              </h1>
              <img src={card1} alt="card1" />
            </div>
            <div>
              <h1 className="font-semibold text-[18px] mt-[32px] mb-[16px] text-[#2356B2]">
                Primary
              </h1>
              <img src={card2} alt="card2" />
            </div>
            <div className="flex items-center justify-center border border-[#196BFE] rounded-[22px] w-[350px] lg:w-[320px] py-[40px] smd:py-[45px] slg:py-[52px] lg:h-[200px] mt-[50px] smd:mt-[70px] mb-[30px] smd:mb-[0px]">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={add}
                  alt="add"
                  className="cursor-pointer mb-[16px] lg:mb-[20px] smd:w-[40px] slg:w-[50px] lg:w-[75px]"
                  onClick={handleAddClick}
                />
                <h1 className="text-[18px] text-[#2356B2]">
                  Add New Card
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPopupVisible && <AddCardPopUp onClose={handleClosePopup} />}
    </div>
  );
};

export default AddCards;
