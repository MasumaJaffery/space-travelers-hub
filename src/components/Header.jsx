import logo from './images/planet.png';

const Header = () => (
  <div className="Header">
    <header>
      <nav>
        <div className="nav-container">
          <img className="logo" alt="logo" src={logo} />
          <h2>Space Travelers&apos; Hub</h2>
        </div>
      </nav>
    </header>
  </div>
);

export default Header;
