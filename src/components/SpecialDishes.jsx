import React, { useState } from 'react'
import { EggVegi, Fattoush, Left, Star, Vegetable } from '../assets/data'

import { Swiper, SwiperSlide } from 'swiper/react';

const SpecialDishes = () => {


    const data = [
        {
            id: 1,
            img: Fattoush,
            title: 'Fattoush salad',
            description: 'Description of the item',
            price: '$24.00',
            raiting: '4.9'
        },
        {
            id: 2,
            img: Vegetable,
            title: 'Vegetable  salad',
            description: 'Description of the item',
            price: '$26.00',
            raiting: '4.6'
        },
        {
            id: 3,
            img: EggVegi,
            title: 'Egg vegi salad',
            description: 'Description of the item',
            price: '$23.00',
            raiting: '4.5'
        },
        {
            id: 4,
            img: Fattoush,
            title: 'Fattoush salad',
            description: 'Description of the item',
            price: '$24.00',
            raiting: '4.9'
        },
        {
            id: 5,
            img: Vegetable,
            title: 'Vegetable  salad',
            description: 'Description of the item',
            price: '$26.00',
            raiting: '4.6'
        },
        {
            id: 6,
            img: EggVegi,
            title: 'Egg vegi salad',
            description: 'Description of the item',
            price: '$23.00',
            raiting: '4.5'
        }
    ]



    const [custom_swiper, set_swiper] = useState({});
    const nextSlide = () => {
        custom_swiper.slideNext();
    };
    const prevSlide = () => {
        custom_swiper.slidePrev();
    };

    return (
        <section>
            <div className="container">
                <div className='flex justify-between items-end'>
                    <div className='space-y-10'>
                        <p className='subtitle'>Special Dishes</p>
                        <h2 className='leading-[50px]'>Standout Dishes <br /> From Our Menu</h2>
                    </div>
                    <div className='flex space-x-8 items-end'>
                        <button onClick={prevSlide} className='icon-btn-md'><img src={Left} alt="arrow_left" /></button>
                        <button onClick={nextSlide} className='icon-btn-md rotate-180'><img src={Left} alt="arrow_left" /></button>
                    </div>
                </div>


                <Swiper className='pt-16 pb-10'
                    spaceBetween={30}
                    slidesPerView={1}
                    onInit={(ev) => {
                        set_swiper(ev);
                    }}

                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        1000: {
                            slidesPerView: 3,
                        },
                    }}

                >
                    {data.map((product, index) => {
                        return (
                            <SwiperSlide key={index} className='shadow-servise-card rounded-[40px] p-9 space-y-3'>
                                <img className='mx-auto' src={product.img} alt="" />
                                <h3>{product.title}</h3>
                                <p className='text-grey-200'>{product.description}</p>
                                <div className='flex justify-between items-center' ><p>{product.price}</p> <span className='flex gap-2'><img src={Star} alt="" /><b>{product.raiting}</b></span></div>
                            </SwiperSlide>
                        )
                    })
                    }
                </Swiper>

            </div>
        </section>
    )
}

export default SpecialDishes