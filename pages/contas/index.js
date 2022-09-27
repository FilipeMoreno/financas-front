import { parseCookies } from 'nookies'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

import CardBalanceComponent from '../../components/Accounts/CardBalance'
import AccountHeaderComponent from '../../components/Accounts/AccountHeader'
import CardsAccountsComponent from '../../components/Accounts/CardsAccount'
import NewAccountComponent from '../../components/Accounts/NewAccount'

export default function Accounts() {
  return (
    <>
      <title>Contas | Finanças</title>
      <Header />
      <div className=" bg-dark">
        <div>
          <AccountHeaderComponent />
          <CardBalanceComponent />
        </div>
<<<<<<< HEAD
        <div className="flex flex-row flex-wrap items-center p-4">
=======
        <div className="flex flex-row flex-wrap items-center justify-center p-4">
>>>>>>> 999196ec6d71147b78de0f494115fe9887de96fd
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
      <Footer />
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
