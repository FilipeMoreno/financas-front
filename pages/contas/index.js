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
        <div className="flex flex-row flex-wrap p-4">
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
