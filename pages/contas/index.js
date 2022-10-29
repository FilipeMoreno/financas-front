import { parseCookies } from 'nookies'

import CardBalanceComponent from '../../components/Accounts/CardBalance'
import AccountHeaderComponent from '../../components/Accounts/AccountHeader'
import CardsAccountsComponent from '../../components/Accounts/CardsAccount'
import NewAccountComponent from '../../components/Accounts/NewAccount'
import api from '../../service/api'
import { useEffect, useState } from 'react'

export default function Accounts({
  getAllBanks,
  getAccountsTypes,
  dashboard,
  getAccounts
}) {
  const [accountsTypes, setAccoutsType] = useState()

  return (
    <>
      <title>Contas | No Controle</title>
      <div className="bg-dark">
        <div>
          <AccountHeaderComponent />
          <CardBalanceComponent
            saldo={dashboard.saldo}
            previsto={dashboard.saldo_previsto}
          />
        </div>
        <div className="flex flex-row flex-wrap items-center p-4">
          <NewAccountComponent banks={getAllBanks} types={getAccountsTypes} />

          {getAccounts?.map(account => {
            return (
              <CardsAccountsComponent
                name={account.name}
                icon_url={
                  account.bank.icon_url
                    ? account.bank.icon_url
                    : account.type.icon_url
                }
                saldo={account.balance}
                previsto={'-'}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async ctx => {
  let statusCode = { code: 200 }

  const { 'financas.token': token } = await parseCookies(ctx)

  const getAccountsTypes = await api
    .get('/accounts/types/get/all')
    .then(res => res.data)
    .catch(e => {
      console.log('Ocorreu um erro ao acessar a API de getAccountsTypes', e)
    })

  const getAllBanks = await api
    .get('/banks/get/all')
    .then(res => res.data)
    .catch(e => {
      console.log('Ocorreu um erro ao acessar a API de getAllBanks', e)
    })

  const dashboard = await api
    .get('/dashboard/get')
    .then(res => res.data)
    .catch(error => console.log(error))

  const getAccounts = await api
    .get('/accounts/get/all')
    .then(res => res.data)
    .catch(error => console.log(error))

  // if (!token) {
  //   return {
  //     redirect: {
  //       destination: '/auth/login',
  //       permanent: false
  //     }
  //   }
  // }

  return {
    props: { getAllBanks, getAccountsTypes, dashboard, getAccounts }
  }
}
