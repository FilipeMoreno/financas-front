import { useState } from 'react'

export default function OrcamentoIndex() {
  const formatter = new Intl.DateTimeFormat('pr-BR', {
    month: 'long',
    year: 'numeric'
  })
  const [monthSelect, setMonthSelect] = useState(new Date())
  return (
    <>
      <title>Orçamentos | No Controle</title>
      <div className="flex flex-col bg-dark2 md:h-32 sm:h-48 rounded-b-3xl justify-around items-center mb-8">
        <h1 className="font-bold text-3xl text-white">Orçamentos</h1>
        <div className="flex items-center justify-center border-2 border-roxo rounded-xl w-64 h-10 sm:my-5 lg:my-0">
          <div>
            <p className="flex flex-row items-center justify-center text-lg text-roxo">
              {formatter.format(monthSelect)}
            </p>
          </div>
        </div>
        <p></p>
      </div>
    </>
  )
}
