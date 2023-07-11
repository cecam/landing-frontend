'use client'

import { motion } from "framer-motion";
import { FC } from "react";

import Backdrop from './Backdrop'

interface IProps {
    handleClose: () => {},
    text: string
}

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: '100vh',
        opacity: 0
    }
}

const Modal:FC<IProps> = ({ handleClose, text }) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {text}
            </motion.div>
        </Backdrop>
    )
}

export default Modal;