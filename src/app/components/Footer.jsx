import React from 'react'
import logo from '../images/logo.png'
import Image from 'next/image'
import im1 from '../images/Group 73.png'
import im2 from '../images/Group 1000005672.png'
import im3 from '../images/Group 1000005674.png'
import im4 from '../images/Group 1000005673.png'

import {jost} from '../layout'
import {vollkorn} from '../layout'
const Footer = () => {
  return (
    <>
    <section className='bg-[#F9F4F1] border-b border-gray-200 pb-[30px] pt-[90px]'>
          <div className="container">
            <div className='flex gap-[160px]'>
                  <div>
  <Image src={logo} alt={logo}/>
  <p className={`w-[282px] h-[96px] text-[#4B7773] ${jost.className} mt-[27px]`}>
    Design League is the world’s leading community have for creatives to share, grow, and learn. Design League is the world’s leading community.
  </p>
  <div className='flex gap-[14px] mt-[41px]'>
    <Image src={im1} alt={'im1'} className='w-[18px] h-[18px]'/>
     <Image src={im4} alt={'im4'} className='w-[36px] h-[36px] mt-[-12px]'/>
    <Image src={im2} alt={'im2'} className='w-[18px] h-[18px]'/>
    <Image src={im3} alt={'im3'} className='w-[18px] h-[18px]'/>
   
  </div>
</div>
<div>
  <ul>
    <li className={` ${vollkorn.className} text-[#4B7773] font-bold text-[20px] mb-[24px]`}>Product</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Features</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Pricing</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Case studies</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Reviews</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Updates</li>
  </ul>
</div>
<div>
  <ul>
    <li className={` ${vollkorn.className} text-[#4B7773] font-bold text-[20px] mb-[24px]`}>Company</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>About</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Contact us</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Careers</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Culture</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Blog</li>
  </ul>
</div>
<div>
  <ul>
    <li className={` ${vollkorn.className} text-[#4B7773] font-bold text-[20px] mb-[24px]`}>Support</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Getting started</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Help center</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Server status</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Report a bug</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Chat support</li>
  </ul>
</div>
<div>
  <ul>
    <li className={` ${vollkorn.className} text-[#4B7773] font-bold text-[20px] mb-[24px]`}>Downloads</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>iOS</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Android</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Mac</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Windows</li>
    <li className={`${jost.className} text-[#4B7773] font-normal text-[15px] mb-[18px]`}>Chrome</li>
  </ul>
</div>
            </div>
  
    </div>
    </section>
<div className={` ${jost.className}  text-[#4B7773] text-center font-normal text-[12px] bg-[#F9F4F1] pt-[30px]`}>
  <p className=''>Copyright © 2023 Design By Estiak. All rights reserved.</p>
</div>

    </>
  )
}

export default Footer