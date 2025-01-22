import './UserSchedule.css';
import musicicon from '../icons/musicnote.png';
import { useState } from 'react';

function UserSchedule() {
  const [userSchedule, setUserSchedule] = useState([]);
  const [userName, setUserName] = useState('')
  const [userId, setUserId] = useState('');
  const [error, setError] = useState(null);

  function getUserSchedule() {
    fetch(`http://127.0.0.1:3000/api/v1/schedules/${userId}`)
    .then(response => {
      if (!response.ok) {
        console.log(response)
        throw new Error("Failed to retrieve user schedule.")
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
      setUserName(data.user_name)
      setUserSchedule(data.schedules)
    })
    .catch(error => setError("Failed to retrieve user schedule."))
  }
  if (error){
    return <p>{error}</p>
  }
  return (
    <>
      <h2>User Schedule</h2>
      <p>Enter the ID of a user to see their schedule:</p>
      <label htmlFor="userid">User ID:</label>
      <input type="text" id="userid" value={userId} onChange={(e) => setUserId(e.target.value)}></input>
      <button onClick={ () => getUserSchedule()}>Submit</button>
      {userName && <h3>Schedule for {userName}</h3>}
      <ul>
      {userSchedule.map((show, index) => (
          <li key={index}>
            <img src={musicicon} alt='Music Notes' /><strong>{show.title}</strong> - {show.date}
          </li>
        ))}
      </ul>
    </>
  )
}

export default UserSchedule;