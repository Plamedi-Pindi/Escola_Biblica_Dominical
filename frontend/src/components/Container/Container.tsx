import type { ReactNode } from "react";

type CustomContainerType = {
    children: ReactNode,
    style?: string
}

const CustomContainer = ({ children, style }: CustomContainerType) => {
    return (
        <div className={`${style}`}>
            {children}
        </div>
    )
}

export default CustomContainer;