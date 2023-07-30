import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class SideBar extends Component {
  state = {dashBoard: false, allTrans: true, profile: true}

  onClickDashBoard = () => {
    this.setState({
      allTrans: true,
      dashBoard: false,
      profile: true,
    })
  }

  onClickTrans = () => {
    this.setState({
      dashBoard: true,
      allTrans: false,
      profile: true,
    })
  }

  onClickProfile = () => {
    this.setState({
      dashBoard: true,
      allTrans: true,
      profile: false,
    })
  }

  render() {
    const {dashBoard, allTrans, profile} = this.state
    console.log(dashBoard, allTrans, profile)

    return (
      <div className="left-side-container">
        <div>
          <div className="logo-text-container">
            <img className="logo" alt="logo" src="https://hmp.me/d6r0" />
            <h1 className="money-matters-text">
              Money <span className="matter-text">Matters</span>
            </h1>
          </div>

          <div>
            <Link className="link-el" to="/dashboard">
              {dashBoard ? (
                <button
                  onClick={this.onClickDashBoard}
                  type="button"
                  className="dashboard-container"
                >
                  <img
                    className="home-logo"
                    alt="home"
                    src="https://hmp.me/d6u3"
                  />
                  <p className="dashboard-text">Dashboard</p>
                </button>
              ) : (
                <button
                  onClick={this.onClickDashBoard}
                  type="button"
                  className="dashboard-container"
                >
                  <img
                    className="home-logo"
                    alt="home"
                    src="https://hmp.me/d6r2"
                  />
                  <p className="dashboard-blue-text">Dashboard</p>
                </button>
              )}
            </Link>

            <Link className="link-el" to="/transactions">
              {allTrans ? (
                <button
                  onClick={this.onClickTrans}
                  type="button"
                  className="all-transactions-container"
                >
                  <img
                    className="home-logo"
                    alt="home"
                    src="https://hmp.me/d6u5"
                  />
                  <p className="allTrans-text">All Transactions</p>
                </button>
              ) : (
                <button
                  onClick={this.onClickTrans}
                  type="button"
                  className="all-transactions-container"
                >
                  <img
                    className="home-logo"
                    alt="home"
                    src="https://hmp.me/d6u6"
                  />
                  <p className="allTrans-blue-text">All Transactions</p>
                </button>
              )}
            </Link>

            <Link className="link-el" to="/profile">
              {profile ? (
                <button
                  onClick={this.onClickProfile}
                  type="button"
                  className="profile-container"
                >
                  <img
                    className="home-logo"
                    alt="home"
                    src="https://hmp.me/d6u7"
                  />
                  <p className="dashboard-text">Profile</p>
                </button>
              ) : (
                <button
                  onClick={this.onClickProfile}
                  type="button"
                  className="profile-container"
                >
                  <img
                    className="home-logo"
                    alt="home"
                    src="https://hmp.me/d6u8"
                  />
                  <p className="dashboard-blue-text">Profile</p>
                </button>
              )}
            </Link>
          </div>
        </div>
        <div className="logout-container">
          <img
            className="profile-image"
            alt="avatar"
            src="https://hmp.me/d6vf"
          />
          <div className="profile-text-container">
            <p className="user-name">Rhye</p>
            <p className="gmail-text">olivia@untitledui.com</p>
          </div>

          <Link className="link-el" to="/">
            <button className="logout-button" type="button">
              <img
                className="logout-image"
                alt="logout"
                src="https://hmp.me/d6vk"
              />
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default SideBar
