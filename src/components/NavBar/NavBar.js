import CartWidget from '../CartWidget/CartWidget';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuPopupState from '../MenuPopupState/MenuPopupState';
import AccountMenu from '../AccountMenu/AccountMenu';

// estilos
import './NavBar.css';

//barra de navegacion
function NavBar() {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate(`/`)
    }

    return (
        <Container className='nav-style'>
            <img src="../imgLib.jpg" onClick={handleLogoClick} alt="logo" />
            <MenuPopupState />
            <CartWidget />
            <AccountMenu />
        </Container >
    );
}

export default NavBar;