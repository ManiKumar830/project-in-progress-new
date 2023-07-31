import {Component} from 'react'
import {Link} from 'react-router-dom'
import DetailsPage from '../DetailsPages'

import './index.css'

const allPages = [
  {
    id: 1,
    BlueImageUrl: 'https://hmp.me/d6r2',
    NormalImageUrl: 'https://hmp.me/d6u3',
    text: 'Dashboard',
    link: '/admin/dashboard',
  },

  {
    id: 2,
    BlueImageUrl: 'https://hmp.me/d6u6',
    NormalImageUrl: 'https://hmp.me/d6u5',
    text: 'All Transactions',
    link: '/admin/transactions',
  },

  {
    id: 3,
    BlueImageUrl: 'https://hmp.me/d6u8',
    NormalImageUrl: 'https://hmp.me/d6u7',
    text: 'Profile',
    link: '/admin/profile',
  },
]

class SideBar extends Component {
  state = {activeId: allPages[0].id}

  onChangePageView = id => {
    this.setState({activeId: id})
  }

  render() {
    const {activeId} = this.state
    console.log(activeId)

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
            <ul className="ul-list">
              {allPages.map(eachItem => (
                <DetailsPage
                  isActive={activeId === eachItem.id}
                  key={eachItem.text}
                  pageDetails={eachItem}
                  onChangePageView={this.onChangePageView}
                />
              ))}
            </ul>
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
