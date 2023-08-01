'use client'

import { FormEvent, useState, useContext } from "react";
import { useRouter } from "next/navigation";

import RegisterForm from "@/components/Login/RegisterForm";
import LoginForm from "@/components/Login/LoginForm";

import supabase from "@/utils/supabaseClient";
import useForm from "@/hooks/useForm";
import withAuth from "@/HOC/auth";
import UserContext from "@/contexts/userContext";

interface IEmailPassword {
    email: string,
    password: string
}

const LoginPage = () => {
    const { setUser } = useContext(UserContext);
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
            const user = await supabase.auth.getUser(userID)
            localStorage.setItem('user', JSON.stringify(user));
            router.push('/admin');
        } catch (error) {
            throw error
        }
    }

    const signInWithEmail = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const resp = await supabase.auth.signInWithPassword({email, password})
            if(resp.error) throw resp.error

            const userID = resp.data.user?.id;
            setUser(userID)
            const user = await supabase.auth.getUser()
            localStorage.setItem('user', JSON.stringify(user));
            router.push('/admin');
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

export default withAuth(LoginPage);