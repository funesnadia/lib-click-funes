import { Container } from "@mui/material";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

//pagina principal donde se muestra la lista de productos existentes
const HomePage = () => {
    return (
        <Container className="div-style">
            <ItemListContainer titulo='Productos' />
        </Container>
    )

}

export default HomePage;