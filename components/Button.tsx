import { FC, ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

const Button:FC<IProps> = ({ text },props) => (
    <button 
        {...props}
        className="w-full rounded-lg border uppercase border-orange-500 text-orange-500 transition-all duration-100 hover:border-2 hover:font-bold focus:text-white focus:bg-orange-300 py-3"
    >{ text }</button>
)

export default Button;