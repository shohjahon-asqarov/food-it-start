import React from 'react'
import SpecialDishes from './components/SpecialDishes'
import Testimonials from './components/Testimonials'
import Servies from './components/Servies'
import Footer from './components/Footer'

// Import Swiper styles
import 'swiper/css';

const App = () => {
  return (
    <div className='space-y-32'>
      <SpecialDishes />
      <Testimonials />
      <Servies />
      <Footer />
    </div>
  )
}

export default App