import { parseCookies } from 'nookies'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

import CardBalanceComponent from '../../components/Accounts/CardBalance'
import AccountHeaderComponent from '../../components/Accounts/AccountHeader'
import CardsAccountsComponent from '../../components/Accounts/CardsAccount'

export default function Accounts() {
  return (
    <>
      <title>Contas | Finanças</title>
      <Header />
      <div className="lg:p-12 sm:p-2 bg-dark">
        <div>
          <AccountHeaderComponent />
          <CardBalanceComponent />
        </div>
        <div className="flex flex-row flex-wrap p-4">
          <div className="flex flex-col items-center justify-center bg-dark3 border-b-4 border-black w-[320px] h-[210px] rounded-xl mx-3 my-3">
            <div className="flex flex-col items-center justify-center cursor-pointer hover:bg-black hover:bg-opacity-30 hover:rounded-full hover:w-[140px] h-[140px]">
              <h1 className="text-white font-bold text-3xl">+</h1>
              <p className="text-white font-bold text-xl">Nova conta</p>
            </div>
          </div>

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
