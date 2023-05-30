'use client'

import { ReactNode, FC } from "react"

interface LayoutProps {
    children: ReactNode
}

const Layout:FC<LayoutProps> = ({children}) => {
    return (
        <main className="h-screen grid place-items-center">
            {children}
        </main>
    )
}

export default Layout;