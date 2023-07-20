"use client"

import Image from 'next/image'
import Navbar from './components/navbar/Navbar'
import React, { useState } from 'react'
import Offer from './components/navbar/Offer'

export default function Home() {
  const [show, setShow] = useState(true)
  const handleShow=()=>{
    setShow(!show);
  }
  return (
    <div className='bg-gray-50'>
      {
        show && <Offer handleOffer={handleShow}/>
      }
      <Navbar />
    </div>
  )
}
