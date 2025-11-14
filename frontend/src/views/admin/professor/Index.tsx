import {
    DataGrid,
    type GridRowsProp,
    type GridColDef

} from '@mui/x-data-grid';


const rows: GridRowsProp = [
    { id: 1, name: 'Plamedi Pindi', email: 'plamedipindi@gamil.com' },
    { id: 2, name: 'Doglas Piter', email: 'doglas@gmail.com' },
    { id: 3, name: 'Carlos Lopes', email: 'carlos@gmail.com' }
]

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Nome', width: 200 },
    { field: 'email', headerName: 'Email', width: 300 }
]

const ProfessorPage = () => {
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