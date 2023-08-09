import { NavLink } from 'react-router-dom';
import logo from './images/planet.png';

const Header = () => (
  <div className="Header">
    <header>
      <nav className="bg-primary">
        <div className="nav-container">
          <img className="logo" alt="logo" src={logo} />
          <h2 className="text-light">Space Travelers&apos; Hub</h2>
        </div>
        <div>
          <ul className="navlist">
            <NavLink to="./rockets" className="btn btn-outline-light">Rockets</NavLink>
            <NavLink to="./myprofile" className="btn btn-outline-light">My Profile</NavLink>
          </ul>
        </div>
      </nav>
    </header>
  </div>
);

export default Header;
