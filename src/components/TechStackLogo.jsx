import React from 'react'
import StackLogo from './StackLogo'
import { Images } from '../custom/image'

function TechStackLogo() {
  return (
    <div className='flex flex-col'>
        <div className='flex gap-7 py-7 flex-wrap flex-grow-6 justify-center'>
            <StackLogo img={Images.tech1} /> 
            <StackLogo img={Images.tech2} /> 
            <StackLogo img={Images.tech3} /> 
            <StackLogo img={Images.tech4} /> 
            <StackLogo img={Images.tech5} /> 
            <StackLogo img={Images.tech6} /> 
        
            <StackLogo img={Images.tech7} />
            <StackLogo img={Images.tech8} />
            <StackLogo img={Images.tech9} />
            <StackLogo img={Images.tech10} />
            <StackLogo img={Images.tech11} />
            <StackLogo img={Images.tech12} />
        </div>
    </div>
  )
}

export default TechStackLogo