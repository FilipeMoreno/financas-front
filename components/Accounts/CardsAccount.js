import Image from 'next/image'
import { FaPlus } from 'react-icons/fa'
import { MdMoreVert } from 'react-icons/md'

export default function CardsAccountsComponent({ name, icon_url, account }) {
  return (
    <>
      <div className="bg-dark3 border-b-4 border-black lg:w-[320px] sm:w-full h-[210px] rounded-xl mx-3 my-3 p-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center justify-center">
            <Image
              className="rounded-full"
              width={40}
              height={40}
              src={icon_url}
            />
            <h1 className="text-xl font-bold text-white ml-2">{name}</h1>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0">
              <MdMoreVert className="text-white text-2xl cursor-pointer" />
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow-lg bg-dark4 rounded-box w-52 text-white"
            >
              <li>
                <a>Editar</a>
              </li>
              <li>
                <a>Transações</a>
              </li>
              <li>
                <a>Reajustar saldo</a>
              </li>
              <li>
                <a>Excluir</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex items-center justify-between my-1">
            <p className="text-white">Saldo atual</p>
            <p className="font-medium text-lime-400">R$ 100,00</p>
          </div>
          <div className="flex items-center justify-between my-1">
            <p className="text-white"> Saldo previsto</p>
            <p className="font-medium text-lime-400">R$ 100,00</p>
          </div>
        </div>
        <hr className="border-dark5 my-2" />
        <div className="flex justify-end">
          <button className="flex items-center md:p-2 sm:p-2 rounded-lg font-bold md:text-md sm:text-sm text-white cursor-pointer">
            <FaPlus className="mr-1 text-white" /> Nova transação
          </button>
        </div>
      </div>
    </>
  )
}
