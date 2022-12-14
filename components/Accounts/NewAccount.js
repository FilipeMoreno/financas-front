import { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import CurrencyInput from 'react-currency-input-field'
import ReactModal from 'react-modal'
import Image from 'next/image'
import api from '../../service/api'
import { useForm } from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'
import { Route } from 'react-router-dom'
import Router from 'next/router'

export default function NewAccountComponent({ types, banks }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { addToast } = useToasts()

  const [modalIsOpen1, setIsOpen1] = useState(false)
  const [modalIsOpen2, setIsOpen2] = useState(false)
  const [modalIsOpen3, setIsOpen3] = useState(false)
  const [searchBank, setSearchBank] = useState(banks)

  async function handleSearchBank(ctx) {
    const getSearchResponse = await api.get(`/banks/get/search?name=${ctx}`)
    setSearchBank(getSearchResponse.data)
  }

  async function handleCreate({ name, balance }) {
    try {
      let res

      if (selectedBank.id !== null || accountType.id !== null) {
        res = await api.post('/accounts/create', {
          name,
          type: accountType.id,
          bank: selectedBank.id,
          balance,
          color: selectedBank.color
        })
        if (res) {
          addToast('Conta criada com sucesso!', {
            appearance: 'success',
            autoDismiss: true
          })
          Router.reload()
        }
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

  const [accountType, setAccountType] = useState({
    name: 'Selecione',
    image:
      'https://raw.githubusercontent.com/FilipeMoreno/financas-front/images/bancos/cofre.jpg'
  })

  const [selectedBank, setSelectedBank] = useState({
    name: 'Selecione',
    image:
      'https://raw.githubusercontent.com/FilipeMoreno/financas-front/images/bancos/cofre.jpg'
  })

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

  function openModal2() {
    setIsOpen2(true)
  }

  function closeModal2() {
    setIsOpen2(false)
  }

  function openModal3() {
    setIsOpen3(true)
  }

  function closeModal3() {
    setIsOpen3(false)
  }

  function handleBankSelection(name, image) {
    setSelectedBank(name, image)
    closeModal2()
  }

  function handleAccountType(name, image) {
    setAccountType(name, image)
    closeModal3()
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
            <h1 className="text-2xl font-bold text-textPrimary">Nova conta</h1>
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
                  {...register('balance', { required: true })}
                  type="number"
                  id="initial-amount"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer"
                  placeholder="Saldo inicial"
                  required
                />
                {/* <CurrencyInput
                  {...register('balance')}
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer"
                  id="initial-amount"
                  name="initial-amount"
                  placeholder="Saldo inicial"
                  prefix="R$ "
                  decimalSeparator=","
                  groupSeparator="."
                  decimalsLimit={2}
                  step={1}
                  intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                  onValueChange={(value, name) => console.log(value, name)}
                  autoComplete={'off'}
                /> */}
              </div>

              <div className="">
                <input
                  {...register('name', { required: true })}
                  type="text"
                  id="account-name"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer"
                  placeholder="Nome da conta"
                  required
                />
              </div>

              <div>
                <h1 className="text-md">Institui????o financeira</h1>
                <div className="flex flex-row items-center border-0 border-b-2 border-gray-600">
                  <Image
                    className="rounded-full"
                    height={40}
                    width={40}
                    src={selectedBank.image}
                  />
                  <div
                    onClick={openModal2}
                    className="block cursor-pointer rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 appearance-none focus:border-roxo focus:outline-none focus:ring-0 peer"
                  >
                    {selectedBank.name}
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-md">Tipo da conta</h1>
                <div className="flex flex-row items-center border-0 border-b-2 border-gray-600">
                  <Image
                    className="rounded-full"
                    height={40}
                    width={40}
                    src={accountType.image}
                  />
                  <div
                    onClick={openModal3}
                    className="block cursor-pointer rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark3 appearance-none focus:border-roxo focus:outline-none focus:ring-0 peer"
                  >
                    {accountType.name}
                  </div>
                </div>
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
      <ReactModal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        style={customStyles}
      >
        <div className="lg:w-[400px] sm:w-[300px] overflow-y-scroll scrollbar-thin scrollbar-thumb-dark2 scrollbar-track-dark p-4">
          <div className="absolute">
            <div className="text-gray-300  bg-dark3 lg:w-[360px] sm:w-auto">
              <div className="flex flex-row items-center justify-between">
                <h1 className="text-md font-bold text-textPrimary lg:w-auto sm:w-[200px]">
                  Selecione uma institui????o financeira
                </h1>
                <h1
                  onClick={closeModal2}
                  className="text-lg font-bold cursor-pointer"
                >
                  X
                </h1>
              </div>
            </div>
            <hr className="border-dark5 my-3" />
            <div className="mb-4 -mt-2">
              <input
                type="text"
                id="search-bank"
                className="block rounded-t-lg pt-5 w-full text-sm text-gray-300 bg-dark3 border-0 border-b-2 appearance-none border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer"
                placeholder="Pesquisar"
                autoComplete="off"
                onChange={e => {
                  handleSearchBank(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="mt-32 h-[200px] overflow-y scrollbar scrollbar-track-transparent">
            <div>
              {searchBank?.map(bank => {
                return (
                  <div
                    key={bank.id}
                    onClick={() =>
                      handleBankSelection({
                        name: bank.name,
                        image: bank.icon_url,
                        id: bank.id,
                        color: bank.color
                      })
                    }
                    className="flex flex-row items-center p-2 hover:bg-dark4 rounded-lg cursor-pointer"
                  >
                    <Image
                      height={40}
                      width={40}
                      className="rounded-full"
                      src={bank.icon_url}
                    />
                    <p className="text-lg font-medium mx-3">{bank.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </ReactModal>
      <ReactModal
        isOpen={modalIsOpen3}
        onRequestClose={closeModal3}
        style={customStyles}
      >
        <div className="lg:w-[400px] sm:w-[300px] overflow-y-scroll scrollbar-thin scrollbar-thumb-dark2 scrollbar-track-dark p-4">
          <div className="absolute">
            <div className="text-gray-300  bg-dark3 lg:w-[360px] sm:w-auto">
              <div className="flex flex-row items-center justify-between">
                <h1 className="text-md font-bold text-textPrimary lg:w-auto sm:w-[200px]">
                  Selecione o tipo da conta
                </h1>
                <h1
                  onClick={closeModal3}
                  className="text-lg font-bold cursor-pointer"
                >
                  X
                </h1>
              </div>
            </div>
            <hr className="border-dark5 my-3" />
          </div>
          <div className="mt-12 h-[300px] overflow-y scrollbar scrollbar-track-transparent">
            <div>
              {types?.map(type => {
                return (
                  <div
                    key={type.id}
                    onClick={() =>
                      handleAccountType({
                        name: type.name,
                        image: type.icon_url,
                        id: type.id
                      })
                    }
                    className="flex flex-row items-center p-2 hover:bg-dark4 rounded-lg cursor-pointer"
                  >
                    <Image
                      height={40}
                      width={40}
                      className="rounded-full"
                      src={type.icon_url}
                    />
                    <p className="text-lg font-medium mx-3">{type.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </ReactModal>
      <div className="flex flex-col items-center justify-center bg-dark3 border-b-4 border-black lg:w-[320px] sm:w-full h-[210px] rounded-xl mx-3 my-3">
        <div
          onClick={openModal1}
          className="flex flex-col items-center justify-center cursor-pointer hover:bg-black hover:bg-opacity-30 hover:rounded-full hover:w-[140px] h-[140px]"
        >
          <h1 className="text-white font-bold text-2xl">
            <FaPlus />
          </h1>
          <p className="text-white font-bold text-xl">Nova conta</p>
        </div>
      </div>
    </>
  )
}
