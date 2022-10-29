import Image from 'next/image'
import { BiRestaurant } from 'react-icons/bi'
import BillsComponent from '.'

export default function BillsToPayComponent({ hideValue, expenses }) {
  // if (expenses.length === 0) {
  //   return (
  //     <div>
  //       <div className="bg-dark3 rounded-lg h-full">
  //         <p className="font-bold p-4">Contas a pagar</p>
  //         <div className="flex flex-row items-center justify-between rounded-lg mx-4 mb-4">
  //           <div className="flex items-center justify-center mb-4">
  //             <h1>Não há transações pendentes.</h1>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
  return (
    <>
      <div className="bg-dark3 rounded-lg h-full">
        <p className="font-bold p-4">Contas a pagar</p>
        {expenses.map(expense => {
          let split_tags
          expense?.tags?.map(tag => {
            split_tags = tag.split(',')
          })
          return (
            <div className="flex flex-row items-center justify-between rounded-lg mx-4 mb-4">
              <div className="flex items-center justify-center mb-4">
                <div
                  className="flex items-center justify-center rounded-full w-[50px] h-[50px] mr-4"
                  style={{ background: expense.categoria.color }}
                >
                  <Image
                    className="rounded-full"
                    alt={`Categoria: ${expense.categoria.name}`}
                    width={512}
                    height={512}
                    blurDataURL={expense.categoria.icon_url}
                    src={expense.categoria.icon_url}
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="lg:text-2xl sm:text-lg font-medium">
                    {expense.descricao}
                  </h1>
                  <p className="flex lg:flex-row sm:flex-col lg:items-center sm:items-start lg:text-sm sm:text-xs font-thin text-gray-300">
                    {expense.categoria.name}
                  </p>
                  <p className="text-sm font-thin text-gray-300">Nubank</p>
                </div>
              </div>
              <div className="flex flex-col justify-center mb-4">
                {(!hideValue && (
                  <h1 className="font-bold lg:text-2xl sm:text-lg text-red-600">
                    -{' '}
                    {Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(expense.valor)}
                  </h1>
                )) || (
                  <h1 className="font-bold text-2xl text-red-600">🙈🙈🙈</h1>
                )}
                <p className="flex justify-end text-gray-300 text-sm">
                  {Intl.DateTimeFormat('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  }).format(new Date(expense.createdAt))}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
