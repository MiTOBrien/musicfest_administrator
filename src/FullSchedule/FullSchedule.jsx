import './FullSchedule.css';
import { useState, useEffect } from 'react';

function FullSchedule() {
  const [schedule, setSchedule] = useState(null);
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
      <p>{schedule}</p>
    </>
  )
}

export default FullSchedule;