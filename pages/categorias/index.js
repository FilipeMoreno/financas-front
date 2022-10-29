import Image from 'next/image'
import { useState } from 'react'
import NovaCategoriaComponent from '../../components/Categorias/NovaCategoria'
import api from '../../service/api'

export default function CategoriasIndex({ categorias }) {
  const formatter = new Intl.DateTimeFormat('pr-BR', {
    month: 'long',
    year: 'numeric'
  })
  const [monthSelect, setMonthSelect] = useState(new Date())
  return (
    <>
      <title>Categorias | No Controle</title>
      <div className="flex flex-col bg-dark2 md:h-32 sm:h-48 rounded-b-3xl justify-around items-center mb-8">
        <h1 className="font-bold text-3xl text-white">Categorias</h1>
        <div className="flex items-center justify-center border-2 border-roxo rounded-xl w-64 h-10 sm:my-5 lg:my-0">
          <div>
            {/* <div onClick={openModal1}> */}
            <p className="flex flex-row items-center justify-center text-lg text-roxo cursor-pointer">
              {formatter.format(monthSelect)}
            </p>
          </div>
        </div>
        <p></p>
      </div>
      <div className="flex flex-col justify-center rounded-lg lg:mx-96 sm:mx-4 my-6">
        <NovaCategoriaComponent />
        {categorias.map(categoria => {
          return (
            <div className="flex flex-row items-center justify-between p-2 px-12 bg-dark3 border-b-4 border-black rounded-lg mt-2">
              <div className="mx-3">
                <Image height={64} width={64} src={categoria.icon_url} />
              </div>
              <div>
                <h1 className="text-xl">{categoria.name}</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="-mt-2">Cor</p>
                <div
                  className="rounded-full w-6 h-6 bg-red-500"
                  style={{ background: categoria.color }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const categorias = await api
    .get('/categories/get/all')
    .then(res => res.data)
    .catch(e => {
      console.log('Ocorreu um erro ao acessar a API de categorias', e)
    })
  return {
    props: {
      categorias
    }
  }
}
