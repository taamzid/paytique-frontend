import logo from "../../../assets/home/footer/footer.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto pt-[100px] pb-[105px] flex items-center justify-between">
        <div className="">
          <div className="flex items-center gap-[17px]">
            <img src={logo} alt="Logo" />
            <h1 className="smd:text-[45px] lg:text-[53px] font-SFSemibold text-[#196BFE]">
              Paytique Financial
            </h1>
          </div>
          <h1 className="smd:text-[14px] lg:text-[16px] smd:mt-[16px] lg:mt-[20px] ml-[102px]">
            H-46, Rd-65 P.O. ERD West California, United States. <br />
            Call: 90843454393 &nbsp; &nbsp; Email: tyere@gmail.com
          </h1>
        </div>
        <div className="flex smd:gap-[40px] lg:gap-[82px]">
          <div>
            <h1 className="text-[#ffffff]">Legal</h1>
            <div className="smd:text-[14px] lg:text-[16px] mt-[20px] text-[#a3a1a1]">
              <h1>User Agreement</h1>
              <h1 className="mt-[5px]">Privacy Policy</h1>
              <h1 className="mt-[5px]">Licenses</h1>
            </div>
          </div>
          <div>
            <h1 className="text-[#ffffff]">Company</h1>
            <div className="smd:text-[14px] lg:text-[16px] mt-[20px] text-[#a3a1a1]">
              <h1>About</h1>
              <h1 className="mt-[5px]">News</h1>
              <h1 className="mt-[5px]">Investors</h1>
            </div>
          </div>
          <div>
            <h1 className="text-[#ffffff]">Product</h1>
            <div className="smd:text-[14px] lg:text-[16px] mt-[20px] text-[#a3a1a1]">
              <h1>Rate & Fees</h1>
              <h1 className="mt-[5px]">Security</h1>
              <h1 className="mt-[5px]">Reviews</h1>
            </div>
          </div>
          <div>
            <h1 className="text-[#ffffff]">Support</h1>
            <div className="smd:text-[14px] lg:text-[16px] mt-[20px] text-[#a3a1a1]">
              <h1>Help</h1>
              <h1 className="mt-[5px]">Contact Us</h1>
              <h1 className="mt-[5px]">Connect</h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
