'use client'

import { FormEvent, FC } from "react";
import { useRouter } from "next/navigation";
import useForm from "@/hooks/useForm";
import Input from "../Input";

interface IForm {
    
}

const Form:FC<IForm> = ({ }) => {
    const [ formState, handleChange ] = useForm({
        password1: '',
        password2: ''
    });
    const { replace } = useRouter();

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(!formState.password1 || !formState.password2) return

        //TODO: auth implementation

        replace('/')
    }

    return(
        <form 
            className="py-8 px-10 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100
                flex flex-col justify-evenly min-h-[380px] min-w-[480px] text-[#333]"
            onSubmit={handleSubmit}
        >
            <h1 className="text-3xl text-[#333]">Bienvenido Celso</h1>
            <Input 
                id="password1"
                name="password1"
                type="password"
                labelText="Primer contraseña"
                placeholder="******"
                onChange={handleChange}
                value={formState.password1}
            />
            <Input 
                id="password2"
                name="password2"
                type="password"
                labelText="Segunda contraseña"
                placeholder="******"
                onChange={handleChange}
                value={formState.password2}
            />

            <button 
                type="submit"
                className="rounded-lg border uppercase border-orange-500 text-orange-500 transition-all duration-100 hover:border-2 hover:font-bold focus:text-white focus:bg-orange-300 py-3"
            >
                Iniciar sesión
            </button>
        </form>
    )
}

export default Form;