import React from 'react'
import { Bg, Cheff, People1, People2, People3, Star } from '../assets/data'

const Testimonials = () => {
    
    return (
        <section>
            <div className="container">
                <div className=' p-5 md:grid grid-cols-2 flex flex-col space-y-6 justify-center items-center'>
                    <div className='flex justify-center'>
                        <img className='max-w-80 md:max-w-96 relative z-10' src={Cheff} alt="Cheff picture" />
                        <img className='max-w-80 mt-[266px] absolute md:max-w-96 md:mt-80' src={Bg} alt="" />
                    </div>
                    <div className='space-y-9'>
                        <p className='subtitle'>Testimonials</p>
                        <h2>What Our Customers <br /> Say About Us</h2>
                        <p className='text-grey-200'>“I had the pleasure of dining at Foodi last night, and <br /> I'm still raving about the experience! The attention to <br /> detail in presentation and service was impeccable”</p>
                        <ul className='flex space-x-6 items-center'>
                            <li className='flex space-x-2'><img src={People1} alt="Karmen" />
                                <img src={People3} alt="Sara" />
                                <img src={People2} alt="John" />
                            </li>
                            <li>
                                <p>Customer Feedback</p>
                                <li className='flex space-x-2 ic'><img src={Star} alt="reiting" />
                                    <span className='text-grey-200'>4.9  (18.6k Reviews)</span></li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials