import {Component} from 'react'
import {Link} from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies

import DetailsPage from '../UserPage/UserDetailsPages'

import './index.css'

const allPages = [
  {
    id: 1,
    BlueImageUrl: 'https://hmp.me/d6r2',
    NormalImageUrl: 'https://hmp.me/d6u3',
    text: 'Dashboard',
    link: `/user/`,
  },

  {
    id: 2,
    BlueImageUrl: 'https://hmp.me/d6u6',
    NormalImageUrl: 'https://hmp.me/d6u5',
    text: 'All Transactions',
    link: '/transaction',
  },

  {
    id: 3,
    BlueImageUrl: 'https://hmp.me/d6u8',
    NormalImageUrl: 'https://hmp.me/d6u7',
    text: 'Profile',
    link: '/profile',
  },
]

class ProfilePage extends Component {
  state = {activeId: allPages[2].id}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    console.log('mani ', id)
    const url = 'https://bursting-gelding-24.hasura.app/api/rest/profile'
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
        'x-hasura-role': 'user',
        'x-hasura-user-id': 1,
      },
    }

    const response = await fetch(url, options)
    const jsonData = await response.json()
    console.log(jsonData)
  }

  onChangePageView = id => {
    this.setState({activeId: id})
  }

  render() {
    const {activeId} = this.state
    return (
      <div className="bg-container-2">
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

        <div className="Transaction-Header-container-1">
          <div className="tr-container">
            <h1 className="accounts-text">Profile</h1>
            <div className="add-transaction">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99984 4.16666V15.8333M4.1665 9.99999H15.8332"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <button className="transaction-button" type="button">
                Add Transaction
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfilePage
