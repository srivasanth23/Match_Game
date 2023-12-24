import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabButton = () => {
    onClickTab(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab' : ''

  return (
    <li className="list-container">
      <button
        className={`tabs-btn ${activeTabBtnClassName}`}
        type="button"
        onClick={onClickTabButton}
      >
        <p className="tab"> {displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
