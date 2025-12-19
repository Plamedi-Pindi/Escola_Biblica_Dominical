import type React from "react";
import type { ReactNode } from "react"


type CustomFormProps = {
    children: ReactNode,
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
};


const CustomForm = ({ children, onSubmit }: CustomFormProps) => {
    return <form onSubmit={onSubmit}>{children}</form>
}

export default CustomForm