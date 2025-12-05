
// 
import AppBar from "@mui/material/AppBar"
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

// 
import MenuIcon from "@mui/icons-material/Menu"
import MailIcon from '@mui/icons-material/Mail'
import NotificationIcon from "@mui/icons-material/Notifications"
import { useState } from "react"

// Components
import CustomDiv from "../../../../../components/Div/CustomDiv"
import Sidebar from "../sidebar/MobileSidebar"


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
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
        <header className="w-full pb-14 bg-white md:hidden">
            <AppBar className="!bg-gray-50/60 backdrop-blur-sm !border-b-1 !border-b-gray-300 !shadow-none" >
                <Toolbar>
                    {/* Menu Icon */}
                    <IconButton
                        size="medium"
                        edge="start"
                        color="info"
                        aria-label="menu"
                        sx={{
                            mr: 2,
                            display: {
                                md: 'none'
                            }
                        }}
                        onClick={() => toggleSidebar(true)}
                    >
                        <CustomDiv padding={'p-1'} rounded={'rounded-lg'}  >
                            <MenuIcon className="!w-5 !h-5" />
                        </CustomDiv>
                    </IconButton>

                    <Box sx={{ flexGrow: 1 }} />

                    {/* Mail Icon */}
                    <Box sx={{ display: { xs: 'non', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="info"
                        >
                            <CustomDiv padding={'p-1'} rounded={'rounded-lg'}>
                                <Badge badgeContent={4} color="error">
                                    <MailIcon className="!w-5 !h-5" />
                                </Badge>
                            </CustomDiv>
                        </IconButton>

                        {/* Notification Icon */}
                        <IconButton
                            size="small"
                            color="info"
                            aria-label="show 17 new notifications"
                        >
                            <CustomDiv padding={'p-1'} rounded={'rounded-lg'}>
                                <Badge badgeContent={17} color="error">
                                    <NotificationIcon className="!w-5 !h-5" />
                                </Badge>
                            </CustomDiv>
                        </IconButton>
                    </Box>
 
                    {/* Avatar */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open sittings">
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

export default Header