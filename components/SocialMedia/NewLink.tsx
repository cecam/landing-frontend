'use client'

import useForm from "@/hooks/useForm";

import Input from "../Input";

const NewLink = () => {
    const [ state, handleChange, clear ] = useForm({
        name: ''
    })
    
    return (
        <form action="">
            <input 
                type="text" 
                onChange={handleChange}
                value={state.name}

            />
            <button
                type="submit"
                
            >

            </button>
        </form>
    )
}

export default NewLink;