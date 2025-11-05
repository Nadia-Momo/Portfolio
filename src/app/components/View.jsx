import React from 'react'
import {vollkorn} from '../layout'
import Button from './Button'
import {jost} from '../layout'
import skillbar from '../images/skillber.png'
import Image from 'next/image'
const View = () => {
  return (
    <>
    <section className='bg-[rgb(249,244,241)] pt-[109px] pb-[140px] '>
    <div className="container px-[100px]">
      <h2 className={`${vollkorn.className} text-center text-[#E5745D] underline font-semibold text-[40px] mb-[140px]`}>View all Projects</h2>
  <div className='flex gap-[76px]'>
     <div >
    <h2 className={`text-[#EF8100] ${vollkorn.className} font-medium text-[18px]`}>OUR SKILLS</h2>
    <h1 className={`text-[#00413D] ${vollkorn.className} w-[544px] h-[120px] text-[50px] mb-[25px] font-medium`}>Modern Digital Creative Agency</h1>
    <p className={`${jost.className} text-[#00413D] w-[544px] h-[52px] text-[18px] font-normal mb-[40px]`}>If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration</p>
 <Button/>
  </div>
  <div>
    <Image src={skillbar} alt={'skillbar'}/>
  </div>
  </div>
 
    </div>

</section>
  
    </>
  )
}

export default View