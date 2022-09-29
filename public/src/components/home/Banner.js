import React from 'react'
import BannerContent from '../home/BannerContent'
import BookingForm from '../home/BookingForm'
import background from '../img/banner_bg.png'
import '../../App.css'
function Banner() {
  return (
    <div  >
       <section className='banner_Containar' style={{ backgroundImage: `url(${background})` }}> 
      <BannerContent/>
      <BookingForm/>
      </section>
    </div>
  )
}

export default Banner
