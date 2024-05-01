import { MediumCardType } from '@/utils/types'
import Image from 'next/image'
import React from 'react'

const MediumCard = ({data}:{data:MediumCardType}) => {
  return (
    <div className=' cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>

        <div className='relative h-80 w-80 '>
        <Image fill src={data.img} className='rounded-xl' alt=''  fill objectFit='cover' />
        </div>

       <div>
        <h2 className='text-2xl mt-3'>{data.title}</h2>
       </div>
    </div>
  )
}

export default MediumCard