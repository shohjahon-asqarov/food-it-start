import React from 'react'
import { Facebook, Instagram, Twich, YouTube } from '../assets/data'

const Footer = () => {
    return (
        <footer>
            <div className='container mt-10'>
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
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    {/* 3 */}
                    <div className='space-y-1'>
                        <p>
                            Main Menu
                        </p> <br />
                        <ul className='space-y-3'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Offers</a></li>
                            <li><a href="#">Menus</a></li>
                            <li><a href="#">Reservation</a></li>
                        </ul>
                    </div>
                    {/* 4 */}
                    <div className='space-y-1'>
                        <p>
                            Contact Us
                        </p> <br />
                        <ul className='space-y-3'>
                            <li><a href="#">example@email.com</a></li>
                            <li><a href="#">+64 958 248 966</a></li>
                            <li><a href="#">Social media</a></li>
                        </ul>
                    </div>
                </div>
                {/* cta */}
                <div className='flex items-center mt-24 space-x-44 '>
                    <div className='grid grid-cols-4 lg:grid-cols-4 gap-2'>
                        <a className='icon-btn-sm' href="#">
                            <img src={Facebook} alt="img" />
                        </a>
                        <a className='icon-btn-sm' href="#">
                            <img src={Instagram} alt="img" />
                        </a>
                        <a className='icon-btn-sm' href="#">
                            <img src={Twich} alt="img" />
                        </a>
                        <a className='icon-btn-sm' href="#">
                            <img src={YouTube} alt="img" />
                        </a>
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
