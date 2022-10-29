import { useState } from 'react'
import { AiOutlineArrowUp, AiOutlineFileSearch } from 'react-icons/ai'
import { BsArrowUpSquare, BsFillArrowUpCircleFill } from 'react-icons/bs'
import ReactModal from 'react-modal'

export default function DetailsComponent({ dados }) {
  const [modalIsOpen1, setIsOpen1] = useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#212121',
      borderRadius: '8px',
      borderColor: '#212121'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }
  }

  function openModal1() {
    setIsOpen1(true)
  }

  function closeModal1() {
    setIsOpen1(false)
  }
  return (
    <>
      <a
        onClick={openModal1}
        className="flex items-center font-bold text-lg cursor-pointer hover:bg-dark-4 mt-1"
      >
        <AiOutlineFileSearch className="mr-1" /> Detalhes
      </a>
      <ReactModal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        style={customStyles}
      >
        <div className="lg:w-[400px] sm:w-[300px] overflow-y-scroll scrollbar-thin scrollbar-thumb-dark2 scrollbar-track-dark p-4">
          <div className="text-gray-300 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-textPrimary">Detalhes</h1>
            <h1
              onClick={closeModal1}
              className="text-lg font-bold cursor-pointer mr-4"
            >
              X
            </h1>
          </div>
          <hr className="border-dark5 my-3" />
          <div className="my-4">
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="font-bold lg:text-xl sm:text-md">
                  (+) Receitas
                </h1>
                <p className="text-[#7a7a7a] font-bold lg:text-base sm:text-sm">
                  {dados.qtdReceitas} transação
                </p>
              </div>
              <div>
                <h1 className="font-bold lg:text-xl sm:text-md">
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(dados.totalReceitas)}
                </h1>
              </div>
            </div>
            <progress
              className="progress progress-success w-full bg-dark"
              value={dados.totalReceitas}
              max={dados.receitasMaisDespesas}
            ></progress>
            <p className="text-xs text-[#7a7a7a]">
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(dados.totalReceitas)}{' '}
              de{' '}
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(dados.receitasMaisDespesas)}
            </p>
            <hr className="border-dark5 my-3" />
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="font-bold lg:text-xl sm:text-md">
                  (-) Despesas
                </h1>
                <p className="text-[#7a7a7a] font-bold lg:text-base sm:text-sm">
                  {dados.qtdDespesas} transação
                </p>
              </div>
              <div>
                <h1 className="font-bold lg:text-xl sm:text-md">
                  -{' '}
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(dados.totalDespesas)}
                </h1>
              </div>
            </div>
            <progress
              className="progress progress-error w-full bg-dark"
              value={dados.totalDespesas}
              max={dados.receitasMaisDespesas}
            ></progress>
            <p className="text-xs text-[#7a7a7a]">
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(dados.totalDespesas)}{' '}
              de{' '}
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(dados.receitasMaisDespesas)}
            </p>

            <hr className="border-dark5 my-3" />
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="font-bold lg:text-xl sm:text-md">(=) Total</h1>
                <p className="text-[#7a7a7a] font-bold lg:text-base sm:text-sm">
                  {dados.qtdReceitas + dados.qtdDespesas} transação
                </p>
              </div>
              <div>
                <h1 className="font-bold lg:text-xl sm:text-md">
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(dados.receitasMaisDespesas)}
                </h1>
              </div>
            </div>
            <hr className="border-dark5 my-3" />
          </div>
        </div>
      </ReactModal>
    </>
  )
}
