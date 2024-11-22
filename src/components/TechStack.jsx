import React from 'react'
import stackCategory1 from '../assets/stackCategory1.svg'
import stackCategory2 from '../assets/stackCategory2.svg'
import stackCategory3 from '../assets/stackCategory3.svg'

import TechStackLogo from './TechStackLogo'

function TechStack() {
  return (
    <div>
        <div className='w-full bg-white py-24 flex flex-col px-20 items-center justify-center'>
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
            <TechStackLogo/>
        </div>
    </div>
  )
}

export default TechStack