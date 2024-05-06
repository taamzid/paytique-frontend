import React from "react";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Affiliate from "./Affiliate/Affiliate";
import heroImg from "../../assets/home/hero/hero-img.svg";
import Find from "./Find/Find";
import { Faq } from "./Faq/Faq";
import Secure from "./Secure/Secure";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <div className="bg-[url('./assets/home/hero/bgHero.svg')] pl-[29px] smd:pl-[40px] lg:pl-[120px] pt-[31px] smd:pt-[30px] lg:pt-[45px] pb-[70px] smd:pb-[100px] lg:pb-[130px] bg-cover">
          <NavBar />
          <Hero />
        </div>
      </div>
      <Affiliate />
      <Find />
      <Faq />
      <Secure />
      <Footer />
    </div>
  );
};

export default Home;
