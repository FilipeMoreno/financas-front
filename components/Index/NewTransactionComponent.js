import { useState } from 'react'
import { BiTransfer } from 'react-icons/bi'

import { BsCheck } from 'react-icons/bs'
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi'
import { FaMinus, FaPlus, FaRegClock } from 'react-icons/fa'

import ReactModal from 'react-modal'
import { useForm } from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'
import api from '../../service/api'
import Router from 'next/router'

export default function NewTransactionComponent({ categorias, contas }) {
  const [modalIsOpenIncome, setModalIsOpenIncome] = useState(false)
  const [modalIsOpenExpense, setModalIsOpenExpense] = useState(false)
  const [showMoreExpense, setShowMoreExpense] = useState(false)
  const [transacaoRecorrenteParcelada, setTransacaoRecorrenteParcelada] =
    useState(false)
  const [transacaoRecorrenteFixa, setTransacaoRecorrenteFixa] = useState(false)
  const [showMoreIncome, setShowMoreIncome] = useState(false)
  const [expenseEffective, setExpenseEffective] = useState(false)
  const [incomeEffective, setIncomeEffective] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { addToast } = useToasts()

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
    setTransacaoRecorrenteFixa(false)
    setTransacaoRecorrenteParcelada(false)
  }

  async function handleCreateDespesas({
    descricao,
    valor,
    data_vencimento,
    observacoes,
    categoria,
    data,
    tags,
    quantidade_repeticao,
    periodo_repeticao,
    conta_id
  }) {
    try {
      const res = await api.post('/despesas/create', {
        valor: valor,
        descricao,
        data_vencimento,
        data,
        observacoes,
        categoria_id: categoria,
        tags,
        recorrente: transacaoRecorrenteParcelada,
        transacao_fixa: transacaoRecorrenteFixa,
        quantidade_repeticao: quantidade_repeticao ? quantidade_repeticao : 0,
        periodo_repeticao: periodo_repeticao ? periodo_repeticao : 0,
        efetivada: expenseEffective,
        usuario_id: 1,
        conta_id
      })
      if (res) {
        if (res) {
          addToast('Despesa criada com sucesso!', {
            appearance: 'success',
            autoDismiss: true
          })
          Router.reload()
        }
      }
    } catch (e) {
      return addToast(
        e.response?.data?.message + ' ' + e.response?.data?.details,
        {
          appearance: 'error',
          autoDismiss: true
        }
      )
    }
  }

  async function handleCreateReceitas({
    descricao,
    valor,
    data,
    data_vencimento,
    observacoes,
    categoria,
    tags,
    quantidade_repeticao,
    periodo_repeticao,
    conta_id
  }) {
    try {
      const res = await api.post('/receitas/create', {
        valor: valor,
        descricao,
        data,
        data_vencimento,
        observacoes,
        categoria_id: categoria,
        tags,
        recorrente: transacaoRecorrenteParcelada,
        transacao_fixa: transacaoRecorrenteFixa,
        quantidade_repeticao: quantidade_repeticao ? quantidade_repeticao : 0,
        periodo_repeticao: periodo_repeticao ? periodo_repeticao : 0,
        efetivada: expenseEffective,
        usuario_id: 1,
        conta_id
      })
      if (res) {
        if (res) {
          addToast('Receita criada com sucesso!', {
            appearance: 'success',
            autoDismiss: true
          })
          Router.reload()
        }
      }
    } catch (e) {
      return addToast(
        e.response?.data?.message + ' ' + e.response?.data?.details,
        {
          appearance: 'error',
          autoDismiss: true
        }
      )
    }
  }

  async function handleResetRecorrencia() {
    setTransacaoRecorrenteFixa(false)
    setTransacaoRecorrenteParcelada(false)
  }

  async function handleRecorrencia(data) {
    await handleResetRecorrencia()

    if (data === 'Nenhuma') {
      setTransacaoRecorrenteFixa(false)
      setTransacaoRecorrenteParcelada(false)
    }
    if (data === 'Parcelada') {
      setTransacaoRecorrenteParcelada(true)
      setTransacaoRecorrenteFixa(false)
    }
    if (data === 'Fixa') {
      setTransacaoRecorrenteFixa(true)
      setTransacaoRecorrenteParcelada(false)
    }
  }

  return (
    <>
      <div className="dropdown">
        <label
          tabIndex="0"
          className="flex flex-row items-center bg-roxo md:p-4 sm:p-2 rounded-lg font-bold md:text-md sm:text-sm text-white cursor-pointer"
        >
          <FaPlus className="mr-1 text-white" /> Nova transação
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-2 shadow rounded-box w-52 bg-dark2"
        >
          <li>
            <a onClick={openModalIncome}>
              <GiReceiveMoney className="mr-2 text-income" />
              Nova receita
            </a>
          </li>
          <li>
            <a onClick={openModalExpense}>
              <GiPayMoney className="mr-2 text-expense" />
              Nova despesa
            </a>
          </li>
          {/*<li>
            <a>
              <BiTransfer className="mr-2 text-transference" />
              Transferência
            </a>
  </li>*/}
        </ul>
      </div>

      <ReactModal
        isOpen={modalIsOpenExpense}
        onRequestClose={closeModalExpense}
        style={customStyles}
      >
        <div className="lg:w-[400px] sm:w-[300px] h-[500px] overflow-y-scroll scrollbar-thin scrollbar-thumb-dark2 scrollbar-track-dark p-4">
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
          <form onSubmit={handleSubmit(handleCreateDespesas)}>
            <div>
              <div className="relative mb-6">
                <input
                  {...register('descricao', { required: true })}
                  type="text"
                  id="description"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Descrição
                </label>
              </div>
              <div className="relative mb-6">
                <input
                  {...register('valor', { required: true })}
                  type="number"
                  id="amount"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Valor
                </label>
              </div>
              <div className="relative mb-6">
                <select
                  {...register('recorrencia', { required: true })}
                  id="recorrencia"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                  onChange={e => {
                    handleRecorrencia(e.target.value)
                  }}
                  required
                >
                  <option value="Nenhuma">Nenhuma</option>
                  <option value="Parcelada">Parcelada</option>
                  <option value="Fixa">Fixa mensal</option>
                </select>

                <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Recorrência
                </label>
              </div>
              {transacaoRecorrenteParcelada && (
                <>
                  <div className="relative mb-6">
                    <input
                      {...register('quantidade_repeticao', { required: true })}
                      type="number"
                      id="quantidade_repeticao"
                      className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      required
                    />
                    <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Quantidade
                    </label>
                  </div>
                  <div className="relative mb-6">
                    <select
                      {...register('periodo_repeticao', { required: true })}
                      id="periodo_repeticao"
                      className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                      required
                    >
                      <option value="Nenhuma">Mensal</option>
                    </select>
                    <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Período
                    </label>
                  </div>
                </>
              )}
              <div className="relative mb-6">
                <input
                  {...register('data_vencimento', { required: true })}
                  type="date"
                  id="vencimento"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Vencimento
                </label>
              </div>
              <div className="p-2 -mt-3 mb-1">
                <label className="text-gray-500">Situação</label>
                <div className="flex flex-row py-2">
                  {(expenseEffective && (
                    <div
                      onClick={() => setExpenseEffective(false)}
                      className="flex flex-row border items-center border-dark5 rounded-l-lg p-2 cursor-pointer"
                    >
                      <FaRegClock className="mr-2" />
                      <p>Pendente</p>
                    </div>
                  )) || (
                    <div className="flex flex-row border items-center border-expense bg-expense bg-opacity-25 rounded-l-lg p-2 cursor-pointer">
                      <FaRegClock className="mr-2" />
                      <p>Pendente</p>
                    </div>
                  )}
                  {(!expenseEffective && (
                    <div
                      onClick={() => setExpenseEffective(true)}
                      className="flex flex-row border items-center border-dark5 rounded-r-lg p-2 cursor-pointer"
                    >
                      <BsCheck className="mr-2" />
                      <p>Efetivada</p>
                    </div>
                  )) || (
                    <div className="flex flex-row border items-center border-income bg-income bg-opacity-25 rounded-r-lg p-2 cursor-pointer">
                      <BsCheck className="mr-2" />
                      <p>Efetivada</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative mb-6">
                <select
                  {...register('categoria', { required: true })}
                  id="category"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                  required
                >
                  {categorias.map(categoria => {
                    return (
                      <option key={categoria.id} value={categoria.id}>
                        {categoria.name}
                      </option>
                    )
                  })}
                </select>
                <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Categoria
                </label>
              </div>
              <div className="relative mb-6">
                <select
                  {...register('conta_id', { required: true })}
                  id="account"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                  required
                >
                  {contas.map(conta => {
                    return (
                      <option key={conta.id} value={conta.id}>
                        {conta.name}
                      </option>
                    )
                  })}
                </select>
                <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
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
                <>
                  <div className="relative mb-6">
                    <textarea
                      {...register('observacoes', { required: true })}
                      type="text"
                      id="observacoes"
                      className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                    />
                    <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Observações
                    </label>
                  </div>
                  <div className="relative mb-6">
                    <input
                      {...register('data', { required: true })}
                      type="date"
                      id="data_lancamento"
                      className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                      defaultValue={new Date()}
                    />
                    <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Data de lançamento
                    </label>
                  </div>
                  {/* <div className="relative mb-6">
                    <input
                      {...register('tags', { required: true })}
                      type="text"
                      id="tags"
                      className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      required
                    />
                    <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Tags
                    </label>
                  </div> */}
                </>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-roxo text-white rounded-lg py-2 mt-2"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={modalIsOpenIncome}
        onRequestClose={closeModalIncome}
        style={customStyles}
      >
        <div className="lg:w-[400px] sm:w-[300px] h-[500px] overflow-y-scroll scrollbar-thin scrollbar-thumb-dark2 scrollbar-track-dark p-4">
          <div className="text-gray-300 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-textPrimary">
              Nova Receita
            </h1>
            <h1
              onClick={closeModalExpense}
              className="text-lg font-bold cursor-pointer mr-4"
            >
              X
            </h1>
          </div>
          <hr className="border-dark5 my-3" />
          <form onSubmit={handleSubmit(handleCreateReceitas)}>
            <div>
              <div className="relative mb-6">
                <input
                  {...register('descricao', { required: true })}
                  type="text"
                  id="description"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-income focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-income peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Descrição
                </label>
              </div>
              <div className="relative mb-6">
                <input
                  {...register('valor', { required: true })}
                  type="number"
                  id="amount"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-income peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Valor
                </label>
              </div>
              <div className="relative mb-6">
                <select
                  {...register('recorrencia', { required: true })}
                  id="recorrencia"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-income focus:outline-none focus:ring-0 peer"
                  onChange={e => {
                    handleRecorrencia(e.target.value)
                  }}
                  required
                >
                  <option value="Nenhuma">Nenhuma</option>
                  <option value="Parcelada">Parcelada</option>
                  <option value="Fixa">Fixa mensal</option>
                </select>

                <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-income peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Recorrência
                </label>
              </div>
              {transacaoRecorrenteParcelada && (
                <>
                  <div className="relative mb-6">
                    <input
                      {...register('quantidade_repeticao', { required: true })}
                      type="number"
                      id="quantidade_repeticao"
                      className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-income focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      required
                    />
                    <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-income peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Quantidade
                    </label>
                  </div>
                  <div className="relative mb-6">
                    <select
                      {...register('periodo_repeticao', { required: true })}
                      id="periodo_repeticao"
                      className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-income focus:outline-none focus:ring-0 peer"
                      required
                    >
                      <option value="Nenhuma">Mensal</option>
                    </select>
                    <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-income peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Período
                    </label>
                  </div>
                </>
              )}
              <div className="relative mb-6">
                <input
                  {...register('data_vencimento', { required: true })}
                  type="date"
                  id="vencimento"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-income focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-income peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Vencimento
                </label>
              </div>
              <div className="p-2 -mt-3 mb-1">
                <label className="text-gray-500">Situação</label>
                <div className="flex flex-row py-2">
                  {(expenseEffective && (
                    <div
                      onClick={() => setExpenseEffective(false)}
                      className="flex flex-row border items-center border-dark5 rounded-l-lg p-2 cursor-pointer"
                    >
                      <FaRegClock className="mr-2" />
                      <p>Pendente</p>
                    </div>
                  )) || (
                    <div className="flex flex-row border items-center border-expense bg-expense bg-opacity-25 rounded-l-lg p-2 cursor-pointer">
                      <FaRegClock className="mr-2" />
                      <p>Pendente</p>
                    </div>
                  )}
                  {(!expenseEffective && (
                    <div
                      onClick={() => setExpenseEffective(true)}
                      className="flex flex-row border items-center border-dark5 rounded-r-lg p-2 cursor-pointer"
                    >
                      <BsCheck className="mr-2" />
                      <p>Efetivada</p>
                    </div>
                  )) || (
                    <div className="flex flex-row border items-center border-income bg-income bg-opacity-25 rounded-r-lg p-2 cursor-pointer">
                      <BsCheck className="mr-2" />
                      <p>Efetivada</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative mb-6">
                <select
                  {...register('categoria', { required: true })}
                  id="category"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-income focus:outline-none focus:ring-0 peer"
                  required
                >
                  {categorias.map(categoria => {
                    return (
                      <option key={categoria.id} value={categoria.id}>
                        {categoria.name}
                      </option>
                    )
                  })}
                </select>
                <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-income peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Categoria
                </label>
              </div>
              <div className="relative mb-6">
                <select
                  {...register('conta_id', { required: true })}
                  id="account"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-income focus:outline-none focus:ring-0 peer"
                  required
                >
                  {contas.map(conta => {
                    return (
                      <option key={conta.id} value={conta.id}>
                        {conta.name}
                      </option>
                    )
                  })}
                </select>
                <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-income peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Conta
                </label>
              </div>
              {!showMoreExpense && (
                <div className="flex items-center justify-center">
                  <a
                    onClick={() => setShowMoreExpense(true)}
                    className="text-lg text-income font-bold cursor-pointer"
                  >
                    MAIS DETALHES
                  </a>
                </div>
              )}
              {showMoreExpense && (
                <>
                  <div className="relative mb-6">
                    <textarea
                      {...register('observacoes', { required: true })}
                      type="text"
                      id="observacoes"
                      className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-income focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                    />
                    <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-income peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Observações
                    </label>
                  </div>
                  <div className="relative mb-6">
                    <input
                      {...register('data', { required: true })}
                      type="date"
                      id="data_lancamento"
                      className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-income focus:outline-none focus:ring-0 peer"
                      defaultValue={new Date()}
                    />
                    <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-income peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Data de lançamento
                    </label>
                  </div>
                  {/* <div className="relative mb-6">
                    <input
                      {...register('tags', { required: true })}
                      type="text"
                      id="tags"
                      className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-expense focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      required
                    />
                    <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-expense peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Tags
                    </label>
                  </div> */}
                </>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-roxo text-white rounded-lg py-2 mt-2"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </ReactModal>
    </>
  )
}
