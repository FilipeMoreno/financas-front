import { useState } from 'react'
import { AiOutlineFileSearch } from 'react-icons/'
import { BsCheck } from 'react-icons/bs'
import { FaMinus, FaPlus, FaClock, FaRegClock, FaCheck } from 'react-icons/fa'

import ReactModal from 'react-modal'

export default function NewTransactionComponent() {
  const [modalIsOpenIncome, setModalIsOpenIncome] = useState(false)
  const [modalIsOpenExpense, setModalIsOpenExpense] = useState(false)
  const [showMoreExpense, setShowMoreExpense] = useState(false)
  const [showMoreIncome, setShowMoreIncome] = useState(false)
  const [expenseEffective, setExpenseEffective] = useState(false)
  const [incomeEffective, setIncomeEffective] = useState(false)

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

  function openModalIncome() {
    setModalIsOpenIncome(true)
  }

  function closeModalIncome() {
    setModalIsOpenIncome(false)
    setShowMoreIncome(false)
    setIncomeEffective(true)
  }

  function openModalExpense() {
    setModalIsOpenExpense(true)
  }

  function closeModalExpense() {
    setModalIsOpenExpense(false)
    setShowMoreExpense(false)
    setExpenseEffective(true)
  }

  return (
    <>
      <div className="dropdown">
        <label
          tabIndex="0"
          className="flex flex-row items-center bg-roxo md:p-4 sm:p-2 rounded-lg font-bold md:text-md sm:text-sm"
        >
          <FaPlus className="mr-1" /> Nova transação
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-2 shadow rounded-box w-52 bg-dark2"
        >
          <li>
            <a onClick={openModalIncome}>
              <FaPlus className="mr-2 text-income" />
              Nova receita
            </a>
          </li>
          <li>
            <a onClick={openModalExpense}>
              <FaMinus className="mr-2 text-expense" />
              Nova despesa
            </a>
          </li>
        </ul>
      </div>

      <ReactModal
        isOpen={modalIsOpenExpense}
        onRequestClose={closeModalExpense}
        style={customStyles}
      >
        <div className="lg:w-[400px] sm:w-[300px] overflow-y-scroll scrollbar-thin scrollbar-thumb-dark2 scrollbar-track-dark p-4">
          <div className="text-gray-300 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-textPrimary">
              Nova Despesa
            </h1>
            <h1
              onClick={closeModalExpense}
              className="text-lg font-bold cursor-pointer mr-4"
            >
              X
            </h1>
          </div>
          <hr className="border-dark5 my-3" />
          <div>
            <div class="relative mb-6">
              <input
                type="text"
                id="description"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label class="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Descrição
              </label>
            </div>
            <div class="relative mb-6">
              <input
                type="text"
                id="amount"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label class="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Valor
              </label>
            </div>
            <div class="relative mb-6">
              <input
                type="date"
                id="vencimento"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label class="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Vencimento
              </label>
            </div>
            <div className="p-2 -mt-3 mb-1">
              <label className="text-gray-500">Situação</label>
              <div className="flex flex-row py-2">
                {(expenseEffective && (
                  <div
                    onClick={() => setExpenseEffective(false)}
                    className="flex flex-row border items-center border-dark5 rounded-l-lg p-2"
                  >
                    <FaRegClock className="mr-2" />
                    <p>Pendente</p>
                  </div>
                )) || (
                  <div className="flex flex-row border items-center border-expense bg-expense bg-opacity-25 rounded-l-lg p-2">
                    <FaRegClock className="mr-2" />
                    <p>Pendente</p>
                  </div>
                )}
                {(!expenseEffective && (
                  <div
                    onClick={() => setExpenseEffective(true)}
                    className="flex flex-row border items-center border-dark5 rounded-r-lg p-2"
                  >
                    <BsCheck className="mr-2" />
                    <p>Efetivada</p>
                  </div>
                )) || (
                  <div className="flex flex-row border items-center border-income bg-income bg-opacity-25 rounded-r-lg p-2">
                    <BsCheck className="mr-2" />
                    <p>Efetivada</p>
                  </div>
                )}
              </div>
            </div>
            <div class="relative mb-6">
              <select
                id="category"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                required
              >
                <option value="1">Alimentação</option>
                <option value="1">Carro</option>
                <option value="1">Computador</option>
              </select>
              <label class="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Categoria
              </label>
            </div>
            <div class="relative mb-6">
              <select
                id="account"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                required
              >
                <option value="1">Minha Carteira</option>
                <option value="1">
                  <div className="flex items-center justify-center rounded-full bg-[#820AD1] w-[50px] h-[50px] mr-4">
                    <img
                      src="https://customers.twilio.com/wp-content/uploads/2022/03/nubank_logo.png"
                      alt=""
                      width={30}
                    />
                  </div>
                  NuConta
                </option>
                <option value="1">Next</option>
              </select>
              <label class="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Conta
              </label>
            </div>
            {!showMoreExpense && (
              <div className="flex items-center justify-center">
                <a
                  onClick={() => setShowMoreExpense(true)}
                  className="text-lg text-expense font-bold cursor-pointer"
                >
                  MAIS DETALHES
                </a>
              </div>
            )}
            {showMoreExpense && (
              <div class="relative mb-6">
                <input
                  type="text"
                  id="tags"
                  class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label class="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Tags
                </label>
              </div>
            )}
          </div>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={modalIsOpenIncome}
        onRequestClose={closeModalIncome}
        style={customStyles}
      >
        <div className="lg:w-[400px] sm:w-[300px] overflow-y-scroll scrollbar-thin scrollbar-thumb-dark2 scrollbar-track-dark p-4">
          <div className="text-gray-300 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-textPrimary">
              Nova receita
            </h1>
            <h1
              onClick={closeModalIncome}
              className="text-lg font-bold cursor-pointer mr-4"
            >
              X
            </h1>
          </div>
          <hr className="border-dark5 my-3" />
          <div>
            <div class="relative mb-6">
              <input
                type="text"
                id="description"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-income focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label class="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-income peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Descrição
              </label>
            </div>
            <div class="relative mb-6">
              <input
                type="text"
                id="amount"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-income focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label class="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-income peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Valor
              </label>
            </div>
            <div class="relative mb-6">
              <input
                type="date"
                id="vencimento"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-income focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label class="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-income peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Vencimento
              </label>
            </div>
            <div className="p-2 -mt-3 mb-1">
              <label className="text-gray-500">Situação</label>
              <div className="flex flex-row py-2">
                {(incomeEffective && (
                  <div
                    onClick={() => setIncomeEffective(false)}
                    className="flex flex-row border items-center border-dark5 rounded-l-lg p-2"
                  >
                    <FaRegClock className="mr-2" />
                    <p>Pendente</p>
                  </div>
                )) || (
                  <div className="flex flex-row border items-center border-expense bg-expense bg-opacity-25 rounded-l-lg p-2">
                    <FaRegClock className="mr-2" />
                    <p>Pendente</p>
                  </div>
                )}
                {(!incomeEffective && (
                  <div
                    onClick={() => setIncomeEffective(true)}
                    className="flex flex-row border items-center border-dark5 rounded-r-lg p-2"
                  >
                    <BsCheck className="mr-2" />
                    <p>Efetivada</p>
                  </div>
                )) || (
                  <div className="flex flex-row border items-center border-income bg-income bg-opacity-25 rounded-r-lg p-2">
                    <BsCheck className="mr-2" />
                    <p>Efetivada</p>
                  </div>
                )}
              </div>
            </div>
            <div class="relative mb-6">
              <select
                id="category"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-income focus:outline-none focus:ring-0 peer"
                required
              >
                <option value="1">Alimentação</option>
                <option value="1">Carro</option>
                <option value="1">Computador</option>
              </select>
              <label class="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-income peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Categoria
              </label>
            </div>
            <div class="relative mb-6">
              <select
                id="account"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-income focus:outline-none focus:ring-0 peer"
                required
              >
                <option value="1">Minha Carteira</option>
                <option value="1">
                  <div className="flex items-center justify-center rounded-full bg-[#820AD1] w-[50px] h-[50px] mr-4">
                    <img
                      src="https://customers.twilio.com/wp-content/uploads/2022/03/nubank_logo.png"
                      alt=""
                      width={30}
                    />
                  </div>
                  NuConta
                </option>
                <option value="1">Next</option>
              </select>
              <label class="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-income peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Conta
              </label>
            </div>
            {!showMoreIncome && (
              <div className="flex items-center justify-center">
                <a
                  onClick={() => setShowMoreIncome(true)}
                  className="text-lg text-income font-bold cursor-pointer"
                >
                  MAIS DETALHES
                </a>
              </div>
            )}
            {showMoreIncome && (
              <div class="relative mb-6">
                <input
                  type="text"
                  id="tags"
                  class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-income focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label class="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-income peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Tags
                </label>
              </div>
            )}
          </div>
        </div>
      </ReactModal>
    </>
  )
}
