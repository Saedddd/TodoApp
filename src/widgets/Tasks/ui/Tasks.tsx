import React from 'react'
import { TaskProps } from '../types'

const Tasks:React.FC<TaskProps> = ({tasks}) => {
  return (
    <>
         <tr key={tasks.id}>
            <td>{tasks.text}</td>
            <td>Da</td>
        </tr>
    </>
   
  )
}

export default Tasks