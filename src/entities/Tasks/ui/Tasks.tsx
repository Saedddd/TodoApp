import React from 'react'

const Tasks = () => {
  return (
    <div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                    <tr>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Tasks;