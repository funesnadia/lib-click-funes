import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { Link } from 'react-router-dom';

import './MenuPopupState.css'

//Menu de fucnionalidades principales
export default function MenuPopupState() {
    return (
        <PopupState variant='popper' popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment >
                    <Button >
                        <Link to={'/'}>Home</Link>
                    </Button>
                    <Button className='submenu-style' variant="text" {...bindTrigger(popupState)} >Productos
                    </Button>
                    <Menu {...bindMenu(popupState)} >
                        <MenuItem onClick={popupState.close} className='submenu-style'>
                            <Link to={'/categoria/Utiles'}>Utiles</Link>
                        </MenuItem>
                        <MenuItem onClick={popupState.close} className='submenu-style'>
                            <Link to={'/categoria/Arte'}>Arte</Link>
                        </MenuItem>
                        <MenuItem onClick={popupState.close} className='submenu-style'>
                            <Link to={'/categoria/Papeleria'}>Papeleria</Link>
                        </MenuItem>
                    </Menu>
                    <Button className='group-style'>
                        <Link to={'/us'}>Nosotros</Link>
                    </Button>
                    <Button className='group-style'>
                        <Link to={'/news'}>Novedades</Link>
                    </Button>
                    <Button className='group-style'>
                        <Link to={'/contact'}>Contacto</Link>
                    </Button>
                </React.Fragment>
            )}
        </PopupState>
    );
}