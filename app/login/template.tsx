'use client'

import { ReactNode, FC } from "react"

interface LayoutProps {
    children: ReactNode
}

const Layout:FC<LayoutProps> = ({children}) => {
    return (
        <div className="w-screen h-screen bg-[url('/bg-login.jpeg')] bg-no-repeat bg-cover grid place-items-center">
            {children}
        </div>
    )
}

export default Layout;