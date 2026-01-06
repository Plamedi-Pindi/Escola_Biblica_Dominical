import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import MainAPI from "../../services/apis/MainAPI"
import type { Dispatch, SetStateAction } from "react"

type AnoLectivoType = {
    _id: String,
    name: String,
    initDate: String,
    closeDate: String,
}

type ContextType = [
    anoLectivos: AnoLectivoType[],
    findYear: (id: string) => Promise<AnoLectivoType> ,
    setAnoLectivos: Dispatch<SetStateAction<AnoLectivoType[]>>
]

type Props = {
    children: ReactNode
}

const AnoContext = createContext<ContextType | undefined>(undefined)


const AnoLectivoContext = ({ children }: Props) => {
    const [anoLectivos, setAnoLectivos] = useState<AnoLectivoType[]>([])

    useEffect(() => {
        const fetchAnoLectivo = async () => {
            try {
                const response = await MainAPI.get('/anoLectivo')
                setAnoLectivos(response.data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchAnoLectivo()
    }, [])

    const findYear = async (id: string) => {
        try {
            const response = await MainAPI.get(`/anoLectivo/searchone/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar um ano', error);
        }
    }

    return (
        <AnoContext value={[anoLectivos, findYear, setAnoLectivos]}>
            {children}
        </AnoContext>
    )
}

export default AnoLectivoContext


export const useAnoLectivoContext = () => {
    const context = useContext(AnoContext);
    if (!context) {
        throw new Error("Erro nas Definições do AnoContext!");
    }
    return context
}