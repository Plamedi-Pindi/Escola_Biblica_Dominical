
import { Link as Ancora } from "react-router-dom"

import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"

// 
import GridView from '@mui/icons-material/GridView'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import CloseIcon from '@mui/icons-material/Close';
import SupervisorIcon from '@mui/icons-material/SupervisorAccountOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';

import { type MouseEventHandler } from "react"

import { useSidebarContext } from "../../../../../contexts/sidebar/SidebarContext"


type SidebarProps = {
    onClick?: MouseEventHandler,
    closeSidebar?: MouseEventHandler
}

const MobileSidebar = ({ onClick, closeSidebar }: SidebarProps) => {

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
        <Box sx={{ width: '19rem' }} onClick={onClick} >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
                <IconButton>
                    <Avatar  />
                </IconButton>
                <Typography color="info">EBD Sião</Typography>
                <IconButton onClick={closeSidebar}>
                    <CloseIcon />
                </IconButton>
            </Box>

            {/* Divisor */}
            <Divider />

            {/* Nav */}
            <nav aria-label="">
                <List>
                    {/* Home */}
                    <ListItemButton >
                        <ListItemIcon sx={{ minWidth: 35 }}>
                            <GridView className="!text-xl" color="info" />
                        </ListItemIcon>
                        <Ancora to={'/'}>
                            <ListItemText
                                primary="Home"
                                slotProps={{ primary: { sx: { fontSize: 16 } } }}
                            />
                        </Ancora>
                    </ListItemButton>

                    {/* Admin */}
                    <ListItemButton onClick={handleAdministracaoClick}>
                        <ListItemIcon sx={{ minWidth: 35 }}>
                            <AdminPanelSettingsOutlinedIcon className="!text-2xl" color="info" />
                        </ListItemIcon>
                        <ListItemText primary="Coordenação Geral" />

                        {openCoordenation ? <ExpandLess color="info" /> : <ExpandMore color="info" />}
                    </ListItemButton>
                    <Collapse in={openCoordenation} timeout={"auto"} unmountOnExit>
                        <List className="!p-0  " >
                            <Box component={'div'} className="border-l ml-7">
                                {/* items */}
                                <ItemForList route={'/allusers'} title={'Lista de Usuários'} onClick={closeSidebar} />
                                <ItemForList route={'/newuser'} title={'Lista de Professores'} onClick={closeSidebar} />
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} onClick={closeSidebar} />
                            </Box>

                            {/* Sub-Item para  Dados Estatístico  */}
                            <SublistItems title='Dados estatístico' margin={'ml-[1.45rem] mt-4'} />
                            <Box component={'div'} className="border-l ml-7 -mt-1 pt-4">
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} onClick={closeSidebar} />
                            </Box>
                        </List>
                    </Collapse>

                    {/* Secretary */}
                    <ListItemButton onClick={handleSecretariaClick}>
                        <ListItemIcon sx={{ minWidth: 35 }}>
                            <SupervisorIcon className="!text-2xl" color="info" />
                        </ListItemIcon>
                        <ListItemText primary="Secretaria" />

                        {openSecretaria ? <ExpandLess color="info" /> : <ExpandMore color="info" />}
                    </ListItemButton>
                    <Collapse in={openSecretaria} timeout={"auto"} unmountOnExit>
                        <List className="!p-0  " >
                            <Box component={'div'} className="border-l ml-7">
                                {/* items */}
                                <ItemForList route={'/allusers'} title={'Lista de Usuários'} onClick={closeSidebar} />
                                <ItemForList route={'/professores'} title={'Lista de Professores'} onClick={closeSidebar} />
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} onClick={closeSidebar} />
                            </Box>

                            {/* Sub-Item para  Dados Estatístico  */}
                            <SublistItems title='Dados estatístico' margin={'ml-[1.45rem] mt-4'} />
                            <Box component={'div'} className="border-l ml-7 -mt-1 pt-4">
                                <ItemForList route={''} title={'Dados de Alunos'} onClick={closeSidebar} />
                                <ItemForList route={''} title={'Dados de Professores'} onClick={closeSidebar} />
                            </Box>

                            {/* Sub-Item para Novos Dados  */}
                            <SublistItems title='Novos Dados' margin={'ml-[1.45rem] mt-4'} />
                            <Box component={'div'} className="border-l ml-7 -mt-1 pt-4">
                                <ItemForList route={'/newuser'} title={'Cadastrar Usuário'} onClick={closeSidebar} />
                                <ItemForList route={'/newProfesser'} title={'Cadastrar Professor'} onClick={closeSidebar} />
                            </Box>
                        </List>
                    </Collapse>

                    {/* Pedagogy */}
                    <ListItemButton onClick={handlePedagogiaClick}>
                        <ListItemIcon sx={{ minWidth: 35 }}>
                            <SchoolOutlinedIcon className="!text-2xl" color="info" />
                        </ListItemIcon>
                        <ListItemText primary="Pedagogia" />

                        {openPedagogia ? <ExpandLess color="info" /> : <ExpandMore color="info" />}
                    </ListItemButton>
                    <Collapse in={openPedagogia} timeout={"auto"} unmountOnExit>
                        <List className="!p-0  " >
                            <Box component={'div'} className="border-l ml-7">
                                {/* items */}
                                <ItemForList route={'/allusers'} title={'Lista de Usuários'} onClick={closeSidebar} />
                                <ItemForList route={'/newuser'} title={'Lista de Professores'} onClick={closeSidebar} />
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} onClick={closeSidebar} />
                            </Box>

                            {/* Sub-Item para  Dados Estatístico  */}
                            <SublistItems title='Dados estatístico' margin={'ml-[1.45rem] mt-4'} />
                            <Box component={'div'} className="border-l ml-7 -mt-1 pt-4">
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} onClick={closeSidebar} />
                            </Box>
                        </List>
                    </Collapse>

                    {/* Tesouraria */}
                    <ListItemButton onClick={handleTesourariaClick}>
                        <ListItemIcon sx={{ minWidth: 35 }}>
                            <MonetizationOnOutlinedIcon className="!text-2xl" color="info" />
                        </ListItemIcon>
                        <ListItemText primary="Tesouraria" />

                        {openTesouraria ? <ExpandLess color="info" /> : <ExpandMore color="info" />}
                    </ListItemButton>
                    <Collapse in={openTesouraria} timeout={"auto"} unmountOnExit>
                        <List className="!p-0  " >
                            <Box component={'div'} className="border-l ml-7">
                                {/* items */}
                                <ItemForList route={'/allusers'} title={'Lista de Usuários'} onClick={closeSidebar} />
                                <ItemForList route={'/newuser'} title={'Lista de Professores'} onClick={closeSidebar} />
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} onClick={closeSidebar} />
                            </Box>

                            {/* Sub-Item para  Dados Estatístico  */}
                            <SublistItems title='Dados estatístico' margin={'ml-[1.45rem] mt-4'} />
                            <Box component={'div'} className="border-l ml-7 -mt-1 pt-4">
                                <ItemForList route={''} title={'Dados de Alunos'} onClick={closeSidebar} />
                                <ItemForList route={''} title={'Dados de Professores'} onClick={closeSidebar} />
                            </Box>

                        </List>
                    </Collapse>

                    {/* Library */}
                    <ListItemButton onClick={handleLivrariaClick}>
                        <ListItemIcon sx={{ minWidth: 35 }}>
                            <AutoStoriesOutlinedIcon className="!text-2xl" color="info" />
                        </ListItemIcon>
                        <ListItemText primary="Livraria" />

                        {openLivraria ? <ExpandLess color="info" /> : <ExpandMore color="info" />}
                    </ListItemButton>
                    <Collapse in={openLivraria} timeout={"auto"} unmountOnExit>
                        <List className="!p-0  " >
                            <Box component={'div'} className="border-l ml-7">
                                {/* items */}
                                <ItemForList route={'/allusers'} title={'Lista de Usuários'} onClick={closeSidebar} />
                                <ItemForList route={'/newuser'} title={'Lista de Professores'} onClick={closeSidebar} />
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} onClick={closeSidebar} />
                            </Box>

                            {/* Sub-Item para  Dados Estatístico  */}
                            <SublistItems title='Dados estatístico' margin={'ml-[1.45rem] mt-4'} />
                            <Box component={'div'} className="border-l ml-7 -mt-1 pt-4">
                                <ItemForList route={'/newuser'} title={'Lista de Alunos'} onClick={closeSidebar} />
                            </Box>
                        </List>
                    </Collapse>
                </List>
            </nav>

        </Box>
    )
}

export default MobileSidebar

type SublistItems = {
    display?: String
    title: String,
    margin?: String
}
const SublistItems = ({ display, title, margin }: SublistItems) => {
    return (
        <div className={`${display} ${margin} flex items-center`}>
            <SquareRoundedIcon className="!text-xs" />
            <Typography className="!text-xs uppercase !ml-6 !font-bold">{title}</Typography>
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
                            primary: { sx: { fontSize: 15 } }
                        }}
                    />
                </Ancora>
            </ListItemButton>
        </ListItem>
    )
}