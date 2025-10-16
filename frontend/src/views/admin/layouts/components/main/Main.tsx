import type { ReactNode } from "react"

type SidebarProps = {
    children: ReactNode
}

const Main = ({children}: SidebarProps) => {
    return (
        <nav>
            {children}
        </nav>
    )
}

export default Main