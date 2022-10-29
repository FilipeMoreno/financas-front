export default function CardBalanceComponent({ saldo, previsto }) {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="flex items-center flex-col justify-center bg-dark3 border-b-4 border-black w-64 h-24 rounded-xl mx-4">
          <p>Saldo atual:</p>
          <p className="text-2xl font-bold text-white">
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(saldo)}
          </p>
        </div>
        <div className="flex items-center flex-col justify-center bg-dark3 border-b-4 border-black w-64 h-24 rounded-xl mx-4">
          <p>Saldo previsto:</p>
          <p className="text-2xl font-bold text-white">
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(previsto)}
          </p>
        </div>
      </div>
    </>
  )
}
