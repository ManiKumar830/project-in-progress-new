import {Link} from 'react-router-dom'
import './index.css'

const DetailsPage = props => {
  const {pageDetails, onChangePageView, isActive} = props
  const {id, BlueImageUrl, NormalImageUrl, text, link} = pageDetails

  const imageView = isActive ? BlueImageUrl : NormalImageUrl
  const textView = isActive ? `allTrans-text active_page ` : `allTrans-text`
  const buttonBlue = isActive ? 'button-blue' : ''
  console.log(id, isActive)

  const onClickPageFilter = () => {
    onChangePageView(id)
  }

  return (
    <Link className="link-el" to={link}>
      <li onClick={onClickPageFilter} className="li-el">
        <button type="button" className={`dashboard-container ${buttonBlue}`}>
          <img className="home-logo" alt={text} src={imageView} />
          <p className={textView}>{text}</p>
        </button>
      </li>
    </Link>
  )
}

export default DetailsPage
