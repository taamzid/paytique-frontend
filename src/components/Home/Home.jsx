import React from "react";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Affiliate from "./Affiliate/Affiliate";
import heroImg from "../../assets/home/hero/hero-img.svg";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="bg-[url('./assets/home/hero/bg-hero.svg')] smd:pl-[28px] lg:pl-[100px] smd:pt-[20px] lg:pt-[40px] bg-cover">
          <NavBar />
          <Hero />
        </div>
        <img src={heroImg} className="h-full w-full" />
      </div>
      {/* <Affiliate /> */}
    </div>
  );
};

export default Home;
