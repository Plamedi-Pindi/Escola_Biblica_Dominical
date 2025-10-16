import type { ReactNode } from "react"

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer = ({children}: MainContainerProps) => {

    return (
        <div className="bg-gray-100 h-[100dvh] ">
            {children}
        </div>
    )
}

export default MainContainer