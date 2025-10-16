import type { ChangeEvent, FormEvent } from "react";

import { useState } from "react";

import MainAPI from "../../../../services/apis/MainAPI";

type Form = { 
    name: { first: string, last: string },
    email: string,
    telefone: { primary: string, secound: string },
    password: string
}

const initialFormData = {
    name: { first: '', last: '' },
    email: '',
    telefone: { primary: '', secound: '' },
    password: ''
}

const RegisterUserPage = () => {
    const [formData, setFormData] = useState<Form>(initialFormData);


    const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await MainAPI.post('/users/new', formData);
            setFormData({
                name: { first: '', last: '' },
                email: '',
                telefone: { primary: '', secound: '' },
                password: ''
            })
            console.log("Usuario criado com sucesso!", response);
        } catch (error) {
            console.error("Erro ao criar o usario!", error);
        }
    }

    // 
    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(
            { ...formData, name: { first: e.target.value, last: formData.name.last } }
        )
    }

    // 
    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(
            { ...formData, name: { first: formData.name.first, last: e.target.value } }
        )
    }

    // 
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, email: e.target.value })
    }

    // 
    const handleTelephoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, telefone: { primary: e.target.value, secound: '' } })
    }

    // 
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, password: e.target.value});
    }


    return (
        <>
            <form onSubmit={formSubmit}>
                <div className="bg-gray-100 w-[18rem] text-sm h-[25rem] m-auto mt-10 p-4 ">
                    {/* First name */}
                    <div className="mt-4 w-full">
                        <label className="block mb-2">Primeiro nome</label>
                        <input
                            type="text"
                            value={formData.name.first}
                            onChange={handleFirstNameChange}
                            className="border-1 w-full border-gray-300 rounded-sm p-1"
                        />
                    </div>

                    {/* Last name */}
                    <div className="mt-4 w-full">
                        <label className="block mb-2">Último nome</label>
                        <input
                            type="text"
                            value={formData.name.last}
                            onChange={handleLastNameChange}
                            className="border-1 w-full border-gray-300 rounded-sm p-1"
                        />
                    </div>

                    {/* Email */}
                    <div className="mt-4 w-full">
                        <label className="block mb-2">Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={handleEmailChange}
                            className="border-1 w-full border-gray-300 rounded-sm p-1"
                        />
                    </div>

                    {/* Telephone */}
                    <div className="mt-4 w-full">
                        <label className="block mb-2">Telefone</label>
                        <input
                            type="tel"
                            value={formData.telefone.primary}
                            onChange={handleTelephoneChange}
                            className="border-1 w-full border-gray-300 rounded-sm p-1"
                        />
                    </div>

                    {/* Password */}
                    <div className="mt-4 w-full">
                        <label className="block mb-2">Senha</label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={handlePasswordChange}
                            className="border-1 w-full border-gray-300 rounded-sm p-1"
                        />
                    </div>

                    <input type="submit" value='Registrar' className="bg-blue-400 text-gray-50 rounded-full w-full mt-6 p-2" />

                </div>
            </form>
        </>
    )
}

export default RegisterUserPage