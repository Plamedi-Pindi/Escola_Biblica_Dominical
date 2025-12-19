import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import { useRef, useEffect } from "react";

type PropsType = {
    message?: string,
    status?: boolean,
    type?: string
}

const AlertMessage = ({ message, status, type }: PropsType) => {
    const alertRef = useRef(null);
    useEffect(() => {
        const divElem = alertRef.current;
        if (divElem) {
            
        }
    }, []);

    return (
        <div
            ref={alertRef}
            className={`
                ${status ? 'block' : 'hidden'} 
                ${type === 'success'
                    ? 'bg-green-600/94'
                    : type === 'error'
                        ? 'bg-red-500/90'
                        : 'bg-yellow-500/97'} 
                min-h-12 w-full   rounded-lg fixed top-15 left-0 z-[100] p-3 pl-6 text-gray-50 text-sm flex items-center gap-3`}
        >
            {type === 'sucess'
                ? (
                    <CheckCircleIcon className='!w-7 !h-7' />
                )
                : type === 'error'
                    ? (
                        <ErrorIcon className='!w-7 !h-7 text-red-200' />
                    )
                    : (
                        <WarningIcon className='!w-7 !h-7 text-yellow-50' />
                    )
            }
            <p>{message}</p>
        </div>
    )
}

export default AlertMessage