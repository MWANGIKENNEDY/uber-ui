import { Nearby } from '@/utils/types'
import React from 'react'

function SmallCard({dataItem}:{dataItem:Nearby}) {
  return (
    <div>{dataItem.distance}</div>
  )
}

export default SmallCard