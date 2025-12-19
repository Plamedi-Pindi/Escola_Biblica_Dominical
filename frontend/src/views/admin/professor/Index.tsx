import * as React from 'react';

// Component
import { useProfessorContext } from '../../../contexts/professor/professorContext';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomContainer from '../../../components/Container/Container';
import LittleCard from '../../../components/Cards/LittleCard';
import EditButton from '../../../components/Buttons/EditButton';
import ViewButton from '../../../components/Buttons/ViewButton';
import DeleteButton from '../../../components/Buttons/DeleteButton';
import MainAPI from '../../../services/apis/MainAPI';
import UpdateProfessor from './update/Update';
import type { PorfessorDataType } from "../../../types/professor/ProfessorTypes"

// MUI
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import type { TransitionProps } from '@mui/material/transitions';

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
import AlertMessage from '../../../components/Alert/Alert';

const initialFormData = {
    _id: '',
    image: '',
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

const ProfessorPage = () => {
    const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
    const [professor, setProfessor] = useState<PorfessorDataType>(initialFormData);

    const navigate = useNavigate();
    const [
        allProfessorsData,
        findOneProfessor,
        handleAlertMessage, 
        Alert
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
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            renderCell: (props) => (
                <div className='flex items-center h-full'>
                    <Typography color='primary' className='!text-sm'>{props.row.email}</Typography>
                </div>
            )

        },
        {
            field: 'telephone',
            headerName: 'Telefone',
            width: 100,
            renderCell: (props) => (
                <div className='flex items-center h-full'>
                    <Typography color='primary' className='!text-sm'>{props.row.telephone}</Typography>
                </div>
            )

        },
        { field: 'idade', headerName: 'Idade', width: 200 },
        { field: 'gender', headerName: 'Gênero', width: 100 },
        {
            field: 'status',
            headerName: 'Estado',
            width: 100,
            renderCell: (props) => props.row.status == 'Ativo'
                ? (
                    <div className='bg-green-400/10 h-8 flex items-center justify-center mt-2 text-green-700 rounded-sm'>{props.row.status}</div>
                )
                : (
                    <div className='bg-red-400/10 h-8 flex items-center justify-center mt-2 text-red-500 rounded-sm'>{props.row.status}</div>
                )
        },
        {
            field: 'Action',
            headerName: 'Ações',
            sortable: false,
            filterable: false,
            width: 180,
            renderCell: (props) => (
                <Stack spacing={1} direction={'row'}>
                    {/* Button to update file */}
                    <EditButton onClick={() => handleOpenUpdateDialog(props.row.id)} />
                    {/* Button to view file details */}
                    <ViewButton onClick={()=> handleAlertMessage('ola', true, 'success')} />
                    {/* Button to delete file */}
                    <DeleteButton onClick={() => handleDelete(props.row.id)} />
                </Stack>
            )
        }
    ]

    // Function to delete a professor
    const handleDelete = async (id: string) => {
        try {
            const response = await MainAPI.delete(`/professores/remove/${id}`);
            console.log(response);

        } catch (error) {
            console.error('Erro ao eliminar um professore!', error);
        }
    }

    // 
    const handleCloseUpdateDialog = () => setOpenUpdateDialog(false)

    // 
    const handleOpenUpdateDialog = async (id: string) => {
        const result = await findOneProfessor(id);
        setProfessor(result)
        setOpenUpdateDialog(true);
    }


    // MUI Transition
    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement<unknown>;
        },
        ref: React.Ref<unknown>,
    ) {
        return <Slide direction="up" ref={ref} {...props} />;
    });


    return (
        <CustomContainer>
            {/* Alert */}
            <AlertMessage
                status={Alert.status}
                message={Alert.message}
                type={Alert.type}
            />

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

            {/* Update professor dialog */}
            <Dialog
                fullScreen
                open={openUpdateDialog}
                onClose={() => handleCloseUpdateDialog}
                slots={{ transition: Transition }}
            >
                <UpdateProfessor
                    professor={professor}
                    onClick={handleCloseUpdateDialog}
                    Alert={handleAlertMessage}
                />
            </Dialog>



        </CustomContainer>
    )
}

export default ProfessorPage