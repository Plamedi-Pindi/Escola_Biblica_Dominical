import HeaderContext from "./header/HeaderContext"
import SidebarContext from "./sidebar/SidebarContext"
import ProfessorContext from "./professor/professorContext"
import UserContext from "./user/UserContext"
import AnoLectivoContext from "./anoLectivo/AnoLectivoContext"
import type { ReactNode } from "react"
import TurmaContext from "./turma/TurmaContext"

type AppProviderType = {
    children: ReactNode
}

const AppProvider = ({ children }: AppProviderType) => {
    return (
        <>
            <TurmaContext>
                <AnoLectivoContext>
                    <HeaderContext>
                        <SidebarContext>
                            <ProfessorContext>
                                <UserContext>
                                    {children}
                                </UserContext>
                            </ProfessorContext>
                        </SidebarContext>
                    </HeaderContext>
                </AnoLectivoContext>
            </TurmaContext>
        </>
    )
}

export default AppProvider