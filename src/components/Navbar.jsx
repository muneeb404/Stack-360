import React from 'react';
import Logo from '../assets/logo.svg';
import navArrow from '../assets/navArrow.svg';

function Navbar() {
  return (
    <div className='bg-white px-20 flex items-center justify-between w-full h-[78px] fixed top-0 z-50'>
        <img className='w-[8.5rem]' src={Logo} alt="" />
        <div>
            <ul className='flex gap-8 rajdhani text-[16px] font-semibold'>
                <li>Home</li>
                <li>About Us</li>
                <li className='flex gap-1'>Services <img src={navArrow} alt="" /></li>
                <li className='flex gap-1'>Hire Talent <img src={navArrow} alt="" /></li>
                <li>Case Studies</li>
                <li>Contact</li>
            </ul>
        </div>
        <button className='text-[#E47725] rajdhani text-[16px] outline-none font-semibold border border-1.5 border-[#E47725] rounded-md px-3 py-1.5'>
            Get in touch
        </button>
    </div>
  )
}

export default Navbar;