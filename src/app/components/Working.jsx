import React from 'react'
import {vollkorn} from '../layout'
import SmallCard from './SmallCard'
import BigCard from './BigCard'
const Working = () => {
  return (
    <>
<section>
  <div className="container">
 <h2 className={`${vollkorn.className} font-medium text-[30px] text-[#00413D] text-center mt-[120px] mb-[40px]`}>My Working Portfolio</h2>
  <div className='flex gap-[29px]'>
    <SmallCard />
    <BigCard/>
    <SmallCard />
  </div>
  <div className='flex gap-[29px]'>
    <BigCard/>
    <SmallCard/>
      <BigCard/>
  </div>
  <div className='flex gap-[29px]'>
    <SmallCard/>
     <BigCard/>
      <SmallCard/>
  </div>
  </div>

</section>
    </>
  )
}

export default Working