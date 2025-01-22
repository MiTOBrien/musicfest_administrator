import './DeleteShow.css'
import { use, useState } from 'react';

function DeleteShow() {
  const [deleteMessage, setDeleteMessage] = useState('');
  const [showId, setShowId] = useState('')

  function showToDelete() {
    fetch(`http://127.0.0.1:3000/api/v1/schedules/${showId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        console.log(response)
        throw new Error("Unable to delete show")
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
      setDeleteMessage("Show successfully deleted.")
      setShowId('')
    })
    .catch(error => {
      console.log(error)
      setDeleteMessage("Failed to delete show. Please confirm the ID and try again.")
    })
  }

  return (
    <>
      <h2>Delete Show</h2>
      <p>Enter the ID of a show to delete from a schedule:</p>
      <label htmlFor="showid">Show ID:</label>
      <input type="text" id="showid" value={showId} onChange={(e) => setShowId(e.target.value)}></input>
      <button onClick={ () => showToDelete() }>DELETE</button>
      {deleteMessage && <p className="delete-message">{deleteMessage}</p>}
    </>
  )
}

export default DeleteShow;