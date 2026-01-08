// 
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

// Icons
import ListAltIcon from '@mui/icons-material/ListAlt';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SaveIcon from '@mui/icons-material/Save';

import CustomContainer from "../../../../components/Container/Container";
import { useState, type FormEvent } from "react";
import type { FormDataType } from "../../../../types/professor/ProfessorTypes";
import MainAPI from "../../../../services/apis/MainAPI";
import { useNavigate } from "react-router-dom";
import { useProfessorContext } from "../../../../contexts/professor/professorContext";


const initialFormData = {
    name: { first: '', last: '' },
    birthday: '',
    email: '',
    telephone: { primary: '', secound: '' },
    nationality: '',
    startDate: '',
    address: '',
    gender: '',
    status: ''
}

const NewProfessorPage = () => {
    const [formData, setFormData] = useState<FormDataType>(initialFormData)

    const [, , , , setAllProfessorsData] = useProfessorContext()
    const navigate = useNavigate();

    // Form submit
    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await MainAPI.post('/professores/create', formData);
            if (response) {
                setFormData({
                    name: { first: '', last: '' },
                    birthday: '',
                    email: '',
                    telephone: { primary: '', secound: '' },
                    nationality: '',
                    startDate: '',
                    address: '',
                    gender: '',
                    status: ''
                })
            }

            setAllProfessorsData(prev => [...prev, response.data])
            return response;

        } catch (error) {
            console.error("Houve um erro ao cadastrar professor!", error);
        }
    }


    return (
        <CustomContainer style="pt-3 pb-3" >
            <Typography className="!text-lg !mb-4 !font-bold">Cadastrar Professor</Typography>

            <Box>
                <Breadcrumbs aria-label="breadcrumb" className="!text-sm">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>

                    <Link underline="hover" color="inherit" href="/professores">
                        Professores
                    </Link>

                    <Link underline="none" color="primary">
                        Novo Professor
                    </Link>
                </Breadcrumbs>
                <Button
                    variant="outlined"
                    startIcon={<ListAltIcon />}
                    className="!text-green-600 !text-xs !border-green-600 !mt-4"
                    onClick={() => navigate('/professores')}
                >
                    Lista de Professores
                </Button>
            </Box>

            <form onSubmit={handleFormSubmit} className="mt-4 "  >
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
                            value={formData.name.first}
                            variant="standard"
                            fullWidth
                            className="!mb-4"
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
                            value={formData.name.last}
                            variant="standard"
                            fullWidth
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
                            value={formData.email}
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
                            value={formData.nationality}
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
                            value={formData.address}
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
                            value={formData.telephone.primary}
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
                            value={formData.telephone.secound}
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
                                value={formData.birthday}
                                onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}

                            />
                        </div>
                        {/* Date that started working */}
                        <div className="">
                            <FormLabel className="!block">Professor desde</FormLabel>
                            <TextField
                                type="date"
                                variant="standard"
                                value={formData.startDate}
                                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                            />
                        </div>

                    </div>

                    {/* Gender */}
                    <div className="mt-4">
                        <FormLabel className="">Gênero </FormLabel>
                        <RadioGroup
                            row
                            value={formData.gender}
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
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        >
                            <MenuItem value={'Ativo'}>Ativo</MenuItem>
                            <MenuItem value={'Inativo'}>Inativo</MenuItem>
                            <MenuItem value={'Falecido'}>Falecido</MenuItem>
                        </Select>
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

export default NewProfessorPage;