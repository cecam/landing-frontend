'use client'

import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface IProps {
    children: ReactNode
}

const ButtonWrapper:FC<IProps> = ({children}) => {
    return (
        <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{ scale: 0.9 }}
            onClick={() => null}
        >
            {children}
        </motion.button>
    )
}

export default ButtonWrapper;