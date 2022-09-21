import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaDiscord
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4">
      <img className="opacity-10" height={80} width={80} src={'/logo.png'} />
      <p className="mt-2 text-dark4 font-bold">© Filipe Moreno</p>
      {/* <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto border-purple-500 text-white text-sm flex-col md:flex-row max-w-6xl">
          <div className="mt-2 sm:p-2 sm:mb-2">
            <h1 className="font-medium">
              © 2022 Filipe Moreno - Todos os direitos reservados.
            </h1>
          </div>
          <div className="flex flex-auto items-center justify-center mt-2">
            <a
              href="#"
              className="w-8 mx-1 text-3xl hover:text-white flex items-center justify-center bg-purple-700 hover:bg-discord border-b-2 border-black p-2 rounded-lg px-5"
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaDiscord />
              </motion.div>
            </a>
            <a
              href="#"
              className="w-8 mx-1 text-3xl hover:text-white flex items-center justify-center bg-purple-700 hover:bg-gradient-to-b hover:from-instagram_grad_1 hover:via-instagram_grad_2 hover:via-instagram_grad_3 hover:via-instagram_grad_4 hover:via-instagram_grad_5 hover:via-instagram_grad_6 hover:to-instagram_grad_8 border-b-2 border-black p-2 rounded-lg px-5"
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaInstagram />
              </motion.div>
            </a>
            <a
              href="#"
              className="w-8 mx-1 text-3xl hover:text-white flex items-center justify-center bg-purple-700 hover:bg-twitter border-b-2 border-black p-2 rounded-lg px-5"
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaTwitter />
              </motion.div>
            </a>
            <a
              href="#"
              className="w-8 mx-1 text-3xl hover:text-white flex items-center justify-center bg-purple-700 hover:bg-youtube border-b-2 border-black p-2 rounded-lg px-5"
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaYoutube />
              </motion.div>
            </a>
            <a
              href="#"
              className="w-8 mx-1 text-3xl hover:text-white flex items-center justify-center bg-purple-700 hover:bg-facebook border-b-2 border-black p-2 rounded-lg px-5"
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaFacebookF />
              </motion.div>
            </a>
          </div>
        </div>
      </div> */}
    </footer>
  )
}

export default Footer
