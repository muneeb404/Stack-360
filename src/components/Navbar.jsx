import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import navArrow from "../assets/navArrow.svg";
import Menu from "../assets/menu.png";
import Close from "../assets/close.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Manage open/close state

  return (
    <div className="relative overflow-visible">
      <div className="bg-white px-20 flex items-center justify-between w-full h-[78px] fixed top-0 z-40 mobile:max-tablet:px-10">
        <img className="w-[8.5rem]" src={Logo} alt="" />
        <div>
          <ul
            className={`flex gap-8 rajdhani text-[16px] font-semibold
              mobile:max-laptop:absolute mobile:max-laptop:flex-col bg-white
              mobile:max-laptop:h-screen mobile:max-laptop:w-[12rem]
              mobile:max-laptop:top-0 mobile:max-laptop:px-8 mobile:max-laptop:pt-24
              laptop:max-xl:flex-row laptop:max-xl:h-fit laptop:max-xl:pt-0 laptop:max-xl:w-full
              ${
                isOpen
                  ? "mobile:max-laptop:right-0"
                  : "mobile:max-laptop:-right-[12rem]"
              } transition-all duration-300 ease-in-out`}
          >
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="flex gap-1 cursor-pointer">
              Services <img src={navArrow} alt="" />
            </li>
            <li className="flex gap-1 cursor-pointer">
              Hire Talent <img src={navArrow} alt="" />
            </li>
            <li className="cursor-pointer">Case Studies</li>
            <li className="cursor-pointer">Contact</li>
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-10 border rounded-md border-[#E47725] p-1 laptop:max-xl:hidden"
            >
              <img src={Close} alt="" />
            </button>
            <button className="text-[#E47725] rajdhani text-[16px] outline-none font-semibold border border-1.5 border-[#E47725] rounded-md px-3 py-1.5 mobile:max-laptop:absolute bottom-12 laptop:max-xl:hidden">
              Get in touch
            </button>
          </ul>
        </div>
        {/* "Get in Touch" Button */}
        <button
          className="text-[#E47725] rajdhani text-[16px] outline-none font-semibold border border-1.5 border-[#E47725] rounded-md px-3 py-1.5 
        mobile:max-laptop:hidden"
        >
          Get in touch
        </button>
        {/* Open Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="border rounded-md border-[#E47725] p-1 laptop:max-xl:hidden"
        >
          <img src={Menu} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
