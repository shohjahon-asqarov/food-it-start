import React from 'react'
import { Facebook, Instagram, Twich, YouTube } from '../assets/data'

const Footer = () => {
    return (
        <footer>
            <div className='container mt-3'>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:mx-auto px-5 gap-3'>
                    {/* 1 */}
                    <div className='space-y-1'>
                        <p>
                            <span className='bg-green-500 text-white px-3 rounded-xl items-center font-bold'>F</span>ood
                        </p> <br />
                        <ul>
                            <li>
                                Savor the artisty where <br /> every dish is a culinary <br /> masterpience
                            </li>
                        </ul>
                    </div>
                    {/* 2 */}
                    <div className='space-y-1'>
                        <p>
                            Useful links
                        </p> <br />
                        <ul className='space-y-3'>
                            <li>About Us</li>
                            <li>Events</li>
                            <li>Blogs</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    {/* 3 */}
                    <div className='space-y-1'>
                        <p>
                            Main Menu
                        </p> <br />
                        <ul className='space-y-3'>
                            <li>Home</li>
                            <li>Offers</li>
                            <li>Menus</li>
                            <li>Reservation</li>
                        </ul>
                    </div>
                    {/* 4 */}
                    <div className='space-y-1'>
                        <p>
                            Contact Us
                        </p> <br />
                        <ul className='space-y-3'>
                            <li>example@email.com</li>
                            <li>+64 958 248 966</li>
                            <li>Social media</li>
                        </ul>
                    </div>
                </div>
                {/* cta */}
                <div className='flex items-center mt-24 space-x-44 '>
                    <div className='grid grid-cols-4 lg:grid-cols-4 gap-2'>
                        <img className='rounded-full bg-[#EDFFEF] py-3 md:py-5 hover:bg-green-300 cursor-pointer px-2 md:px-5' src={Facebook} alt="" />
                        <img className='rounded-full bg-[#EDFFEF] py-3 md:py-5 hover:bg-green-300 cursor-pointer px-2 md:px-5' src={Instagram} alt="" />
                        <img className='rounded-full bg-[#EDFFEF] py-3 md:py-5 hover:bg-green-300 cursor-pointer px-2 md:px-5' src={Twich} alt="" />
                        <img className='rounded-full bg-[#EDFFEF] py-3 md:py-5 hover:bg-green-300 cursor-pointer px-2 md:px-5' src={YouTube} alt="" />
                    </div>
                    <div>
                        <p className='text-grey-200 hidden md:block lg:block'>Copyright 2023 Dscode | All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer