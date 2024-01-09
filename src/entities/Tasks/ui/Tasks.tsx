import React from 'react'
import { TodoListProps } from '../types';

const Tasks:React.FC<TodoListProps> = ({tasks}) => {
  return (
    <div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {tasks.map(tasks =>(
                    <tr key={tasks.id}>
                        <td>{tasks.text}</td>
                        <td>Quality Control Specialist</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Tasks;