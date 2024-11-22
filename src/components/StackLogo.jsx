import React from 'react'

function StackLogo({img}) {
  return (
    <div className='border-2 border-[#EBEBEB] rounded-lg w-[10rem] h-[10rem] flex justify-center items-center'>
        <img className='grayscale hover:grayscale-0 transition-all duration-300 ease-in-out' src={img} alt="" />
    </div>
  )
}

export default StackLogo