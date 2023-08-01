'use client'

import { ChangeEvent, FC, FormEvent } from "react";

import Input from "../Input";
import Button from "../Button";

interface IProps {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    title: string,
    url: string
}

const NewLink:FC<IProps> = ({handleSubmit, handleChange, title, url}) => {    
    return (
        <form onSubmit={handleSubmit}>
            <Input 
                id="title"
                name="title"
                type="text"
                labelText="Título del link"
                placeholder="Ej. Youtube"
                onChange={handleChange}
                value={title}
            />
            <Input 
                id="url"
                name="url"
                type="text"
                labelText="Link al sitio web"
                placeholder="Ej. https://www.twitch.tv/tu_usuario"
                onChange={handleChange}
                value={url}
            />
            <Button type="submit" text="Crear" /> 
        </form>
    )
}

export default NewLink;