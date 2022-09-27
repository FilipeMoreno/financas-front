import { BiRestaurant } from 'react-icons/bi'
import { FaMoneyBillWave } from 'react-icons/fa'

export default function BillsComponent({ type, hideValue }) {
  return (
    <>
      <div className="bg-dark3 rounded-lg h-full">
        {type === 'pay' && <p className="font-bold p-4">Contas a pagar</p>}
        {type === 'receiver' && (
          <p className="font-bold p-4">Contas a receber</p>
        )}
        <div className="flex flex-row items-center justify-between rounded-lg mx-4 mb-4">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center rounded-full bg-[#820AD1] w-[50px] h-[50px] mr-4">
              <BiRestaurant className="text-2xl" />
            </div>
            <div className="flex flex-col">
              <h1 className="lg:text-2xl sm:text-lg font-medium">Almoço</h1>
              <p className="flex lg:flex-row sm:flex-col lg:items-center sm:items-start justify-center lg:text-sm sm:text-xs font-thin text-gray-300">
                Alimentação
                <div className="lg:ml-2 sm:ml-0 my-1 badge badge-primary lg:text-xs sm:text-xs">
                  Restaurante
                </div>
              </p>
              <p className="text-sm font-thin text-gray-300">Nubank</p>
            </div>
          </div>
          <div className="flex flex-col justify-center mb-4">
            {(!hideValue && (
              <h1 className="font-bold lg:text-2xl sm:text-lg text-red-600">
                - R$ 32,00
              </h1>
            )) || <h1 className="font-bold text-2xl text-red-600">🙈🙈🙈</h1>}
            <p className="flex justify-end text-gray-300 text-sm">
              01/JAN 00:00
            </p>
          </div>
        </div>
        {/* <div className="flex flex-row items-center justify-between rounded-lg mx-4 my-4">
          <div className="flex items-center justify-center mb-4">
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
            {(!hideValue && (
              <h1 className="font-bold text-2xl text-lime-600">R$ 100,00</h1>
            )) || <h1 className="font-bold text-2xl text-lime-600">🙈🙈🙈</h1>}
            <p className="flex justify-end text-gray-300 text-sm">
              01/JAN 00:00
            </p>
          </div>
        </div> */}
      </div>
    </>
  )
}
