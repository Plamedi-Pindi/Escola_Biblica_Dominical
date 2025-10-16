// Services
import MainAPI from "../../../services/apis/MainAPI";

// Hooks
import { useState, useEffect, useCallback, useMemo } from "react";

// MUI Data Grid
import { DataGrid, type GridRowsProp, type GridColDef } from '@mui/x-data-grid';

// Material UI
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

// Icons
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Visibility from "@mui/icons-material/Visibility";


type User = {
    _id: string,
    name: { first: string, last: string },
    email: string,
    telefone: { primary: string, secound: string },
}

const UsersPages = () => {
    const [usersData, setUsersData] = useState<User[]>([]);

    useEffect(() => {
        const buscarUsuarios = async () => {
            try {
                const result = await MainAPI.get('/users')
                setUsersData(result.data);
            } catch (error) {
                console.error('Houve um erro ao buscar dados dos usuários!', error);
            }
        }

        buscarUsuarios();
    }, []);

    const deleteOneUser = useCallback(async (id: String) => {
        try {
            const result = await MainAPI.delete(`users/remover/${id}`);
            console.log(result);
        } catch (error) {
            console.error('Error ao deletar um usario!', error);
        }
    }, [])

    const rows: GridRowsProp = useMemo(() => usersData.map((user, i) => (
        {
            order: i + 1,
            id: user._id,
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            telefone: user.telefone.primary,
        }
    )),
        [usersData]
    )

    const columns: GridColDef[] = useMemo(() => [
        { field: 'order', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Nome', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'telefone', headerName: 'Telefone', width: 150 },
        {
            field: 'actions',
            headerName: 'Ações',
            width: 150,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <Stack spacing={1} direction="row"  >
                    <IconButton aria-label="view" >
                        <Visibility className="border-1  rounded  text-orange-400" />
                    </IconButton>

                    <IconButton aria-label="update" >
                        <Edit color="primary" className="border-1 rounded " />
                    </IconButton>

                    <IconButton aria-label="delete" >
                        <Delete onClick={() => deleteOneUser(params.row.id)} className="text-red-500 border-1 rounded " />
                    </IconButton>

                </Stack>
            )
        },
    ],
        [deleteOneUser]
    )

    return (
        <>
            <h2 className="text-black">Display all Users hire</h2>

            <div className="w-full p-2 ">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSizeOptions={[5, 10, 20]}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 10, page: 0 } },
                    }}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </div>
        </>
    )
}

export default UsersPages;