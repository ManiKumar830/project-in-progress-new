import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {history} = this.props

    const {email, password} = this.state

    // Check if the response contains the user_id property

    // For simplicity, we are considering Admin's password to be static
    if (email === 'admin@gmail.com' && password === 'Admin@123') {
      // Redirect to Admin Dashboard
      history.push('/dashboard')
    } else if (email === 'jane.doe@gmail.com' && password === 'janedoe@123') {
      history.push('/user/1')
    } else if (email === 'samsmith@gmail.com' && password === 'samsmith@123') {
      history.push('/user/2')
    } else if (email === 'rahul@gmail.com' && password === 'rahul@123') {
      history.push('/user/4')
    } else if (email === 'teja@gmail.com' && password === 'teja@123') {
      history.push('/user/5')
    } else if (email === 'loki@gmail.com' && password === 'loki@123') {
      history.push('/user/6')
    } else if (email === 'ramesh@gmail.com' && password === 'ramesh@123') {
      history.push('/user/7')
    } else if (email === 'suresh@gmail.com' && password === 'suresh@123') {
      history.push('/user/8')
    } else if (email === 'prem@gmail.com' && password === 'prem@123') {
      history.push('/user/9')
    } else if (email === 'piyush@gmail.com' && password === 'piyush@123') {
      history.push('/user/10')
    } else {
      console.log('error')
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="PASSWORD"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="email"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="EMAIL"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="login-logo-container">
            <img
              src="https://hmp.me/d6r0"
              className="login-website-logo-desktop-img"
              alt="website logo"
            />
            <h1 className="login-money-matters-text">
              Money <span className="login-matter-text">Matters</span>
            </h1>
          </div>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
