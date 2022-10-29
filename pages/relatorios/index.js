import api from '../../service/api'
import { Doughnut } from 'react-chartjs-2'
import { ArcElement } from 'chart.js'
import Chart from 'chart.js/auto'
import { useState } from 'react'

export default function RelatoriosIndex({
  receitasPorCategorias,
  despesasPorCategorias,
  transacoes
}) {
  const formatter = new Intl.DateTimeFormat('pr-BR', {
    month: 'long',
    year: 'numeric'
  })
  const [monthSelect, setMonthSelect] = useState(new Date())

  let categoriasReceitas = []
  let categoriasDespesas = []

  for (let i = 0; i < receitasPorCategorias.length; i++) {
    if (!categoriasReceitas.includes(receitasPorCategorias[i].categoria.name)) {
      categoriasReceitas.push(receitasPorCategorias[i].categoria.name)
    }
  }

  for (let i = 0; i < despesasPorCategorias.length; i++) {
    if (!categoriasDespesas.includes(despesasPorCategorias[i].categoria.name)) {
      categoriasDespesas.push(despesasPorCategorias[i].categoria.name)
    }
  }

  let receitasCategorias = categoriasReceitas.map(categoria => {
    let filteredData = receitasPorCategorias.filter(trx => {
      return trx.categoria.name === categoria
    })

    // console.log(filteredData)

    let total = filteredData.reduce((accumulator, transaction) => {
      return accumulator + parseFloat(transaction.valor)
    }, 0)

    // console.log(total)

    return total
  })

  let DespesasCategorias = categoriasDespesas.map(categoria => {
    let filteredData = despesasPorCategorias.filter(trx => {
      return trx.categoria.name === categoria
    })

    // console.log(filteredData)

    let total = filteredData.reduce((accumulator, transaction) => {
      return accumulator + parseFloat(transaction.valor)
    }, 0)

    // console.log(total)

    return total
  })

  const receitasByCategorias = {
    labels: categoriasReceitas,
    datasets: [
      {
        data: receitasCategorias,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  }

  const despesasByCategorias = {
    labels: categoriasDespesas,
    datasets: [
      {
        data: DespesasCategorias,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  }

  return (
    <>
      <title>Relatórios | No Controle</title>
      <div className="flex flex-col bg-dark2 md:h-32 sm:h-48 rounded-b-3xl justify-around items-center mb-8">
        <h1 className="font-bold text-3xl text-white">Relatórios</h1>
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
      <div className="flex flex-wrap justify-center">
        <div className="bg-dark3 border-b-4 border-black rounded-xl mx-3 my-5 p-5 w-[600px]">
          <p>Despesas por categoria</p>
          <Doughnut data={despesasByCategorias} />
        </div>
        <div className="bg-dark3 border-b-4 border-black rounded-xl mx-3 my-5 p-5 w-[600px]">
          <p>Receitas por categoria</p>
          <Doughnut data={receitasByCategorias} />
        </div>
        <div className="bg-dark3 border-b-4 border-black rounded-xl mx-3 my-5 p-5 w-[600px]">
          <p>Receita x Despesas</p>
        </div>
        <div className="bg-dark3 border-b-4 border-black rounded-xl mx-3 my-5 p-5 w-[600px]">
          <p>Receita x Despesas</p>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const receitasPorCategorias = await api
    .get('/relatorios/receitas/categorias')
    .then(res => res.data)
    .catch(error => console.log(error))

  const despesasPorCategorias = await api
    .get('/relatorios/despesas/categorias')
    .then(res => res.data)
    .catch(error => console.log(error))

  const transacoes = await api
    .get('/relatorios/transacoes')
    .then(res => res.data)
    .catch(error => console.log(error))

  return {
    props: { receitasPorCategorias, despesasPorCategorias, transacoes }
  }
}
