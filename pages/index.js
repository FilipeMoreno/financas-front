import { useRouter } from 'next/router'
import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import api from '../service/api'

import AccountsComponent from '../components/Index/Accounts'
import BillsToPayComponent from '../components/Index/Bills/BillsToPay'
import BillsToReceiverComponent from '../components/Index/Bills/BillsToReceiver'
import CardComponent from '../components/Index/Cards'
import TransactionsComponent from '../components/Index/Transactions'
import DetailsComponent from '../components/Index/DetailsComponent'
import NewTransactionComponent from '../components/Index/NewTransactionComponent'
import { parseCookies } from 'nookies'

export default function Home({ dashboard }) {
  const router = useRouter()

  const [hideValue, setHideValue] = useState(false)

  function handleHideValue() {
    setHideValue(!hideValue)
    localStorage.setItem('hide-amount', !hideValue)
  }

  return (
    <>
      <title>Dashboard | No Controle</title>
      <div>
        <div className="flex md:flex-row sm:flex-col bg-dark2 md:h-32 sm:h-48 rounded-b-3xl justify-around items-center mb-8">
          <div className="flex flex-col justify-center mx-2">
            <div className="flex flex-row items-center text-xl ">
              <p>Saldo total</p>
              <a onClick={() => handleHideValue()}>
                {(!hideValue && (
                  <AiFillEye className="ml-4 cursor-pointer" />
                )) || <AiFillEyeInvisible className="ml-4 cursor-pointer" />}
              </a>
            </div>
            {(!hideValue && (
              <h1 className="font-bold text-4xl">
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(dashboard.saldo)}
              </h1>
            )) || <h1 className="font-bold text-4xl">🙈🙈🙈</h1>}
            <DetailsComponent dados={dashboard} />
          </div>
          <div>
            <NewTransactionComponent
              categorias={dashboard.categorias}
              contas={dashboard.contas}
            />
          </div>
        </div>

        <div className="grid overflow-hidden md:grid-cols-2 sm:grid-cols-1 grid-rows-4 gap-y-8 gap-x-12 grid-flow-row md:mx-12 sm:mx-6">
          <div className="box">
            <AccountsComponent
              accounts={dashboard.contas}
              hideValue={hideValue}
            />
          </div>
          <div className="box row-span-1">
            <BillsToPayComponent
              expenses={dashboard.despesas_pendentes}
              hideValue={hideValue}
            />
          </div>
          {/* <div className="box">
            <CardComponent />
          </div> */}
          <div className="box">
            <TransactionsComponent
              hideValue={hideValue}
              transactions={dashboard.ultimasTransacoes}
            />
          </div>
          <div className="box row-span-1">
            <BillsToReceiverComponent
              hideValue={hideValue}
              income={dashboard.receitas_pendentes}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const { 'financas.token': token } = await parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false
      }
    }
  }

  const dashboard = await api
    .get('/dashboard/get')
    .then(res => res.data)
    .catch(error => console.log(error))

  return {
    props: { dashboard }
  }
}
