import React, {useContext, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CartWidget.css';
import CartContext from '../../context/CartContext';
import { Container, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function CartWidget() {
    const { cartProducts, deleteProduct, amount } = useContext(CartContext)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
        amount() > 0
        &&
        <IconButton aria-label="Agregar al carrito" > 
            <AddShoppingCartIcon onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            />
            <p>{amount()}</p>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'scroll',
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
                <p className='cart'>Carrito de Compras</p>
                <Divider />
                {cartProducts.map( (cartProduct) => {
                    return(
                        <MenuItem key={cartProduct.product.id}>
                            <div>
                                <img src={`./${cartProduct.product.img}`} /> 
                            </div>
                            <div>
                                <p>{cartProduct.product.titulo}</p>
                                <span>$ {cartProduct.product.precio}</span>
                            </div>
                            <div>
                                <DeleteIcon onClick={() => {deleteProduct(cartProduct.product.id)}} />
                            </div>
                        </MenuItem>
                    )
                })}
                <Divider />
                <div>
                    <Button className='btn'><Link to="/cart">Terminar la compra</Link></Button>
                </div>
            </Menu>
        </IconButton>
    );

}