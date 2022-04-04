import { Container } from "@mui/material";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import mockProducts from "../Utils/mockProducts";

const DetailPage =  () => {
    const {id} = useParams();
    const [product, setProduct] = useState({})

    useEffect( () => {
        filterProduct(mockProducts, id)
    }, [id])

    const filterProduct= (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    } 

    return(
        <Container className="div-style">
            <ItemDetail data={product} />
        </Container>
    )

}

export default DetailPage;