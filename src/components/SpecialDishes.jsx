import React from 'react'
import { EggVegi, Fattoush, Left, Star, Vegetable } from '../assets/data'

const SpecialDishes = () => {
    const data = [
        {
            id: 1,
            img: Fattoush,
            title: 'Fattoush salad',
            description:'Description of the item',
            price: '$24.00',
            raiting: '4.9'
        },
        {
            id: 2,
            img: Vegetable,
            title: 'Vegetable  salad',
            description:'Description of the item',
            price: '$26.00',
            raiting: '4.6'
        },
        {
            id: 3,
            img: EggVegi,
            title: 'Egg vegi salad',
            description:'Description of the item',
            price: '$23.00',
            raiting: '4.5'
        }
    ]
    return (
        <section>
            <div className="container">
                <div className='flex justify-between items-end'>
                    <div className='space-y-10'>
                        <p className='subtitle'>Special Dishes</p>
                        <h2 className='leading-[50px]'>Standout Dishes <br /> From Our Menu</h2>
                    </div>
                    <div className='flex space-x-8 items-end'>
                        <button className='bg-grey-100 hover:bg-green-300 p-5 flex items-center justify-center'><img  src={Left} alt="arrow_left" /></button>
                        <button className='bg-grey-100 hover:bg-green-300 p-5 flex items-center justify-center rotate-180'><img  src={Left} alt="arrow_left" /></button>
                    </div>
                </div>
                <ul className='grid grid-cols-3 gap-10 items-center mt-16'>
                {data.map(id => {
                        return(
                                <li className='shadow-servise-card rounded-[40px] p-9 space-y-3 max-w-[446px]'>
                                <img className='mx-auto max-w-[276px]' src={id.img} alt="" />
                                <h3>{id.title}</h3>
                                <p className='text-grey-200'>{id.description}</p>
                                <div className='flex justify-between items-center' ><p>{id.price}</p> <span className='flex gap-2'><img src={Star} alt="" /><b>{id.raiting}</b></span></div>
                            </li>
                        )
                    })
                }
                </ul>

            </div>
        </section>
    )
}

export default SpecialDishes