
import IconButton from "@mui/material/IconButton"
import Visibility from "@mui/icons-material/Visibility"

type PropsType = {
    onClick?: () => void
}
const ViewButton = ({ onClick }: PropsType) => {

    return (
        <IconButton>
            <div
                onClick={onClick}
                className='border-1 border-yellow-200/40 bg-yellow-500/8 rounded-sm h-8 w-9 flex items-center justify-center'
            >
                <Visibility className='text-yellow-400' />
            </div>
        </IconButton>
    )
}

export default ViewButton