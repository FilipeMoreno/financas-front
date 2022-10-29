import Router from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa'
import ReactModal from 'react-modal'
import { useToasts } from 'react-toast-notifications'
import api from '../../service/api'

export default function NovaCategoriaComponent() {
  const [modalIsOpen1, setIsOpen1] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { addToast } = useToasts()

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

  async function handleCreate({ name, icon_url, color }) {
    try {
      let res

      res = await api.post('/categories/new', {
        name,
        icon_url,
        color
      })
      if (res) {
        addToast('Categoria criada com sucesso!', {
          appearance: 'success',
          autoDismiss: true
        })
        Router.reload()
      }
    } catch (e) {
      return addToast(
        e.response?.data?.message + ' ' + e.response?.data?.details,
        {
          appearance: 'error',
          autoDismiss: true
        }
      )
    }
  }

  return (
    <>
      <ReactModal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        style={customStyles}
      >
        <div className="lg:w-[500px] sm:w-[300px] h-[340px] overflow-y-scroll scrollbar-thin scrollbar-thumb-dark2 scrollbar-track-dark p-4">
          <div className="text-gray-300 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-textPrimary">
              Nova Categoria
            </h1>
            <h1
              onClick={closeModal1}
              className="text-lg font-bold cursor-pointer mr-4"
            >
              X
            </h1>
          </div>
          <hr className="border-dark5 my-3" />
          <form onSubmit={handleSubmit(handleCreate)}>
            <div className="my-4">
              <div className="">
                <input
                  {...register('name', { required: true })}
                  type="text"
                  id="name"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer"
                  placeholder="Nome"
                  required
                />
              </div>

              <div className="">
                <input
                  {...register('color', { required: true })}
                  type="text"
                  id="color"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer"
                  placeholder="Cor"
                  required
                />
              </div>
              <div className="">
                <input
                  {...register('icon_url', { required: true })}
                  type="url"
                  id="icon_url"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer"
                  placeholder="URL do ícone"
                  required
                />
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
      <div className="flex flex-row items-center justify-center p-4 bg-dark3 hover:opacity-60 border-b-4  border-b-black rounded-lg mt-2">
        <div
          onClick={openModal1}
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <h1 className="text-white font-bold text-2xl">
            <FaPlus />
          </h1>
          <p className="text-white font-bold text-xl">Nova categoria</p>
        </div>
      </div>
    </>
  )
}
