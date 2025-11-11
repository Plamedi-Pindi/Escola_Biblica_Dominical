import { Outlet } from 'react-router-dom'

import MainContainer from './components/mainContainer/MainContainer';
import Main from './components/main/Main';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/MobileSidebar';


const LayoutPage = () => {
    return (
        <MainContainer>
            <Header />
            {/* <Sidebar /> */}
            <Main>
                <Outlet />
            </Main>
        </MainContainer>

    )
}

export default LayoutPage