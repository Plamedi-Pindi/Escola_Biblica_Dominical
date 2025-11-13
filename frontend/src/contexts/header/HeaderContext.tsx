
import { createContext, useContext, useState, type ReactNode } from "react";

type MyContextType = [
    openDkSidebar: boolean,
    handleDrawerOpen: ()=> void,
    handleDrawerClose: ()=> void,
]

type HeaderContext = {
    children: ReactNode
}

const MyContext = createContext<MyContextType | null>(null);

const HeaderContext = ({children}: HeaderContext) => {
    const [openDkSidebar, setOpenDkSidebar] = useState(false);

    const handleDrawerOpen = () => {
        setOpenDkSidebar(true);
    };

    const handleDrawerClose = () => {
        setOpenDkSidebar(false);
    };

    return (
        <MyContext value={[openDkSidebar, handleDrawerOpen, handleDrawerClose ]}>
            {children}
        </MyContext>
    )
}

export default HeaderContext;

// 
export const useHeaderContext = () => {
    const context = useContext(MyContext);

    if (!context) {
        throw new Error("Erro ao processar o contexto do Header!");
    }
    return context
}