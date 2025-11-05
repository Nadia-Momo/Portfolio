import React from 'react'
import {jost} from '../layout'
import {vollkorn} from '../layout'
import Button from './Button'

const Subscribe = () => {
  return (
    <>
       <section className='bg-[#E5745D]'>
<div className="container">
  <div className='flex gap-[260px] py-[36px]'>
    <div className="subscribe">
    <h2 className={`text-[#FFFFFF] ${vollkorn.className} text-[40px] font-bold`}>Subscribe to our Youtube!</h2>
    <p className={`${jost.className} w-[483px] h-[52px] text-[18px] font-normal text-[#FFFFFF]`}>Please like and subscribe to my channel and press the bell icon to get new video updates.</p>
  </div>
  <div>
    <input type="text"  placeholder='Enter your email' className={`${jost.className} font-normal text-[#FFFFFF] border-1 border-white py-[22px] pl-[20px] pr-[163px]`}/>
  <button className={`${jost.className}  bg-[white]  px-[5px] py-[5px] w-[198px] ml-[10px]`}>
 
  <p className={`text-[#E5745D] border border-[#E5745D] px-[30px] py-[20px] `}>Download CV</p>

 </button>
  </div>
  </div>
  
</div>
      </section>
    </>
    
  )
}

export default Subscribe