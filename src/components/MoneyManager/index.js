import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const moneyDetailsList = [
  {
    id: v4(),
    balance: '0',
    income: '0',
    expenses: '0',
  },
]

class MoneyManager extends Component {
  state = {
    activeTypeId: transactionTypeOptions[0].optionId,
    titleInput: '',
    amountInput: '',
    transactionList: [],
    totalBalance: 0,
    totalIncome: 0,
    totalExpenses: 0,
  }

  updateIncome = amountInput => {
    this.setState(prevState => ({
      totalIncome: prevState.totalIncome + amountInput,
    }))
  }

  updateExpenses = amountInput => {
    this.setState(prevState => ({
      totalExpenses: prevState.totalExpenses + amountInput,
    }))
  }

  updateBalance = value => {
    const {totalIncome, totalBalance, totalExpenses} = this.state

    this.setState(prevState => ({
      totalBalance: prevState.totalIncome - prevState.totalExpenses,
    }))
  }

  deleteTransactionItem = transactionId => {
    const {transactionList} = this.state

    this.setState({
      transactionList: transactionList.filter(
        transaction => transaction.id !== transactionId,
      ),
    })
  }

  onChangeOption = event => {
    const {transactionList} = this.state

    this.setState(prevState => ({activeTypeId: event.target.value}))
  }

  renderTransactionItemList = () => {
    const {transactionList} = this.state

    return transactionList.map(eachTransaction => (
      <TransactionItem
        key={eachTransaction.id}
        transactionItemDetails={eachTransaction}
        deleteTransactionItem={this.deleteTransactionItem}
      />
    ))
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, activeTypeId} = this.state

    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: amountInput,
      type: activeTypeId,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
    }))
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  render() {
    const {
      titleInput,
      amountInput,
      transactionList,
      totalBalance,
      totalIncome,
      totalExpenses,
    } = this.state

    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="welcome-container">
            <h1 className="user-name">Hi, Richard</h1>
            <p className="welcome-user">
              Welcome back to your
              <span className="money-manager">Money Manager</span>
            </p>
          </div>

          <div className="money-details-container">
            <ul>
              {moneyDetailsList.map(eachDetail => (
                <MoneyDetails
                  key={eachDetail.id}
                  moneyTypeDetails={eachDetail}
                  updateIncome={this.updateIncome}
                  updateExpenses={this.updateExpenses}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>

          <div className="transaction-history-container">
            <div className="add-transaction-container">
              <h1 className="transaction-heading">Add Transaction</h1>
              <form
                className="transaction-form"
                onSubmit={this.onAddTransaction}
                updateIncome={this.updateIncome}
                updateExpenses={this.updateExpenses}
                updateBalance={this.updateBalance}
              >
                <div className="title-container">
                  <label className="label" htmlFor="title">
                    TITLE
                  </label>
                  <input
                    type="text"
                    placeholder="TITLE"
                    id="title"
                    onChange={this.onChangeTitleInput}
                    value={titleInput}
                    className="inputs"
                  />
                </div>
                <div className="amount-container">
                  <label className="label" htmlFor="amount">
                    AMOUNT
                  </label>
                  <input
                    type="text"
                    placeholder="AMOUNT"
                    id="amount"
                    onChange={this.onChangeAmountInput}
                    value={amountInput}
                  />
                </div>
                <div className="type-container">
                  <label className="label" htmlFor="type">
                    TYPE
                  </label>
                  <select
                    className="form-control"
                    onChange={this.onChangeOption}
                  >
                    {transactionTypeOptions.map(eachOption => (
                      <option
                        key={eachOption.optionId}
                        value={eachOption.optionId}
                        className="options"
                      >
                        {eachOption.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="add-button"
                  onClick={this.onAddTransaction}
                  updateIncome={this.updateIncome}
                  updateExpenses={this.updateExpenses}
                  updateBalance={this.updateBalance}
                >
                  Add
                </button>
              </form>
            </div>

            <div className="history-container">
              <h1 className="history-heading">History</h1>
              <div className="titles-container">
                <p className="titles">TITLE</p>
                <p className="titles">AMOUNT</p>
                <p className="titles">TYPE</p>
                <p className="titles">.</p>
              </div>
              <ul className="history-list">
                {this.renderTransactionItemList()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
