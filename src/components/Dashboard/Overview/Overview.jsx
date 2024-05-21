import { LeftDash } from "../Dashboard/LeftDash";
import RightDash from "../Dashboard/RightDash";
import Common from "../Dashboard/Common";
import { useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import car from "../../../assets/overview/car.svg";
import cart from "../../../assets/overview/cart.svg";
import sub from "../../../assets/overview/sub.svg";
import uti from "../../../assets/overview/uti.svg";
import dd from "../../../assets/overview/dd.svg";

const sourceData = [
  {
    label: "Ads",
    value: 40,
    color: "#B1FF8C",
  },
  {
    label: "Subscriptions",
    value: 25,
    color: "#83D2C9",
  },
  {
    label: "Sponsorships",
    value: 25,
    color: "#2D9BBD",
  },
  {
    label: "Car",
    value: 10,
    color: "#C4DD60",
  },
];

const Overview = () => {
  const [activeButton, setActiveButton] = useState("7days");

  const total = sourceData.reduce((acc, data) => acc + data.value, 0);

  return (
    <div className="bg-[#ffffff] smd:grid smd:grid-cols-[1fr_2.5fr_1.5fr] slg:grid-cols-[.9fr_3fr_1fr] lg:grid-cols-[.8fr_3fr_1.1fr] h-[100vh]">
      <LeftDash />
      <div className="overflow-y-auto pb-[30px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style]:hidden [scrollbar-width]:hidden">
        <Common />
        <div className="px-[20px] flex items-center justify-center gap-[10px] smd:gap-[20px] mt-[25px] smd:mt-[0px]">
          <div
            className={`w-[120px] h-[35px] smd:h-[42px] flex items-center justify-center border rounded-[6px] cursor-pointer ${
              activeButton === "7days"
                ? "bg-[#196BFE] text-white border-[#196BFE]"
                : "bg-white text-[#3F4254] border-[#E1E3EA] hover:bg-[#196BFE] hover:text-white"
            }`}
            onClick={() => setActiveButton("7days")}
          >
            <h1>7 Days</h1>
          </div>
          <div
            className={`w-[120px] h-[35px] smd:h-[42px] flex items-center justify-center border rounded-[6px] cursor-pointer ${
              activeButton === "1month"
                ? "bg-[#196BFE] text-white border-[#196BFE]"
                : "bg-white text-[#3F4254] border-[#E1E3EA] hover:bg-[#196BFE] hover:text-white"
            }`}
            onClick={() => setActiveButton("1month")}
          >
            <h1>1 Month</h1>
          </div>
          <div
            className={`w-[120px] h-[35px] smd:h-[42px] flex items-center justify-center border rounded-[6px] cursor-pointer ${
              activeButton === "3months"
                ? "bg-[#196BFE] text-white border-[#196BFE]"
                : "bg-white text-[#3F4254] border-[#E1E3EA] hover:bg-[#196BFE] hover:text-white"
            }`}
            onClick={() => setActiveButton("3months")}
          >
            <h1>3 Months</h1>
          </div>
          <div
            className={`w-[120px] h-[35px] smd:h-[42px] flex items-center justify-center border rounded-[6px] cursor-pointer ${
              activeButton === "1year"
                ? "bg-[#196BFE] text-white border-[#196BFE]"
                : "bg-white text-[#3F4254] border-[#E1E3EA] hover:bg-[#196BFE] hover:text-white"
            }`}
            onClick={() => setActiveButton("1year")}
          >
            <h1>1 Year</h1>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[50px]">
          <div>
            <Doughnut
              data={{
                labels: sourceData.map((data) => data.label),
                datasets: [
                  {
                    label: "Count",
                    data: sourceData.map((data) => data.value),
                    backgroundColor: sourceData.map((data) => data.color),
                    borderColor: sourceData.map((data) => data.color),
                  },
                ],
              }}
              options={{
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function (tooltipItem) {
                        const label = sourceData[tooltipItem.dataIndex].label;
                        const value = sourceData[tooltipItem.dataIndex].value;
                        const percentage = ((value / total) * 100).toFixed(2);
                        return `${label}: ${value} (${percentage}%)`;
                      },
                    },
                  },
                },
              }}
            />
            {/* <div className="">
              {sourceData.map((data, index) => {
                const angle = (index / sourceData.length) * 2 * Math.PI;
                const x = Math.cos(angle) * 100;
                const y = Math.sin(angle) * 100;
                const percentage = ((data.value / total) * 100).toFixed(2);

                return (
                  <div
                    key={data.label}
                    style={{
                      position: "absolute",
                      left: `calc(47% + ${x}px)`,
                      top: `calc(30% - ${y}px)`,
                      transform: "translate(-50%, -50%)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ color: data.color }}>{percentage}%</span>
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
        <div className="px-[20px] smd:px-[0px]">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-between mt-[50px] px-[18px] border border-[#E1E3EA] rounded-[6px] w-[500px] h-[70px] cursor-pointer">
              <div className="flex items-center gap-[10px]">
                <img src={cart} alt="cart" />
                <h1 className="text-[#3F4254] text-[18px] font-semibold">
                  Shopping
                </h1>
              </div>
              <h1 className="text-[#3F4254] text-[18px] font-medium">
                USD 400.89
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-between mt-[20px] px-[18px] border border-[#E1E3EA] rounded-[6px] w-[500px] h-[70px] cursor-pointer">
              <div className="flex items-center gap-[10px]">
                <img src={car} alt="car" />
                <h1 className="text-[#3F4254] text-[18px] font-semibold">
                  Transporations
                </h1>
              </div>
              <h1 className="text-[#3F4254] text-[18px] font-medium">
                USD 400.89
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-between mt-[20px] px-[18px] border border-[#E1E3EA] rounded-[6px] w-[500px] h-[70px] cursor-pointer">
              <div className="flex items-center gap-[10px]">
                <img src={sub} alt="sub" />
                <h1 className="text-[#3F4254] text-[18px] font-semibold">
                  Groceries
                </h1>
              </div>
              <h1 className="text-[#3F4254] text-[18px] font-medium">
                USD 400.89
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-between mt-[20px] px-[18px] border border-[#E1E3EA] rounded-[6px] w-[500px] h-[70px] cursor-pointer">
              <div className="flex items-center gap-[10px]">
                <img src={uti} alt="uti" />
                <h1 className="text-[#3F4254] text-[18px] font-semibold">
                  Utilities
                </h1>
              </div>
              <img src={dd} alt="dd" />
            </div>
          </div>
        </div>
      </div>
      <RightDash />
    </div>
  );
};

export default Overview;
