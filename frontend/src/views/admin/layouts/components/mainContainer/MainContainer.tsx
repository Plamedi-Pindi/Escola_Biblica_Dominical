import type { ReactNode } from "react"

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer = ({children}: MainContainerProps) => {

    return (
        <div className="  h-[100dvh] md:flex ">
            {children}
        </div>
    )
}

export default MainContainer


// bg-[#FAFBFF]