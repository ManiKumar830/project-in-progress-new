import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props
  const {date, sum, type} = transactionDetails

  // Create a Date object from the timestamp

  const dateObj = new Date(date)

  const options = {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }

  const formattedDate = dateObj.toLocaleString('en-US', options)
  console.log(formattedDate)

  const userDetails = [
    {
      imageUrl: 'https://hmp.me/d6wn',
      name: 'Arlene McCoy',
      transName: 'Spotify Subscription',
      category: 'Shopping',
    },
    {
      imageUrl: 'https://hmp.me/d6wp',
      name: 'Ralph Edwards',
      transName: 'Freepik Sales',
      category: 'Transfer',
    },
    {
      imageUrl: 'https://hmp.me/d6wr',
      name: 'Darlene Robertson',
      transName: 'Mobile Service',
      category: 'Service',
    },
    {
      imageUrl: 'https://hmp.me/d6wt',
      name: 'Kristin Watson',
      transName: 'Wilson',
      category: 'Transfer',
    },
    {
      imageUrl: 'https://hmp.me/d6wv',
      name: 'Annette Black',
      transName: 'Figma',
      category: 'Transfer',
    },
  ]

  const isTrue = type === 'debit' || type === 'dedit' ? 'red-2' : 'green-1'

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
          cy="15"
          r="14"
          transform="rotate(180 15 15)"
          stroke="#718EBF"
          strokeWidth="2"
        />
        <path
          d="M14.4697 20.0303C14.7626 20.3232 15.2374 20.3232 15.5303 20.0303L20.3033 15.2574C20.5962 14.9645 20.5962 14.4896 20.3033 14.1967C20.0104 13.9038 19.5355 13.9038 19.2426 14.1967L15 18.4393L10.7574 14.1967C10.4645 13.9038 9.98959 13.9038 9.6967 14.1967C9.40381 14.4896 9.40381 14.9645 9.6967 15.2574L14.4697 20.0303ZM14.25 9L14.25 19.5L15.75 19.5L15.75 9L14.25 9Z"
          fill="#718EBF"
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
        <circle
          cx="15"
          cy="15"
          r="14"
          transform="rotate(180 15 15)"
          stroke="#718EBF"
          strokeWidth="2"
        />
        <path
          d="M15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L9.6967 13.2426C9.40381 13.5355 9.40381 14.0104 9.6967 14.3033C9.98959 14.5962 10.4645 14.5962 10.7574 14.3033L15 10.0607L19.2426 14.3033C19.5355 14.5962 20.0104 14.5962 20.3033 14.3033C20.5962 14.0104 20.5962 13.5355 20.3033 13.2426L15.5303 8.46967ZM15.75 19.5L15.75 9L14.25 9L14.25 19.5L15.75 19.5Z"
          fill="#718EBF"
        />
      </svg>
    )

  const item = userDetails[Math.floor(Math.random() * userDetails.length)]

  console.log(item)
  return (
    <li className="all-trans-container-1">
      {isDebit}
      <div className="name-logo-container-1">
        <img className="cd-logo-1" alt="logo" src={item.imageUrl} />
        <p className="type-text-1">{item.name}</p>
      </div>
      <p className="Spotify-text-1">{item.transName}</p>
      <p className="category-text-1">{item.category}</p>
      <p className="date-text-1">{formattedDate}</p>
      {isTrue === 'red-2' ? (
        <p className={isTrue}>-${sum}</p>
      ) : (
        <p className={isTrue}>+${sum}</p>
      )}
    </li>
  )
}

export default TransactionItem
