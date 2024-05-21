import { LeftDash } from "./LeftDash";
import RightDash from "./RightDash";
import Common from "./Common";
import dropdown from "../../../assets/dashboard/deposit/dropdown.svg";
import path from "../../../assets/dashboard/deposit/path.svg";
import card1 from "../../../assets/dashboard/right/card1.svg";
import minus from "../../../assets/dashboard/deposit/minus.svg";
import plus from "../../../assets/dashboard/deposit/plus.svg";
import v1 from "../../../assets/dashboard/transfer/a1.svg";
import v2 from "../../../assets/dashboard/transfer/a2.svg";
import m1 from "../../../assets/dashboard/transfer/a3.svg";
import expand from "../../../assets/dashboard/deposit/expand.svg";
import tick from "../../../assets/dashboard/deposit/tick.svg";
import { useState } from "react";

const Transfer = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [amount, setAmount] = useState(150.0);

  const incrementAmount = () => setAmount(amount + 1);
  const decrementAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const cards = [
    { id: "nexus", img: v1, name: "Merritt Tillman", number: "" },
    { id: "royal", img: m1, name: "Alverta Dietrich", number: "" },
    { id: "fib", img: v2, name: "Bettye Kihn", number: "" },
    { id: "all", img: expand, name: "All Beneficiary", number: "" },
  ];

  return (
    <div className="bg-[#ffffff] grid smd:grid-cols-[1fr_2.5fr_1.5fr] slg:grid-cols-[.9fr_3fr_1fr] lg:grid-cols-[.8fr_3fr_1.1fr] h-[100vh]">
      <LeftDash />
      <div>
        <Common />
        <div className="">
          <div className="flex items-center justify-center smd:justify-start gap-[8px] mt-[25px] smd:mt-[0px]">
            <h1 className="text-[#8F8F8F] smd:text-[#3F4254] text-[13px] smd:text-[18px] font-semibold smd:ml-[65px]">
              Transfer Money from{" "}
              <span className="text-[#196BFE]">&nbsp; Primary card</span>
            </h1>
            <img src={dropdown} alt="dropdown" className="cursor-pointer" />
          </div>
          <div className="flex items-center justify-center mt-[32px]">
            <img src={card1} alt="card1" />
          </div>
          <div className="mt-[30px] flex items-center justify-center  gap-[20px]">
            <div className="flex items-center justify-center gap-[8px] smd:border-2 border-[#E1E3EA] rounded-lg w-[220px] slg:w-[240px] h-[50px]">
              <h1 className="text-[#8F8F8F] smd:text-[#3F4254] text-[13px] smd:text-[14px] slg:text-[16px]">
                Selected Currency{" "}
                <span className="text-[#196BFE] font-semibold">&nbsp;Euro</span>
              </h1>
              <img src={path} alt="path" className="cursor-pointer" />
            </div>
            {/* <div className="flex items-center justify-center gap-[8px] border-2 border-[#E1E3EA] rounded-lg w-[270px] slg:w-[290px] h-[50px]">
              <h1 className="text-[#3F4254] text-[14px] slg:text-[16px]">
                Deposit from{" "}
                <span className="text-[#196BFE] font-semibold">
                  &nbsp;Credit/Debit Card
                </span>
              </h1>
              <img src={path} alt="path" className="cursor-pointer" />
            </div> */}
          </div>
          <div className="mt-[30px] flex flex-col items-center">
            <div>
              <div className="flex items-center gap-[28px]">
                <img
                  src={plus}
                  alt="minus"
                  className="cursor-pointer"
                  onClick={decrementAmount}
                />
                <h1 className="text-[40px] font-semibold text-[#196BFE]">
                  €{amount.toFixed(2)}
                </h1>
                <img
                  src={minus}
                  alt="plus"
                  className="cursor-pointer"
                  onClick={incrementAmount}
                />
              </div>
            </div>
            <h1 className="mt-[20px] smd:mt-[40px] text-[13px] text-[#8F8F8F]">
              Transfer to
            </h1>
            <div className="mt-[20px]">
              <div className="flex items-center gap-[20px]">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className={`flex flex-col items-center cursor-pointer relative ${
                      card.id === "all" ? "mb-[0px]" : ""
                    }`}
                    onClick={() => setSelectedCard(card.id)}
                  >
                    <img src={card.img} alt={card.name} />
                    <h1 className="font-semibold text-[#196BFE] text-[9px] mt-[5px]">
                      {card.name}
                    </h1>
                    <h1 className="font-light text-[#8F8F8F] text-[7px]">
                      {card.number}
                    </h1>
                    {selectedCard === card.id && card.id !== "all" && (
                      <span className="absolute top-0 right-[3px]">
                        <img src={tick} alt="tick" />
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-[30px]">
                <input
                  type="text"
                  className="bg-[#EBEBEB] w-[330px] h-[30px] rounded-[20px] pl-[20px] text-[11px] font-light placeholder-[#8F8F8F]"
                  placeholder="Note: Payment for..."
                />
              </div>
              <div>
                <button className="mt-[30px] bg-[#196BFE] w-[330px] h-[43px] text-[#ffffff] text-bold rounded-[6px]">
                  Transfer Money
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightDash />
    </div>
  );
};

export default Transfer;
