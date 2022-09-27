import { FaPlus } from 'react-icons/fa'

export default function NewAccountComponent() {
  return (
    <>
      <button className="flex flex-row items-center justify-center bg-roxo md:p-4 sm:h-12 sm:w-36 sm:p-2 rounded-lg font-bold md:text-md sm:text-sm text-white cursor-pointer">
        <FaPlus className="mr-1 text-white" /> Nova conta
      </button>
    </>
  )
}
