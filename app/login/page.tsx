'use client'

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import RegisterForm from "@/components/Login/RegisterForm";
import LoginForm from "@/components/Login/LoginForm";

import supabase from "@/utils/supabaseClient";
import useForm from "@/hooks/useForm";

interface IEmailPassword {
    email: string,
    password: string
}

const LoginPage = () => {
    const [ formStatus, setFormStatus  ] = useState('login');
    const router = useRouter();
    const [ formState, handleChange ] = useForm({
        email: '',
        password: ''
    });
    const { email, password } = formState;

    const signUpWithEmail = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const resp = await supabase.auth.signUp({email, password})
            if(resp.error) throw resp.error

            const userID = resp.data.user?.id;
            router.push('/');
        } catch (error) {
            throw error
        }
    }

    const signInWithEmail = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const resp = await supabase.auth.signUp({email, password})
            if(resp.error) throw resp.error

            const userID = resp.data.user?.id;
            router.push('/');
        } catch (error) {
            throw error
        }
    }

    return (
        <>
            {formStatus === 'login'
                ?   <LoginForm 
                        handleChange={handleChange} 
                        email={email}
                        password={password}    
                        onSubmit={signInWithEmail}
                        setFormStatus={setFormStatus}
                    />

                :   <RegisterForm 
                        handleChange={handleChange} 
                        email={email}
                        password={password}    
                        onSubmit={signUpWithEmail}
                        setFormStatus={setFormStatus}
                    />

            }
        </>
    )
}

export default LoginPage;