import { LeftDash } from "../Dashboard/LeftDash";
import RightDash from "../Dashboard/RightDash";
import Common from "../Dashboard/Common";
import qr from "../../../assets/qr/qr.svg";

const Qr = () => {
  return (
    <div className="bg-[#ffffff] grid smd:grid-cols-[1fr_2.5fr_1.5fr] slg:grid-cols-[.9fr_3fr_1fr] lg:grid-cols-[.8fr_3fr_1.1fr] h-[100vh]">
      <LeftDash />
      <div>
        <Common />
        <div className="mt-[25px] smd:mt-[0px] px-[20px] smd:px-[40px]">
          <div className="bg-[#ffffff] flex-col smd:flex-row flex items-center justify-center gap-[25px]">
            <img src={qr} alt="qr" />
            <div>
              <div className="border-2 px-4 py-2 rounded-[12px] w-[327px]">
                <h1 className="font-light text-black">PASS KEY</h1>
                <h1 className="font-bold text-black text-[24px]">
                  3mz7 sddv 7d8d v7d8
                </h1>
              </div>
              <h1 className="text-[17px] mt-[15px] ml-[5px]">
                <span className="text-black font-bold">Note:</span> Please keep
                this pass key at a <br />
                safe place. You will need this key <br />
                when you switch to new device for <br />
                OTP authentication.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <RightDash />
    </div>
  );
};

export default Qr;
