import { parseCookies } from 'nookies'

import CardBalanceComponent from '../../components/Accounts/CardBalance'
import AccountHeaderComponent from '../../components/Accounts/AccountHeader'
import CardsAccountsComponent from '../../components/Accounts/CardsAccount'
import NewAccountComponent from '../../components/Accounts/NewAccount'
import api from '../../service/api'
import { useEffect, useState } from 'react'

export default function Accounts({ types }) {
  const [accountsTypes, setAccoutsType] = useState()

  useEffect(() => {
    api
      .get('/accounts/types/get/all')
      .then(res => {
        setAccoutsType(res.data)
      })
      .catch(e => {
        console.log('Ocorreu um erro ao acessar a API de getAccountsTypes', e)
      })
  })

  return (
    <>
      <title>Contas | Finanças</title>
      <div className="bg-dark">
        <div>
          <AccountHeaderComponent />
          <CardBalanceComponent />
        </div>
        <div className="flex flex-row flex-wrap items-center p-4">
          <NewAccountComponent />

          <CardsAccountsComponent
            name={'Carteira'}
            icon_url={
              'https://raw.githubusercontent.com/FilipeMoreno/financas-front/images/bancos/carteira.png'
            }
          />
          <CardsAccountsComponent
            name={'Nubank'}
            icon_url={
              'https://raw.githubusercontent.com/FilipeMoreno/financas-front/images/bancos/nubank.png'
            }
          />

          <CardsAccountsComponent
            name={'Banco do Brasil'}
            icon_url={
              'https://raw.githubusercontent.com/FilipeMoreno/financas-front/images/bancos/bb.png'
            }
          />
        </div>
      </div>
    </>
  )
}

// export const getServerSideProps = async ctx => {
//   let statusCode = { code: 200 }

//   const { 'financas.token': token } = await parseCookies(ctx)

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/auth/login',
//         permanent: false
//       }
//     }
//   }
// }
