import {Component} from 'react'
import SideBar from '../SideBar'

import './index.css'

class AllTransactions extends Component {
  state = {allTransactionsDetails: []}

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
    const jsonData = await response.json()
    console.log(jsonData)
  }

  render() {
    return (
      <div className="bg-container">
        <SideBar />
        <div className="Transaction-Header-container-1">
          <h1 className="accounts-text">Transactions</h1>
        </div>
      </div>
    )
  }
}

export default AllTransactions
