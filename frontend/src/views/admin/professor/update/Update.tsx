// MUI
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import SaveIcon from "@mui/icons-material/Save"
import TextField from "@mui/material/TextField"
import FormLabel from "@mui/material/FormLabel"
import MenuItem from "@mui/material/MenuItem"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import FormControlLabel from "@mui/material/FormControlLabel"
import RadioGroup from "@mui/material/RadioGroup"
import Radio from "@mui/material/Radio"

import CameraAltIcon from "@mui/icons-material/CameraAlt"

// Componentes
import CustomForm from "../../../../components/Form/CustomForm"
import type { PorfessorDataType } from "../../../../types/professor/ProfessorTypes"
import { useState, type FormEvent } from "react"
import MainAPI from "../../../../services/apis/MainAPI"

type Props = {
    onClick: () => void
    professor: PorfessorDataType
    Alert: (text: string, status: boolean, type: string) => void
}

const UpdateProfessor = ({ onClick, professor, Alert }: Props) => {
    const [formData, setFormData] = useState<PorfessorDataType>(professor)


    // Form submit
    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = formData._id;

        try {
            const message = 'O professor foi atualizado com sucesso!'
            const status = true;
            const type = 'success';
            const response = await MainAPI.put(`/professores/update/${id}`, formData);
            Alert(message, status, type)

            // setAllProfessorsData(prev =>
                
            //     prev.map(item =>
            //         item._id === id ? response.data : item
            //     )
            // )

            return response;
        } catch (error) {
            console.error("Houve um erro ao autalizar o professor!", error);
        }
    }

    return (
        <CustomForm onSubmit={handleFormSubmit}  >
            <AppBar sx={{ position: 'relative' }} className="!bg-white/50 backdrop-blur-sm ">
                <Toolbar>
                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between'
                    }}>
                        <Button onClick={onClick} className="!block">Voltar</Button>
                        <Button
                            type="submit"
                            variant="contained"
                            onClick={onClick}
                            className=""
                            startIcon={<SaveIcon />}
                        >
                            Salvar
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <div className="mt-4 p-2">
                <div className="w-full h-24 bg-white shadow-sm rounded-lg flex items-center pl-4 ">
                    <div className="flex flex-col items-center gap-y-1" >
                        <div className="rounded-full bg-gray-200 w-14 h-14 flex items-center justify-center p-1">
                            <CameraAltIcon />
                        </div>
                        <Typography className="!text-sm  !text-gray-500">Add Imagem</Typography>
                    </div>
                </div>

                <div className="w-full h-auto bg-white mt-4 rounded-lg shadow-sm p-4 pb-10  ">
                    {/* Nome */}
                    <div className="w-full pb-4">
                        {/* First */}
                        <TextField
                            label="Primeiro nome"
                            type="text"
                            variant="standard"
                            fullWidth
                            value={formData?.name.first}
                            className="!mb-4 !border-b-green-500"
                            onChange={(e) => setFormData({
                                ...formData,
                                name: {
                                    first: e.target.value,
                                    last: formData?.name.last
                                }
                            })}

                        />
                        {/* Last */}
                        <TextField
                            label="Último nome"
                            type="text"
                            variant="standard"
                            fullWidth
                            value={formData?.name.last}
                            onChange={(e) => setFormData({
                                ...formData,
                                name: {
                                    first: formData.name.first,
                                    last: e.target.value
                                }
                            })}
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-5">
                        {/* <label>Email</label> */}
                        <TextField
                            label="Email"
                            type="text"
                            variant="standard"
                            fullWidth
                            value={formData?.email}
                            onChange={(e) => setFormData({
                                ...formData,
                                email: e.target.value
                            })}
                        />
                    </div>

                    {/* Nationality */}
                    <div className="mt-4">
                        <TextField
                            type="text"
                            label="Nacionalidade"
                            variant="standard"
                            fullWidth
                            value={formData?.nationality}
                            onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                        />
                    </div>

                    {/* Address */}
                    <div className="mt-4">
                        <TextField
                            type="text"
                            label="Endereço"
                            fullWidth
                            variant="standard"
                            value={formData?.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        />
                    </div>

                    {/* Phone */}
                    <div className="mt-4 flex flex-col gap-y-4 ">
                        <TextField
                            type="tel"
                            label="Telefone"
                            fullWidth
                            variant="standard"
                            value={formData?.telephone.primary}
                            onChange={(e) => setFormData({
                                ...formData,
                                telephone: {
                                    primary: e.target.value,
                                    secound: formData.telephone.secound
                                }
                            })}
                        />

                        <TextField
                            type="tel"
                            label="Telefone alternativo"
                            fullWidth
                            variant="standard"
                            value={formData?.telephone.secound}
                            onChange={(e) => setFormData({
                                ...formData,
                                telephone: {
                                    primary: formData.telephone.primary,
                                    secound: e.target.value
                                }
                            })}
                        />
                    </div>

                    <div className="mt-5 flex  justify-between items-end gap-x-4">
                        {/* Birthday */}
                        <div>
                            <FormLabel className="!block">Data de nacimento </FormLabel>
                            <TextField
                                type="date"
                                variant="standard"
                                value={formData?.birthday}
                                onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                            />
                        </div>
                        {/* Date that started working */}
                        <div className="">
                            <FormLabel className="!block">Professor desde</FormLabel>
                            <TextField
                                type="date"
                                variant="standard"
                                value={formData?.startDate}
                                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                            />
                        </div>

                    </div>

                    {/* Gender */}
                    <div className="mt-4">
                        <FormLabel className="">Gênero </FormLabel>
                        <RadioGroup
                            row
                            value={formData?.gender}
                            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        >
                            <FormControlLabel value="Masculino" control={<Radio />} label="Maculino" />
                            <FormControlLabel value="Femenino" control={<Radio />} label="Femenino" />
                        </RadioGroup>
                    </div>

                    {/* Status */}
                    <div className="mt-4">
                        <InputLabel>Estado</InputLabel>
                        <Select
                            label="Estado"
                            variant="standard"
                            fullWidth
                            value={formData?.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        >
                            <MenuItem value={'Ativo'}>Ativo</MenuItem>
                            <MenuItem value={'Inativo'}>Inativo</MenuItem>
                            <MenuItem value={'Falecido'}>Falecido</MenuItem>
                        </Select>
                    </div>

                </div>

            </div>
        </CustomForm>
    )
}

export default UpdateProfessor