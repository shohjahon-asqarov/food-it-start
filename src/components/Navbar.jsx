import React from 'react'
import { FLogo, IphoneIcons, NavLogo, SearchIcons, ShoppingIcons } from '../assets/data'

const Navbar = () => {
  return (
    <header className='py-6 sticky top-0 z-10 bg-white bg-opacity-90'>
        <div className="container flex items-center justify-between">
            
            {/* Nav => Logo */}
            <div className='flex items-center gap-1'>
                <img className='bg-green-300 p-1.5 rounded-md' src={FLogo} alt="logo" />
                <img src={NavLogo} alt="logo" />
            </div>

            {/* Nav */}
            <nav>
                <ul className='flex items-center gap-12'>
                    <li className='font-medium text-lg hover:text-green-300 duration-300'><a href="#">Home</a></li>
                    <li className='font-medium text-lg hover:text-green-300 duration-300'><a href="#">Menu</a></li>
                    <li className='font-medium text-lg hover:text-green-300 duration-300'><a href="#">Services</a></li>
                    <li className='font-medium text-lg hover:text-green-300 duration-300'><a href="#">Offers</a></li>
                </ul>
            </nav>

            {/* Icons => button */}
            <div>
                <div className='flex items-center gap-8'>
                    <img src={SearchIcons} alt="search" />
                    <img src={ShoppingIcons} alt="shopping" />
                    <button className='btn-green flex items-center gap-3 text-xl'>
                        <img src={IphoneIcons} alt="iphone" />
                        Contact
                    </button>
                </div>
            </div>

        </div>
    </header>
  )
}

export default Navbar