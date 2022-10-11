import { useRouter } from 'next/router'
import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import AccountsComponent from '../components/Accounts'
import BillsToPayComponent from '../components/Bills/BillsToPay'
import BillsToReceiverComponent from '../components/Bills/BillsToReceiver'
import CardComponent from '../components/Cards'
import TransactionsComponent from '../components/Transactions'

import Footer from '../components/Footer'
import Header from '../components/Header'
import { FaPlus } from 'react-icons/fa'
import { AiOutlineFileSearch } from 'react-icons/ai'
import DetailsComponent from '../components/Index/DetailsComponent'
import NewTransactionComponent from '../components/Index/NewTransactionComponent'
import { parseCookies } from 'nookies'

export default function Home() {
  const router = useRouter()

  const [hideValue, setHideValue] = useState(false)

  function handleHideValue() {
    setHideValue(!hideValue)
    localStorage.setItem('hide-amount', !hideValue)
  }

  return (
    <>
      <Header />
      <title>Finanças</title>
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
              <h1 className="font-bold text-4xl">R$ 100,00</h1>
            )) || <h1 className="font-bold text-4xl">🙈🙈🙈</h1>}
            <DetailsComponent />
          </div>
          <div>
            <NewTransactionComponent />
          </div>
        </div>
        <div className="grid overflow-hidden md:grid-cols-2 sm:grid-cols-1 grid-rows-4 gap-y-8 gap-x-12 grid-flow-row md:mx-12 sm:mx-6">
          <div className="box">
            <AccountsComponent hideValue={hideValue} />
          </div>
          <div className="box row-span-2">
            <BillsToReceiverComponent hideValue={hideValue} />
          </div>
          <div className="box">
            <CardComponent />
          </div>
          <div className="box">
            <TransactionsComponent hideValue={hideValue} />
          </div>
          <div className="box row-span-2">
            <BillsToPayComponent hideValue={hideValue} />
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center">
          <AccountsComponent hideValue={hideValue} />

          <BillsToReceiverComponent hideValue={hideValue} />

          <BillsToPayComponent hideValue={hideValue} />

          <CardComponent />

          <TransactionsComponent hideValue={hideValue} />
        </div> */}
      </div>
      <Footer />
    </>
  )
}