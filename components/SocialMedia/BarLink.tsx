'use client'

const BarLink = () => {
    return(
        <li>
            <label htmlFor="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <img src="youtube-icon.svg" alt="youtube icon" className="w-10 h-10 ml-3" />
                <div className="block">
                    <p className="w-full text-lg font-semibold">Youtube</p>
                    <p className="w-full">Entrevistas, ocurrencias y demás</p>
                </div>
            </label>
        </li>
    )
}

export default BarLink;