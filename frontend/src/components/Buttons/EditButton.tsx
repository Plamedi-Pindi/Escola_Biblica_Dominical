import IconButton from "@mui/material/IconButton"
import EditIcon from "@mui/icons-material/Edit"

type PropsType = {
    onClick?: () => void
}
const EditButton = ({ onClick }: PropsType) => {
    return (
        <IconButton >
            <div
                onClick={onClick}
                className='border-1 border-blue-200/40 bg-blue-500/8 rounded-sm h-8 w-9 flex items-center justify-center'
            >
                <EditIcon className='text-blue-400' />
            </div>
        </IconButton>
    )
}

export default EditButton