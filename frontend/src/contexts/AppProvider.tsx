import HeaderContext from "./header/HeaderContext"
import SidebarContext from "./sidebar/SidebarContext"
import ProfessorContext from "./professor/professorContext"
import UserContext from "./user/UserContext"
import type { ReactNode } from "react"

type AppProviderType = {
    children: ReactNode
}

const AppProvider = ({children}: AppProviderType) => {
    return (
        <>
            <HeaderContext>
                <SidebarContext>
                    <ProfessorContext>
                        <UserContext>
                            {children}
                        </UserContext>
                    </ProfessorContext>
                </SidebarContext>
            </HeaderContext>
        </>
    )
}

export default AppProvider