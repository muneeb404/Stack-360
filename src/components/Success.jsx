import React from 'react'
import success1 from '../assets/success1.svg'
import success2 from '../assets/success2.svg'
import success3 from '../assets/success3.svg'
import success4 from '../assets/success4.svg'
import success5 from '../assets/success5.svg'
import success6 from '../assets/success6.svg'
import success7 from '../assets/success7.svg'
import success8 from '../assets/success8.svg'

function Success() {
  return (
    <div className='w-full px-20 py-24 bg-[#E47725] text-white'>
        <h1 className='text-[40px] poppins text-center font-bold py-4 pt-8'>Our Success Stories</h1>
        <div className='bg-[#EEEDED33] border border-white rounded-xl flex py-10'>
            <div className='w-[50%] flex flex-col items-center gap-1'>
                <img className='w-[138px]' src={success1} alt="" />
                <img className='w-[420px]' src={success2} alt="" />
                <div className='flex gap-3'>
                    <div className='bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center'>
                        <img src={success3} alt="" />
                    </div>
                    <div className='bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center'>
                        <img src={success4} alt="" />
                    </div>
                    <div className='bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center'>
                        <img src={success5} alt="" />
                    </div>
                    <div className='bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center'>
                        <img src={success6} alt="" />
                    </div>
                    <div className='bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center'>
                        <img src={success7} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-[50%] poppins flex flex-col gap-10'>
                <div className=''>
                    <h1 className='text-[28px] pb-2 font-semibold'>About Autobuffy</h1>
                    <p className='text-[16px font-medium]'>Autobuffy was created to make it easier to find affordable, high quality auto parts using modern technology in the USA.</p>
                </div>
                <div>
                    <h1 className='text-[28px] pb-2 font-semibold'>Client Testimonial</h1>
                    <p className='text-[16px font-medium]'>I was extremely happy with the professionalism and skill set. I enjoyed working with the seller and ready to start working on our next project together! I highly recommend.</p>
                </div>
                <div className='flex gap-4'>
                    <img className='w-[40px] h-[40px] border-2 border-white rounded-full' src={success8} alt="" />
                    <div>
                        <h1 className='text-[16px]'>Chetan Chada</h1>
                        <p className='text-[12px]'>Autobuffy - CEO</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Success