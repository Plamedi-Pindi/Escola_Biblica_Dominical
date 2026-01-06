import {
    DataGrid,
    type GridRowsProp,
    type GridColDef
} from "@mui/x-data-grid";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// Icon
import AddIcon from '@mui/icons-material/AddCircleOutline';

// Components
import CustomContainer from "../../../components/Container/Container";
import EditButton from "../../../components/Buttons/EditButton";
import ViewButton from "../../../components/Buttons/ViewButton";
import DeleteButton from "../../../components/Buttons/DeleteButton";
import { useNavigate } from "react-router-dom";


const TurmasPage = () => {

    const rows: GridRowsProp = [
        { id: 1, name: '2025_Jardins 1', anoLectivo: '2025' },
        { id: 2, name: '2025_Jardins 2', anoLectivo: '2025' },
        { id: 3, name: '2025_Novice 1', anoLectivo: '2025' },
        { id: 4, name: '2025_Novice 2', anoLectivo: '2025' },
        { id: 5, name: '2025_Cates ', anoLectivo: '2025' },
        { id: 6, name: '2025_Primo-Júnior ', anoLectivo: '2025' },
    ]


    const columns: GridColDef[] = [
        // { field: 'id', headerName: 'ID', width: 60 },
        { field: 'name', headerName: 'Turma', width: 200 },
        { field: 'anoLectivo', headerName: 'Ano Lectivo', width: 130 },
        {
            field: 'action',
            headerName: 'Ações',
            width: 220,
            renderCell: () => (
                <Stack spacing={1} direction={'row'}>
                    {/* Button to update file */}
                    <EditButton />
                    {/* Button to view file details */}
                    <ViewButton />
                    {/* Button to delete file */}
                    <DeleteButton />
                </Stack>
            ),
        },
    ]

    const navigate = useNavigate();

    return (
        <CustomContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Typography className='!text-lg  !font-bold'>Turmas</Typography>

                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    className=" !text-xs  "
                    onClick={() => navigate('/newProfesser')}
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
        </CustomContainer>
    )
}

export default TurmasPage