'use client'

import useForm from "@/hooks/useForm";
import Input from "../Input";

const Form = () => {
    const [ formState, handleChange ] = useForm({
        password1: '',
        password2: ''
    })

    return(
        <form className="py-8 px-10 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100
        flex flex-col justify-evenly min-h-[380px] min-w-[480px] text-[#333]">
            <h1 className="text-3xl text-[#333]">Bienvenido Celso</h1>
            <Input 
                id="password1"
                name="password1"
                labelText="Primer contraseña"
                placeholder="******"
                onChange={handleChange}
                value={formState.password1}
            />
            <Input 
                id="password2"
                name="password2"
                labelText="Segunda contraseña"
                placeholder="******"
                onChange={handleChange}
                value={formState.password2}
            />

            <button 
                className="rounded-lg border uppercase border-orange-500 text-orange-500 transition-all duration-100 hover:border-2 hover:font-bold focus:text-white focus:bg-orange-300 py-3"
            >
                Iniciar sesión
            </button>
        </form>
    )
}

export default Form;