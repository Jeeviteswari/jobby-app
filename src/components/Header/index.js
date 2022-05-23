import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <nav className="navbar">
      <div className="navbar-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          className="website-logo"
          alt="website logo"
        />
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/jobs" className="nav-link">
            <li>Jobs</li>
          </Link>
        </ul>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  </>
)

export default Header
