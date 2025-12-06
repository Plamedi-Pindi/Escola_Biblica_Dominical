
// MUI
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// MUI Data Grid
import {
    DataGrid,
    type GridRowsProp,
    type GridColDef

} from '@mui/x-data-grid';

// MUI Icons
// import ListAltIcon from '@mui/icons-material/ListAlt'
import AddIcon from '@mui/icons-material/AddCircleOutline';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import GroupRemoveIcon from '@mui/icons-material/GroupRemove';

import { useProfessorContext } from '../../../contexts/professor/professorContext';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomContainer from '../../../components/Container/Container';



const ProfessorPage = () => {

    // 
    const navigate = useNavigate();
    const [
        allProfessorsData,
    ] = useProfessorContext()
    // const dataActual = new Date().getFullYear();

    const rows: GridRowsProp = useMemo(() => (allProfessorsData.map((professor, i) => (
        {
            order: 1 + i,
            id: professor._id,
            name: `${professor.name.first} ${professor.name.last}`,
            email: professor.email,
            telephone: professor.telephone.primary,
            idade: professor.birthday,
            gender: professor.gender,
            status: professor.status
        }
    ))), [allProfessorsData])


    const columns: GridColDef[] = [
        { field: 'order', headerName: 'ID', width: 60 },
        {
            field: 'name',
            headerName: 'Nome',
            width: 220,
            renderCell: (params) => (
                <Stack
                    direction={'row'}
                    sx={{ alignItems: 'center' }}
                    spacing={2}
                    className=' !h-full'
                >
                    <Avatar className='!w-10 !h-10 ' src='/user.jpeg' />
                    <Typography noWrap className='!text-sm'>{params.row.name}</Typography>
                </Stack>
            ),
        },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'telephone', headerName: 'Telefone', width: 100 },
        { field: 'idade', headerName: 'Idade', width: 200 },
        { field: 'gender', headerName: 'Gênero', width: 100 },
        { field: 'status', headerName: 'Estado', width: 100 },
    ]

    return (
        <CustomContainer>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* <Breadcrumbs aria-label="breadcrumb" className="!text-sm">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                        </Link>

                        <Link underline="hover" color="primary" href="/professores">
                        Professores
                        </Link>
                        </Breadcrumbs> */}
                <Typography className='!text-lg  !font-bold'>Professores</Typography>

                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    className=" !text-xs  "
                    onClick={() => navigate('/newProfesser')}
                >
                    Novo Profesor
                </Button>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 4
                }}
            >
                <Card sx={{ minWidth: 150 }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <GroupIcon className='!text-xl text-gray-500' />
                            <Typography color='' className='!text-sm !font-bol text-gray-500'>Total</Typography>
                        </Box>
                        <Typography className='!text-lg !font-bold !mt-1'>2000</Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 150 }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <GroupAddIcon className='!text-xl text-gray-500' />
                            <Typography className='!text-sm !font-bol text-gray-500'>Ativos</Typography>
                        </Box>
                        <Typography className='!text-lg !font-bold !mt-1'>1900</Typography>
                    </CardContent>
                </Card>
            </Box>


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

export default ProfessorPage