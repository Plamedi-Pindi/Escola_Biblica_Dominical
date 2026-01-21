import {
    DataGrid,
    type GridRowsProp,
    type GridColDef
} from "@mui/x-data-grid";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";

// Icon
import AddIcon from '@mui/icons-material/AddCircleOutline';

// Components
import CustomContainer from "../../../components/Container/Container";
import EditButton from "../../../components/Buttons/EditButton";
import ViewButton from "../../../components/Buttons/ViewButton";
import DeleteButton from "../../../components/Buttons/DeleteButton";
import NewClassPage from "./register/NewClass";
import UpdateClassPage from "./update/Update";
import { useMemo, useState } from "react";
import { useTurmaContext } from "../../../contexts/turma/TurmaContext";
import { useAnoLectivoContext } from "../../../contexts/anoLectivo/AnoLectivoContext";
import MainAPI from "../../../services/apis/MainAPI";

type TurmaType = {
    _id: String,
    name: String,
    anoLectivo: String,
    desctription: String,
}

const initial = {
    _id: '',
    name: '',
    anoLectivo: '',
    desctription: '',
}



const TurmasPage = () => {
    const [isNewClassModal, setIsNewClassModal] = useState(false); // Abrir e feichar modal de criação
    const [isUpdateClassModal, setUpdateClassModal] = useState(false); // Abrir e feichar modal de atualização
    const [turma, setTurma] = useState<TurmaType>(initial)

    const [turmas, setTurmas, findTurma] = useTurmaContext(); // Contexto do componente Turma
    const [anoLectivos] = useAnoLectivoContext(); // Contexto do componente Ano Lectivo


    // Function to open create modal
    const openNewClassModal = () => setIsNewClassModal(true)
    // Function to close create modal 
    const closeNewClassModal = () => setIsNewClassModal(false)

    // Function to open update modal
    const openUpdateClassModal = async (id: String) => {
        const result = await findTurma(id);
        setTurma(result);
        setUpdateClassModal(true);
    }
    // Function to close update modal 
    const closeUpdateClassModal = () => setUpdateClassModal(false)

    const rows: GridRowsProp = useMemo(() => (
        turmas.map(turma => (
            {
                id: turma._id,
                name: turma.name,
                anoLectivo: anoLectivos.filter(item => item._id === turma.anoLectivo)[0]?.name ?? '---',
            }
        ))
    ), [turmas, anoLectivos])



    const columns: GridColDef[] = [
        // { field: 'id', headerName: 'ID', width: 60 },
        { field: 'name', headerName: 'Turma', width: 200 },
        { field: 'anoLectivo', headerName: 'Ano Lectivo', width: 130 },
        {
            field: 'action',
            headerName: 'Ações',
            width: 220,
            renderCell: (params) => (
                <Stack spacing={1} direction={'row'}>
                    {/* Button to update file */}
                    <EditButton onClick={() => openUpdateClassModal(params.row.id)} />
                    {/* Button to view file details */}
                    <ViewButton />
                    {/* Button to delete file */}
                    <DeleteButton onClick={() => handleDelete(params.row.id)} />
                </Stack>
            ),
        },
    ]

    // Delete 
    const handleDelete = async (id: String) => {
        const response = await MainAPI.get(`turma/delete/${id}`)
        setTurmas(prev =>
            prev.filter(turma => turma._id !== id)
        )
        return response.status
    }

    return (
        <CustomContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Typography className='!text-lg  !font-bold'>Turmas</Typography>

                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    className=" !text-xs  "
                    onClick={openNewClassModal}
                >
                    Nova Turma
                </Button>
            </Box>

            {/* Tables */}
            <div className='w-full pt-5'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    checkboxSelection
                    disableRowSelectionOnClick
                    showToolbar
                />
            </div>

            {/* Modal to create class */}
            <Modal
                open={isNewClassModal}
                onClose={closeNewClassModal}
            >
                <NewClassPage closeModal={closeNewClassModal} />
            </Modal>

            {/* Modal to update class */}
            <Modal
                open={isUpdateClassModal}
                onClose={closeUpdateClassModal}
            >
                <UpdateClassPage closeModal={closeUpdateClassModal} turma={turma} />
            </Modal>
        </CustomContainer>
    )
}

export default TurmasPage