// import React from 'react'
// import { Link } from 'react-router-dom';
import { useState } from "react";

import Modal from "./Modal";
import { createPortal } from "react-dom";

const Card = ({item}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
    const closeModal = () => {
      setIsOpen(false);
    }
  // console.log(item);


  return (
    // hover:opacity-50
    <li id ="card" className="list-none flex flex-col justify-center content-around border-solid border-2  text-center m-1" > 
          {/* <img src = "C:\woori_workspace\17.springboot\images\chocoMilk.jpg"></img> */}

          {/* <img src = "C:\woori_workspace\17.springboot\fullstack-1st-fridge\images\orangeJuice.jpeg"></img> */}
          <img src={item.img}></img>
          <div>
            <h4>{item.foodName}</h4>
          </div>
          <div >
            <h5 >주인: {item.ownerName}</h5>
          </div>
          
<button className="text-2xl px-8 py-4 bg-gradient-to-r from-pink-300 to-blue-300 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
onClick={openModal}>먹고 힘내기!</button>
  {isOpen && createPortal(
  <Modal isOpen={isOpen} onClose={closeModal} action="delete" inventoryId={item.inventoryId} ></Modal>,
  document.body
)}
  


    </li>  
  )
}

export default Card