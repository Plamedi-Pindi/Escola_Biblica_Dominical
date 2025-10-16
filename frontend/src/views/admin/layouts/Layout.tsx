import { Outlet, Link } from 'react-router-dom'

import MainContainer from './components/mainContainer/MainContainer';
import Main from './components/main/Main';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';


const LayoutPage = () => {
    return (
        <MainContainer>
            <Header />
            <Sidebar>
                <ul>
                    <li className='text-blue-500'><Link to={'/newuser'}> Register Users </Link></li>
                    <li className='text-blue-500'><Link to={'/allusers'}> All Users </Link></li>
                </ul>
            </Sidebar>
            <Main>
                <Outlet />
            </Main>
        </MainContainer>

    )
}

export default LayoutPage