import React from 'react'

function Task({taskName}) {
  return (
    <li className="list">

    <div className='task'>
        <p> {taskName}</p>
    </div>
    </li>
  )
}

export default Task


