import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CartWidget from '../CartWidget/CartWidget';
function NavBar() {
    return (

        <header>
            <div>
                <img src="imgLib.jpg" className="img-Header" />
            </div>
            <ButtonGroup variant="contained">
                <Button >Home</Button>
                <Button >Productos</Button>
                <Button >Nosotros</Button>
                <Button >Novedades</Button>
                <Button >Contacto</Button>
            </ButtonGroup>
            <CartWidget/>
            
        </header>
    );

}

export default NavBar;