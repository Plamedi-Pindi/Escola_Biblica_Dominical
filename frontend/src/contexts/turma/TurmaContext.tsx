import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import MainAPI from "../../services/apis/MainAPI";
import type { Dispatch, SetStateAction } from "react";

type MyContextType = [
    turmas: TurmaType[],
    setTurmas: Dispatch<SetStateAction<TurmaType[]>>,
    findTurma: (id: String) => Promise<TurmaType>
]

type TurmaType = {
    _id: String,
    name: String,
    anoLectivo: String,
    desctription: String,
}

type props = {
    children: ReactNode
}

// 
const MyContext = createContext<MyContextType | undefined>(undefined);

// 
const TurmaContext = ({ children }: props) => {
    const [turmas, setTurmas] = useState<TurmaType[]>([]);

    // Function to fetch professores from database
    useEffect(() => {
        try {
            const fetchTruma = async () => {
                const result = await MainAPI.get('/turma');
                setTurmas(result.data)
            }

            fetchTruma();
        } catch (error) {
            console.error("Erro ao buscar a lista de professores!", error);
        }
    }, []);

    // 
    const findTurma = async (id: String) => {
        try {
            const response = await MainAPI.get(`/turma/search/${id}`)
            return response.data
        } catch (error) {
            console.error('Erro ao pesquisar uma class', error);
        }
    }

    return (
        <MyContext value={[turmas, setTurmas, findTurma]}>
            {children}
        </MyContext>
    )
}

export default TurmaContext


// Hooks
export const useTurmaContext = () => {
    const context = useContext(MyContext);

    if (!context) {
        throw new Error("Ocorreu um erro no Turma-Context!");
    }
    return context
}