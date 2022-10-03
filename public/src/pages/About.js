import React from 'react'
import AboutGallery from '../components/about/AboutGallery'
import AboutSection from '../components/about/AboutSection'
import  Breadcrumb  from '../components/about/Breadcrumb'
import ClientReviewSection from '../components/home/ClientReviewSection'
import Services from '../components/home/Services'
import UpcomingEvent from '../components/home/UpcomingEvent'

function About() {
  return (
    <div>
      <Breadcrumb/>
      <AboutSection/>
      <UpcomingEvent/>
      <Services/>
      <ClientReviewSection/>
      <AboutGallery/>
    </div>
  )
}

export default About
