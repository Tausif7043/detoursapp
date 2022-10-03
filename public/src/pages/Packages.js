import React from 'react'
import ClientReviewSection from '../components/home/ClientReviewSection'
import Hotal_Restorent from '../components/home/Hotal_Restorent'
import Services from '../components/home/Services'
import PackagesSection from '../components/Packages/PackagesSection'

function Packages() {
  return (
    <div>
      <PackagesSection/>
      <Hotal_Restorent/>
      <ClientReviewSection/>
      <Services/>
    </div>
  )
}

export default Packages
