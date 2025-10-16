import type { ReactNode } from "react"

type SidebarProps = {
    children: ReactNode
}

const Sidebar = ({children}: SidebarProps) => {

    return (
        <nav>
            {children}
        </nav>
    )
}

export default Sidebar