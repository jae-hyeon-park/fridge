import React from 'react'
import { useLocation } from 'react-router-dom';

const Next = () => {
    

    const {state} = useLocation();
    const {foodId} = state;

    console.log(foodId);

  return (
    <div>Next {foodId}</div>
  )
}

export default Next