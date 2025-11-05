import React from 'react'
import {jost} from '../layout'
const Button = ({bgColor,textColour}) => {
  return (
    <>
    <button className={`${jost.className} ${bgColor} ${textColour} bg-[#E5745D]  px-[5px] py-[5px] w-[198px]`}>
 
  <p className={`text-[#FFFFFF] border border-white px-[39px] py-[24px] `}>Download CV</p>

 </button>
    </>
   

  )
}

export default Button