import React from 'react'
import {vollkorn} from '../layout'
import Image from 'next/image'
import Icon from '../images/icon.png'
import Icon2 from '../images/icon1.png'
import Icon3 from '../images/icon2.png'
import { FaArrowRightLong } from "react-icons/fa6";
import mark_group from "../images/Mask_group.png"
import tweleve from '../images/icon12.png'
import thirteen from '../images/icon_13.png'
const Service = () => {
  return (
    <>
    <section className='bg-gradient-to-b from-white to-[#F9F4F1] '>
        <div className="container px-[315px] pb-[100px] mt-[112px] ">
 <h2 className={`text-[#EF8100] font-medium text-[18px] ${vollkorn.className} text-center`}>SERVICE</h2>
 <p className={`text-[#00413D] font-medium text-[50px] ${vollkorn.className}  text-center mb-[40px]`}>09+ Years Experience
in This Field</p>

  <div className='flex gap-[30px] ml-[-106px]'>
  <div className='w-[410px] h-[451px] bg-[#FFFFFF] shadow px-[50px] relative pt-[50px]'>
  <Image src={tweleve} alt={'icon'}/>
  <div className='mt-[74px]'>
    <p className={`text-[#00413D] ${vollkorn.className} text-[24px]`}>Web & Development</p>
  <p className='w-[300px] h-[72px] text-[#00413D]'>Facilizes sed odic morbid quiz commodore odic nexus et malasadas fames research and brand strategy system.</p>
  </div>
  <div className='mt-[75px] '>
     <FaArrowRightLong className='text-[#00413D] w-[28px] h-[20px] hover:text-[#E5745D]'/>
  </div>
 <Image src={mark_group} alt={'mark'} className='absolute top-[320px] left-[200px]'/>
  </div>
  <div className='w-[410px] h-[451px] bg-[#FFFFFF]  shadow px-[50px] relative pt-[50px]'>
    <Image src={thirteen} alt={'icon'}/>
    <div className='mt-[74px] '>
        <p className={`text-[#00413D] ${vollkorn.className} text-[24px]`}>Graphic Design</p>
    <p className='w-[300px] h-[72px] text-[#00413D]'>Facilizes sed odic morbid quiz commodore odic nexus et malasadas fames research and brand strategy system.</p>
    </div>
    <div className='mt-[75px]'>
       <FaArrowRightLong className='text-[#00413D] w-[28px] h-[20px] hover:text-[#E5745D]'/>
    </div>
 <Image src={mark_group} alt={'mark'} className='absolute top-[320px] left-[200px]'/>
  </div>
  <div className='w-[410px] h-[451px] bg-[#FFFFFF]  shadow px-[50px] relative pt-[50px]'>
    <Image src={Icon3} alt={'icon'}/>
    <div className='mt-[74px] '>
       <p className={`text-[#00413D] ${vollkorn.className} text-[24px]`}>Writing and Marketing</p>
    <p className='w-[300px] h-[72px] text-[#00413D]'>Facilizes sed odic morbid quiz commodore odic nexus et malasadas fames research and brand strategy system.</p>
    </div>
    <div className='mt-[75px]'>
         <FaArrowRightLong className='text-[#00413D]  w-[28px] h-[20px] hover:text-[#E5745D]'/>
    </div>
 <Image src={mark_group} alt={'mark'} className='absolute top-[320px] left-[200px]'/>
  </div>
</div>
</div>
    </section>
  

    </>
  )
}

export default Service