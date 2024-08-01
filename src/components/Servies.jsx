import React from 'react'
import { card1, card2, card3, card4 } from '../assets/data'

const Servies = () => {
    const data = [
        {
            img: card1,
            title: 'CATERING',
            description: 'Delight your guest with our flavers and presctation',
        },
        {
            img: card2,
            title: 'FAST DELIVERY',
            description:  'We deliver your order promptly to your door',
        }
    ]
    const data2 = [
        {
            img: card3,
            title: 'ONLINE ORDERING',
            description: 'Explore menu & order with ease listing our Online Ordering',
        },
        {
            img: card4,
            title: 'GIFT CARDS',
            description: 'Give the gift of exceptional dining with Food'
        }
    ]
  return (
    <section>
        <div className='container grid md:grid-cols-2 md:gap-14 lg:gap-24 mt-3 px-5'>
            <div className='space-y-12 text-center md:text-start'>
                <p className='subtitle'>Our Story & Services</p>
                <h2>Our Culinary Journey <br /> And Services</h2>
                <p className='text-grey-200'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
                <button className='btn-green items-center'>Explore</button>
            </div>
            {/* card right */}
            <div className='space-y-2'>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-8 text-center'>
                    {data.map(i => {
                        return(
                            <li className='servise-card rounded-xl py-6'>
                                <img className='mx-auto' src={i.img} alt="" />
                                <p className='text-green-200'>{i.title}</p>
                                <p className='text-green-300 md:text-xl'>{i.description}</p>
                            </li>
                        )
                    })
                    }
                </ul>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-8 text-center'>
                    {data2.map(i => {
                        return(
                            <li className='servise-card rounded-xl py-6'>
                                <img className='mx-auto' src={i.img} alt="" />
                                <p className='text-green-200'>{i.title}</p>
                                <p className='text-green-300 md:text-xl'>{i.description}</p>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Servies