import secure from "../../../assets/home/secure/secure.svg";
import support from "../../../assets/home/secure/support.svg";

const Secure = () => {
  return (
    <section className="bg-background pt-[80px]">
      <h1 className="text-center smd:text-[45px] lg:text-[60px] font-SFMedium smd:leading-[60px] lg:leading-[75px]">
        Reliable transfers for every purpose, <br />
        your business or family
      </h1>
      <div className="flex justify-center items-center mt-[80px]">
        <div className="flex smd:gap-[40px]">
          <img
            src={secure}
            alt="secure"
            className="smd:w-[700px] smd:h-[420px] lg:h-full lg:w-full"
          />
          <img
            src={support}
            alt="support"
            className="smd:w-[400px] lg:w-full"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-[60px] pb-[80px]">
        <button className="bg-[#196BFE] w-[366px] smd:h-[55px] lg:h-[64px] rounded-full">
          <h1 className="smd:text-[18px] lg:text-[20px] text-[#ffffff] font-SFMedium">
            Get Started Today
          </h1>
        </button>
      </div>
    </section>
  );
};

export default Secure;
