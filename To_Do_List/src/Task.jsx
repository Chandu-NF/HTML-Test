import React from 'react';

function Task({taskName, Delete}) {
  return (
      <ul className="list">
        <li > {taskName}   <button onClick={Delete} className='deleteButton'>  X  </button> </li>
      </ul>

  )
}

export default Task


