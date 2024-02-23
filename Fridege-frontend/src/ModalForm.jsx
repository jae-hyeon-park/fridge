import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import makeOptions from './util'

const ModalForm = ({onClose, foodId, action, inventoryId}) => {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [password, setPassword] = useState();


    const onClick = () => {
        (action==='add'? addInventory() : deleteInventory());
    }

    

     const addInventory = () => {
         fetch("http://43.201.115.15:8080/inventory/", makeOptions('POST', JSON.stringify({"foodId" : foodId,"ownerName" : name, "ownerPwd" : password})) )
            .then((response) => {
                if(response.status != 200)
                    alert("에러!!")
            })
            //.finally(navigate('/inventory',  { state:  {key: Math.random().toString() }}));
            .finally(window.location.replace('/inventory'));
        
    }
    
    const deleteInventory = () => {
        
        fetch(`http://43.201.115.15:8080/inventory`, makeOptions('DELETE', JSON.stringify({"inventoryId" : inventoryId, "ownerPassword" : password})) )
        .then((response) => {
            if(response.status != 200)
                alert("에러!!")
        })
        
        onClose();
        window.location.replace('/inventory');

        
    }

  return (
    <>
        <div className='flex-col'>
            <div className='p-3'> 
                <h3 style={{fontFamily:"Bagel Fat One", fontSize:"2em"}}>{(action==='add'? "냉장고에 담기" : "먹어버리기")}</h3>
            </div>
            <div className='p-3 flex-row space-x-10'>
                
                <label className='pr-4'>소유주 이름</label>
                <input placeholder='김우리' onChange={e=> setName(e.target.value) }></input>
                
            </div>
            <div className='p-3 flex-row space-x-10'>
            
                <label className='pr-4'>비밀번호</label>
                <input placeholder='dontEatMyFood' onChange={e=> setPassword(e.target.value) }></input>
                
            </div>

            <button className="inline-flex items-center rounded-md text-xl  bg-[#637A9F] shadow-sm hover:bg-[#0C2D57] px-5 py-2 text-white ring-1 ring-inset ring-gray-500/10"
                onClick={onClick}>
                {(action==='add'? "담기" : "먹기")}
            </button>
        </div>
    </>
  )
}


export default ModalForm