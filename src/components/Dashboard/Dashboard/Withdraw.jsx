import { LeftDash } from "./LeftDash";
import RightDash from "./RightDash";
import Common from "./Common";
import dropdown from "../../../assets/dashboard/deposit/dropdown.svg";
import path from "../../../assets/dashboard/deposit/path.svg";
import card1 from "../../../assets/dashboard/right/card1.svg";
import minus from "../../../assets/dashboard/deposit/minus.svg";
import plus from "../../../assets/dashboard/deposit/plus.svg";
import v1 from "../../../assets/dashboard/deposit/v1.svg";
import v2 from "../../../assets/dashboard/deposit/v2.svg";
import m1 from "../../../assets/dashboard/deposit/m1.svg";
import expand from "../../../assets/dashboard/deposit/expand.svg";
import tick from "../../../assets/dashboard/deposit/tick.svg";
import { useState } from "react";

const Withdraw = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [amount, setAmount] = useState(500.0);

  const incrementAmount = () => setAmount(amount + 1);
  const decrementAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const cards = [
    { id: "nexus", img: v1, name: "Nexus One", number: "****1922" },
    { id: "royal", img: m1, name: "Royal Debit", number: "****1922" },
    { id: "fib", img: v2, name: "FIB Card", number: "****5021" },
    { id: "all", img: expand, name: "All Cards", number: "" },
  ];

  return (
    <div className="bg-[#ffffff] grid smd:grid-cols-[1fr_2.5fr_1.5fr] slg:grid-cols-[.9fr_3fr_1fr] lg:grid-cols-[.8fr_3fr_1.1fr] h-[100vh]">
      <LeftDash />
      <div>
        <Common />
        <div className="">
          <div className="hidden mt-[25px] smd:mt-[0px] smd:flex items-center justify-center smd:justify-start gap-[8px]">
            <h1 className="text-[18px] font-semibold smd:ml-[65px]">
              Withdraw Money from{" "}
              <span className="text-[#196BFE]">&nbsp; Primary card</span>
            </h1>
            <img src={dropdown} alt="dropdown" className="cursor-pointer" />
          </div>
          <div className="mt-[25px] smd:mt-[0px] flex items-center justify-center smd:justify-start gap-[8px] smd:hidden">
            <h1 className="text-[#8F8F8F] text-[13px] font-medium smd:ml-[65px]">
              Withdraw Money from{" "}
              <span className="text-[#196BFE]">&nbsp; Primary card</span>
            </h1>
            <img src={dropdown} alt="dropdown" className="cursor-pointer" />
          </div>
          <div className="flex items-center justify-center mt-[32px]">
            <img src={card1} alt="card1" />
          </div>
          <div className="mt-[30px] hidden smd:flex items-center justify-center  gap-[20px]">
            <div className="flex items-center justify-center gap-[8px] border-2 border-[#E1E3EA] rounded-lg w-[220px] slg:w-[240px] h-[50px]">
              <h1 className="text-[#3F4254] text-[14px] slg:text-[16px]">
                Selected Currency{" "}
                <span className="text-[#196BFE] font-semibold">&nbsp;USD</span>
              </h1>
              <img src={path} alt="path" className="cursor-pointer" />
            </div>
            <div className="flex items-center justify-center gap-[8px] border-2 border-[#E1E3EA] rounded-lg w-[270px] slg:w-[290px] h-[50px]">
              <h1 className="text-[#3F4254] text-[14px] slg:text-[16px]">
                Withdraw to{" "}
                <span className="text-[#196BFE] font-semibold">
                  &nbsp;Bank Account
                </span>
              </h1>
              <img src={path} alt="path" className="cursor-pointer" />
            </div>
          </div>
          <div className="mt-[30px] flex smd:hidden items-center justify-center">
            <div className="flex items-center justify-center gap-[8px]">
              <h1 className="text-[#8F8F8F] text-[14px] slg:text-[16px]">
                Selected Currency{" "}
                <span className="text-[#196BFE] font-semibold">
                  &nbsp;US Dolar
                </span>
              </h1>
              <img src={path} alt="path" className="cursor-pointer" />
            </div>
          </div>
          <div className="bg-[#ffffff] mt-[30px] flex flex-col items-center">
            <div>
              <div className="flex items-center gap-[28px]">
                <img
                  src={plus}
                  alt="minus"
                  className="cursor-pointer"
                  onClick={decrementAmount}
                />
                <h1 className="text-[40px] font-semibold text-[#196BFE]">
                  ${amount.toFixed(2)}
                </h1>
                <img
                  src={minus}
                  alt="plus"
                  className="cursor-pointer"
                  onClick={incrementAmount}
                />
              </div>
            </div>
            <div className="smd:hidden flex items-center justify-center gap-[8px] mt-[25px]">
              <h1 className="text-[#8F8F8F] text-[14px]">
                Withdraw to{" "}
                <span className="text-[#196BFE] font-semibold">
                  &nbsp;Bank Account
                </span>
              </h1>
              <img src={path} alt="path" className="cursor-pointer" />
            </div>
            <div className="mt-[30px]">
              <div className="flex items-center gap-[20px]">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className={`flex flex-col items-center cursor-pointer relative ${
                      card.id === "all" ? "mb-[10px]" : ""
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
              <div>
                <button className="mb-[20px] smd:mb-[0px] mt-[30px] bg-[#196BFE] w-[315px] h-[43px] text-[#ffffff] text-bold rounded-[6px]">
                  Withdraw Money
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

export default Withdraw;
