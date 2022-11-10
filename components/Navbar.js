import Link from 'next/link'
import { useState } from 'react'
import {
  BsBank2,
  BsCreditCardFill,
  BsFillGrid1X2Fill,
  BsFillPieChartFill
} from 'react-icons/bs'
import { FaPercentage } from 'react-icons/fa'
import { MdShowChart } from 'react-icons/md'
import { BiCategory } from 'react-icons/bi'

function NavLink({ to, children, active }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link href={to}>
        <a className="flex flex-row items-center justify-center mx-2 font-bold text-gray-300 rounded-lg hover:bg-purple-800 focus:bg-purple-800 hover:text-white p-2">
          {children}
        </a>
      </Link>
    </motion.div>
  )
}

import { motion } from 'framer-motion'

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-dark2 transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter `}
    >
      <div className="flex items-center justify-center filter bg-dark2 h-20">
        {/*logo container*/}
        <a className="text-xl font-semibold" href="/">
          <img height={120} width={120} src={'/logo.png'} />
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="flex flex-row items-center text-xl my-4 font-bold text-gray-300"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          <BsFillGrid1X2Fill className="mr-2" />
          RESUMO
        </a>
        <a
          className="flex flex-row items-center text-xl my-4 font-bold text-gray-300"
          href="/transacoes"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          <MdShowChart className="mr-2" />
          LANÇAMENTOS
        </a>
        <a
          className="flex flex-row items-center text-xl my-4 font-bold text-gray-300"
          href="/contas"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          <BsBank2 className="mr-2" />
          CONTAS
        </a>
        {/*<a
          className="flex flex-row items-center text-xl my-4 font-bold text-gray-300"
          href="/cartoes"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          <BsCreditCardFill className="mr-2" />
          CARTÕES
        </a>*/}
        <a
          className="flex flex-row items-center text-xl my-4 font-bold text-gray-300"
          href="/relatorios"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          <BsFillPieChartFill className="mr-2" />
          RELATÓRIOS
        </a>
        <a
          className="flex flex-row items-center text-xl my-4 font-bold text-gray-300"
          href="/orcamentos"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          <FaPercentage className="mr-2" />
          ORÇAMENTOS
        </a>
        <a
          className="flex flex-row items-center text-xl my-4 font-bold text-gray-300"
          href="/categorias"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }
        >
          <FaPercentage className="mr-2" />
          CATEGORIAS
        </a>
        {/* <div className="dropdown dropdown-content">
          <label tabIndex="0" className="cursor-pointer text-xl">
            <a className="block my-2 font-bold text-gray-300">
              <div className="flex flex-row items-center">
                <div className="flex flex-row justify-center items-center text-gray-300"></div>
                <MdAccountCircle className="mr-2" />
                SUA CONTA
              </div>
            </a>
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content p-2 shadow border-b-4 border-black bg-dark3 rounded-tr-none rounded-tl-lg rounded-b-lg w-52 text-gray-300"
          >
            <Link href="#">
              <li className="flex flex-row items-center hover:text-roxo cursor-pointer p-2">
                <p className="flex flex-row items-center justify-center">
                  <FaUser className="mr-2" /> Meu perfil
                </p>
              </li>
            </Link>
            <Link href="#">
              <li className="flex flex-row items-center hover:text-roxo cursor-pointer p-2">
                <p className="flex flex-row items-center justify-center">
                  <MdSettings className="mr-2" />
                  Configurações
                </p>
              </li>
            </Link>
            <li className="flex flex-row items-center hover:text-red-500 cursor-pointer p-2 ">
              <p className="flex flex-row items-center justify-center">
                <FaSignOutAlt className="mr-2" />
                Sair
              </p>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="flex filter bg-dark2 px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <a className="text-2xl font-semibold" href="/">
          <motion.div whileHover={{ scale: 1.1 }}>
            <img height={120} width={200} src={'/logo.png'} />
          </motion.div>
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="cursor-pointer z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open)
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-3.5' : ''
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-3.5' : ''
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <NavLink to="/">
            <BsFillGrid1X2Fill className="mr-2" />
            RESUMO
          </NavLink>

          <NavLink to="/transacoes">
            <MdShowChart className="mr-2" />
            LANÇAMENTOS
          </NavLink>

          <NavLink to="/contas">
            <BsBank2 className="mr-2" />
            CONTAS
          </NavLink>
          {/*<NavLink to="/cartoes">
            <BsCreditCardFill className="mr-2" />
            CARTÕES
          </NavLink>*/}
          <NavLink to="/relatorios">
            <BsFillPieChartFill className="mr-2" />
            RELATÓRIOS
          </NavLink>
          <NavLink to="/orcamentos">
            <FaPercentage className="mr-2" />
            ORÇAMENTOS
          </NavLink>
          <NavLink to="/categorias">
            <BiCategory className="mr-2" />
            CATEGORIAS
          </NavLink>
        </div>
        {/* <div className="sm:hidden md:flex dropdown dropdown-end">
          <label tabIndex="0" className="cursor-pointer">
            <a className="block lg:py-2 sm:p-2 font-bold text-gray-300 rounded-lg hover:bg-purple-800 focus:bg-purple-800 hover:text-white">
              <div className="flex flex-row items-center">
                <div className="flex flex-row justify-center items-center text-gray-300"></div>
                <MdAccountCircle className="mr-2" />
                SUA CONTA
              </div>
            </a>
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content  p-2 shadow border-b-4 border-black bg-dark3 rounded-tr-none rounded-tl-lg rounded-b-lg w-52 text-gray-300"
          >
            <Link href="#">
              <li className="flex flex-row items-center hover:text-roxo cursor-pointer p-2">
                <p className="flex flex-row items-center justify-center">
                  <FaUser className="mr-2" /> Meu perfil
                </p>
              </li>
            </Link>
            <Link href="#">
              <li className="flex flex-row items-center hover:text-roxo cursor-pointer p-2">
                <p className="flex flex-row items-center justify-center">
                  <MdSettings className="mr-2" />
                  Configurações
                </p>
              </li>
            </Link>
            <li className="flex flex-row items-center hover:text-red-500 cursor-pointer p-2 ">
              <p className="flex flex-row items-center justify-center">
                <FaSignOutAlt className="mr-2" />
                Sair
              </p>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  )
}
