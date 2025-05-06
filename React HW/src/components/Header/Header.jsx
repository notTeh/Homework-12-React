import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <h1>Your Name</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;