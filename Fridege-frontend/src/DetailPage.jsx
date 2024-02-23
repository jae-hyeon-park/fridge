import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useParams } from "react-router-dom";
import Modal from './Modal';

const DetailPage = () => {

    let navigate = useNavigate();

    const { id } = useParams();
    const [food, setFood] = useState({});
    const [isOpen, open] = useState(false);
    const openModal = () => open(true);
    const closeModal = () => open(false);

    let goBack = () => {
        navigate(-1);
    }

    fetch(`http://43.201.115.15:8080/food/${id}`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            setFood(response);
        });

    return (
        <>
            <div className="grid place-items-center pt-10">
                <div className='grid place-items-center bg-blue-300 h-196 p-5 m-10 flex-col items-center' >
                    <div><img className='size-80' src={food.img} alt="음식 사진" /></div>
                    <div>
                        <div className='text-center text-4xl font-semibold pt-5'>{food.food}</div>
                        <div className='text-center text-xl font-semibold pt-2'>{food.detail} </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center align-middle">
                <button type="button" className="mr-5 px-7 py-3 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={goBack}>목록으로 돌아가기</button>
                <button type="button" className="px-7 py-3 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={openModal}>냉장고에 담기</button>
            </div>
            {isOpen && createPortal(
                <Modal isOpen={isOpen} onClose={closeModal} foodId = {food.foodId} action="add"></Modal>,
                document.body
            )}
        </>
    )
}

export default DetailPage