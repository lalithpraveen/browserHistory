import './index.css'

const BrowseHistory = props => {
  const {deleteItem, itemDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const onClickDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item">
      <div className="items-card">
        <p className="time">{timeAccessed}</p>
        <img className="site-logo" src={logoUrl} alt="domain logo" />
        <p className="site-name">{title}</p>
        <p className="site-address">{domainUrl}</p>
      </div>
      <button
        testid="delete"
        type="button"
        className="delete-btn"
        onClick={onClickDelete}
      >
        <img
          className="delete-img"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default BrowseHistory
