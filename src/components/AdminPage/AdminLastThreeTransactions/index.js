import './index.css'

const CreditDebit = props => {
  const {transactionDetails} = props
  const {sum, type} = transactionDetails

  const isTrue = type === 'debit' || type === 'dedit' ? 'red' : 'green'

  const isDebit =
    type === 'debit' || type === 'dedit' ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <circle
          cx="15"
          cy="14.9999"
          r="14"
          transform="rotate(180 15 14.9999)"
          stroke="#FE5C73"
          strokeWidth="2"
        />
        <path
          d="M14.4697 20.0302C14.7626 20.3231 15.2374 20.3231 15.5303 20.0302L20.3033 15.2572C20.5962 14.9643 20.5962 14.4895 20.3033 14.1966C20.0104 13.9037 19.5355 13.9037 19.2426 14.1966L15 18.4392L10.7574 14.1966C10.4645 13.9037 9.98959 13.9037 9.6967 14.1966C9.40381 14.4895 9.40381 14.9643 9.6967 15.2572L14.4697 20.0302ZM14.25 8.99988L14.25 19.4999L15.75 19.4999L15.75 8.99988L14.25 8.99988Z"
          fill="#FE5C73"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <circle cx="15" cy="15" r="14" stroke="#16DBAA" strokeWidth="2" />
        <path
          d="M15.5303 9.96967C15.2374 9.67678 14.7626 9.67678 14.4697 9.96967L9.6967 14.7426C9.40381 15.0355 9.40381 15.5104 9.6967 15.8033C9.98959 16.0962 10.4645 16.0962 10.7574 15.8033L15 11.5607L19.2426 15.8033C19.5355 16.0962 20.0104 16.0962 20.3033 15.8033C20.5962 15.5104 20.5962 15.0355 20.3033 14.7426L15.5303 9.96967ZM15.75 21L15.75 10.5L14.25 10.5L14.25 21L15.75 21Z"
          fill="#16DBAA"
        />
      </svg>
    )

  return (
    <li className="three-container">
      {isDebit}
      <div className="name-logo-container">
        <img className="cd-logo" alt="logo" src="https://hmp.me/d6u0" />
        <p className="type-text">Arlene McCoy</p>
      </div>
      <p className="Spotify-text">Spotify Subscription</p>
      <p className="Spotify-text">Shopping</p>
      <p className="date-text">28 Jan, 12.30 AM</p>
      {isTrue === 'red' ? (
        <p className={isTrue}>-${sum}</p>
      ) : (
        <p className={isTrue}>${sum}</p>
      )}
    </li>
  )
}

export default CreditDebit
