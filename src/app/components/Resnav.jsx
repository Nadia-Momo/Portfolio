"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../images/logo.png'
import { FaBars } from "react-icons/fa";
import {jost} from '../layout'
import { CiCircleRemove } from "react-icons/ci";
const Resnav = () => {
  const [showNav,setShowNav]=useState(false)
  return (
    <>
   <nav className='bg-[#F9F4F1] border-b border-gray-200 pb-[24px] block lg:hidden '>
    
    <div className="container pt-[15px] px-[10px]">
     <div className="menu_row flex items-center justify-between">
        <Link href={'/'} className=''>
<Image src={logo} alt={logo} />

        </Link>
        <button onClick={()=>setShowNav(!showNav)}><FaBars className='text-[#00413D] text-[20px]'/></button>
     </div>
    </div>
     
      {/* <div className={`w-1/2 h-screen bg-[#00413D] absolute top-0 ${showNav?'right-0':'right-[-100%]'} duration-[1s] flex items-center justify-center `}>
     
      <ul className='text-[#E5745D] flex  flex-col font-bold'>
          <div className='absolute top-[10px] right-[10px]'>
         <CiCircleRemove className=' text-[#E5745D] text-[30px] ' onClick={()=>setShowNav(false)}/>
       </div>
        <li className={`${jost.className}`}><Link href={'/'}>Home</Link></li>
        <li className={`${jost.className}`}><Link href={``}>Projects</Link></li>
        <li className={`${jost.className}`}><Link href={``}>Pages</Link></li>
        <li className={`${jost.className}`}><Link href={``}>Blog</Link></li>
          <li className={`${jost.className}`}><Link href={``}>Contact</Link></li>

      </ul>
    </div> */}
    
  
    </nav> 
    </>
  )
}

export default Resnav