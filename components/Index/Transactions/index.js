import Image from 'next/image'
import { FaMoneyBillWave } from 'react-icons/fa'
import IncomeExpenseTransactionComponent from './IncomeExpenseTransaction'

export default function TransactionsComponent({ hideValue, transactions }) {
  return (
    <>
      <div className="bg-dark3 rounded-lg h-full">
        <p className="font-bold p-4">Últimos lançamentos</p>
        {transactions.map(transaction => {
          return (
            <div className="flex flex-row items-center justify-between rounded-lg mx-4 my-4">
              <div className="flex items-center justify-center">
                <div
                  style={{ backgroundColor: transaction.categoria.color }}
                  className="flex items-center justify-center rounded-full w-[50px] h-[50px] mr-4"
                >
                  <Image
                    className="rounded-full"
                    alt={`Logo do ${transaction.categoria.name}`}
                    width={50}
                    height={50}
                    blurDataURL={transaction.categoria.icon_url}
                    src={transaction.categoria.icon_url}
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl font-medium">
                    {transaction.descricao}
                  </h1>
                  <p className="text-sm font-thin text-gray-300">
                    {transaction.categoria.name}
                    {/* <div className="badge badge-primary text-xs">Salário</div> */}
                  </p>
                  <p className="text-sm font-thin text-gray-300">
                    {transaction.conta.bank.name}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                {(transaction.tipo === 'RECEITA' && !hideValue && (
                  <h1 className="font-bold text-2xl text-lime-600">
                    {Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(transaction.valor)}
                  </h1>
                )) ||
                  (transaction.tipo === 'RECEITA' && (
                    <h1 className="font-bold text-2xl">🙈🙈🙈</h1>
                  ))}

                {(transaction.tipo === 'DESPESA' && !hideValue && (
                  <h1 className="font-bold text-2xl text-red-600">
                    -{' '}
                    {Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(transaction.valor)}
                  </h1>
                )) ||
                  (transaction.tipo === 'DESPESA' && (
                    <h1 className="font-bold text-2xl">🙈🙈🙈</h1>
                  ))}
                <p className="flex justify-end text-gray-300 text-sm">
                  {Intl.DateTimeFormat('pt-BR', {
                    timeZone: 'UTC',
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
                  }).format(new Date(transaction.data))}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
