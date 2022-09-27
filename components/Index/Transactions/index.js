import IncomeExpenseTransactionComponent from './IncomeExpenseTransaction'

export default function TransactionsComponent({ hideValue }) {
  return (
    <>
      <div className="bg-dark3 rounded-lg h-full">
        <p className="font-bold p-4">Últimos lançamentos</p>
        <IncomeExpenseTransactionComponent
          type={'expense'}
          hideValue={hideValue}
        />
      </div>
    </>
  )
}
