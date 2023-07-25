"use client"

import Navbar from './components/navbar/Navbar'
import React, { useState,useEffect } from 'react'
import Offer from './components/navbar/Offer'
import Carousel from './components/Carousel'
import Products from './components/products/Products'
import Footer from './components/Footer'

export default function Home() {
  const [show, setShow] = useState(true)
  const handleShow=()=>{
    setShow(!show);
  }
  const [hasMounted, setHasMounted] =useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  
  return (
    <div className='bg-gray-50'>
      {/* {
        show && <Offer handleOffer={handleShow}/>
      } */}
      <Navbar />
      <Carousel />
      <Products />
      <Footer />
    </div>
  )
}
