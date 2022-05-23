import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMessage: ''}

  onSubmitFailure = errorMessage => {
    this.setState({showSubmitError: true, errorMessage})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitEvent = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangePassword = event => {
    this.setState({username: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="password" htmlFor="labelId">
          Password
        </label>
        <input
          type="text"
          id="labelId"
          placeholder="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="username" htmlFor="labelId">
          Username
        </label>
        <input
          type="text"
          id="labelId"
          placeholder="username"
          value={username}
          onChange={this.onChangeUserName}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMessage} = this.state
    return (
      <div className="bg-container">
        <form className="form-container" onSubmit={this.onSubmitEvent}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="website-logo"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="button" className="login-button">
            Login
          </button>
          {showSubmitError && <p>*{errorMessage}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
