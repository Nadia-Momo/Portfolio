import React from 'react'
import {jost} from '../layout'
import {vollkorn} from '../layout'
import Image from 'next/image'
import one from '../images/01.png'
import two from '../images/03.png'
import three from '../images/04.png'
import four from '../images/05.png'
import six from '../images/06.png'
import seven from '../images/07.png'
import eight from '../images/09.png'
import nine from '../images/icon_10.png'
import ten from '../images/icon_11.png'

const Award = () => {
  return (
    <>
    <section className='bg-[#F9F4F1]'>
      <div className="container border border-[#00413D] pt-[140px] pl-[215px]">
        <div className='flex gap-[126px] items-center'>
  <div>
    <p className={`${vollkorn.className} text-[18px] font-medium text-[#EF8100] mb-[24px]`}>AWARDS</p>
    <p className={`${vollkorn.className} font-medium text-[50px] text-[#00413D]`}>83+ Design Awards</p>
  </div>
  <div className='w-[440px] h-[78px]'>
    <p className={`text-[#00413D] font-normal text-[18px] ${jost.className}`}>Solvency based award-winning design director and UI/UX design expert with 10 years of experience in design and management.</p>
  </div>
</div>
<div>
    </div>
   <div className='flex justify-end gap-[526px]'>
     <Image src={seven} alt={'seven'}/>
      <Image src={eight} alt={'eight'}/>
  </div>
  <div className='flex flex-wrap relative'>
    <Image src={one} alt={'one'} className='w-[220px] h-[220px]'/>
 <Image src={two} alt={'two'} className='w-[220px] h-[220px]'/>
  <Image src={three} alt={'three'} className='w-[220px] h-[220px]'/>
   <Image src={four} alt={'four'} className='w-[220px] h-[220px]'/>
    <Image src={six} alt={'six'} className='w-[220px] h-[220px]'/>
    <Image src={nine} alt={'nine'} className='w-[220px] h-[220px] absolute top-[5px] left-[-210px]'/>
    <Image src={ten} alt={'ten'} className='w-[220px] h-[220px] absolute top-[4px] left-[1100px]'/>
  </div>  
  
</div>
 

    </section>
    </>
  )
}

export default Award