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
    </footer>
  )
}

export default Footer
