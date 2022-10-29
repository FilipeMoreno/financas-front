import { createContext, useState, useEffect } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'
import { useToasts } from 'react-toast-notifications'

import api from '../service/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState()

  const { addToast } = useToasts()

  const delay = (amount = 500) =>
    new Promise(resolve => setTimeout(resolve, amount))

  const isAuthenticated = !!user

  useEffect(async () => {
    const { 'financas.token': token } = parseCookies()

    if (token) {
      try {
        const getUser = await api.get('/user/profile', {
          headers: { Authorization: `Bearer ${token}` }
        })
        setUser(getUser.data)
      } catch (e) {
        const errorToString = JSON.stringify(e.toJSON().message)
        if (errorToString.indexOf('status code 401') >= 0) {
          console.log('Você não está autorizado a acessar o painel.')
          addToast('Sua sessão expirou. Por favor, faça login novamente.', {
            appearance: 'error',
            autoDismiss: true
          })
          await destroyCookie(null, 'financas.token')
          Router.push('/auth/login')
        } else {
          console.log('Ocorreu um erro ao acessar sua conta.')
        }
      }
    }
  }, [])

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/auth/login', {
        email,
        password
      })

      const resUser = response.data.user
      const resToken = response.data.token

      setCookie(undefined, 'financas.token', resToken, {
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/'
      })

      setUser(resUser)

      addToast('Autenticado com sucesso! Redirecionando...', {
        appearance: 'success',
        autoDismiss: true
      })

      await delay()

      Router.push('/')
    } catch (e) {
      if (e.toJSON().message === 'Network Error') {
        return addToast('Ocorreu um erro na conexão com a API', {
          appearance: 'error',
          autoDismiss: true
        })
      }
      if (e.response.data.error.nextValidRequestDate) {
        return addToast(e.response.data.error.nextValidRequestDate, {
          appearance: 'error',
          autoDismiss: true
        })
      }
      return addToast(e.response.data.error, {
        appearance: 'error',
        autoDismiss: true
      })
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
