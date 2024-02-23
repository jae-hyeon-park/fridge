import React, { useEffect, useState } from 'react'
import Food from './Food'


const dummyData = [
    {
      id: 1,
      product: '사이다',
      
      img: "/images/cider.jpg"
    },
    {
      id: 2,
      product: '바나나우유',
      
      img: "../../public/images/bananaMilk.jpg"
    },
    {
      id: 3,
      product: '환타',
    
      img: "../../../images/fanta.jpg"
    }
  ]

  



const StoreBody = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const url = 'http://43.201.115.15:8080/food';
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setFoods(data);
                console.log(data);
            })
            .catch(error => console.error(error));
        }, []);
    
    // const [foods, setFoods] = useState(foodList);


   

  return (
    <div className='max-w-xl mx-auto min-w-[20rem]'>

            <div className='flex justify-end'>
            </div>
            

              <section>
              <ul className='px-0 my-8'>
                 {foods.map((food) => <Food food={food} key={food.foodId}></Food>) }
                 
             </ul>
            </section>
    </div>
  )
}

export default StoreBody