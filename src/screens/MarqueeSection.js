import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeSection() {
  return (
    <div className=" my-24">
      <div className="marquee py-4 border-y-8 border-black">
        <Marquee speed={30}>
          <div className="marqueeText font-bold text-6xl tracking-widest overflow-hidden">
            Web Developer     Web Developer     Web Developer     Web Developer    Web Developer{" "} 
          </div>
        </Marquee>
      </div>
      <div className="marquee mt-14 py-4 border-y-8 border-black">
        <Marquee direction="right" speed={30}>
          <div className="marqueeText2 font-bold text-6xl tracking-widest overflow-hidden">
            ASWIN JITH KUKKU     ASWIN JITH KUKKU     ASWIN JITH KUKKU     ASWIN JITH KUKKU   
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeSection;
