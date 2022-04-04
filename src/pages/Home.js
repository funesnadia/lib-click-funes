import { Container } from "@mui/material";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
// import '/Page.css';

const HomePage =  () => {
    return(
        <Container className="div-style">
            <ItemListContainer titulo='Productos' />
        </Container>
    )

}

export default HomePage;