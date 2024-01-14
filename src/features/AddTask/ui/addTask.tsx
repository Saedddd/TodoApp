'use client'



import React, { FormEventHandler } from 'react'

import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import Modal from '@/entities/Modal/Modal';
import { addTodo } from '@/shared/api/TaskApi';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setnewTaskValue] = useState<string>("");

    const handleSubmitNewToDo: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      await addTodo({
        id: uuidv4(),
        text: newTaskValue,
      })
      setnewTaskValue("");
      setModalOpen(false);
    }

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

          <form onSubmit={handleSubmitNewToDo}>
            <label>
                Add new task
                <div className="modal-action">

                    <input 
                      value={newTaskValue}
                      onChange={(e) => setnewTaskValue(e.target.value)}
                      type="text" 
                      placeholder="Type here" 
                      className="input input-bordered input-primary w-full" 
                    />

                    <button type='submit' className='btn'>Submit</button>


                </div>
            </label>
          </form>

        </Modal>


    </div>
  )
}

export default AddTask;