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

// Icons
import ListAltIcon from '@mui/icons-material/ListAlt';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import CustomContainer from "../../../../components/Container/Container";

const NewProfessorPage = () => {
    return (
        <CustomContainer style="p-3" >
            <Typography className="!text-lg !mb-4">Cadastrar Professor</Typography>

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
                >
                    Lista de Professores
                </Button>
            </Box>

            <form className="mt-4">
                <div className="w-full h-24 bg-white shadow-sm rounded-lg flex items-center pl-4 ">
                    <div className="flex flex-col items-center gap-y-1" >
                        <div className="rounded-full bg-gray-200 w-14 h-14 flex items-center justify-center p-1">
                            <CameraAltIcon />
                        </div>
                        <Typography className="!text-sm  !text-gray-500">Add Imagem</Typography>
                    </div>
                </div>

                <div className="w-full h-auto bg-white mt-4 rounded-lg shadow-sm p-4  ">
                    {/* Nome */}
                    <div className="w-full pb-4">
                        {/* <label>Nome</label> */}
                        <TextField
                            label="Primeiro nome"
                            type="text"
                            variant="standard"
                            fullWidth
                            className="!mb-4"
                        />

                        <TextField
                            label="Último nome"
                            type="text"
                            variant="standard"
                            fullWidth
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
                        />

                    </div>

                    {/*  */}
                    <div className="mb-5 flex  justify-between items-center">
                        <div>
                            <FormLabel className="">Data de nacimento </FormLabel>
                            <TextField
                                type="date"
                                variant="standard"
                                slotProps={{
                                    inputLabel: { shrink: true },
                                }}
                            />
                        </div>
                        <div>
                            <TextField
                                type="text"
                                label="Nacionalidade"
                                variant="standard"
                               
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <FormLabel className="">Gênero </FormLabel>
                            <RadioGroup 
                                row
                            >
                                <FormControlLabel value="masculino" control={<Radio />} label="Maculino" />
                                <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                            </RadioGroup>

                    </div>
                </div>

            </form>
        </CustomContainer>
    )
}

export default NewProfessorPage;