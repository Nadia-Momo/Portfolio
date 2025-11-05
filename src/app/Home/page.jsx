import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import About from '../components/About'
import Working from '../components/Working'
import View from '../components/View'
import Service from '../components/Service'
import Award from '../components/Award'
import Blog from '../components/Blog'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>

      <Navbar/>
      <Banner/>
    
      <About/>
      <Working/>
<View/>
      <Service/> 
      <Award/>
      <Blog/> 
      <Subscribe/>
      <Footer/> 
    </div>
  )
}

export default Homepage