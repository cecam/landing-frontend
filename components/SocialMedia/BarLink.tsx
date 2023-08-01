'use client'

import { FC } from "react"

interface IProps {
    link: string,
    image: string,
    title: string,
    description: string
}
const BarLink:FC<IProps> = ({link, title}) => (
    <li>
        <a href={link} 
            className="inline-flex items-center gap-3 justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            target="_blank"
        >
            
                <p className="w-full text-center text-lg md:text-start font-semibold">{title}</p>
            
        </a>
    </li>
)


export default BarLink;