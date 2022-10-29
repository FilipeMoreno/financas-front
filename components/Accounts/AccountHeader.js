import { MdExpandMore } from 'react-icons/md'

import Calendar from 'react-calendar'
import { useState } from 'react'
import ReactModal from 'react-modal'

export default function AccountHeaderComponent() {
  const formatter = new Intl.DateTimeFormat('pr-BR', {
    month: 'long',
    year: 'numeric'
  })
  const [modalIsOpen1, setIsOpen1] = useState(false)
  const [monthSelect, setMonthSelect] = useState(new Date())

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
      <ReactModal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        style={customStyles}
      >
        <div className="lg:w-[400px] sm:w-[300px] overflow-y-scroll scrollbar-thin scrollbar-thumb-dark2 scrollbar-track-dark p-4">
          <div className="flex text-gray-300 items-center justify-between bg-dark3">
            <h1 className="text-md font-bold text-textPrimary">Calendário</h1>
            <h1
              onClick={closeModal1}
              className="text-lg font-bold cursor-pointer mr-4"
            >
              X
            </h1>
          </div>
          <hr className="border-dark5 my-3" />
          <div>
            <Calendar
              defaultActiveStartDate={new Date()}
              className="calendarStyles"
              locale="pt-BR"
              defaultView="year"
              maxDetail="year"
              onChange={(value, event) => setMonthSelect(value)}
              onClickMonth={closeModal1}
            />
          </div>
        </div>
      </ReactModal>
      {/* <div className="flex lg:flex-row sm:flex-col items-center justify-between mt-3 mb-14"> */}
      <div className="flex flex-col bg-dark2 md:h-32 sm:h-48 rounded-b-3xl justify-around items-center mb-8">
        <h1 className="font-bold text-3xl text-white">Contas</h1>
        <div className="flex items-center justify-center border-2 border-roxo rounded-xl w-64 h-10 sm:my-5 lg:my-0">
          <div>
            {/* <div onClick={openModal1}> */}
            <p className="flex flex-row items-center justify-center text-lg text-roxo cursor-pointer">
              {formatter.format(monthSelect)}
              <MdExpandMore className="ml-2" />
            </p>
          </div>
        </div>
        <p></p>
      </div>
    </>
  )
}
