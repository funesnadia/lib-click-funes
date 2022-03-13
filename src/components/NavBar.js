import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
function NavBar() {
    return (

        <header>
            <div>
                <img src="imgLib.jpg" className="img-Header" />
            </div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>Home</Button>
                <Button>Productos</Button>
                <Button>Nosotros</Button>
                <Button>Novedades</Button>
                <Button>Contacto</Button>
            </ButtonGroup>
        </header>
    );

}

export default NavBar;