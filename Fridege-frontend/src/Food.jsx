import React from 'react'
import { useNavigate } from 'react-router-dom'






const Food = ({food}) => {
    const navigate = useNavigate();
    
    const click = ()=>{
        navigate(`/food/${food.foodId}`, {state:{foodId: food.foodId}});
        
    }

  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-white rounded-md shadow-xl">
        
        <div className="flex items-center">
              <img src={food.img} alt="" className="w-32 h-32 mr-4" />
          <div>
            <h2 data-test="title" className="mb-0 text-lg font-bold text-black uppercase">{food.food}</h2>
            
          </div>
        </div>
            
        
        <div className="flex items-center gap-1">
            
        <button className="inline-flex items-center rounded-md text-xl 
         bg-orange-500 shadow-sm hover:bg-indigo-700 px-5 py-2
          text-white ring-1 ring-inset ring-gray-500/10" onClick={click}>더보기</button>

           
        </div>
    </li>
  )
}

export default Food