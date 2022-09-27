import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import Link from 'next/link'

import { MdSettings } from 'react-icons/md'

import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import { FaPercentage, FaSignOutAlt, FaUser } from 'react-icons/fa'
import {
  MdAccountCircle,
  MdSettings,
  MdShowChart
} from 'react-icons/md'
import {
  BsBank2,
  BsCreditCardFill,
  BsFillGrid1X2Fill,
  BsFillPieChartFill
} from 'react-icons/bs'


export default function Header() {
  const router = useRouter()

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    showConfirmButton: false,
    timer: 4500,
    timerProgressBar: true
  })

  return (
    <header>
      <nav className="px-2 sm:px-4 py-2.5 bg-dark2 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-purple-700 dark:focus:ring-purple-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col items-center mt-4 md:flex-row  md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link href="/">
                  <img height={80} width={80} src={'/logo.png'} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a
                    className="block lg:py-2 sm:p-2 font-bold text-gray-300 rounded-lg hover:bg-purple-800 focus:bg-purple-800 hover:text-white"
                    aria-current="page"
                  >
                    <div className="flex flex-row justify-center items-center">
                      <BsFillGrid1X2Fill className="mr-2" />
                      RESUMO
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/lancamentos">
                  <a className="block lg:py-2 sm:p-2 font-bold text-gray-300 rounded-lg hover:bg-purple-800 focus:bg-purple-800 hover:text-white">
                    <div className="flex flex-row justify-center items-center">
                      <MdShowChart className="mr-2" />
                      LANÇAMENTOS
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contas">
                  <a className="block lg:py-2 sm:p-2 font-bold text-gray-300 rounded-lg hover:bg-purple-800 focus:bg-purple-800 hover:text-white">
                    <div className="flex flex-row justify-center items-center">
                      <BsBank2 className="mr-2" />
                      CONTAS
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cartoes">
                  <a className="block lg:py-2 sm:p-2 font-bold text-gray-300 rounded-lg hover:bg-purple-800 focus:bg-purple-800 hover:text-white">
                    <div className="flex flex-row justify-center items-center">
                      <BsCreditCardFill className="mr-2" />
                      CARTÕES
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/relatorios">
                  <a className="block lg:py-2 sm:p-2 font-bold text-gray-300 rounded-lg hover:bg-purple-800 focus:bg-purple-800 hover:text-white">
                    <div className="flex flex-row justify-center items-center">
                      <BsFillPieChartFill className="mr-2" />
                      RELATÓRIOS
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/orcamento">
                  <a className="block lg:py-2 sm:p-2 font-bold text-gray-300 rounded-lg hover:bg-purple-800 focus:bg-purple-800 hover:text-white">
                    <div className="flex flex-row justify-center items-center">
                      <FaPercentage className="mr-2" />
                      ORÇAMENTOS
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-end">
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
              className="dropdown-content menu p-2 shadow border-b-4 border-black bg-dark3 rounded-tr-none rounded-tl-lg rounded-b-lg w-52 text-gray-300"
            >
              <Link href="#">
                <li className="flex flex-row items-center hover:text-roxo cursor-pointer p-2">
                  <p>
                    <FaUser /> Meu perfil
                  </p>
                </li>
              </Link>
              <Link href="#">
                <li className="flex flex-row items-center hover:text-roxo cursor-pointer p-2">
                  <p>
                    <MdSettings />
                    Configurações
                  </p>
                </li>
              </Link>
              <li className="flex flex-row items-center hover:text-red-500 cursor-pointer p-2 ">
                <p>
                  <FaSignOutAlt />
                  Sair
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <CookieConsent
        location="bottom"
        buttonText="Entendi"
        cookieName="accept-cookies"
        style={{ background: '#1b1b1b' }}
        buttonStyle={{
          background: '#7c3aed',
          color: '#FFF',
          fontSize: '14px',
          borderRadius: '8px'
        }}
        expires={150}
        // onAccept={acceptedByScrolling => {
        //   if (acceptedByScrolling) {
        //     // triggered if user scrolls past threshold
        //     alert('Accept was triggered by user scrolling')
        //   } else {
        //     alert('Accept was triggered by clicking the Accept button')
        //   }
        // }}
      >
        <div className="flex flex-row items-center">
          Nosso site utiliza cookies para garantir que você tenha a melhor
          experiência. Se quiser saber mais, basta acessar nossa
          <a className="ml-1 text-purple-400" href="/privacidade">
            Política de Privacidade
          </a>
          .
        </div>
      </CookieConsent>
    </header>
  )
}
