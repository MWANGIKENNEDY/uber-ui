import { Nearby } from '@/utils/types'
import Image from 'next/image'
import React from 'react'

function SmallCard({dataItem}:{dataItem:Nearby}) {
  return (
    <div className='flex items-center mt-4 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out'>
<div className='relative h-16 w-16'>
<Image alt="" className=' rounded-lg' src={dataItem.img} fill objectFit='cover'/>
</div>
     <div>
      <h2>{dataItem.location}</h2>
      <h3 className=' text-gray-500'>{dataItem.distance}</h3>
     </div>
    </div>
  )
}

export default SmallCard