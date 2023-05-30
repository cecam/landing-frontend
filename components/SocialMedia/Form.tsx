'use client'

import { useState } from "react"
import { motion } from "framer-motion"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const Form = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <button onClick={() => setIsOpen(isOpen => !isOpen)}>aham </button>
      
    </motion.nav>
  )
}

export default Form;