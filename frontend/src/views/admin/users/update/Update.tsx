// import type { UserFormType } from "../../../../types/user/UserTypes";

import CustomForm from "../../../../components/Form/CustomForm";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Close from "@mui/icons-material/Close";
import React, { useState, type ChangeEvent } from "react";

import MainAPI from "../../../../services/apis/MainAPI";


type UpdateUserProps = {
    closeDialog: () => void
    data: {
        _id?: String,
        name: {
            first: string,
            last: string
        },
        email: string,
        telefone: {
            primary: string,
            secound: string
        },
        password: string
    }
}

const UpdateUser = ({ closeDialog, data }: UpdateUserProps) => {
    const [formData, setFormData] = useState(data)

    
    // 
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const id = formData._id;
            const result = await MainAPI.put(`/users/atualizar/${id}`, formData)
            console.log(result);
        } catch (error) {
            console.error("Erro ao enviar as atualizações!", error);
        }

    }

    // 
    const handelFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            name: {
                first: e.target.value,
                last: formData.name.last
            }
        })
    }

    // 
    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            name: {
                first: formData.name.first,
                last: e.target.value
            }
        })
    }

    // 
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            email: e.target.value
        })
    }


    //
    const handlePrimaryNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            telefone: {
                primary: e.target.value,
                secound: formData.telefone.secound
            }
        })
    }

    // 
    const handleSecoundNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            telefone: {
                primary: formData.telefone.primary,
                secound: e.target.value
            }
        })
    }

    return (
        <CustomForm onSubmit={handleFormSubmit}>
            <AppBar sx={{ position: "relative" }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={closeDialog}
                        aria-label="close"
                    >
                        <Close />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">

                    </Typography>
                    <Button type='submit' autoFocus color="inherit">Save</Button>
                </Toolbar>
            </AppBar>
            <Box component={"section"} sx={{ p: 2 }}>
                <div className='mb-4'>
                    <label>Primeiro nome</label>
                    <input
                        type="text"
                        value={formData?.name.first}
                        onChange={handelFirstNameChange}
                        className='w-full p-2 outline-none border-1 border-gray-300 rounded focus:border-blue-400 '
                    />
                </div>
                <div className='mb-4'>
                    <label>último nome</label>
                    <input
                        type="text"
                        value={formData?.name.last}
                        onChange={handleLastNameChange}
                        className='w-full p-2 outline-none border-1 border-gray-300 rounded focus:border-blue-400 '
                    />
                </div>
                <div className='mb-4'>
                    <label>Email</label>
                    <input
                        type="email"
                        value={formData?.email}
                        onChange={handleEmailChange}
                        className='w-full p-2 outline-none border-1 border-gray-300 rounded focus:border-blue-400 '
                    />
                </div>
                <div className='mb-4'>
                    <label>Telefone</label>
                    <input
                        type="tel"
                        value={formData?.telefone.primary}
                        onChange={handlePrimaryNumberChange}
                        className='w-full p-2 outline-none border-1 border-gray-300 rounded focus:border-blue-400 '
                    />
                </div>
                <div className='mb-4'>
                    <label>Telefone alternativo</label>
                    <input
                        type="tel"
                        value={formData?.telefone.secound}
                        onChange={handleSecoundNumberChange}
                        placeholder=" 9xx xxx xxx"
                        className='w-full p-2 outline-none border-1 border-gray-300 rounded focus:border-blue-400 '
                    />
                </div>
            </Box>
        </CustomForm>
    )
}

export default UpdateUser;