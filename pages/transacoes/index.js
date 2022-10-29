import {
  FaCheckCircle,
  FaEdit,
  FaInfoCircle,
  FaRegTrashAlt
} from 'react-icons/fa'

import { BsCheck2Circle } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import api from '../../service/api'

export default function TransacoesIndex({ transactions }) {
  const formatter = new Intl.DateTimeFormat('pr-BR', {
    month: 'long',
    year: 'numeric'
  })
  const [monthSelect, setMonthSelect] = useState(new Date())

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
                <tr>
                  <td className="flex items-center justify-center my-2">
                    {transaction.efetivada === true && (
                      <FaCheckCircle className="text-lime-500 text-bold text-2xl" />
                    )}
                    {transaction.efetivada === false && (
                      <FaInfoCircle className="text-red-500 text-bold text-2xl" />
                    )}
                  </td>
                  <td>
                    {Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(
                      new Date(transaction.data)
                    )}
                  </td>
                  <td>{transaction.descricao}</td>
                  <td>{transaction.categoria.name}</td>
                  <td>Conta</td>
                  <td>
                    {Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(transaction.valor)}
                  </td>
                  <td className="flex flex-row items-center justify-center">
                    <FaEdit className="mx-1" />
                    <FaRegTrashAlt className="mx-1" />
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

  return {
    props: { transactions }
  }
}
