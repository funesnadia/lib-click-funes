import CartWidget from '../CartWidget/CartWidget';
import { useNavigate} from 'react-router-dom';

import MenuPopupState from '../MenuPopupState/MenuPopupState';

// estilos
import './NavBar.css';
import { Container } from '@mui/material';

function NavBar() {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate(`/`)
    }
    return (
        <Container className='nav-style'>
                <img src="../imgLib.jpg" onClick={handleLogoClick} />
            <MenuPopupState />
            <CartWidget />
        </Container>
    );

}

export default NavBar;