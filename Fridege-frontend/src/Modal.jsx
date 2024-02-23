import React from 'react'
import ModalForm from './ModalForm'

const Modal = ({onClose, isOpen, foodId, action, inventoryId}) => {
  return (
    <>
    <div data-cy="modal-backdrop" className='fixed top-0 left-0 w-full h-full backdrop-blur-md z-30' onClick={onClose}>
    </div>
    <div className='fixed z-40 w-1/3 p-8 m-0 transform -translate-x-1/2 -translate-y-1/2 border-none rounded shadow-xl top-1/2 left-1/2 bg-[#C9D7DD]'>
            <ModalForm onClose={onClose} foodId={foodId} action={action} inventoryId={inventoryId}></ModalForm>
        </div>
    </>
  )
}

export default Modal