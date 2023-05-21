import { FC, InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText:string
}

const Input:FC<IProps> = (props) => (
    <div>
        <label htmlFor={props.id}>{props.labelText}</label>
        <input 
            className=""
            {...props}
        />
        
    </div>
)

export default Input;