'use client'

import { FC } from "react"

interface IProps {
    link: string,
    image: string,
    title: string,
    description: string
}
const BarLink:FC<IProps> = ({link, image, title, description}) => (
    <li>
        <a href={link} 
            className="inline-flex items-center gap-3 justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            target="_blank"
        >
            <img src={image} alt="youtube icon" className="w-10 h-10 ml-3" />
            <div className="block px-2 w-full">
                <p className="w-full text-center text-lg md:text-start font-semibold">{title}</p>
                <p className="w-full text-center md:text-start">{description}</p>
            </div>
        </a>
    </li>
)


export default BarLink;