import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">Home</a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">Shop</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 