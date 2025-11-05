import React from 'react'
import {vollkorn} from '../layout'
import SmallCard from './SmallCard'
import BigCard from './BigCard'
import cake from '../images/cake.jpg'
import chat from '../images/chat_application.webp'
import foodDelivery from '../images/food_delivery.jpg'
import dashboard from '../images/dash_board.jpg'
import student from '../images/student.png'
import tour from '../images/tour.webp'
import social_media from '../images/social_media.jpg'
import pizza from '../images/pizza.webp'
import pizzahut from '../images/pizza_hut.jpg'
const Working = () => {
  return (
    <>
<section className='bg-[#F9F4F1] py-[40px]'>
  <div className="container">
 <h2 className={`${vollkorn.className} font-medium text-[30px] text-[#00413D] text-center mt-[120px] mb-[40px]`}>My Working Portfolio</h2>
  <div className='flex gap-[29px]'>
    <SmallCard marginTop={'mt-[120px]'} img={chat}/>
    <BigCard img={cake}/>
    <SmallCard marginTop={'mt-[120px]'} img={tour}/>
    {/* -122px; */}
  </div>
  <div className='flex gap-[29px]'>
    <BigCard marginTop={'mt-[-122px]'} img={dashboard}/>
    <SmallCard marginTop={'mt-[20px]'} img={student}/>
      <BigCard marginTop={'mt-[-122px]'} img={foodDelivery}/>
  </div>
  <div className='flex gap-[29px]'>
    <SmallCard marginTop={'mt-[20px]'} img={social_media}/>
     <BigCard marginTop={'mt-[-95px]'} img={pizza}/>
      <SmallCard marginTop={'mt-[20px]'} img={pizzahut}/>
  </div>
  </div>

</section>
    </>
  )
}

export default Working