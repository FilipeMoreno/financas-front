import { MdExpandMore } from 'react-icons/md'
import NewAccountComponent from './NewAccount'
import Calendar from 'react-calendar'

export default function AccountHeaderComponent() {
  return (
    <>
      <div className="flex lg:flex-row sm:flex-col items-center justify-between mt-3 mb-14">
        <h1 className="font-bold text-3xl text-white">Contas</h1>
        <div className="flex items-center justify-center border-2 border-dark5 rounded-xl w-40 h-10 sm:my-5 lg:my-0">
          <div className="dropdown dropdown-content">
            <label tabIndex="0">
              <p className="flex flex-row items-center justify-center text-lg text-white cursor-pointer">
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
