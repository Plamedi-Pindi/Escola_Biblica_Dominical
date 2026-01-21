import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormLabel from "@mui/material/FormLabel"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

// ICON 
import ListAltIcon from '@mui/icons-material/ListAlt';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SaveIcon from '@mui/icons-material/Save';

import CustomContainer from "../../../../components/Container/Container"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import type { FormDataType } from "../../../../types/Aluno/Aluno"



const initialData = {
    name: { first: '', last: '' },
    image: '',
    birthday: '',
    telephone: '',
    nacionality: '',
    gender: '',
    address: '',
    status: '',
    startDate: '',
    LeftDate: '',
    father: { name: '', phone: '' },
    mother: { name: '', phone: '' },
}

const NewAlunoComponent = () => {
    const [formData, setFormData] = useState<FormDataType>(initialData);
    const navigate = useNavigate();

    return (
        <CustomContainer style="pt-3 pb-3">
            <Typography className="!text-lg !mb-4 !font-bold">Cadastrar Alunos</Typography>

            <Box>
                <Breadcrumbs aria-label="breadcrumb" className="!text-sm">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>

                    <Link underline="hover" color="inherit" href="/alunos">
                        Alunos
                    </Link>

                    <Link underline="none" color="primary">
                        Novo Alunos
                    </Link>
                </Breadcrumbs>
                <Button
                    variant="outlined"
                    startIcon={<ListAltIcon />}
                    className="!text-green-600 !text-xs !border-green-600 !mt-4"
                    onClick={() => navigate('/alunos')}
                >
                    Lista de Alunos
                </Button>
            </Box>

            <form className="mt-4 "  >
                <div className="w-full h-24 bg-white shadow-sm rounded-lg flex items-center pl-4 ">
                    <div className="flex flex-col items-center gap-y-1" >
                        <div className="rounded-full bg-gray-200 w-14 h-14 flex items-center justify-center p-1">
                            <CameraAltIcon />
                        </div>
                        <Typography className="!text-sm  !text-gray-500">Add Imagem</Typography>
                    </div>
                </div>

                <div className="w-full h-auto bg-white mt-4 rounded-lg shadow-sm p-4 pb-10  ">
                    <Typography className="!border-l-3 border-blue-600 pl-2 !mb-5">Dodos do aluno</Typography>
                    {/* Nome */}
                    <div className="w-full pb-4">
                        {/* First */}
                        <TextField
                            label="Primeiro nome"
                            type="text"
                            variant="standard"
                            fullWidth
                            className="!mb-4"
                            value={formData.name.first}
                        />
                        {/* Last */}
                        <TextField
                            label="Último nome"
                            type="text"
                            variant="standard"
                            fullWidth
                            value={formData.name.last}
                        />
                    </div>

                    {/* Nationality */}
                    <div className="mt-4">
                        <TextField
                            type="text"
                            label="Nacionalidade"
                            variant="standard"
                            fullWidth
                            value={formData.nacionality}
                        />
                    </div>

                    {/* Address */}
                    <div className="mt-4">
                        <TextField
                            type="text"
                            label="Endereço"
                            fullWidth
                            variant="standard"
                            value={formData.address}
                        />
                    </div>

                    {/* Phone */}
                    <div className="mt-4 flex flex-col gap-y-4 ">
                        <TextField
                            type="tel"
                            label="Telefone"
                            fullWidth
                            variant="standard"
                        />

                    </div>

                    <div className="mt-5 flex  justify-between items-end gap-x-4">
                        {/* Birthday */}
                        <div>
                            <FormLabel className="!block">Data de nacimento </FormLabel>
                            <TextField
                                type="date"
                                variant="standard"
                                value={formData.birthday}
                            />
                        </div>
                        {/* Date that started working */}
                        <div className="">
                            <FormLabel className="!block">Aluno desde</FormLabel>
                            <TextField
                                type="date"
                                variant="standard"
                                value={formData.startDate}
                            />
                        </div>

                    </div>

                    {/* Gender */}
                    <div className="mt-4">
                        <FormLabel className="">Gênero </FormLabel>
                        <RadioGroup
                            row
                            value={formData.gender}
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
                            value={formData.status}
                        >
                            <MenuItem value={'Ativo'}>Ativo</MenuItem>
                            <MenuItem value={'Inativo'}>Inativo</MenuItem>
                            <MenuItem value={'Falecido'}>Falecido</MenuItem>
                        </Select>
                    </div>

                </div>

                <div className="w-full h-auto bg-white mt-4 rounded-lg shadow-sm p-4 pb-2 pt-6 ">
                    <Typography className="!border-l-3 border-blue-600 pl-2 !mb-5">Dodos parentais</Typography>

                    {/* Nome do pai */}
                    <div className="w-full pb-4">
                        {/* First */}
                        <TextField
                            label="Nome do pai"
                            type="text"
                            variant="standard"
                            fullWidth
                            className="!mb-4"
                            value={formData.father.name}
                        />
                    </div>

                    {/* Telefone do pai */}
                    <div className="w-full pb-4">
                        {/* First */}
                        <TextField
                            label="Telefone do pai"
                            type="tel"
                            variant="standard"
                            fullWidth
                            className="!mb-4"
                            value={formData.father.phone}
                        />
                    </div>

                    {/* Nome da mãe */}
                    <div className="w-full pb-4">
                        {/* First */}
                        <TextField
                            label="Nome da mãe"
                            type="text"
                            variant="standard"
                            fullWidth
                            className="!mb-4"
                            value={formData.mother.name}
                        />
                    </div>

                    {/* Telefone do pai */}
                    <div className="w-full pb-4">
                        {/* First */}
                        <TextField
                            label="Telefone da mãe"
                            type="tel"
                            variant="standard"
                            fullWidth
                            className="!mb-4"
                            value={formData.mother.phone}
                        />
                    </div>
                </div>

                <div className="w-full flex justify-end mt-5 ">
                    <Button
                        variant="contained"
                        type="submit"
                        startIcon={<SaveIcon />}
                    >
                        Cadastrar
                    </Button>
                </div>
            </form>

        </CustomContainer>
    )
}

export default NewAlunoComponent
