'use client'

import { FC, ChangeEvent, Dispatch, SetStateAction } from "react";
import Input from "../Input";

interface IForm {
    handleChange:(event: ChangeEvent<HTMLInputElement>) => void,
    onSubmit:(e:any) => Promise<void>,
    setFormStatus:Dispatch<SetStateAction<string>>,
    email:string,
    password:string
}

const RegisterForm:FC<IForm> = ({handleChange, onSubmit, setFormStatus, email, password}) => {

    return(
        <form 
            className="py-8 px-10 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100
                flex flex-col justify-evenly min-h-[380px] min-w-[480px] text-[#333]"
            onSubmit={onSubmit}
        >
            <h1 className="text-3xl text-[#333]">Regístrate</h1>
            <Input 
                id="email"
                name="email"
                type="text"
                labelText="Correo electrónico"
                placeholder="******"
                onChange={handleChange}
                value={email}
            />
            <Input 
                id="password"
                name="password"
                type="password"
                labelText="Contraseña"
                placeholder="******"
                onChange={handleChange}
                value={password}
            />

            <button 
                type="submit"
                className="rounded-lg border uppercase border-orange-500 text-orange-500 transition-all duration-100 hover:border-2 hover:font-bold focus:text-white focus:bg-orange-300 py-3"
            >
                Crear cuenta
            </button>
            <button onClick={() => setFormStatus('login')}>ya tengo una cuenta</button>
        </form>
    )
}

export default RegisterForm;