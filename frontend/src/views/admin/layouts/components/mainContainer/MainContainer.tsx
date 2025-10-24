import type { ReactNode } from "react"

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer = ({children}: MainContainerProps) => {

    return (
        <div className="bg-[#FAFBFF] h-[100dvh] ">
            {children}
        </div>
    )
}

export default MainContainer