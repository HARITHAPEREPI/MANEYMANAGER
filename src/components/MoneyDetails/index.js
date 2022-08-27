import './index.css'

const MoneyDetails = props => {
  const {moneyTypeDetails, updateIncome, updateExpenses, updateBalance} = props
  const {balance, income, expenses} = moneyTypeDetails

  const onChangingIncome = () => {
    updateIncome()
  }

  const onChangeExpenses = () => {
    updateExpenses()
  }

  const onChangeBalance = () => {
    updateBalance()
  }

  return (
    <li className="money-details-list">
      <div className="balance-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="balance-img"
          />
        </div>
        <div className="balance-and-count-container">
          <p className="heading">Your Balance</p>
          <p
            className="count"
            testid="balanceAmount"
            onChange={onChangeBalance}
          >
            Rs {balance}
          </p>
        </div>
      </div>

      <div className="income-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="income-img"
          />
        </div>
        <div className="income-and-count-container">
          <p className="heading">Your Income</p>
          <p
            className="count"
            testid="incomeAmount"
            onChange={onChangingIncome}
          >
            Rs {income}
          </p>
        </div>
      </div>

      <div className="expenses-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="expenses-img"
          />
        </div>
        <div className="expenses-and-count-container">
          <p className="heading">Your Expenses</p>
          <p
            className="count"
            testid="expensesAmount"
            onChange={onChangeExpenses}
          >
            Rs {expenses}
          </p>
        </div>
      </div>
    </li>
  )
}

export default MoneyDetails
