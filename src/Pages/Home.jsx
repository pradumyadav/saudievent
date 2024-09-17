import HomeVideo from "../Components/HomeVideo";
import SimilerProductCard from "../Components/SimilerProductCard";
import MarcouCompo from "../Components/MarcouCompo";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import WorldMap from "../Components/WorldMap";
import TextComponent from "../Components/TextComponent";
import Footer from "../Components/Footer";
import MainCard from "../Components/MainCard";
import FooterCard from "../Components/FooterCard";
import DubaiEventAboutUs from "../Components/DubaiEventAboutUs";
import Counter from "../Components/Counter ";
import OurSevices from "../Components/OurSevices";

export default function Home() {
  const companyData = {
    name: "Saudi Event Experts",
    middlename: ["Event", "DegitleMArketing,Blogger"],
    tagline: " CRAFTING UNFORGETTABLE EXPERIENCES INN THE HEART OF SAUDI",

    description:
      "With years of experience in Dubai's dynamic event industry, we specialize in creating bespoke experiences that leave lasting impressions. From corporate gatherings to cultural celebrations, our team brings creativity, precision, and local insight to every event we manage.",
    imageUrl: "/path-to-your-image.jpg",
    imageCaption: "Bringing your vision to life in Dubai's most iconic venues",
  };

  const [language, setLanguage] = useState("en");
  return (
    <>
      <div className="relative">
        <Navbar language={language} setLanguage={setLanguage} />
        <HomeVideo />
        <div className="relative z-10 min-h-screen bg-white" id="about-us">
          <DubaiEventAboutUs companyData={companyData} />
        </div>
      </div>

      <MarcouCompo />

      <div className="relative z-10  bg-white " id="about-us">
        <TextComponent />
      </div>
      <div className="relative z-10  bg-white  ">
        <Counter />
      </div>
      <div className="relative z-10  bg-white  " id="Featured-Projects">
        <MainCard />
      </div>
      <div className="relative z-10  bg-white  " id="services">
        <OurSevices />
      </div>
      <div className="relative z-10  bg-white  " >
        <WorldMap />
      </div>
      <div className="relative z-10  bg-white  " id="contact-us">
        <FooterCard />
      </div>

      <div className="relative z-10  bg-white  ">
        <Footer />
      </div>
    </>
  );
}
