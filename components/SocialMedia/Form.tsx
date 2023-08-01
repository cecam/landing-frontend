'use client'

import { FormEvent, useState } from "react";

import useForm from "@/hooks/useForm"
import supabase from '@/utils/supabaseClient';

import NewLink from "./NewLink";

const Form = () => {
  const [ showForm, setShowForm ] = useState<Boolean>(false)
  const [ formState, handleChange ] = useForm({
    title: '',
    url: '',
  });
  const { title, url } = formState;

  const addNewLink = async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase.from('links').insert({
        title,
        url,
        user_id: (await supabase.auth.getUser()).data.user?.id
      })

      if(error) throw error
      console.log('data: ', data)
      setShowForm(false)

    } catch (error) {
      throw error
    }
  }

  return (
    <>
      {showForm 
        ? <NewLink 
            handleChange={handleChange}
            handleSubmit={addNewLink}
            title={title}
            url={url}
          />
        : <button
          type="button"          
          onClick={() => setShowForm(true)}
          className="w-full rounded-lg border uppercase border-orange-500 text-orange-500 transition-all duration-100 hover:border-2 hover:font-bold focus:text-white focus:bg-orange-300 py-3"
          >Crear link </button>
          
      }
    </>
  )
}

export default Form;