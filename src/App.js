import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import FullSchedule from './FullSchedule/FullSchedule';
import UserSchedule from './UserSchedule/UserSchedule';
import DeleteShow from './DeleteShow/DeleteShow';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h2>Festival Management System</h2>
      <ul>
      <li>List your full event show schedule</li>
      <li>List individual attendee schedules</li>
      <li>Delete shows from schedules</li>
      <li><strong>More feautures coming soon!</strong></li>
      </ul>
      <Routes>
        <Route path="/fullschedule" element={ <FullSchedule /> } />
        <Route path="/userschedule" element={<UserSchedule />} />
        <Route path="/deleteshow" element={<DeleteShow />} />
      </Routes>
    </div>
  );
}

export default App;