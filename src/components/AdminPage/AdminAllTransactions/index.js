import {Component} from 'react'
import {Link} from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import {v4} from 'uuid'
import DetailsPage from '../DetailsPages'
import TransactionItem from '../TransactionItem'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

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

class AdminAllTransactions extends Component {
  state = {
    activeId: allPages[1].id,
    allTransactionsDetails: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const url =
      'https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-last-7-days-admin'
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
        'x-hasura-role': 'admin',
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const jsonData = await response.json()

      const newData = jsonData.last_7_days_transactions_totals_admin.map(
        eachItem => ({
          id: v4(),
          date: eachItem.date,
          sum: eachItem.sum,
          type: eachItem.type,
        }),
      )

      console.log(newData)

      this.setState({
        allTransactionsDetails: newData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangePageView = id => {
    this.setState({activeId: id})
  }

  render() {
    const {activeId, allTransactionsDetails} = this.state
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
        <div>
          <div className="Transaction-Header-container-1">
            <h1 className="accounts-text">Transactions</h1>
          </div>

          <div className="all-transactions-ul-el">
            <div className="transaction-heading-container">
              <p className="userName-text ut">UserName</p>
              <p className="userName-text Transaction-Name">Transaction Name</p>
              <p className="userName-text Category-text">Category</p>
              <p className="userName-text date-text">Date</p>
              <p className="userName-text amount-text">Amount</p>
            </div>
            <ul>
              {allTransactionsDetails.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  transactionDetails={eachItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminAllTransactions
