import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import type { ReactNode } from "react"

type PropsType = {
    cardIcon?: ReactNode,
    cardBG?: String,
    mainText?: String,
    secText?: String,
    opsionalText?: String,
    background?: String,

}

const LittleCard = ({ cardIcon, cardBG, mainText, secText, opsionalText, background, }: PropsType) => {

    return (
        <Card sx={{ minWidth: 150 }} className={`${background}`}>
            <CardContent className="!p-4 ">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <div className={`rounded-full w-10 h-10 flex items-center ${cardBG} justify-center`}>
                        {cardIcon}
                    </div>
                    <div>
                        <Typography className='!text-xl !font-bold !text-gray-600 !mt-1'>{mainText}</Typography>
                        <Typography className='!text-sm !font-bol !text-gray-500 '>{secText}</Typography>
                    </div>
                </Box>
                <Box>
                    <Typography className='!text-sm !font-bol text-gray-500'>{opsionalText}</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default LittleCard