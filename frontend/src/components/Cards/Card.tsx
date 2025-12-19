import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import type { ReactNode } from "react"

type PropsType = {
    cardIcon?: ReactNode,
    optionalIcon?: ReactNode,
    cardBG?: String,
    mainText?: String,
    secText?: String,
    opsionalText?: String,
    background?: String,
    height?: String,
    width?: String,
    style?: String,
    purcentage?: String,
    status?: String,
}

const CardCompont = ({
    cardIcon,
    cardBG,
    mainText,
    secText,
    opsionalText,
    background,
    width,
    height,
    style,
    optionalIcon,
    purcentage,
    status,

}: PropsType) => {

    return (
        <Card className={`${background} ${width} ${height} ${style} `}>
            <CardContent className="!p-4 ">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                    <div>
                        <Typography className='!text-2xl !font-bold !text-gray-700 !mt-1'>{mainText}</Typography>
                        <Typography className='!text-sm !font-bol !text-gray-600 '>{secText}</Typography>
                    </div>
                    <div className={`rounded-full w-11 h-11 flex items-center ${cardBG} justify-center`}>
                        {cardIcon}
                    </div>
                </Box>
                <div className="flex pt-2 items-center gap-2" >
                    <div className={` text-xs  flex items-center ${status} `} >
                        {optionalIcon}
                        <p>{purcentage}</p>
                    </div>
                    <Typography className='!text-xs !font-bol text-gray-500'>{opsionalText}</Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardCompont