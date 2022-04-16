import { Container } from "@mui/material";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//db
import db from "../firebase";
import { doc, getDoc} from 'firebase/firestore'

const DetailPage =  () => {
    const {id} = useParams();
    const [product, setProduct] = useState({})

    const filterProduct = async () => {
        const docRef = doc (db, 'products',id)
        const docSnap = await getDoc(docRef)
        let prod= docSnap.data()
        prod.id = docSnap.id
        setProduct(prod)
    }

    useEffect( () => {
        filterProduct()
    }, [id])

    return(
        <Container className="div-style">
            <ItemDetail data={product} />
        </Container>
    )

}

export default DetailPage;