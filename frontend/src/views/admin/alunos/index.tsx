import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

// ICON
import AddIcon from '@mui/icons-material/AddCircleOutline';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import CustomContainer from "../../../components/Container/Container"
import LittleCard from "../../../components/Cards/LittleCard";
import { useNavigate } from "react-router-dom";

// MUI GRID
import { DataGrid, type GridRowsProp, type GridColDef } from "@mui/x-data-grid";
import { useMemo } from "react";

const AlunosPage = () => {
    const navigate = useNavigate()

    const rows: GridRowsProp = useMemo(()=> (
        [
            {id: 1, name: 'Plamedi Pindi'},
            {id: 2, name: 'Maravilha Pindi'},
            {id: 3, name: 'Paulo Pindi'},
        ]
    ), [])

    const columns: GridColDef[] = [
        {field: 'name', headerName: 'Nome', width: 200},
    
    ]

    return (
        <CustomContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Typography className='!text-lg  !font-bold'>Alunos</Typography>

                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    className=" !text-xs  "
                    onClick={() => navigate('/alunos/novoaluno')}
                >
                    Novo Aluno
                </Button>
            </Box>

            {/* Statistic Cards */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 4
                }}
            >
                {/* Card 1 */}
                <LittleCard
                    cardBG={'bg-orange-500/20'}
                    mainText={'2000'}
                    secText={'Ativos'}
                    background={'!bg-violet-50'}
                    cardIcon={
                        <GroupIcon className='!text-xl text-orange-400' />
                    }
                />
                {/* Card 2 */}
                <LittleCard
                    cardBG={'bg-[#BB6BD9]/20'}
                    mainText={'1900'}
                    secText={'Inativos'}
                    background={'!bg-violet-50'}
                    cardIcon={
                        <GroupAddIcon className='!text-xl text-[#BB6BD9]' />
                    }
                />
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

export default AlunosPage 