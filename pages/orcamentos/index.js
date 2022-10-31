import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { MdMoreVert } from 'react-icons/md'
import useFetch from 'use-http'
import NovoOrcamentoComponent from '../../components/Orcamentos/NovoOrcamento'
import api from '../../service/api'

export default function OrcamentoIndex({ orcamentos, dashboard }) {
  const formatter = new Intl.DateTimeFormat('pr-BR', {
    month: 'long',
    year: 'numeric'
  })
  const [monthSelect, setMonthSelect] = useState(new Date())
  return (
    <>
      <title>Orçamentos | No Controle</title>
      <div className="flex flex-col bg-dark2 md:h-32 sm:h-48 rounded-b-3xl justify-around items-center mb-8">
        <h1 className="font-bold text-3xl text-white">Orçamentos</h1>
        <div className="flex items-center justify-center border-2 border-roxo rounded-xl w-64 h-10 sm:my-5 lg:my-0">
          <div>
            <p className="flex flex-row items-center justify-center text-lg text-roxo">
              {formatter.format(monthSelect)}
            </p>
          </div>
        </div>
        <p></p>
      </div>

      <div className="w-full p-4 justify-center items-center bg-dark3 rounded-lg">
        <div className="flex flex-col items-center justify-center my-2">
          <p className="font-bold text-red-500">despesas</p>
          <div className="flex flex-row items-center justify-center">
            <p className="font-bold mx-1">
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(dashboard.orcamentosTotalGastos)}{' '}
            </p>
            <p>de</p>
            <p className="mx-1">
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(dashboard.orcamentosTotal)}
            </p>
          </div>
        </div>
        <div className="mx-8">
          {((dashboard.orcamentosTotalGastos / dashboard.orcamentosTotal) *
            100 >=
            75 && (
            <progress
              className="w-full h-8 progress progress-error bg-dark5 "
              value={dashboard.orcamentosTotalGastos}
              max={dashboard.orcamentosTotal}
            ></progress>
          )) ||
            ((dashboard.orcamentosTotalGastos / dashboard.orcamentosTotal) *
              100 >=
              51 && (
              <progress
                className="w-full h-8 progress progress-warning bg-dark5 "
                value={dashboard.orcamentosTotalGastos}
                max={dashboard.orcamentosTotal}
              ></progress>
            )) ||
            ((dashboard.orcamentosTotalGastos / dashboard.orcamentosTotal) *
              100 >=
              0 && (
              <progress
                className="w-full h-8 progress progress-success bg-dark5 "
                value={dashboard.orcamentosTotalGastos}
                max={dashboard.orcamentosTotal}
              ></progress>
            ))}
          <p className="text-center">
            {Math.round(
              (dashboard.orcamentosTotalGastos / dashboard.orcamentosTotal) *
                100
            )}
            %
          </p>
        </div>
      </div>

      <div className="flex flex-row flex-wrap">
        <NovoOrcamentoComponent categorias={dashboard.categorias} />
        {orcamentos.map(orcamento => {
          const [detalhesOrcamento, setDetalhesOrcamento] = useState()
          useEffect(() => {
            api.get(`/orcamentos/detalhes/${orcamento.id}`).then(res => {
              setDetalhesOrcamento(res.data)
            })
          }, [])

          return (
            <div className="bg-dark3 border-b-4 border-black lg:w-[315px] sm:w-full rounded-xl mx-3 my-5 p-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-row items-center justify-center">
                  <Image
                    className="rounded-full"
                    alt={`Logo da categoria ${orcamento.categoria.name}`}
                    width={40}
                    height={40}
                    blurDataURL={orcamento.categoria.icon_url}
                    src={orcamento.categoria.icon_url}
                  />
                  <h1 className="text-xl font-bold text-white ml-2">
                    {orcamento.categoria.name}
                  </h1>
                </div>
                <div className="dropdown dropdown-end">
                  <label tabIndex="0">
                    <MdMoreVert className="text-white text-2xl cursor-pointer" />
                  </label>
                  <ul
                    tabIndex="0"
                    className="dropdown-content menu p-2 shadow-lg bg-dark4 border-b-4 border-black rounded-box w-52 text-white"
                  >
                    <li>
                      <a>Editar</a>
                    </li>

                    <li>
                      <a>Excluir</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col mt-4">
                {((detalhesOrcamento?.valorTotal / orcamento.valor) * 100 >=
                  75 && (
                  <progress
                    className="w-full progress progress-error bg-dark5 "
                    value={detalhesOrcamento?.valorTotal}
                    max={orcamento.valor}
                  ></progress>
                )) ||
                  ((detalhesOrcamento?.valorTotal / orcamento.valor) * 100 >=
                    51 && (
                    <progress
                      className="w-full progress progress-warning bg-dark5 "
                      value={detalhesOrcamento?.valorTotal}
                      max={orcamento.valor}
                    ></progress>
                  )) ||
                  ((detalhesOrcamento?.valorTotal / orcamento.valor) * 100 >=
                    0 && (
                    <progress
                      className="w-full progress progress-success bg-dark5 "
                      value={detalhesOrcamento?.valorTotal}
                      max={orcamento.valor}
                    ></progress>
                  ))}

                <div className="flex flex-row justify-between">
                  <p className="text-xs mt-2">
                    {' '}
                    {Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(detalhesOrcamento?.valorTotal)}
                  </p>
                  <p className="text-xs mt-2">
                    {Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(orcamento.valor)}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const date = new Date()
  const orcamentos = await api
    .get(
      `/orcamentos/get/all?mes=${date.getMonth() + 1}&ano=${date.getFullYear()}`
    )
    .then(res => res.data)
    .catch(error => console.log(error))

  const dashboard = await api
    .get(`/dashboard/get`)
    .then(res => res.data)
    .catch(error => console.log(error))

  return {
    props: { orcamentos, dashboard }
  }
}
