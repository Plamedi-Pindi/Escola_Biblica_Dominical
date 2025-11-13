import { Outlet } from 'react-router-dom'

import MainContainer from './components/mainContainer/MainContainer';
import Main from './components/main/Main';
import Header from './components/header/Header';
import DesktopSidebar from './components/sidebar/DesktopSidebar';
import Box from '@mui/material/Box';

import { useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import { useHeaderContext } from '../../../contexts/header/HeaderContext';
import DeskHeader from './components/header/DeskHeader';



const LayoutPage = () => {
    const [openDkSidebar, handleDrawerOpen, handleDrawerClose] = useHeaderContext();

    return (
        <MainContainer>
            {/* <Box sx={{ display: 'flex' }}> */}
                <CssBaseline />
                <Header/>

                <DeskHeader
                    handleDrawerOpen={handleDrawerOpen}
                    openDesktopSidebar={openDkSidebar}
                />

                <DesktopSidebar
                    handleDrawerClose={handleDrawerClose}
                    handleDrawerOpen={handleDrawerOpen}
                    open={openDkSidebar}
                />

                <Main>
                    <Outlet />
                </Main>

            {/* </Box> */}
        </MainContainer>

    )
}

export default LayoutPage