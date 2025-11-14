import type { ReactNode } from "react"

type SidebarProps = {
    children: ReactNode
}

const Main = ({children}: SidebarProps) => {
    return (
        <main className="overflow-x-hidden p-4 grow">
            {children}
        </main>
    )
}

export default Main