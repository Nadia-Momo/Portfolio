import React from 'react'
import {vollkorn} from '../layout'
import SmallCard from './SmallCard'
import BigCard from './BigCard'



const Working = () => {
  return (
    <>
<section className='bg-[#F9F4F1] py-[40px]'>
  <div className="container">
 <h2 className={`${vollkorn.className} font-medium text-[30px] text-[#00413D] text-center mt-[120px] mb-[40px]`}>My Working Portfolio</h2>
  <div className='flex gap-[29px]'>
    <SmallCard marginTop={'mt-[120px]'}/>
    <BigCard/>
    <SmallCard marginTop={'mt-[120px]'}/>
    {/* -122px; */}
  </div>
  <div className='flex gap-[29px]'>
    <BigCard marginTop={'mt-[-122px]'}/>
    <SmallCard marginTop={'mt-[20px]'}/>
      <BigCard marginTop={'mt-[-122px]'}/>
  </div>
  <div className='flex gap-[29px]'>
    <SmallCard marginTop={'mt-[20px]'}/>
     <BigCard marginTop={'mt-[-95px]'}/>
      <SmallCard marginTop={'mt-[20px]'}/>
  </div>
  </div>

</section>
    </>
  )
}

export default Working