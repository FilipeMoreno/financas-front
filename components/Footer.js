import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4">
      <motion.div
        style={{
          opacity: 0.2
        }}
        whileHover={{ scale: 0.8, opacity: 1 }}
      >
        <img
          className="cursor-pointer"
          height={120}
          width={200}
          src={'/logo.png'}
        />
      </motion.div>
      <p className="-mt-3 text-dark4 font-bold">© Filipe Moreno</p>
    </footer>
  )
}

export default Footer
