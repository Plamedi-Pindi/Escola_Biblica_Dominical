import { createContext, useContext, useState, type ReactNode } from "react";


// ################### Tipagem ######################3333
type MyContextType = [
    handleAdministracaoClick: () => void,
    handleSecretariaClick: () => void,
    handlePedagogiaClick: () => void,
    handleTesourariaClick: () => void,
    handleLivrariaClick: () => void,
    openSecretaria: boolean,
    openCoordenation: boolean,
    openPedagogia: boolean,
    openTesouraria: boolean,
    openLivraria: boolean,
]

type SidebarContextType = {
    children: ReactNode
}

// Create context
const MyContext = createContext<MyContextType | undefined>(undefined)

// Main component
const SidebarContext = ({ children }: SidebarContextType) => {
    /** ################## STATES #################################### **/
    const [openSecretaria, setOpenSecretaria] = useState(false);
    const [openCoordenation, setOpenCoordenation] = useState(false);
    const [openPedagogia, setOpenPedagogia] = useState(false);
    const [openTesouraria, setOpenTesouraria] = useState(false);
    const [openLivraria, setOpenLivraria] = useState(false);


    /** ################### EVENTS FUNCTION ############################### */
    // 
    const handleAdministracaoClick = () => {
        setOpenCoordenation(!openCoordenation)
        setOpenSecretaria(false);
        setOpenPedagogia(false);
        setOpenTesouraria(false)
        setOpenLivraria(false)
    }

    // 
    const handleSecretariaClick = () => {
        setOpenSecretaria(!openSecretaria);
        setOpenCoordenation(false)
        setOpenPedagogia(false);
        setOpenTesouraria(false)
        setOpenLivraria(false)
    }

    // 
    const handlePedagogiaClick = () => {
        setOpenPedagogia(!openPedagogia);
        setOpenCoordenation(false)
        setOpenSecretaria(false);
        setOpenTesouraria(false)
        setOpenLivraria(false)
    }

    // 
    const handleTesourariaClick = () => {
        setOpenTesouraria(!openTesouraria)
        setOpenCoordenation(false)
        setOpenSecretaria(false);
        setOpenPedagogia(false);
        setOpenLivraria(false)
    }

    // 
    const handleLivrariaClick = () => {
        setOpenLivraria(!openLivraria)
        setOpenCoordenation(false)
        setOpenSecretaria(false);
        setOpenPedagogia(false);
        setOpenTesouraria(false)
    }

    
    return (
        <MyContext value={[
            handleAdministracaoClick,
            handleLivrariaClick,
            handlePedagogiaClick,
            handleSecretariaClick,
            handleTesourariaClick,
            openSecretaria,
            openCoordenation,
            openPedagogia,
            openTesouraria,
            openLivraria,
        ]}>
            {children}
        </MyContext>
    )
}

export default SidebarContext


export const useSidebarContext = () => {
    const context = useContext(MyContext);

    if (!context) {
        throw new Error("Erro ao processar o Sidebar Context!");
    }

    return context
}