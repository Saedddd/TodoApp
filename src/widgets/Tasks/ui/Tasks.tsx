import React from 'react'
import { TaskProps } from '../types'

const Tasks:React.FC<TaskProps> = ({tasks}) => {
  return (
    <div>
         <tr key={tasks.id}>
            <td>{tasks.text}</td>
            <td>da</td>
        </tr>
    </div>
  )
}

export default Tasks