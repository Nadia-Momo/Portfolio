import React from 'react'
import icon1 from '../images/icon7.png'
import icon2 from '../images/icon8.png'
import icon3 from '../images/icon10.png'
import Image from 'next/image'
import {jost} from '../layout'
import {vollkorn} from '../layout'
const BlogCard = ({imagCard}) => {
  return (
    <>
<section className='mt-[30px]'>
  <div className="container">
    <div className='flex'>
         <div className='w-[360px] h-[240px] border border-gray-200 flex justify-center items-center'>
          
<div>
     <div className='flex gap-[10px] mb-[10px]'>
        <Image src={icon1} alt={icon1} className='w-[18px] h-[18px]'/> <p className={`${jost.className} text-[#00413D]`}>By Brian Cumin</p> 
      </div>
<div className='flex gap-[10px] mb-[10px]'> <Image src={icon2} alt={icon2} className='w-[18px] h-[18px]'/><p className={`${jost.className} text-[#00413D]`}>March 27,2023</p></div>
<div className='flex gap-[10px] mb-[10px]'><Image src={icon3} alt={icon3} className='w-[18px] h-[18px]'/><p className={`${jost.className} text-[#00413D]`}>24 Comments</p></div>

</div>
   
    </div>
    <div className='w-[360px] h-[240px] border border-gray-200 flex justify-center items-center'>
      <div className='w-[320px] h-[200px] bg-[#C4C4C4]'>
        <Image src={imagCard} className='w-[360px] h-[240px]' alt={'imgcard'}/>
      </div>
    </div>
    <div className='w-[630px] h-[240px] border border-gray-200 flex justify-center items-center'>
<h2 className={`w-[490px] h-[80px] text-[#00413D] text-[30px] font-medium ${vollkorn.className}`}>Personalization and Automation for Better Results</h2>
    </div>
    
    </div>
    
  </div>
 
</section>
    </>
  )
}

export default BlogCard