import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { AddShoppingCart } from '@mui/icons-material';

import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/UserContext';

//para el manejo de usuario 
export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const { user, logout, resetError } = useAuth();

    const navigate = useNavigate();

    const ingresar = () => {
        navigate(`/login`)
    }
    const cerrarSesion = () => {
        logout()
        resetError()
    }
    const misOrdenes = () => {
        navigate(`/orders`)
    }

    useEffect(() => {
        navigate(`/`)
    }, [user])

    return (
        <React.Fragment>
            <Box >
                <Tooltip title="Cuenta de Usuario" >
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}><Avatar /></Avatar>
                        {
                            (user && user.email !== '') &&
                            <p>{user.email}</p>
                        }
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {
                    (!user || user.email == '') &&
                    <MenuItem onClick={ingresar}>
                        <Avatar /> Ingresar
                    </MenuItem>
                }
                {
                    (user && (user.email !== '')) &&
                    <MenuItem onClick={misOrdenes}>
                        <ListItemIcon>
                            <AddShoppingCart fontSize="small" />
                        </ListItemIcon>
                        Mis Ordenes
                    </MenuItem>
                }
                {
                    (user && (user.email !== '')) &&
                    <MenuItem onClick={cerrarSesion}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Cerrar Sesion
                    </MenuItem>
                }
            </Menu>
        </React.Fragment >
    );
}