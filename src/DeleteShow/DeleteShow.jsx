import './DeleteShow.css'
import { useState } from 'react';

function DeleteShow() {
  const [show, DeleteShow] = useState('');



  return (
    <>
      <h2>Delete Show</h2>
      <p>Enter the ID of a show to delete from a schedule:</p>
      <label htmlFor="userid">User ID:</label>
      {/* <input type="text" id="userid" value={userId} onChange={(e) => setUserId(e.target.value)}></input>
      <button onClick={ () => showToDelete()}>Submit</button>
      <ul>
      {userSchedule.map((show, index) => (
          <li key={index}>
            <strong>{show.title}</strong> - {show.date}
          </li>
        ))}
      </ul> */}
    </>
  )
}

export default DeleteShow;