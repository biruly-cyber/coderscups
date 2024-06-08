import React from "react";
import AuraHeroSection from "@/components/page-component/AuraHeroSection";
import FeatureSection from "@/components/page-component/FeatureSection";
import Navbar from "@/components/page-component/Navbar";
import Footer from "@/components/page-component/Footer";

const Home = () => {
  return (
    <>
      <div className="relative w-full -z-50">
        <AuraHeroSection />
      </div>
      {/* <div className="relative w-full -z-50 text-center p-32">
        <h1 className="text-6xl font-bold capitalize bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          What we provide you
        </h1>
      </div> */}
      <div className="relative w-full -z-50">
        <Footer />
      </div>
    </>
  );
};

export default Home;
