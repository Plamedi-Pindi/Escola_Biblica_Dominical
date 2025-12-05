import type { ReactNode } from "react"

type SidebarProps = {
    children: ReactNode
}

const Main = ({children}: SidebarProps) => {
    return (
        <main className="overflow-x-hidden p-4 grow  h-[100dvh]">
            {children}
        </main>
    )
}

export default Main