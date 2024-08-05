import React from 'react'
import SpecialDishes from './components/SpecialDishes'
import Testimonials from './components/Testimonials'
import Servies from './components/Servies'
import Footer from './components/Footer'

// Import Swiper styles
import 'swiper/css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catagories from './components/Catalog'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='space-y-32'>
        <Hero />
        <Catagories />
        <SpecialDishes />
        <Testimonials />
        <Servies />
      </main>
      <Footer />
    </>
  )
}

export default App