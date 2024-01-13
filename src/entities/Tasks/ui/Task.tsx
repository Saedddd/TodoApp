import React from 'react'
import { TodoListProps } from '../types';

import Tasks from '@/widgets/Tasks/ui/Tasks';

const Task:React.FC<TodoListProps> = ({tasks}) => {
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
                   <Tasks  key={tasks.id} tasks = {tasks}/>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Task;