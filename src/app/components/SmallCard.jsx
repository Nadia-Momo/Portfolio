import React from 'react'
import {vollkorn} from '../layout'
const SmallCard = ({marginTop}) => {
  return (
    <>
<div className={`w-[514px] h-[400px] p-[30px] border border-[#00413D] ${marginTop} group relative`}>
    <div className='w-[454px] h-[340px] bg-[#C4C4C4]'></div>
      <div className='bg-[#FFFFFF] pl-[30px] pr-[143px] pt-[32px] pb-[34px] absolute top-[200px] left-[70px]  hidden group-hover:block transition-all duration-[1s] ease-in-out'>
            <p className={`text-[#E5745D] text-[16px] ${vollkorn.className} font-semibold`}>UI/UX Design</p>
            <p className={`${vollkorn.className} font-bold text-[24px] text-[#00413D]`}>Daily Hydro-Drops</p>
        </div>
</div>
    </>
  )
}

export default SmallCard