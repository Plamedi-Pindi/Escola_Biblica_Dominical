
import { styled, useTheme, type Theme, type CSSObject } from '@mui/material/styles';
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

// Icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GridView from '@mui/icons-material/GridView'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import SupervisorIcon from '@mui/icons-material/SupervisorAccountOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';

import { useState, type MouseEventHandler, } from "react";
import { Link as Ancora } from "react-router-dom"
import { useSidebarContext } from '../../../../../contexts/sidebar/SidebarContext';



// 
const drawerWidth = 240;

// 
const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

// 
const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

// 
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    height: 32,        // altura fixa (px)
    minHeight: 51,     // garante que não seja sobrescrito

}))

// 
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);


type DesktopSidebarType = {
    handleDrawerOpen: MouseEventHandler,
    handleDrawerClose: MouseEventHandler
    open: boolean
}

const DesktopSidebar = ({ handleDrawerClose, handleDrawerOpen, open }: DesktopSidebarType) => {
    const theme = useTheme();

    const [
        handleAdministracaoClick,
        handleLivrariaClick,
        handlePedagogiaClick,
        handleSecretariaClick,
        handleTesourariaClick,
        openSecretaria,
        openCoordenation,
        openPedagogia,
        openTesouraria,
        openLivraria,
    ] = useSidebarContext();


    return (
        <Drawer variant="permanent" open={open} sx={{ display: { xs: 'none', md: 'block' } }}>
            <DrawerHeader sx={{ height: 14, }}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>

            <Divider />

            <nav className=''>
                <List>
                    {/* Home */}
                    <ListItemButton >
                        <ListItemIcon sx={{ minWidth: 35 }}>
                            <GridView className="!text-xl" color="info" />
                        </ListItemIcon>
                        <Ancora to={'/'}>
                            <ListItemText
                                primary="Home"
                                slotProps={{ primary: { sx: { fontSize: '0.875rem', fontWeight: 'bold' } } }}
                            />
                        </Ancora>
                    </ListItemButton>

                    {/* Admin */}
                    <ListItemButton onClick={handleAdministracaoClick}>
                        <ListItemIcon sx={{ minWidth: 35 }}>
                            <AdminPanelSettingsOutlinedIcon className="!text-2xl" color="info" />
                        </ListItemIcon>
                        <ListItemText primary="Coordenação Geral"
                            slotProps={{ primary: { sx: { fontSize: '0.875rem', fontWeight: 'bold' } } }}
                        />

                        {openSecretaria ? <ExpandLess color="info" /> : <ExpandMore color="info" />}
                    </ListItemButton>
                    <Collapse in={openCoordenation} timeout={"auto"} unmountOnExit>
                        <List className="!p-0  " >
                            <Box component={'div'} className="border-l border-gray-200 ml-7">
                                {/* items */}
                                <ItemForList route={'/allusers'} title={'Lista de Usuários'} />
                                <ItemForList route={'/newuser'} title={'Lista de Professores'} />
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} />
                            </Box>

                            {/* Sub-Item para  Dados Estatístico  */}
                            <SublistItems title='Dados estatístico' margin={' mt-4'} />
                            <Box component={'div'} className="border-l border-gray-200 ml-7 -mt-1 pt-4">
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} />
                            </Box>
                        </List>
                    </Collapse>

                    {/* Secretary */}
                    <ListItemButton onClick={handleSecretariaClick}>
                        <ListItemIcon sx={{ minWidth: 35 }}>
                            <SupervisorIcon className="!text-2xl" color="info" />
                        </ListItemIcon>
                        <ListItemText primary="Secretaria"
                            slotProps={{ primary: { sx: { fontSize: '0.875rem', fontWeight: 'bold' } } }}
                        />

                        {openSecretaria ? <ExpandLess color="info" /> : <ExpandMore color="info" />}
                    </ListItemButton>
                    <Collapse in={openSecretaria} timeout={"auto"} unmountOnExit>
                        <List className="!p-0  " >
                            <Box component={'div'} className="border-l border-gray-200 ml-7">
                                {/* items */}
                                <ItemForList route={'/allusers'} title={'Lista de Usuários'} />
                                <ItemForList route={'/professores'} title={'Lista de Professores'} />
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} />
                            </Box>

                            {/* Sub-Item para  Dados Estatístico  */}
                            <SublistItems title='Dados estatístico' margin={' mt-4'} />
                            <Box component={'div'} className="border-l border-gray-200 ml-7 -mt-1 pt-4">
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} />
                            </Box>

                            {/* Sub-Item para Novos Dados  */}
                            <SublistItems title='Novos Dados' margin={' mt-4'} />
                            <Box component={'div'} className="border-l border-gray-200 ml-7 -mt-1 pt-4">
                                <ItemForList route={'/newuser'} title={'Cadastrar Usuário'} />
                                <ItemForList route={'/newProfesser'} title={'Cadastrar Professor'} />
                            </Box>
                        </List>
                    </Collapse>

                    {/* Pedagogy */}
                    <ListItemButton onClick={handlePedagogiaClick}>
                        <ListItemIcon sx={{ minWidth: 35 }}>
                            <SchoolOutlinedIcon className="!text-2xl" color="info" />
                        </ListItemIcon>
                        <ListItemText primary="Pedagogia"
                            slotProps={{ primary: { sx: { fontSize: '0.875rem', fontWeight: 'bold' } } }}
                        />

                        {openSecretaria ? <ExpandLess color="info" /> : <ExpandMore color="info" />}
                    </ListItemButton>
                    <Collapse in={openPedagogia} timeout={"auto"} unmountOnExit>
                        <List className="!p-0  " >
                            <Box component={'div'} className="border-l border-gray-200 ml-7">
                                {/* items */}
                                <ItemForList route={'/allusers'} title={'Lista de Usuários'} />
                                <ItemForList route={'/newuser'} title={'Lista de Professores'} />
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} />
                            </Box>

                            {/* Sub-Item para  Dados Estatístico  */}
                            <SublistItems title='Dados estatístico' margin={' mt-4'} />
                            <Box component={'div'} className="border-l border-gray-200 ml-7 -mt-1 pt-4">
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} />
                            </Box>
                        </List>
                    </Collapse>

                    {/* Tesouraria */}
                    <ListItemButton onClick={handleTesourariaClick}>
                        <ListItemIcon sx={{ minWidth: 35 }}>
                            <MonetizationOnOutlinedIcon className="!text-2xl" color="info" />
                        </ListItemIcon>
                        <ListItemText primary="Tesouraria"
                            slotProps={{ primary: { sx: { fontSize: '0.875rem', fontWeight: 'bold' } } }}
                        />

                        {openSecretaria ? <ExpandLess color="info" /> : <ExpandMore color="info" />}
                    </ListItemButton>
                    <Collapse in={openTesouraria} timeout={"auto"} unmountOnExit>
                        <List className="!p-0  " >
                            <Box component={'div'} className="border-l border-gray-200 ml-7">
                                {/* items */}
                                <ItemForList route={'/allusers'} title={'Lista de Usuários'} />
                                <ItemForList route={'/newuser'} title={'Lista de Professores'} />
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} />
                            </Box>

                            {/* Sub-Item para  Dados Estatístico  */}
                            <SublistItems title='Dados estatístico' margin={' mt-4'} />
                            <Box component={'div'} className="border-l border-gray-200 ml-7 -mt-1 pt-4">
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} />
                            </Box>

                        </List>
                    </Collapse>

                    {/* Library */}
                    <ListItemButton onClick={handleLivrariaClick}>
                        <ListItemIcon sx={{ minWidth: 35 }}>
                            <AutoStoriesOutlinedIcon className="!text-2xl" color="info" />
                        </ListItemIcon>
                        <ListItemText primary="Livraria"
                            slotProps={{ primary: { sx: { fontSize: '0.875rem', fontWeight: 'bold' } } }}
                        />

                        {openSecretaria ? <ExpandLess color="info" /> : <ExpandMore color="info" />}
                    </ListItemButton>
                    <Collapse in={openLivraria} timeout={"auto"} unmountOnExit>
                        <List className="!p-0  " >
                            <Box component={'div'} className="border-l border-gray-200 ml-7">
                                {/* items */}
                                <ItemForList route={'/allusers'} title={'Lista de Usuários'} />
                                <ItemForList route={'/newuser'} title={'Lista de Professores'} />
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} />
                            </Box>

                            {/* Sub-Item para  Dados Estatístico  */}
                            <SublistItems title='Dados estatístico' margin={' mt-4'} />
                            <Box component={'div'} className="border-l border-gray-200 ml-7 -mt-1 pt-4">
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} />
                            </Box>
                        </List>
                    </Collapse>
                </List>
            </nav>


        </Drawer>

    )
}

export default DesktopSidebar


type SublistItems = {
    display?: String
    title: String,
    margin?: String
}
const SublistItems = ({ display, title, margin }: SublistItems) => {
    return (
        <div className={`${display} ${margin} flex items-center ml-[1.56rem]`}>
            <SquareRoundedIcon className="!text-[0.56rem] text-gray-200" />
            <Typography className="!text-[10px] uppercase !ml-6 !font-bold">{title}</Typography>
        </div>
    )
}


// 
type ItemForListType = {
    route: String,
    title: String
    onClick?: MouseEventHandler
}

const ItemForList = ({ title, route, onClick }: ItemForListType) => {
    return (
        <ListItem className="!pt-0 !pb-0 ">
            <ListItemButton className="!pb-0 !pt-0" onClick={onClick}>
                <Ancora to={`${route}`}>
                    <ListItemText
                        primary={title}
                        slotProps={{
                            primary: { sx: { fontSize: 14 } }
                        }}
                    />
                </Ancora>
            </ListItemButton>
        </ListItem>
    )
}