import './index.css'

const TransactionItem = props => {
  const {transactionItemDetails, deleteTransactionItem} = props
  const {id, title, amount, type} = transactionItemDetails

  const onDeleteHistory = () => {
    deleteTransactionItem(id)
  }

  return (
    <li className="transaction-item-list">
      <div className="history-container">
        <h1 className="title">{title}</h1>
        <p className="amount">{amount}</p>
        <p className="type">{type}</p>
        <button
          type="button"
          onClick={onDeleteHistory}
          className="delete-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
