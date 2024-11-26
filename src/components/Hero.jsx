import React from 'react';
import heroImg from '../assets/heroImg.svg';

function Hero() {
  return (
    <div className='bg-white w-full flex px-20 mt-[88px] justify-between items-center 
    mobile:max-laptop:flex-wrap 
    mobile:max-tablet:px-10'>
        <div className='w-[50%] mobile:max-laptop:w-full'>
            <h1 className='text-[4rem] font-bold leading-[5rem] text-[#191818] mb-4'>We <span className='text-[#E47725]'>Develop</span><br />Software Solutions</h1>

            <h3 className='text-[#191818] text-[20px] mb-6 leading-9'>We are professional software engineers with more than 8 year of experience in delivering superior products.</h3>

            <button className='bg-[#E47725] text-white px-6 py-3 text-[20px] rajdhani font-semibold rounded-md border-none outline-none'>Let's chat</button>
        </div>
        <div className='mobile:max-laptop:mx-auto mobile:max-laptop:mb-8' >
            <img className='w-[28rem]' src={heroImg} alt="" />
        </div>
    </div>
  )
}

export default Hero;

