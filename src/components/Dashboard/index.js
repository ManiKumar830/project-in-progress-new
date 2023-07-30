import {Component} from 'react'
import SideBar from '../SideBar'
import CreditDebit from '../CreditDebit'

import './index.css'

class AdminPage extends Component {
  state = {totalTransactions: [], debit: 0, credit: 0}

  componentDidMount() {
    this.getCreditsTotal()
  }

  getCreditsTotal = async () => {
    const url =
      'https://bursting-gelding-24.hasura.app/api/rest/transaction-totals-admin'

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
      console.log(jsonData)

      const newData = jsonData.transaction_totals_admin.map(eachItem => ({
        sum: eachItem.sum,
        type: eachItem.type,
      }))

      let totalDebit = 0
      let totalCredit = 0

      newData.forEach(item => {
        if (item.type === 'debit') {
          totalDebit += item.sum
        } else if (item.type === 'credit') {
          totalCredit += item.sum
        }
      })

      console.log('Total Debit:', totalDebit)
      console.log('Total Credit:', totalCredit)

      this.setState({
        totalTransactions: newData,
        debit: totalDebit,
        credit: totalCredit,
      })
      console.log(newData)
    }
  }

  render() {
    const {debit, credit, totalTransactions} = this.state

    return (
      <div className="bg-container">
        <SideBar />
        <div>
          <div className="Transaction-Header-container">
            <h1 className="accounts-text">Accounts</h1>
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
          <div className="bottom-container">
            <div className="credit-debit-container-1">
              <div className="credit-debit-container">
                <div className="credit-container">
                  <h1 className="credit-total-text">
                    ${credit.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                  </h1>
                  <p className="credit-text">Credit</p>
                </div>
                <img
                  className="credit-image"
                  alt="credit"
                  src="https://hmp.me/d6uw"
                />
              </div>

              <div className="debit-container">
                <div className="credit-container">
                  <h1 className="debit-total-text">
                    ${debit.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                  </h1>
                  <p className="credit-text">Debit</p>
                </div>
                <img
                  className="debit-image"
                  alt="debit"
                  src="https://hmp.me/d6uy"
                />
              </div>
            </div>

            <div>
              <h1 className="last-transactions">Last Transactions</h1>
              <ul className="last-three-container">
                {totalTransactions.map(eachItem => (
                  <CreditDebit
                    key={eachItem.type}
                    transactionDetails={eachItem}
                  />
                ))}
              </ul>
            </div>

            <div>
              <h1 className="last-transactions">Debit & Credit Overview</h1>
              <div className="graph-container">
                <div className="graph-total-container">
                  <div>
                    <p className="graph-dc-text">
                      <span className="dc-text">$7,560</span> Debited &{' '}
                      <span className="dc-text">$5,420</span> Credited in this
                      Week
                    </p>
                  </div>

                  <div className="dc-text-container">
                    <div className="dc-container">
                      <p className="dots">*</p>
                      <p className="debit-text">Debit</p>
                    </div>

                    <div className="dc-container">
                      <p className="dots-credit">*</p>
                      <p className="debit-text">Credit</p>
                    </div>
                  </div>
                </div>

                <div className="graph-values-container">
                  <div>
                    <p className="graph-value">500</p>
                    <p className="graph-value">400</p>
                    <p className="graph-value">300</p>
                    <p className="graph-value">200</p>
                    <p className="graph-value">100</p>
                    <p className="graph-value">0</p>
                  </div>

                  <div className="graph-image-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="234"
                      viewBox="0 0 70 234"
                      fill="none"
                    >
                      <rect
                        y="99"
                        width="30"
                        height="135"
                        rx="10"
                        fill="#4D78FF"
                      />
                      <rect
                        x="40"
                        width="30"
                        height="234"
                        rx="10"
                        fill="#FCAA0B"
                      />
                    </svg>
                    <p className="graph-values">Sat</p>
                  </div>

                  <div className="graph-image-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="186"
                      viewBox="0 0 70 186"
                      fill="none"
                    >
                      <rect
                        y="80"
                        width="30"
                        height="106"
                        rx="10"
                        fill="#4D78FF"
                      />
                      <rect
                        x="40"
                        width="30"
                        height="186"
                        rx="10"
                        fill="#FCAA0B"
                      />
                    </svg>
                    <p className="graph-values">Sun</p>
                  </div>

                  <div className="graph-image-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="139"
                      viewBox="0 0 70 139"
                      fill="none"
                    >
                      <rect
                        y="37"
                        width="30"
                        height="102"
                        rx="10"
                        fill="#4D78FF"
                      />
                      <rect
                        x="40"
                        width="30"
                        height="139"
                        rx="10"
                        fill="#FCAA0B"
                      />
                    </svg>
                    <p className="graph-values">Mon</p>
                  </div>

                  <div className="graph-image-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="212"
                      viewBox="0 0 70 212"
                      fill="none"
                    >
                      <rect width="30" height="212" rx="10" fill="#4D78FF" />
                      <rect
                        x="40"
                        y="89"
                        width="30"
                        height="123"
                        rx="10"
                        fill="#FCAA0B"
                      />
                    </svg>
                    <p className="graph-values">Tue</p>
                  </div>

                  <div className="graph-image-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="214"
                      viewBox="0 0 70 214"
                      fill="none"
                    >
                      <rect
                        y="64"
                        width="30"
                        height="150"
                        rx="10"
                        fill="#4D78FF"
                      />
                      <rect
                        x="40"
                        width="30"
                        height="214"
                        rx="10"
                        fill="#FCAA0B"
                      />
                    </svg>
                    <p className="graph-values">Wed</p>
                  </div>

                  <div className="graph-image-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="158"
                      viewBox="0 0 70 158"
                      fill="none"
                    >
                      <rect width="30" height="158" rx="10" fill="#4D78FF" />
                      <rect
                        x="40"
                        y="53"
                        width="30"
                        height="105"
                        rx="10"
                        fill="#FCAA0B"
                      />
                    </svg>
                    <p className="graph-values">Thu</p>
                  </div>

                  <div className="graph-image-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="216"
                      viewBox="0 0 70 216"
                      fill="none"
                    >
                      <rect
                        y="37"
                        width="30"
                        height="179"
                        rx="10"
                        fill="#4D78FF"
                      />
                      <rect
                        x="40"
                        width="30"
                        height="216"
                        rx="10"
                        fill="#FCAA0B"
                      />
                    </svg>
                    <p className="graph-values">Fri</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminPage
