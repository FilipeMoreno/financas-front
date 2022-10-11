import { Chart } from 'react-google-charts'

export default function RelatoriosIndex() {
  const data = [
    ['Meses', 'Vendas', 'Expenses', 'Profit'],
    ['Janeiro', 1000, 400, 200],
    ['Fevereiro', 1170, 460, 250],
    ['Março', 660, 1120, 300],
    ['Abril', 1030, 540, 350]
  ]
  const options = {
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017'
    }
  }

  const data2 = [
    ['Categoria', 'R$'],
    ['Alimentação', 11.9],
    ['Laser', 22.45],
    ['Assinaturas', 2],
    ['Vestuário', 2],
    ['Casa', 7]
  ]

  const options2 = {
    title: 'Gastos por categorias',
    pieHole: 0.4,
    is3D: false,
    backgroundColor: {
      fill: '#121212',
      opacity: 100
    }
  }

  return (
    <>
      <title>Relatórios</title>
      <div className="bg-dark">
        <div>
          <Chart
            className="bg-dark"
            chartType="Bar"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />

          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data2}
            options={options2}
          />
        </div>
      </div>
    </>
  )
}
