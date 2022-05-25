import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onclickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <nav className="navbar-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </div>
        <ul className="nav-menu">
          <Link to="/" className="link-item">
            <li className="list-item">Home</li>
          </Link>
          <Link to="/jobs" className="link-item">
            <li className="list-item">Jobs</li>
          </Link>
        </ul>
        <div>
          <button
            type="button"
            className="logout-button"
            onClick={onclickLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  )
}
export default withRouter(Header)
