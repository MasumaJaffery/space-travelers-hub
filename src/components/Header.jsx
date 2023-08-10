import { NavLink } from 'react-router-dom';
import logo from './images/planet.png';

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
            <NavLink to="./rockets">Rockets</NavLink>
            <NavLink to="./myprofile">My Profile</NavLink>
          </ul>
        </div>
      </nav>
    </header>
  </div>
);

export default Header;
