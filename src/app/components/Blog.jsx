import React from 'react'
import {vollkorn} from '../layout'
import BlogCard from './BlogCard'
const Blog = () => {
  return (
    <>
    <section className='bg-[#F9F4F1] pt-[140px] pb-[140px]'>
       <div className="container">
      <p className={`text-[#EF8100]  ${vollkorn.className} text-[18px] font-medium`}>Our blog</p>
    <h2 className={`font-medium text-[50px] w-[457px] h-[120px] ${vollkorn.className} text-[#00413D] mb-[53px]`}>The Future of AI
in Digital Marketing</h2>
<BlogCard/>
<BlogCard/>
<BlogCard/>
    </div>
    </section>
   
    

    </>
  )
}

export default Blog