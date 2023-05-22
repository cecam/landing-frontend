'use client'

import { FC, InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText:string
}

const Input:FC<IProps> = ({labelText, ...props}) => (
    <div className="flex flex-col">
        <label htmlFor={props.id} className="mb-3">
            {labelText}
        </label>
        <input 
            className="border-b-2 px-3 bg-transparent focus:outline-0 focus:pb-2 transition-all duration-500 border-sky-900"
            {...props}
        />
        
    </div>
)

export default Input;