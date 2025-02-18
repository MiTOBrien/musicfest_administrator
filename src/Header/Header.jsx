import './Header.css';
import { NavLink } from 'react-router-dom';
import homebtn from '../icons/home.png';


function Header() {
  return (
    <>
      <nav>
        <NavLink to="/" className="home">
          <img className="homebtn" src={ homebtn } alt="Back to home page" />
        </NavLink>
        <NavLink to="/fullschedule" className="fullschedule">Full Schedule</NavLink>
        <NavLink to="/userschedule" className="userschedule">User Schedule</NavLink>
        <NavLink to="/deleteshow" className="deleteshow">Delete Show</NavLink>
      </nav>
      <h1>MusicFest Administrator</h1>
    </>
  )
}

export default Header;