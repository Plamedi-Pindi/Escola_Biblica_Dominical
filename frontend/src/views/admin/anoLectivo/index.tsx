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
import UpdateYearPage from "./update/Update";
import NewYearPage from "./register/NewYear";
import { useAnoLectivoContext } from "../../../contexts/anoLectivo/AnoLectivoContext";
import { useMemo, useState } from "react";
import MainAPI from "../../../services/apis/MainAPI";

type AnoLectivoType = {
    _id: String,
    name: String,
    initDate: String,
    closeDate: String,
}

const initioalYear = {
    _id: '',
    name: '',
    initDate: '',
    closeDate: '',
}


const AnoLectivoPage = () => {
    const [newYearModal, setNewYearModal] = useState(false)
    const [updateYearModal, setUpdateYearModal] = useState(false)
    const [year, setYear] = useState<AnoLectivoType>(initioalYear)

    // Use context
    const [anoLectivos, findYear, setAnoLectivos] = useAnoLectivoContext();

    // Function to open modal create form
    const openNewFormModal = () => setNewYearModal(true)

    // Function to open modal create form
    const closeNewFormModal = () => setNewYearModal(false)

    // Function to open modal updateform
    const openUpdateFormModal = async (id: string) => {
        const result = await findYear(id)
        setYear(result)
        setUpdateYearModal(true)
    }

    // Function to open modal updateform
    const closeUpdateFormModal = () => setUpdateYearModal(false)

    // Delete 
    const handleDelete = async (id: String) => {
        const response = await MainAPI.get(`anoLectivo/delete/${id}`)
        setAnoLectivos(prev =>
            prev.filter(ano => ano._id !== id)
        )
        return response.status
    }

    const rows: GridRowsProp = useMemo(() => (
        anoLectivos.map(ano => (
            {
                id: ano._id,
                name: ano.name,
                initDate: ano.initDate && ano.initDate.split("T")[0],
                closeDate: ano.closeDate && ano.closeDate.split("T")[0]
            }
        ))
    ), [anoLectivos])

    const columns: GridColDef[] = [
        // { field: 'id', headerName: 'ID', width: 60 },
        { field: 'name', headerName: 'Ano Lectivo', width: 150 },
        { field: 'initDate', headerName: 'Início', width: 150 },
        { field: 'closeDate', headerName: 'Enserramento', width: 150 },
        {
            field: 'action',
            headerName: 'Ações',
            width: 220,
            renderCell: (props) => (
                <Stack spacing={1} direction={'row'}>
                    {/* Button to update file */}
                    <EditButton onClick={() => openUpdateFormModal(props.row.id)} />
                    {/* Button to view file details */}
                    <ViewButton />
                    {/* Button to delete file */}
                    <DeleteButton onClick={() => handleDelete(props.row.id)} />
                </Stack>
            ),
        },
    ]

    return (
        <CustomContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Typography className='!text-lg  !font-bold'>Anos Lectivos</Typography>

                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    className=" !text-xs  "
                    onClick={openNewFormModal}
                >
                    Novo Ano Lectivo
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

            {/* Modal To create a year */}
            <Modal
                open={newYearModal}
                onClose={closeNewFormModal}
            >
                <NewYearPage closeModal={closeNewFormModal} />
            </Modal>

            {/* Modal To update a year */}
            <Modal
                open={updateYearModal}
                onClose={closeUpdateFormModal}
            >
                <UpdateYearPage closeModal={closeUpdateFormModal} anoLetivo={year} />
            </Modal>
        </CustomContainer>
    )
}

export default AnoLectivoPage