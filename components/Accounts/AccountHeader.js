import { MdExpandMore } from 'react-icons/md'
import NewAccountComponent from './NewAccount'
import Calendar from 'react-calendar'

export default function AccountHeaderComponent() {
  return (
    <>
      {/* <div className="flex lg:flex-row sm:flex-col items-center justify-between mt-3 mb-14"> */}
      <div className="flex md:flex-row sm:flex-col bg-dark2 md:h-32 sm:h-48 rounded-b-3xl justify-around items-center mb-8">
        <h1 className="font-bold text-3xl text-white">Contas</h1>
        <div className="flex items-center justify-center border-2 border-roxo rounded-xl w-40 h-10 sm:my-5 lg:my-0">
          <div className="dropdown dropdown-content">
            <label tabIndex="0">
              <p className="flex flex-row items-center justify-center text-lg text-roxo cursor-pointer">
                Outubro <MdExpandMore className="ml-2" />
              </p>
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow-lg bg-dark4 rounded-box w-72 text-white"
            >
              <Calendar
                className="calendarStyles"
                locale="pt-BR"
                defaultView="year"
              />
            </ul>
          </div>
        </div>
        <p></p>
      </div>
    </>
  )
}
