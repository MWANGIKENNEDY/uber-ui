import Image from 'next/image'
import React from 'react'

const LargeCard = () => {
  return (
    <section className=' py-16 cursor-pointer relative'>

        <div className='relative h-96 min-w-300px'>

            <Image alt='' fill objectFit='cover' src="https://links.papareact.com/4cj" className=' rounded-2xl'/>

        </div>

        <div className="absolute top-32 left-12">
            <h3 className=' text-4xl mb-3 w-64'>The Greatest Outdoors</h3>

            <p>Wishlists curated by Airbnb.</p>

            <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>Get Inspired</button>
        </div>
    </section>
  )
}

export default LargeCard