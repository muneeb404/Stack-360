import React from "react";
import heroLogo1 from "../assets/heroLogo1.svg";
import heroLogo2 from "../assets/heroLogo2.svg";
import heroLogo3 from "../assets/heroLogo3.svg";
import heroLogo4 from "../assets/heroLogo4.svg";
import heroLogo5 from "../assets/heroLogo5.svg";
import dotLine from "../assets/dotLine.svg";

function HeroLogo() {
  return (
    <div className="w-full relative h-[92px] my-8 bg-white flex justify-center items-center">
      <div className="absolute">
        <img src={dotLine} alt="" />
      </div>
      <div className="px-20 z-10 w-full flex justify-between">
        <div
          className="p-4 w-fit rounded-full"
          style={{
            background:
              "linear-gradient(214.34deg, #E5E5E5 -14.71%, rgba(227, 227, 227, 0.5) 71.95%)",
          }}
        >
          <img className="w-[30px] h-[30px] colorr" src={heroLogo1} alt="" />
        </div>
        <div className="p-4 w-fit rounded-full"
          style={{
            background:
              "linear-gradient(214.34deg, #E5E5E5 -14.71%, rgba(227, 227, 227, 0.5) 71.95%)",
          }}>
          <img className="w-[30px] h-[30px] colorr" src={heroLogo2} alt="" />
        </div>
        <div className="p-4 w-fit rounded-full"
          style={{
            background:
              "linear-gradient(214.34deg, #E5E5E5 -14.71%, rgba(227, 227, 227, 0.5) 71.95%)",
          }}>
          <img className="w-[30px] h-[30px] colorr" src={heroLogo3} alt="" />
        </div>
        <div className="p-4 w-fit rounded-full"
          style={{
            background:
              "linear-gradient(214.34deg, #E5E5E5 -14.71%, rgba(227, 227, 227, 0.5) 71.95%)",
          }}>
          <img className="w-[30px] h-[30px] colorr" src={heroLogo4} alt="" />
        </div>
        <div className="p-4 w-fit rounded-full"
          style={{
            background:
              "linear-gradient(214.34deg, #E5E5E5 -14.71%, rgba(227, 227, 227, 0.5) 71.95%)",
          }}>
          <img className="w-[30px] h-[30px] colorr" src={heroLogo5} alt="" />
        </div>
        <div className="p-4 w-fit rounded-full"
          style={{
            background:
              "linear-gradient(214.34deg, #E5E5E5 -14.71%, rgba(227, 227, 227, 0.5) 71.95%)",
          }}>
          <img className="w-[30px] h-[30px] colorr" src={heroLogo1} alt="" />
        </div>
        <div className="p-4 w-fit rounded-full"
          style={{
            background:
              "linear-gradient(214.34deg, #E5E5E5 -14.71%, rgba(227, 227, 227, 0.5) 71.95%)",
          }}>
          <img className="w-[30px] h-[30px] colorr" src={heroLogo2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroLogo;
