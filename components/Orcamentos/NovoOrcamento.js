import Router from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa'
import ReactModal from 'react-modal'
import { useToasts } from 'react-toast-notifications'
import api from '../../service/api'

export default function NovoOrcamentoComponent({ categorias }) {
  const [modalIsOpen1, setIsOpen1] = useState(false)
  const { addToast } = useToasts()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

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
  async function handleNovoOrcamento(data) {
    const res = await api.post('/orcamentos/novo', data)
    if (res) {
      if (res) {
        addToast('Receita criada com sucesso!', {
          appearance: 'success',
          autoDismiss: true
        })
        Router.reload()
      }
    }
  }
  return (
    <>
      <ReactModal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        style={customStyles}
      >
        <div className="lg:w-[500px] sm:w-[300px] h-[440px] overflow-y-scroll scrollbar-thin scrollbar-thumb-dark2 scrollbar-track-dark p-4">
          <div className="text-gray-300 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-textPrimary">
              Novo orçamento
            </h1>
            <h1
              onClick={closeModal1}
              className="text-lg font-bold cursor-pointer mr-4"
            >
              X
            </h1>
          </div>
          <hr className="border-dark5 my-3" />
          <form onSubmit={handleSubmit(handleNovoOrcamento)}>
            <div className="my-4">
              <div className="relative my-6">
                <input
                  {...register('valor', { required: true })}
                  type="number"
                  id="initial-amount"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer"
                  required
                />
                <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-roxo peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Valor do orçamento
                </label>
              </div>

              <div className="relative my-6">
                <select
                  {...register('categoria_id', { required: true })}
                  id="categoria"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer"
                  required
                >
                  {categorias.map(categoria => {
                    return (
                      <option key={categoria.id} value={categoria.id}>
                        {categoria.name}
                      </option>
                    )
                  })}
                </select>
                <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-roxo peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Categoria
                </label>
              </div>

              <div className="relative my-6">
                <input
                  {...register('periodo', { required: true })}
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer"
                  required
                  type="month"
                />
                <label className="bg-dark3 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-roxo peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Período
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-roxo text-white rounded-lg py-2 mt-8"
                >
                  Salvar
                </button>
              </div>
            </div>
          </form>
        </div>
      </ReactModal>
      <div className="flex items-center justify-center bg-dark3 border-b-4 border-black lg:w-[315px] sm:w-full rounded-xl mx-3 my-5 p-5 hover:bg-opacity-40 cursor-pointer">
        <div
          onClick={openModal1}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-white font-bold text-2xl">
            <FaPlus />
          </h1>
          <p className="text-white font-bold text-xl">Novo orçamento</p>
        </div>
      </div>
    </>
  )
}
