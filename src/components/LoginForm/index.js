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

    const url = `https://bursting-gelding-24.hasura.app/api/rest/get-user-id?email=${email}&password=${password}`

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
      },
    }

    const response = await fetch(url, options)
    const jsonData = await response.json()
    console.log(jsonData)

    const loginId = jsonData.get_user_id[0].id

    // Check if the response contains the user_id property

    if (loginId === 3) {
      // Redirect to Admin Dashboard
      history.push('/admin/dashboard')
    } else if (Number.isInteger(loginId)) {
      history.push(`/user/${loginId}`)
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
