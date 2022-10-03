import React from 'react'
import BannerContent from '../home/BannerContent'
import BookingForm from '../home/BookingForm'

import '../../App.css'
function Banner(props) {
  return (
    <div  >
       <section className='banner_Containar' > 
      <BannerContent/>
      <BookingForm/>
         
      </section>
    </div>
  )
}

export default Banner
