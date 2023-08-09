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
            <NavLink to="./myprofile" activeClassName="active">My Profile</NavLink>
            <NavLink to="/misions" activeClassName="active">Mision</NavLink>
            <NavLink to="./rockets" activeClassName="active">Rockets</NavLink>
          </ul>
        </div>
      </nav>
    </header>
  </div>
);

export default Header;
