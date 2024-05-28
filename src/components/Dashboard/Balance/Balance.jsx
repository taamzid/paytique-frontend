import { LeftDash } from "../Dashboard/LeftDash";
import RightDash from "../Dashboard/RightDash";
import Common from "../Dashboard/Common";
import usa from "../../../assets/balance/usa.svg";
import euro from "../../../assets/balance/euro.svg";
import yuan from "../../../assets/balance/yuan.svg";
import jap from "../../../assets/balance/jap.svg";
import avatar from "../../../assets/dashboard/center/avatar.svg";
import threedots from "../../../assets/dashboard/center/threedots.svg";
import { useState } from "react";

const currencies = [
  {
    id: 1,
    name: "US Dollar",
    symbol: "$",
    amount: "8224.50",
    imgSrc: usa,
    transactions: [
      {
        id: 1,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
      {
        id: 2,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
      {
        id: 3,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
      {
        id: 4,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
      {
        id: 5,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
    ],
  },
  {
    id: 2,
    name: "Euro",
    symbol: "€",
    amount: "1225.50",
    imgSrc: euro,
    transactions: [
      {
        id: 1,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
      {
        id: 2,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
      {
        id: 3,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
      {
        id: 4,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
      {
        id: 5,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
    ],
  },
  {
    id: 3,
    name: "Euro",
    symbol: "¥",
    amount: "834.50",
    imgSrc: yuan,
    transactions: [
      {
        id: 1,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
      {
        id: 2,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
      {
        id: 3,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
      {
        id: 4,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
      {
        id: 5,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
    ],
  },
  {
    id: 4,
    name: "Euro",
    symbol: "¥",
    amount: "834.50",
    imgSrc: jap,
    transactions: [
      {
        id: 1,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
      {
        id: 2,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
      {
        id: 3,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
      {
        id: 4,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
      {
        id: 5,
        name: "Gikari Nekrey",
        date: "03 April 2023",
        amount: "-$346.00",
        status: "SENT",
        statusBg: "#FFCBCB",
        statusText: "#db5353",
      },
    ],
  },

  // Add more currencies here if needed
];

const Balance = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sharedStyle =
    "mt-[20px] pl-[10px] pr-[10px] smd:pr-[0px] smd:pl-[25px] py-[15px] rounded-[20px] cursor-pointer border border-[#828282]  ";

  return (
    <div className="bg-[#ffffff] smd:grid smd:grid-cols-[1fr_2.5fr_1.5fr] slg:grid-cols-[.9fr_3fr_1fr] lg:grid-cols-[.8fr_3fr_1.1fr] h-[100vh]">
      <LeftDash />
      <div className="bg-[#ffffff] smd:bg-transparent overflow-y-auto pb-[40px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style]:hidden [scrollbar-width]:hidden">
        <Common />
        <div className="bg-[#ffffff] smd:bg-transparent px-[20px] slg:px-[40px]">
          {currencies.map((currency, index) => (
            <div
              key={currency.id}
              className={`${sharedStyle} ${
                activeIndex === index ? "border-[#2356B2]" : ""
              }`}
              onClick={() => toggleContent(index)}
            >
              <div className="bg-[#ffffff] flex items-center gap-[15px]">
                <img src={currency.imgSrc} alt={currency.name} />
                <div>
                  <h1 className="font-light text-[15px] text-[#2356B2]">
                    {currency.name}
                  </h1>
                  <h1 className="font-semibold text-[32px] text-[#2356B2]">
                    {currency.symbol}
                    {currency.amount}
                  </h1>
                </div>
              </div>
              {activeIndex === index && (
                <div className="bg-[#ffffff] mt-[16px] max-h-[250px] slg:max-h-[300px] overflow-auto bWidth bTrack bThumb">
                  {currency.transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="bg-[#ffffff] flex items-center justify-between w-full border-2 h-[60px] px-[10px] smd:px-[16px] rounded-[6px] cursor-pointer mt-[12px]"
                    >
                      <div className="bg-[#ffffff] flex items-center gap-[6px] smd:gap-[10px]">
                        <img
                          src={avatar}
                          alt="avatar"
                          className="w-[30px] smd:w-[36px]"
                        />
                        <div>
                          <h1 className="text-[#3F4254] font-medium text-[14px] smd:text-[16px]">
                            {transaction.name}
                          </h1>
                          <h1 className="text-[10px] smd:text-[12px] text-[#8d8d8f]">
                            {transaction.date}
                          </h1>
                        </div>
                      </div>
                      <div className="bg-[#ffffff] flex items-center gap-[6px]">
                        <h1 className="text-[#3F4254] font-medium text-[12px] smd:text-[18px]">
                          {transaction.amount}
                        </h1>
                        <div
                          className="rounded-full"
                          style={{ backgroundColor: transaction.statusBg }}
                        >
                          <h1
                            className="w-[40px] smd:w-[48px] h-[20px] text-[10px] font-bold flex items-center justify-center"
                            style={{ color: transaction.statusText }}
                          >
                            {transaction.status}
                          </h1>
                        </div>
                      </div>
                      <div>
                        <img src={threedots} alt="threedots" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <RightDash />
    </div>
  );
};

export default Balance;
