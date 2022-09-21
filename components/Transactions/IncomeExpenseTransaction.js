import { FaMoneyBillWave } from 'react-icons/fa'

export default function IncomeExpenseTransactionComponent({ hideValue, type }) {
  return (
    <>
      <div className="flex flex-row items-center justify-between rounded-lg mx-4 my-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center rounded-full bg-[#820AD1] w-[50px] h-[50px] mr-4">
            <FaMoneyBillWave className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-medium">Salário</h1>
            <p className="text-sm font-thin text-gray-300">
              Salário <div class="badge badge-primary text-xs">Salário</div>
            </p>
            <p className="text-sm font-thin text-gray-300">Nubank</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          {(type === 'income' && !hideValue && (
            <h1 className="font-bold text-2xl text-lime-600">R$ 1.000,00</h1>
          )) ||
            (type === 'income' && (
              <h1 className="font-bold text-2xl">🙈🙈🙈</h1>
            ))}

          {(type === 'expense' && !hideValue && (
            <h1 className="font-bold text-2xl text-red-600">- R$ 1.000,00</h1>
          )) ||
            (type === 'expense' && (
              <h1 className="font-bold text-2xl">🙈🙈🙈</h1>
            ))}
          <p className="flex justify-end text-gray-300 text-sm">01/JAN 00:00</p>
        </div>
      </div>
    </>
  )
}
