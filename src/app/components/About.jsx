import React from 'react'
import {vollkorn} from '../layout'
import Image from 'next/image'
import image1 from '../images/image_bg.png'
import {jost} from '../layout'
import author from '../images/author.png'
const About = () => {

  return (
    <>
<section>
  
     <div className="container">
      <div className='flex gap-[110px]'>
     <div >
<p className={`${vollkorn.className} text-[#EF8100] font-medium text-[18px] mt-[120px]`}>ABOUT ME</p>
    <h1 className={`${vollkorn.className} font-medium text-[50px] w-[685px] h-[120px] mt-[11px] text-[#00413D]` }>At The Heart of Design is An Opportunity to Problem Solve.</h1>
 <div className='relative'>
   <Image src={image1} alt={'image'} className='mt-[47px] mb-[120px]' />
   <Image src={author} alt={'author'} className='absolute top-[20px] left-[150px] w-[400px]'/>
 </div>
 

  </div>
  <div className='w-[440px] h-[147px] flex flex-col gap-10 mt-[314px]'>
    <h1 className={`${jost.className} text-[#00413D] leading-[26px] font-normal text-[18px]`}>Solvency based award-winning design director and UI/UX design expert with 10 years of experience in design and management.</h1>
 <h1 className={`${jost.className} text-[#00413D] leading-[26px] font-normal text-[18px]`}>Internum various sit a met mattes ululate denim. Orcin asellus celestas tells rut rum tells pelletised eu. Nunc pulvinar supine et ligula albacore.</h1>
 

   <button className={`${jost.className}  bg-[#E5745D]  px-[5px] py-[5px] w-[198px]`}>
 
  <p className='text-[#FFFFFF] border border-white px-[39px] py-[24px]'>Download CV</p>

 </button>

  </div>
  </div>
 

  </div>
 
</section>
    </>
  )
}

export default About