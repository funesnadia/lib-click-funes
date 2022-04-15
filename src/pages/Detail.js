import { Container } from "@mui/material";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//db
import db from "../firebase";
import { collection, getDocs} from 'firebase/firestore'

const DetailPage =  () => {
    const {id} = useParams();
    const [product, setProduct] = useState({})

    const filterProduct = async (id) => {
        const itemsCollection = collection(db, 'products')
        const productosSnapshot = await getDocs(itemsCollection)
        const product = productosSnapshot.docs.find(doc => doc.id === id)
        let prod= product.data()
        prod.id = product.id
        setProduct(prod)
    }

    useEffect( () => {
        filterProduct(id)
    }, [id])

    return(
        <Container className="div-style">
            <ItemDetail data={product} />
        </Container>
    )

}

export default DetailPage;