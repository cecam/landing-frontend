'use client'

import { createContext, useState, Dispatch, SetStateAction } from "react";

export interface IUserContext {
    user: string,
    setUser: Dispatch<SetStateAction<any>>
}

const UserContext = createContext<IUserContext>({
    user: '',
    setUser: () => {}
});

export default UserContext;

export const UserContextProvider = ({children}:any) => {
    const [user, setUser] = useState('');

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}