// import React from 'react'
import Card from './Card'

const FridgeBody = ({items}) => {
  return (


    // <span>{item.title}</span>
    <span id="fridgeBody" className="flex flex-row justify-center flex-start container flex-wrap">{items.map(item=><Card item={item} key={item.inventoryId}/>)}</span>
  )
}

export default FridgeBody