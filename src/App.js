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
      <h3><strong>More feautures coming soon!</strong></h3>
      <Routes>
        <Route path="/fullschedule" element={ <FullSchedule /> } />
        <Route path="/userschedule" element={<UserSchedule />} />
        <Route path="/deleteshow" element={<DeleteShow />} />
      </Routes>
    </div>
  );
}

export default App;