import React from "react";
import rightArrow from "../assets/rightArrow.svg";
import servicePic1 from "../assets/servicePic1.svg";
import servicePic2 from "../assets/servicePic2.svg";
import servicePic3 from "../assets/servicePic3.svg";

function Services() {
  return (
    <div className="bg-[#191818] text-white h-screen  ">
      <h1 className="text-[40px] font-bold text-center py-8">
        Services We Offer
      </h1>
      <div className="flex gap-4 justify-center">
        {/* <div className=" bg-gray-400 relative text-left rounded-2xl px-7 w-[415px] pt-8 h-[400px]">
          <div>
            <img className='py-5' src={servicePic1} alt="" />
          </div>
          <div>
            <h1 className="text-[20px] py-4 font-semibold poppins">DevOps</h1>
            <p className="text-[14px] poppins">
              Supercharge your software development with our DevOps solutions.
              We optimize cost, speed, performance, and maintenance by
              strategically implementing native, hybrid, and cross-platform
              stacks aligned with your business goals.
            </p>
          </div>
          <div>
            <button className="absolute bottom-16 flex gap-2 py-3 items-center">
              <div className="text-[16px] font-medium">Hire Now</div>
              <img src={rightArrow} alt="" />
            </button>
          </div>
        </div> */}
        <div
          className=" text-left rounded-2xl px-7 w-[415px] pt-8 h-[400px] overflow-hidde bg-gradient-to-br from-white/10 to-white/40 border backdrop-blur-[42px] shadow-inner"
          style={{
            boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
          }}
        >
          <div className="h-[80px] flex items-center">
            <img className="py-5" src={servicePic1} alt="" />
          </div>
          <div>
            <h1 className="text-[20px] py-4 font-semibold poppins">DevOps</h1>
            <p className="text-[14px] poppins h-[140px] overflow-hidden">
              Supercharge your software development with our DevOps solutions.
              We optimize cost, speed, performance, and maintenance by
              strategically implementing native, hybrid, and cross-platform
              stacks aligned with your business goals.
            </p>
          </div>
          <div>
            <button className="bottom-16 flex gap-2 py-3 items-center">
              <div className="text-[16px] font-medium">Hire Now</div>
              <img src={rightArrow} alt="" />
            </button>
          </div>
        </div>
        <div
          className=" text-left rounded-2xl px-7 w-[415px] pt-8 h-[400px] bg-gradient-to-br from-white/10 to-white/40 border backdrop-blur-[42px] shadow-inner"
          style={{
            boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
          }}
        >
          <div>
            <img className="py-5" src={servicePic2} alt="" />
          </div>
          <div>
            <h1 className="text-[20px] py-4 font-semibold poppins">Web Development</h1>
            <p className="text-[14px] poppins h-[140px] overflow-hidden">
            Stack360 web developers, proficient in both front-end and full-stack development, construct and uphold websites designed for optimal efficiency and structured to meet your specific business needs.
            </p>
          </div>
          <div>
            <button className="bottom-16 flex gap-2 py-3 items-center">
              <div className="text-[16px] font-medium">Hire Now</div>
              <img src={rightArrow} alt="" />
            </button>
          </div>
        </div>
        <div
          className=" text-left rounded-2xl px-7 w-[415px] pt-8 h-[400px] overflow-hidde bg-gradient-to-br from-white/10 to-white/40 border backdrop-blur-[42px] shadow-inner"
          style={{
            boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
          }}
        >
          <div>
            <img className="py-5" src={servicePic3} alt="" />
          </div>
          <div>
            <h1 className="text-[20px] py-4 font-semibold poppins">Mobile App Development</h1>
            <p className="text-[14px] poppins h-[140px] overflow-hidden">
            Our team of mobile app developers enhances cost-effectiveness, speed, performance, and maintenance by strategically selecting native, hybrid, and cross-platform stacks that align with your business goals.
            </p>
          </div>
          <div>
            <button className="bottom-16 flex gap-2 py-3 items-center">
              <div className="text-[16px] font-medium">Hire Now</div>
              <img src={rightArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
