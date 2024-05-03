import secure from "../../../assets/footer/secure.svg";
import support from "../../../assets/footer/support.svg";

const Secure = () => {
  return (
    <section className="bg-background">
      <h1 className="text-center">
        Reliable transfers for every purpose, your business or family
      </h1>

      <div className="flex justify-center items-center mt-20 ">
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-white border  rounded-xl">
            <div className="flex gap-5 items-center text-center justify-center pt-16 pb-16">
              <h1 className="text-2xl">SECURE</h1>
              <p>
                We value our customers seriously. Newest cybersecurity to
                protect your data and fund.
              </p>
            </div>
            <div>
              <img src={secure} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-xl">
            <img src={support} alt="" />
            <h1>Seamless Customer Support</h1>
            <p>
              Friendly and professional support to elevate your seamless
              experience
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center  mt-11 pb-10">
        <button className=" bg-[#196BFE] px-10 py-2 text-white rounded-3xl">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Secure;
