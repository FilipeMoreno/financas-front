import { FaWallet } from 'react-icons/fa'

export default function AccountsComponent({ hideValue }) {
  return (
    <>
      <div className="bg-dark3 rounded-lg h-full">
        <p className="font-bold p-4">Minhas contas</p>
        <div className="flex flex-row items-center justify-between rounded-lg mx-4 mb-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center rounded-full bg-[#820AD1] w-[50px] h-[50px] mr-4">
              <FaWallet className="text-2xl" />
            </div>
            <div className="flex flex-col mb-4">
              <h1 className="text-lg font-medium">Carteira</h1>
              <p className="text-sm font-thin text-gray-300">Conta Corrente</p>
            </div>
          </div>
          {(!hideValue && <h1>R$ 100,00</h1>) || <h1>🙈🙈🙈</h1>}
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg mx-4 my-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center rounded-full bg-[#820AD1] w-[50px] h-[50px] mr-4">
              <img
                src="https://customers.twilio.com/wp-content/uploads/2022/03/nubank_logo.png"
                alt=""
                width={30}
              />
            </div>
            <div className="flex flex-col mb-4">
              <h1 className="text-lg font-medium">Nubank</h1>
              <p className="text-sm font-thin text-gray-300">Conta Corrente</p>
            </div>
          </div>
          {(!hideValue && <h1>R$ 100,00</h1>) || <h1>🙈🙈🙈</h1>}
        </div>
      </div>
    </>
  )
}
