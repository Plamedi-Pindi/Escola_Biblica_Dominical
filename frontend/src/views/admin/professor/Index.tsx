import {
    DataGrid,
    type GridRowsProp,
    type GridColDef

} from '@mui/x-data-grid';

import { useProfessorContext } from '../../../contexts/professor/professorContext';
import { useMemo } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';



const ProfessorPage = () => {

    const [
        allProfessorsData,
    ] = useProfessorContext()

    const dataActual = new Date().getFullYear();

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
                    <Typography  noWrap className='!text-sm'>{params.row.name}</Typography>
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
        <div className=''>
            <h1>Professor Page</h1>

            <div className='w-full'>
                <DataGrid rows={rows} columns={columns} />
            </div>
        </div>
    )
}

export default ProfessorPage