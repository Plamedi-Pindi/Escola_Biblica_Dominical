/** ###################### Impotacoes ###################### */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import MainAPI from '../../services/apis/MainAPI';
import type { PorfessorDataType } from '../../types/professor/ProfessorTypes';

/** #################### Tipagens ######################### */
type MyContextType = {

}
type ProfessorContextType = {
    children: ReactNode
}

// Create a context
const MyContext = createContext<MyContextType | undefined>(undefined)


/** ################ Main funtion start ###################### */
const ProfessorContext = ({ children }: ProfessorContextType) => {
    // ####################### States ############################ 
    const [allProfessorsData, setAllProfessorsData] = useState<PorfessorDataType[]>([])

    // Function to fetch professores from database
    useEffect(() => {
        try {
            const fetchProfessors = async () => {
                const result = await MainAPI.get('/professores');
                setAllProfessorsData(result.data)
            }

            fetchProfessors();
        } catch (error) {
            console.error("Erro ao buscar a lista de professores!", error);
        }
    }, []);


    return (
        <MyContext value={[allProfessorsData]}>
            {children}
        </MyContext>
    )
}

// Export the component
export default ProfessorContext;

// Hooks
export const useProfessorContext = () => {
    const context = useContext(MyContext);

    if (!context) {
        throw new Error("Ocorreu um erro no Professor-Context!");
    }
    return context
}