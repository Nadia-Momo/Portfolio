import React from 'react'
import {vollkorn} from '../layout'
import {jost} from '../layout'
import image1 from '../images/Image.png'
import Image from 'next/image'
import shape from '../images/shape.png'
import author from '../images/author.png'
const Banner = () => {
  return (
    <>
<section className='bg-[#F9F4F1] '>
 
  <div className="container">
     <div className='flex gap-[137px]'>
         <div className='w-[851px] h-fit pt-[220px] pb-[253px]'>
    <p className={`${vollkorn.className} text-[#EF8100] text-[18px] font-medium`}>UI/UX Designer</p>
<div className='w-[851px] h-[220px]'>
      <h1 className={`${vollkorn.className} text-[#00413D] text-[120px] font-bold `}>Steven Product
</h1>
<span className={`${vollkorn.className}  text-[120px] font-bold text-transparent`} style={{ WebkitTextStroke: "1px #00413D" }}>Portfolio</span>
  </div>    
<p className={`${jost.className} text-[#00413D] w-[744px] h-[62px] font-normal text-[20px] `} style={{ marginTop: "100px" }}>You can find me on Dribble, Instagram, LinkedIn, Behance or Facebook. Im working at User interface or User experience.</p>
 <p className={`${vollkorn.className} underline text-[#E5745D] font-semibold text-[40px] mt-[25px]`}>Steven@gmai.com</p>
  </div>
  <div className='relative'>
      <Image src={shape} alt={shape} className='absolute top-0 left-0 w-[800px] h-[748px] '/>
  <Image src={image1} alt={'image'} className='pt-[62px] '/>

  <Image src={author} alt={'author'} className='absolute top-[150px] left-[70px] w-[500px]' />
  </div>
     </div>
 
  <div>

  </div>
  </div>
  
</section>
    </>
  )
}

export default Banner