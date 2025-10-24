import { createContext, useContext, useEffect, type ReactNode } from "react";

import { useState } from "react";

import type { UserDataType, UserFormType } from "../../types/user/UserTypes";

import MainAPI from "../../services/apis/MainAPI";



type UserContexrProps = {
    children: ReactNode
}

type UserContextType = [
    allUsersData: UserDataType[],
    findOneUser: (id: string) => Promise<UserFormType>
]

const Context = createContext<UserContextType | undefined>(undefined)

const UserContext = ({ children }: UserContexrProps) => {
    const [allUsersData, setAllUsersData] = useState<UserDataType[]>([]);  // User data state


    // Busca dados dos usuarios no API
    useEffect(() => {
        const buscarUsuarios = async () => {
            try {
                const result = await MainAPI.get('/users')
                setAllUsersData(result.data);
            } catch (error) {
                console.error('Houve um erro ao buscar dados dos usuários!', error);
            }
        }

        buscarUsuarios();
    }, []);


    // Função para pesquisar um usuário
    const findOneUser = async (id: string) => {
        try {
            const result = await MainAPI(`/users/pesquisar/${id}`);
            return result.data;
        } catch (error) {
            console.error("Ocorreu um arro ao pesquisar o usuario!");
        }
    }

    return (
        <>
            <Context value={[allUsersData, findOneUser]}>
                {children}
            </Context>
        </>
    )
}

export default UserContext

export const useUserContext = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("Erro nas Definições do UserContext!");
    }
    return context
}