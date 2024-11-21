import React from 'react'
import stackCategory1 from '../assets/stackCategory1.svg'
import stackCategory2 from '../assets/stackCategory2.svg'
import stackCategory3 from '../assets/stackCategory3.svg'
import tech1 from '../assets/tech1.svg'
import tech2 from '../assets/tech2.svg'
import tech3 from '../assets/tech3.svg'
import tech4 from '../assets/tech4.svg'
import tech5 from '../assets/tech5.svg'
import tech6 from '../assets/tech6.svg'
import tech7 from '../assets/tech7.svg'
import tech8 from '../assets/tech8.svg'
import tech9 from '../assets/tech9.svg'
import tech10 from '../assets/tech10.svg'
import tech11 from '../assets/tech11.svg'
import tech12 from '../assets/tech12.svg'

function TechStack() {
  return (
    <div>
        <div className='w-full bg-white h-screen flex flex-col px-20 items-center justify-center'>
            <h1 className='text-[40px] poppins font-bold mt- mb-6'>Yes, We Support Your Entire <span className='text-[#E47725]'>Tech Stack</span></h1>
            <div className='flex gap-8'>
                <div className='flex flex-col items-center cursor-pointer'>
                    <img src={stackCategory1} alt="" />
                    <div className='border-b-2 poppins text-[16px] font-medium py-2 border-b-[#E47725]'>Technologies</div>
                </div>
                <div className='flex flex-col items-center cursor-pointer'>
                    <img src={stackCategory2} alt="h" />
                    <div className='border-b-2 poppins text-[16px] font-medium py-2 border-b-transparent '>Cloud Infrastructure</div>
                </div>
                <div className='flex flex-col items-center cursor-pointer'>
                    <img src={stackCategory3} alt="" />
                    <div className='border-b-2 poppins text-[16px] font-medium py-2 border-b-transparent'>Devops</div>
                </div>
            </div>
            <div className='flex gap-7 py-7'>
                <div className='border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center'>
                    <img src={tech1} alt="" />
                </div>
                <div className='border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center'>
                    <img src={tech2} alt="" />
                </div>
                <div className='border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center'>
                    <img src={tech3} alt="" />
                </div>
                <div className='border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center'>
                    <img src={tech4} alt="" />
                </div>
                <div className='border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center'>
                    <img src={tech5} alt="" />
                </div>
                <div className='border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center'>
                    <img src={tech6} alt="" />
                </div>
                
            </div>
            <div className='flex gap-7'>
                <div className='border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center'>
                    <img src={tech7} alt="" />
                </div>
                <div className='border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center'>
                    <img src={tech8} alt="" />
                </div>
                <div className='border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center'>
                    <img src={tech9} alt="" />
                </div>
                <div className='border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center'>
                    <img src={tech10} alt="" />
                </div>
                <div className='border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center'>
                    <img src={tech11} alt="" />
                </div>
                <div className='border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center'>
                    <img src={tech12} alt="" />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default TechStack