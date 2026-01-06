/** ###################### Impotacoes ###################### */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import MainAPI from '../../services/apis/MainAPI';
import type { PorfessorDataType } from '../../types/professor/ProfessorTypes';
import type { Dispatch, SetStateAction } from 'react';

/** #################### Tipagens ######################### */
type MyContextType = [
    allProfessorsData: PorfessorDataType[],
    findOneProfessor: (id: string) => Promise<PorfessorDataType>,
    handleAlertMessage: (text: string, status: boolean, type: string) => void,
    Alert: {message: string, status: boolean, type: string},
    setAllProfessorsData: Dispatch<SetStateAction<PorfessorDataType[]>>
]
type ProfessorContextType = {
    children: ReactNode,
}

// Create a context
const MyContext = createContext<MyContextType | undefined>(undefined)


/** ################ Main funtion start ###################### */
const ProfessorContext = ({ children }: ProfessorContextType) => {
    // ####################### States ############################ 
    const [allProfessorsData, setAllProfessorsData] = useState<PorfessorDataType[]>([])
    const [Alert, setAlert] = useState({
        status: false,
        message: '',
        type: ''
    });


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

    const findOneProfessor = async (id: string) => {
        try {
            const result = await MainAPI.get(`/professores/find/${id}`)
            return result.data;
        } catch (error) {
            console.error('Houve um erro ao pesquisar um professor', error);

        }
    }

    const handleAlertMessage = (text: string, status: boolean, type: string) => {
        setAlert({ status: status, message: text, type: type });

        setInterval(() => {
            setAlert({ status: false, message: '', type: '' })
        }, 3000);
    }

    return (
        <MyContext value={[allProfessorsData, findOneProfessor, handleAlertMessage, Alert, setAllProfessorsData ]}>
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