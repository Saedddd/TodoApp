'use client'



import React from 'react'

import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import Modal from '@/entities/Modal/Modal';

const AddTask = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <div>
        <button 
            onClick={() => setModalOpen(true)}
            className='btn btn-primary w-full'
        >
            ADD NEW TASK
            <FaPlus size={15} />
        </button>


        <Modal 
          modalOpen = {modalOpen} 
          onClose={()=> setModalOpen(false)}>

          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>

        </Modal>


    </div>
  )
}

export default AddTask;