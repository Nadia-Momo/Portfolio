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
const Award = () => {
  return (
    <>
    <section className=''>
      <div className="container border border-[#00413D] pt-[140px] pl-[215px]">
        <div className='flex gap-[126px] items-center'>
  <div>
    <p className={`${vollkorn.className} text-[18px] font-medium text-[#EF8100] mb-[24px]`}>Awards</p>
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
  <div className='flex flex-wrap'>
    <Image src={one} alt={'one'}/>
 <Image src={two} alt={'two'}/>
  <Image src={three} alt={'three'}/>
   <Image src={four} alt={'four'}/>
    <Image src={six} alt={'six'}/>
    
  </div>
  
</div>
    

    </section>
    </>
  )
}

export default Award