import { NavLink } from 'react-router-dom';
import logo from './images/planet.png';
import './Style/misionpage.css';

const Header = () => (
  <div className="Header">
    <header>
      <nav>
        <div className="nav-container">
          <img className="logo" alt="logo" src={logo} />
          <h2>Space Travelers&apos; Hub</h2>
        </div>
        <div>
          <ul className="navlist">
            <NavLink to="./myprofile" className="btn btn-outline-primary">My Profile</NavLink>
            <NavLink to="/misions" className="btn btn-outline-primary">Mission</NavLink>
            <NavLink to="/" className="btn btn-outline-primary">Rockets</NavLink>
          </ul>
        </div>
      </nav>
    </header>
  </div>
);

export default Header;
