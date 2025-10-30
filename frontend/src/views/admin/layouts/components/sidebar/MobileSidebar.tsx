
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

import { useState, type MouseEventHandler } from "react"


type SidebarProps = {
    onClick?: MouseEventHandler
}

const MobileSidebar = ({ onClick }: SidebarProps) => {
    const [openSecretaria, setOpenSecretaria] = useState(false);

    const handleSecretariaClick = () => {
        setOpenSecretaria(!openSecretaria);
    }

    return (
        <Box
            sx={{
                width: '19rem'
            }}
            onClick={onClick}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton>
                    <Avatar />
                </IconButton>

                <Typography color="info">Slogm</Typography>
            </Box>

            <Divider />

            <nav aria-label="">
                <List>
                    {/* <ListItem sx={{ display: "block" }}> */}
                    <ListItemButton>
                        <ListItemIcon>
                            <GridView />
                        </ListItemIcon>
                        <Ancora to={'/newuser'}>
                            <ListItemText primary="Home" />
                        </Ancora>
                    </ListItemButton>

                    <ListItemButton onClick={handleSecretariaClick}>
                        <ListItemIcon>
                            <GridView />
                        </ListItemIcon>
                        <Ancora to={'/allusers'}>
                            <ListItemText primary="Secretaria" />
                        </Ancora>
                        {openSecretaria ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openSecretaria} timeout={"auto"} unmountOnExit>
                        <List >
                            <ListItem >
                                <ListItemButton>
                                    <ListItemText primary="Teste 1" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Collapse>
                    {/* </ListItem> */}
                </List>
            </nav>

        </Box>
    )
}

export default MobileSidebar