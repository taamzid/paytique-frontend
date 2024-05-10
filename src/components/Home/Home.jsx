import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Affiliate from "./Affiliate/Affiliate";
import heroImg from "../../assets/home/hero/hero-img.svg";
import Find from "./Find/Find";
import { Faq } from "./Faq/Faq";
import Secure from "./Secure/Secure";
import Footer from "./Footer/Footer";

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

const Home = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className="!scroll-smooth overflow-hidden">
      <div
        ref={ref1}
        className={`transition-opacity ease-in duration-700 ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="bg-[url('./assets/home/hero/bgHero.svg')] pl-[29px] smd:pl-[40px] slg:pl-[120px] pt-[31px] smd:pt-[30px] lg:pt-[45px] pb-[70px] smd:pb-[100px] lg:pb-[130px] bg-cover">
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
