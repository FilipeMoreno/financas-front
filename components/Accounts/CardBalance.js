export default function CardBalanceComponent() {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="flex items-center flex-col justify-center bg-dark3 border-b-4 border-black w-64 h-24 rounded-xl mx-4">
          <p>Saldo atual:</p>
          <p className="text-2xl font-bold text-white">R$ 100,00</p>
        </div>
        <div className="flex items-center flex-col justify-center bg-dark3 border-b-4 border-black w-64 h-24 rounded-xl mx-4">
          <p>Saldo previsto:</p>
          <p className="text-2xl font-bold text-white">R$ 100,00</p>
        </div>
      </div>
    </>
  )
}
