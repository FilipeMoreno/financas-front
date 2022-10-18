import Image from 'next/image'
import { FaWallet } from 'react-icons/fa'

export default function AccountsComponent({ hideValue, accounts }) {
  return (
    <>
      <div className="bg-dark3 rounded-lg h-full">
        <p className="font-bold p-4">Minhas contas</p>
        {accounts?.map(account => {
          return (
            <div className="flex flex-row items-center justify-between rounded-lg mx-4 mb-4">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center rounded-full bg-[#820AD1] w-[50px] h-[50px] mr-4">
                  <Image
                    className="rounded-full"
                    alt={`Logo do ${account.bank.name}`}
                    width={50}
                    height={50}
                    blurDataURL={account.bank.icon_url}
                    src={account.bank.icon_url}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <h1 className="text-lg font-medium">{account.name}</h1>
                  <p className="text-sm font-thin text-gray-300">
                    {account.type.name}
                  </p>
                </div>
              </div>
              {(!hideValue && (
                <h1>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(account.balance)}
                </h1>
              )) || <h1>🙈🙈🙈</h1>}
            </div>
          )
        })}
      </div>
    </>
  )
}
