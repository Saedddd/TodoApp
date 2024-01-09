import React from 'react'

import { FaPlus } from "react-icons/fa";

const AddTask = () => {
  return (
    <div>
        <button className='btn btn-primary w-full'>
            ADD NEW TASK
            <FaPlus size={15} />
        </button>
    </div>
  )
}

export default AddTask;