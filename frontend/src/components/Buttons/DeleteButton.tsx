import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete"

type PropsType = {
    onClick?: () => void
}
const DeleteButton = ({onClick}: PropsType) => {
    return (
        <IconButton>
            <div
                onClick={onClick}
                className='border-1 border-red-200/40 bg-red-500/8 rounded-sm h-8 w-9 flex items-center justify-center'
            >
                <DeleteIcon className='text-red-400' />
            </div>
        </IconButton>
    )
}

export default DeleteButton