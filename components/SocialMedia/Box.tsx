'use client'

import { useEffect, useState } from 'react'
import supabase from '@/utils/supabaseClient'

import ButtonWrapper from '../Modal/Button'
import BarLink from './BarLink'

interface ILink {
    url: string,
    title: string,
}

const Box = () => {
    const [ links, setLinks ] = useState<ILink[] | []>([])

    useEffect(() => {
        const getLinks = async() => {
            try {
                const userID = (await supabase.auth.getUser()).data.user?.id;
                const {data, error} = await supabase.from('links').select('title, url').eq('user_id', userID);
                
                if(error) throw error
                setLinks(data)
            } catch (error) {
                throw error;
            }
        }

        getLinks()
    }, [])


    return (
        <ul className="grid w-full gap-6 p-5 lg:grid-cols-2 max-h-[480px] md:overflow-y-scroll">
            {links.map((link:ILink) => (
                <ButtonWrapper key={link.url}>
                    <BarLink
                        link={link.url}
                        image='youtube-icon.svg'
                        title={link.title}
                        description='Viajes, ocurrencias y desarrollos'
                    />
                </ButtonWrapper>
            ))}
        </ul>
    )
}

export default Box