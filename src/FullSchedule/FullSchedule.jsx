import './FullSchedule.css';
import musicicon from '../icons/musicnote.png';
import { useState, useEffect } from 'react';

function FullSchedule() {
  const [schedule, setSchedule] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSchedule()
  }, [])

  function getSchedule() {
    fetch('http://localhost:3000/api/v1/schedules')
    .then(response => {
      if (!response.ok) {
        console.log(response)
        throw new Error("Failed to retrieve schedules.")
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
      setSchedule(data)
    })
    .catch(error => setError("Failed to retrieve schedules."))
  }
  if (error){
    return <p>{error}</p>
  }
  return (
    <>
      <h2>Festival Schedule</h2>
      <ul>
      {schedule.map((show, index) => (
          <li key={index}>
            <img src={musicicon} alt='Music Notes' /><strong>{show.title}</strong> - {show.date}
          </li>
        ))}
      </ul>
    </>
  )
}

export default FullSchedule;