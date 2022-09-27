import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import CurrencyInput from 'react-currency-input-field'
import ReactModal from 'react-modal'

export default function NewAccountComponent() {
  const [modalIsOpen1, setIsOpen1] = useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#212121',
      borderRadius: '8px',
      borderColor: '#212121'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }
  }

  function openModal1() {
    setIsOpen1(true)
  }

  function closeModal1() {
    setIsOpen1(false)
  }

  return (
    <>
      <ReactModal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        style={customStyles}
      >
        <div className="lg:w-[400px] sm:w-[300px] overflow-y-scroll scrollbar-thin scrollbar-thumb-dark2 scrollbar-track-dark p-4">
          <div className="text-gray-300 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-textPrimary">Nova conta</h1>
            <h1
              onClick={closeModal1}
              className="text-lg font-bold cursor-pointer mr-4"
            >
              X
            </h1>
          </div>
          <hr className="border-dark5 my-3" />
          <div className="my-4">
            <div className="">
              <CurrencyInput
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer"
                id="initial-amount"
                name="initial-amount"
                placeholder="Saldo inicial"
                prefix="R$ "
                decimalSeparator=","
                groupSeparator="."
                decimalsLimit={2}
                step={1}
                intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                onValueChange={(value, name) => console.log(value, name)}
              />
            </div>

            <div className="">
              <input
                type="text"
                id="account-name"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer"
                placeholder="Nome da conta"
                required
              />
            </div>

            <div className="">
              <h1 className="text-md">Instituição financeira</h1>
              <select className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer">
                <option>Nubank</option>
                <option>Next</option>
                <option>Inter</option>
                <option>Itaú</option>
                <option>Caixa</option>
              </select>
            </div>

            <div className="">
              <h1 className="text-md">Tipo da conta</h1>
              <select className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer">
                <option>Conta Corrente</option>
                <option>Carteira</option>
                <option>Poupança</option>
                <option>Investimentos</option>
                <option>Outros</option>
              </select>
            </div>
            <div className="">
              <h1 className="text-md">Cor</h1>
              <select className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer">
                <option>Azul</option>
                <option>Vermelho</option>
                <option>Roxo</option>
                <option>Amarelo</option>
                <option>Verde</option>
              </select>
            </div>
          </div>
        </div>
      </ReactModal>
      <div className="flex flex-col items-center justify-center bg-dark3 border-b-4 border-black lg:w-[320px] sm:w-full h-[210px] rounded-xl mx-3 my-3">
        <div
          onClick={openModal1}
          className="flex flex-col items-center justify-center cursor-pointer hover:bg-black hover:bg-opacity-30 hover:rounded-full hover:w-[140px] h-[140px]"
        >
          <h1 className="text-white font-bold text-2xl">
            <FaPlus />
          </h1>
          <p className="text-white font-bold text-xl">Nova conta</p>
        </div>
      </div>
    </>
  )
}
