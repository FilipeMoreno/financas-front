import CookieConsent from 'react-cookie-consent'
import Link from 'next/link'

import { FaUser, FaSignOutAlt } from 'react-icons/fa'

import { MdSettings } from 'react-icons/md'

import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

export default function Header(context, { online }) {
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
                    className="block py-2 pr-4 pl-3 text-white font-bold rounded md:bg-transparent md:text-gray-300 md:p-0 dark:text-gray-300 md:dark:hover:text-white md:dark:hover:bg-purple-800 focus:bg-purple-800 md:p-2 md:dark:hover:p-2 dark:hover:text-purple-500 hover:bg-purple-800 focus:bg-purple-800  dark:border-black"
                    aria-current="page"
                  >
                    <div className="flex flex-row items-center">RESUMO</div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/lancamentos">
                  <a className="block py-2 pr-4 pl-3 text-white font-bold rounded md:bg-transparent md:text-gray-300 md:p-0 dark:text-gray-300 md:dark:hover:text-white md:dark:hover:bg-purple-800 focus:bg-purple-800 md:p-2 md:dark:hover:p-2 dark:hover:text-purple-500 dark:hover:bg-black dark:hover:bg-purple-800 focus:bg-purple-800 dark:border-black">
                    <div className="flex flex-row items-center">
                      LANÇAMENTOS
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contas">
                  <a className="block py-2 pr-4 pl-3 text-white font-bold rounded md:bg-transparent md:text-gray-300 md:p-0 dark:text-gray-300 md:dark:hover:text-white md:dark:hover:bg-purple-800 focus:bg-purple-800 md:p-2 md:dark:hover:p-2 dark:hover:text-purple-500 dark:hover:bg-black dark:hover:bg-purple-800 focus:bg-purple-800 dark:border-black">
                    <div className="flex flex-row items-center">CONTAS</div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cartoes">
                  <a className="block py-2 pr-4 pl-3 text-white font-bold rounded md:bg-transparent md:text-gray-300 md:p-0 dark:text-gray-300 md:dark:hover:text-white md:dark:hover:bg-purple-800 focus:bg-purple-800 md:p-2 md:dark:hover:p-2 dark:hover:text-purple-500 dark:hover:bg-black dark:hover:bg-purple-800 focus:bg-purple-800 dark:border-black">
                    <div className="flex flex-row items-center">CARTÕES</div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/relatorios">
                  <a className="block py-2 pr-4 pl-3 text-white font-bold rounded md:bg-transparent md:text-gray-300 md:p-0 dark:text-gray-300 md:dark:hover:text-white md:dark:hover:bg-purple-800 focus:bg-purple-800 md:p-2 md:dark:hover:p-2 dark:hover:text-purple-500 dark:hover:bg-purple-800 focus:bg-purple-800 dark:hover:text-white dark:border-black">
                    <div className="flex flex-row items-center">RELATÓRIOS</div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/orcamento">
                  <a className="block py-2 pr-4 pl-3 text-white font-bold rounded md:bg-transparent md:text-gray-300 md:p-0 dark:text-gray-300 md:dark:hover:text-white md:dark:hover:bg-purple-800 focus:bg-purple-800 md:p-2 md:dark:hover:p-2 dark:hover:text-purple-500 dark:hover:bg-purple-800 focus:bg-purple-800 dark:hover:text-white dark:border-black">
                    <div className="flex flex-row items-center">ORÇAMENTOS</div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="cursor-pointer">
              <a className="block py-2 pr-4 pl-3 text-white font-bold rounded-lg md:bg-transparent md:text-gray-300 dark:text-gray-300 md:dark:hover:text-white md:dark:hover:bg-purple-800 focus:bg-purple-800 md:p-2 md:dark:hover:p-2 dark:hover:text-purple-500 hover:bg-purple-800 focus:bg-purple-800 dark:hover:text-white dark:border-black">
                <div className="flex flex-row items-center">
                  <div className="flex items-center mr-2 text-gray-300"></div>
                  SUA CONTA
                </div>
              </a>
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-dark3 rounded-tr-none rounded-tl-lg rounded-b-lg w-52"
            >
              <Link href="#">
                <li className="flex flex-row items-center hover:text-roxo cursor-pointer p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-3 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <FaUser className="mr-3" />
                  Meu perfil
                </li>
              </Link>
              <Link href="#">
                <li className="flex flex-row items-center hover:text-roxo cursor-pointer p-2">
                  <MdSettings className="mr-3" />
                  Configurações
                </li>
              </Link>
              <li className="flex flex-row items-center hover:text-red-500 cursor-pointer p-2">
                <FaSignOutAlt className="mr-3" />
                Sair
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
