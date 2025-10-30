import type { MouseEventHandler, ReactNode } from "react"

type Props = {
    padding?: String,
    margin?: String,
    rounded?: String,
    width?: String,
    height?: String,
    children?: ReactNode
    onClick?: MouseEventHandler<HTMLDivElement>
}

const CustomDiv = ({ padding, margin, rounded, children, width, height, onClick }: Props) => {
    return (
        <div
            onClick={onClick}
            className={`border-1 border-gray-300 flex items-center  justify-center shadow ${padding} ${margin} ${rounded} ${width} ${height}  `}
        >
            {children}
        </div>
    )
}

export default CustomDiv