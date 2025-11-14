
// 
// import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Badge from "@mui/material/Badge"
import Avatar from "@mui/material/Avatar"
import Tooltip from "@mui/material/Tooltip"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Drawer from "@mui/material/Drawer"
import MuiAppBar, { type AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

// 
import MenuIcon from "@mui/icons-material/Menu"
import MailIcon from '@mui/icons-material/Mail'
import NotificationIcon from "@mui/icons-material/Notifications"
import { useState, type MouseEventHandler } from "react"

// Components
import CustomDiv from "../../../../../components/Div/CustomDiv"
import Sidebar from "../sidebar/MobileSidebar"


// 
interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const drawerWidth = 240; //

// 
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));



// 
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


type HeaderType = {
    handleDrawerOpen: MouseEventHandler,
    openDesktopSidebar: boolean
}
const DesHeader = ({ handleDrawerOpen, openDesktopSidebar }: HeaderType) => {
    const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null) //
    const [openSidbar, setOpenSidebar] = useState(false); // 


    // 
    const toggleSidebar = (newOpen: boolean) => {
        setOpenSidebar(newOpen);
    }

    // 
    const handleOpenUserMenu = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(e.currentTarget);
    };

    // 
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <header className=" bg-white hidden md:block   ">
            <AppBar
                open={openDesktopSidebar}
                position="fixed"
                className="!bg-gray-50/30 backdrop-blur-sm h-13 !border-b-1 !border-b-gray-300 !shadow-none !flex justify-center"
            >
                <Toolbar className="">
                    {/* Menu Icon */}
                    <IconButton
                        color="inherit"
                        aria-label="Abrir definições"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                marginRight: 5,
                            },
                            openDesktopSidebar && { display: { md: 'none' } },
                        ]}
                    >
                        <MenuIcon color="info" />
                    </IconButton>

                    {/* Logo */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                        color="info"
                    >
                        MUI
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box >
                        {/* Mail Icon */}
                        <Tooltip title="Mensagens">
                            <IconButton
                                size="large"
                                aria-label="show 4 new mails"
                                color="info"
                            >
                                <CustomDiv padding={'p-1'} rounded={'rounded-lg'}>
                                    <Badge
                                        badgeContent={4}
                                        color="error"
                                        sx={{
                                            '& .MuiBadge-badge': {
                                                fontSize: '0.6rem', // tamanho do texto
                                                height: '16px',     // altura do badge
                                                minWidth: '16px',   // largura mínima
                                                padding: '0 4px',   // espaço interno
                                            },
                                        }}
                                    >
                                        <MailIcon className="!w-4 !h-4" />
                                    </Badge>
                                </CustomDiv>
                            </IconButton>
                        </Tooltip>

                        {/* Notification Icon */}
                        <Tooltip title="Notificações">
                            <IconButton
                                size="small"
                                color="info"
                                aria-label="show 17 new notifications"
                            >
                                <CustomDiv padding={'p-1'} rounded={'rounded-lg'}>
                                    <Badge
                                        badgeContent={17}
                                        color="error"
                                        sx={{
                                            '& .MuiBadge-badge': {
                                                fontSize: '0.6rem', // tamanho do texto
                                                height: '16px',     // altura do badge
                                                minWidth: '16px',   // largura mínima
                                                padding: '0 4px',   // espaço interno
                                            },
                                        }}
                                    >
                                        <NotificationIcon className="!w-4 !h-4" />
                                    </Badge>
                                </CustomDiv>
                            </IconButton>
                        </Tooltip>
                    </Box>

                    {/* Avatar */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Abrir definições">
                            <IconButton
                                color="inherit"
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                onClick={handleOpenUserMenu}
                            >
                                <Avatar className="!w-8 !h-8" src="/user.jpeg" />
                            </IconButton>
                        </Tooltip>
                    </Box>

                    {/* Menu */}
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem>
                                <Typography>{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>

            {/* Sidebar Section */}
            <Drawer open={openSidbar} onClose={() => toggleSidebar(false)}>
                <Sidebar closeSidebar={() => toggleSidebar(false)} />
            </Drawer>
        </header>
    )
}

export default DesHeader