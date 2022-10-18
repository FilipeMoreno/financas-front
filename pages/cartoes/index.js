import CardsCardComponent from '../../components/Cards/CardsCardComponent'
import NewCardComponent from '../../components/Cards/NewCard'

export default function CartoesIndex() {
  return (
    <>
      <title>Cartões | Finanças</title>
      <div className="bg-dark">
        <div>
          {/* <AccountHeaderComponent /> */}
          {/* <CardBalanceComponent /> */}
        </div>
        <div className="flex flex-row flex-wrap items-center p-4">
          <NewCardComponent />

          <CardsCardComponent
            name={'Cartão Next'}
            icon_url={'https://i.imgur.com/SxsXTZc.png'}
          />
          <CardsCardComponent
            name={'Cartão Nubank'}
            icon_url={'https://i.imgur.com/ocqIx96.png'}
          />
        </div>
      </div>
    </>
  )
}
