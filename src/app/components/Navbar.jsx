import Image from 'next/image'
import React from 'react'
import logo from '../images/logo.png'
import search from '../images/Search.png'
import menubar from '../images/Manu_bar.png'
import {jost} from '../layout'
const Navbar = () => {
  return (
    <>
    {/* F9F4F1 */}
<nav className='bg-[#F9F4F1] border-b border-gray-200 pb-[24px] hidden lg:block'>
  <div className="container pt-[27px]">
    <div className='flex items-center gap-[364px] '>
       <div>
     <Image src={logo} alt={"logo"} className='w-[122px] h-[40px]'/>
    </div>
    <div>
      <ul className='text-[#00413D] flex gap-[88px] text-[18px] font-normal'>
        <li className={`${jost.className} hover:text-[#E5745D] duration-[1s]`} >Home</li>
        <li className={`${jost.className} hover:text-[#E5745D] duration-[1s]`} >Projects</li>
        <li className={`${jost.className} hover:text-[#E5745D] duration-[1s]`}>Pages</li>
        <li className={`${jost.className} hover:text-[#E5745D] duration-[1s]`}>Blog</li>
        <li className={`${jost.className} hover:text-[#E5745D] duration-[1s]`}>Contact</li>
      </ul>
    </div>
    <div className='flex gap-[25px]'>
      <Image src={search} alt={'search'}/>
       <Image src={menubar} alt={'search'}/>
    </div>
    </div>
   
  </div>
</nav>
    </>
  )
}

export default Navbar