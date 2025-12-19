import * as React from 'react';

// MUI Data Grid
import {
    DataGrid,
    type GridRowsProp,
    type GridColDef,
} from '@mui/x-data-grid';

// Material UI
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import type { TransitionProps } from '@mui/material/transitions';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Icons
import ListAltIcon from '@mui/icons-material/ListAlt';

// Services
import MainAPI from "../../../services/apis/MainAPI";
import { useUserContext } from '../../../contexts/user/UserContext';
import { useNavigate } from 'react-router-dom';

// Hooks
import { useState, useCallback, useMemo } from "react";

// Components
import UpdateUser from "./update/Update";
import EditButton from '../../../components/Buttons/EditButton';
import DeleteButton from '../../../components/Buttons/DeleteButton';
import ViewButton from '../../../components/Buttons/ViewButton';

// Import Types
import type { UserFormType } from "../../../types/user/UserTypes";


// MUI Transition
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// Initiall form datas
const initialFormData = {
    name: { first: '', last: '' },
    email: '',
    telefone: { primary: '', secound: '' },
    password: ''
}


// @ Main Component
const UsersPages = () => {
    const [updateModalOpen, setUpdateModalOpen] = useState(false)    // State for Modal
    const [user, setUser] = useState<UserFormType>(initialFormData)

    const navigate = useNavigate();
    // 
    const [
        allUsersData,
        findOneUser
    ] = useUserContext();

    // Update Modal Functions
    const handleUpdateOpen = async (id: string) => {
        const result = await findOneUser(id);
        setUpdateModalOpen(true);
        setUser(result)
    };

    //  Close Dialog
    const handleUpdateClose = () => setUpdateModalOpen(false);

    // Função para eliminar um usuario por meio de requisição no API
    const deleteOneUser = useCallback(async (id: String) => {
        try {
            const result = await MainAPI.delete(`/users/remover/${id}`);
            console.log(result);
        } catch (error) {
            console.error('Error ao deletar um usario!', error);
        }
    }, [])

    // Criação de Registos para a tabela de usuários utilizando MUI
    const rows: GridRowsProp = useMemo(() => allUsersData.map((user, i) => (
        {
            order: i + 1,
            id: user._id,
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            telefone: user.telefone.primary,
        }
    )),
        [allUsersData]
    )

    // Criação de colunas para a table de usuários utilizando MUI
    const columns: GridColDef[] = useMemo(() => [
        { field: 'order', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Nome', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'telefone', headerName: 'Telefone', width: 150 },
        {
            field: 'actions',
            headerName: 'Ações',
            width: 190,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <Stack spacing={1} direction="row"  >
                    {/* Button to update a file */}
                    <EditButton onClick={() => handleUpdateOpen(params.row.id)} />
                    {/* Button to view details */}
                    <ViewButton />
                    {/* button to delete a file */}
                    <DeleteButton onClick={() => deleteOneUser(params.row.id)} />
                </Stack>
            )
        },
    ],
        [deleteOneUser]
    )

    // Retorno do componente
    return (
        <div className={`w-full p-2 bg-white `}>
            <Typography className='text-lg !mb-4 !font-bold'> Todos os usuários </Typography>

            <Box>
                <Breadcrumbs aria-label="breadcrumb" className="!text-sm">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>

                    <Link underline="hover" color="primary" href="/professores">
                        Professores
                    </Link>
                </Breadcrumbs>

                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button
                        variant="contained"
                        startIcon={<ListAltIcon />}
                        className=" !text-xs  !mt-4"
                        onClick={() => navigate('/newuser')}
                    >
                        Novo Usário
                    </Button>
                </Box>

            </Box>

            {/* Tabela de usuarios */}
            <div className='mt-5'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSizeOptions={[5, 10, 20]}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 10, page: 0 } },
                    }}
                    checkboxSelection
                    disableRowSelectionOnClick
                    // slots={{ toolbar: CustomToolbar }}
                    showToolbar
                />
            </div>

            {/* Modal para atualizacao de usarios */}
            <Dialog
                fullScreen
                open={updateModalOpen}
                onClose={handleUpdateClose}
                slots={{ transition: Transition }}
            >
                {/* Form to Update User */}
                <UpdateUser data={user} closeDialog={handleUpdateClose} />
            </Dialog>

        </div>
    )
}

export default UsersPages;


