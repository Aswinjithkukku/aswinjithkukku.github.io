import React from "react";
import Hero from "../components/Hero";
// import heroImg from "../images/kukku.png";
import MarqueeSection from "./MarqueeSection";
import Navigation from "./Navigation";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Socials from "./Socials";
function HomeScreen() {
  return (
    <div className="home">
      <Navigation />
      <div className="blender">
        <Hero />
      </div>
      <Section1 />
      <Section2 />
      <MarqueeSection />
      <Section3 />
      <Section4 />
      <Socials />
    </div>
  );
}

export default HomeScreen;