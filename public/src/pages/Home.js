import React from 'react'
import Banner from '../components/home/Banner'
import ClientReviewSection from '../components/home/ClientReviewSection'
import Hotal_Restorent from '../components/home/Hotal_Restorent'
import Place from '../components/home/Place'
import Services from '../components/home/Services'
import UpcomingEvent from '../components/home/UpcomingEvent'

function Home() {
  return (
    <div>
      <Banner/>
      <Place/>
      <UpcomingEvent/>
      <Hotal_Restorent/>
      <ClientReviewSection/>
      <Services/>
    </div>
  )
}

export default Home
