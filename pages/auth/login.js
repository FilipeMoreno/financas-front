import { useState } from 'react'
import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa'

export default function Login() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <title>Login</title>
      <div className="flex items-center justify-center h-screen w-full">
        <div>
          <form className="bg-dark2 border-b-4 border-black border-opacity-60 shadow-md rounded-lg px-12 py-8 w-[500px]">
            <div className="m-4">
              <h1 className="text-4xl font-bold">Entrar</h1>
              <p className="">Acesse sua conta para continuar...</p>
            </div>
            <div class="relative mb-6">
              <input
                type="email"
                id="email"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label class="bg-dark absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-roxo peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                E-mail
              </label>
              <div class="flex absolute inset-y-0 right-4 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
            </div>
            <div class="relative my-6">
              <input
                type={isVisible ? 'text' : 'password'}
                id="password"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-400 bg-dark border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:border-roxo focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />

              <label class="bg-dark absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-roxo peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                Senha
              </label>
              {(isVisible && (
                <a
                  onClick={() => setIsVisible(false)}
                  class="flex absolute inset-y-0 right-4 items-center pl-3 cursor-pointer"
                >
                  <p className="hover:bg-dark2 hover:rounded-full p-2 -mr-2">
                    <FaEyeSlash className="text-xl text-gray-400" />
                  </p>
                </a>
              )) || (
                <a
                  onClick={() => setIsVisible(true)}
                  class="flex absolute inset-y-0 right-4 items-center pl-3 cursor-pointer"
                >
                  <p className="hover:bg-dark2 hover:rounded-full p-2 -mr-2">
                    <FaEye className="text-xl text-gray-400" />
                  </p>
                </a>
              )}
            </div>
            <div className="flex lg:flex-row md:flex-col sm:flex-col items-center justify-between">
              <button
                className="bg-purple-600 border-b-4 border-purple-700 hover:bg-purple-500 hover:border-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <div className="flex items-center justify-center">
                  <FaLock className="mr-1 text-gray-300 text-xs" /> Entrar
                </div>
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-300 sm:mt-3"
                href="/auth/forgot-password"
              >
                Esqueci minha senha
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
