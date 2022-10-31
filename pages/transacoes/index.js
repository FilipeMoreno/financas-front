import {
  FaCheckCircle,
  FaEdit,
  FaInfoCircle,
  FaRegTrashAlt
} from 'react-icons/fa'

import { BsCheck2Circle, BsCalendarCheckFill } from 'react-icons/bs'

import { useEffect, useState } from 'react'
import api from '../../service/api'
import { useToasts } from 'react-toast-notifications'
import Router from 'next/router'
import Image from 'next/image'
import CardBalanceComponent from '../../components/Accounts/CardBalance'

export default function TransacoesIndex({ transactions, dashboard }) {
  const formatter = new Intl.DateTimeFormat('pr-BR', {
    month: 'long',
    year: 'numeric'
  })

  const [monthSelect, setMonthSelect] = useState(new Date())
  const { addToast } = useToasts()

  async function handleEfetivar(id) {
    addToast('Carregando...', {
      appearance: 'info',
      autoDismiss: true
    })
    const res = await api.put(`/transacoes/efetivar/${id}`)

    if (res) {
      addToast('Transação efetivada com sucesso!', {
        appearance: 'success',
        autoDismiss: true
      })
      Router.reload()
    }
  }

  return (
    <>
      <title>Transações | No Controle</title>
      <div className="flex flex-col bg-dark2 md:h-32 sm:h-48 rounded-b-3xl justify-around items-center mb-8">
        <h1 className="font-bold text-3xl text-white">Transações</h1>
        <div className="flex items-center justify-center border-2 border-roxo rounded-xl w-64 h-10 sm:my-5 lg:my-0">
          <div>
            {/* <div onClick={openModal1}> */}
            <p className="flex flex-row items-center justify-center text-lg text-roxo">
              {formatter.format(monthSelect)}
            </p>
          </div>
        </div>
        <p></p>
      </div>
      <CardBalanceComponent
        saldo={dashboard.saldo}
        previsto={dashboard.saldo_previsto}
      />
      <div className="mx-12 my-4">
        <table className="table-auto w-full bg-dark3 rounded-lg">
          <thead className="bg-dark4 h-12">
            <tr>
              <th>Situação</th>
              <th>Data</th>
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Conta</th>
              <th>Valor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td className="flex items-center justify-center my-2">
                    {transaction.efetivada === true && (
                      <div className="tooltip" data-tip="Efetivada">
                        <FaCheckCircle className=" text-lime-500 text-bold text-2xl" />
                      </div>
                    )}
                    {transaction.efetivada === false && (
                      <div className="tooltip" data-tip="Pendente">
                        <FaInfoCircle className="text-red-500 text-bold text-2xl" />
                      </div>
                    )}
                  </td>
                  <td>
                    {Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(
                      new Date(transaction.data)
                    )}
                  </td>
                  <td>{transaction.descricao}</td>
                  <td>
                    <div className="flex flex-row items-center">
                      <Image
                        className="rounded-full"
                        height={32}
                        width={32}
                        blurDataURL={transaction.categoria.icon_url}
                        src={transaction.categoria.icon_url}
                      />
                      <p className="ml-2">{transaction.categoria.name}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-row items-center">
                      <Image
                        className="rounded-full"
                        height={32}
                        width={32}
                        blurDataURL={transaction.conta.bank.icon_url}
                        src={transaction.conta.bank.icon_url}
                      />
                      <p className="ml-2">{transaction.conta.name}</p>
                    </div>
                  </td>
                  <td>
                    {transaction.tipo === 'DESPESA' && (
                      <p className="text-red-500">
                        -{' '}
                        {Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(transaction.valor)}
                      </p>
                    )}
                    {transaction.tipo === 'RECEITA' && (
                      <p className="text-lime-500">
                        {Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(transaction.valor)}
                      </p>
                    )}
                  </td>
                  <td className="flex flex-row items-center justify-center">
                    {!transaction.efetivada && (
                      <button
                        className="flex flex-row items-center"
                        onClick={() => handleEfetivar(transaction.id)}
                      >
                        <div className="tooltip" data-tip="Efetivar">
                          <BsCalendarCheckFill className="mx-1 text-lime-500" />
                        </div>
                      </button>
                    )}
                    <div className="tooltip" data-tip="Editar">
                      <FaEdit className="mx-1" />
                    </div>
                    <div className="tooltip" data-tip="Excluir">
                      <FaRegTrashAlt className="mx-1" />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const transactions = await api
    .get('/transacoes/get/all')
    .then(res => res.data)
    .catch(error => console.log(error))

  const dashboard = await api
    .get('/dashboard/get')
    .then(res => res.data)
    .catch(error => console.log(error))

  return {
    props: { transactions, dashboard }
  }
}
