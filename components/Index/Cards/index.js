export default function CardComponent() {
  return (
    <>
      <div className="bg-dark3 rounded-lg h-full">
        <p className="font-bold p-4">Cartões de créditos</p>
        <div className="flex flex-row items-center justify-between rounded-lg mx-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-[50px] h-[50px] mr-4">
              <img
                src="https://raw.githubusercontent.com/FilipeMoreno/financas-front/images/bancos/nubank.png"
                alt=""
                width="100%"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-medium">Nubank</h1>
              <p className="text-sm font-thin text-gray-300">
                Cartão de crédito
              </p>
            </div>
          </div>
          <button className="bg-roxo md:p-3 sm:p-2 rounded-lg font-bold md:text-md sm:text-sm">
            Ver fatura
          </button>
        </div>
        <div className="flex flex-row p-4 mx-12">
          <div className="mx-4">
            <h1>Disponível</h1>
            <p>R$ 100,00</p>
          </div>
          <div className="mx-4">
            <h1>Fatura</h1>
            <p>R$ 100,00</p>
          </div>
        </div>
      </div>
    </>
  )
}
