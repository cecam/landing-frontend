'use client'

import { motion } from "framer-motion";
import { FC, ReactNode, MouseEventHandler } from "react";

interface IProps {
    children: ReactNode,
    onClick: MouseEventHandler<HTMLDivElement>
}

const Backdrop:FC<IProps> = ({children, onClick}) => {
    return (
        <motion.div 
            className="absolute top-0 left-0 h-full w-full bg-[#333333d0] grid place-items-center"
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default Backdrop;