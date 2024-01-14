'use client'


import React, { FormEventHandler, useState } from 'react'
import { TaskProps } from '../types'

import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

import Modal from '@/entities/Modal/Modal';
import { editTodo } from '@/shared/api/TaskApi';

const Tasks:React.FC<TaskProps> = ({tasks}) => {
  const [modalOpen, setModalOpen]  = useState<boolean>(false);
  const [todoDelete, setTodoDelete] = useState<boolean>(false);
  const [todoEdit, setTodoEdit] = useState<string>(tasks.text);


  const handleSubmitEditToDo: FormEventHandler<HTMLFormElement> = async (e) =>{
    e.preventDefault();

    await editTodo({
      id: tasks.id,
      text: todoEdit,
    })

    setTodoEdit('');
    setModalOpen(false);
  }


  return (
    <>
         <tr key={tasks.id}>
            <td className='w-full'>{tasks.text}</td>
            <td className='flex gap-5 cursor-pointer'>
              <FiEdit onClick={()=> setModalOpen(true)} />

              <Modal 
                modalOpen = {modalOpen} 
                onClose={()=> setModalOpen(false)}>

                <form onSubmit={handleSubmitEditToDo}>
                  <label>
                      Edit task
                      <div className="modal-action">

                          <input 
                            value={todoEdit}
                            onChange={(e) => setTodoEdit(e.target.value)}
                            type="text" 
                            placeholder="Type here" 
                            className="input input-bordered input-primary w-full" 
                          />

                          <button type='submit' className='btn'>Submit</button>


                      </div>
                  </label>
                </form>

              </Modal>

              <FiTrash2 />
            </td>
        </tr>
    </>
   
  )
}

export default Tasks