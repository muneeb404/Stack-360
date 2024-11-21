import React from 'react';
import ctaMask from '../assets/ctaMask.svg';

function CTA() {
  return (
    <div className='bg-[#191818] w-full h-[21rem] text-white relative overflow-hidden'>
        <img className='absolute top-0 left-0' src={ctaMask} alt="" />
        <div className='flex flex-col items-center gap-3 py-20'>
            <h1 className='poppins text-[40px] font-semibold'>Ready to <span className='text-[#E47725]'>Turn</span> Your <span className='text-[#E47725]'>Ideas</span> into Reality?</h1>
            <p className='poppins max-w-5xl text-[16px] text-center text-[#DCDCDC]'>We’re here to help you build innovative, custom software solutions tailored to your business needs. Whether you’re looking for a mobile app, web application or enterprise solution, our team of experts is ready to bring your vision to life.</p>
            <button className='px-6 py-3 bg-[#E47725] text-[20px] font-semibold rounded-md rajdhani'>Schedule a Meeting</button>
        </div>
    </div>
  )
}

export default CTA;