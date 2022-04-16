
import { useContext, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from "../context/CartContext";
import { Link } from 'react-router-dom';
import ModalCustom from '../components/Modal/Modal';
import db from '../firebase';
import { collection, addDoc} from 'firebase/firestore'


const CartPage = () => {
    const { cartProducts, deleteProduct, resetProducts, totAmount, amount } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    })
    const [order, setOrder] = useState(
        {
            buyer: formData,
            items: cartProducts.map((cartProduct) => {
                return {
                    id: cartProduct.product.id,
                    title: cartProduct.product.titulo,
                    price: cartProduct.product.precio
                }
            }),
            total: totAmount
        }
    )
    const [successOrder, setSuccessOrder] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevOrder = {
            ...order,
            buyer: formData
        }
        setOrder({
            ...order,
            buyer: formData
        })
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        console.log("prevOrder", prevOrder)
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccessOrder(orderDoc.id)

    }

    const handleChange = (e) => {
        const { value, name } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }


    return (
        <div>
            {
                (cartProducts.length === 0)
                &&
                <div>
                    <h2>No hay items en tu carrito...</h2>
                    <Link to='/'>
                        <button className='button-style'>Continuar comprando</button>
                    </Link>
                </div>
            }
            {
                (cartProducts.length !== 0) &&
                <TableContainer className="div-style" component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Titulo</TableCell>
                                <TableCell align="right">Precio</TableCell>
                                <TableCell align="right">Marca</TableCell>
                                <TableCell align="right">Cantidad</TableCell>
                                <TableCell align="right">Total</TableCell>
                                <TableCell align="right">Accion</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartProducts.map((cartProduct) => (
                                <TableRow key={cartProduct.product.id}
                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {<img src={cartProduct.product.img}></img>}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {cartProduct.product.titulo}
                                    </TableCell>
                                    <TableCell align="right">{cartProduct.product.precio}</TableCell>
                                    <TableCell align="right">{cartProduct.product.marca}</TableCell>
                                    <TableCell align="right">{cartProduct.count}</TableCell>
                                    <TableCell align="right">{(cartProduct.product.precio * cartProduct.count)}</TableCell>
                                    <TableCell align="right">{<DeleteIcon onClick={() => { deleteProduct(cartProduct.product.id) }}></DeleteIcon>}
                                    </TableCell>
                                </TableRow>

                            ))}
                        </TableBody>
                    </Table>
                    <h3 className='tot'>Cantidad Total: {amount()}</h3>
                    <h3 className='tot'>Monto    Total: ${totAmount()}</h3>
                    <button className='button-style' onClick={() => { resetProducts() }}>Vaciar el carrito</button>
                    {/* <div>
                        <button className='button-style' onClick={() => setOpenModal(true)}>Completar Compra</button>
                    </div> */}
                </TableContainer>
            }
            {/* {
                <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>

                    {successOrder ? (
                        <div>
                            <h3>Orden generada correctamente</h3>
                            <p>Su numero de orden es: {successOrder}</p>
                            <button>Volver a Inicio</button>
                        </div>
                    ) : (
                        <>
                            <h2>Formulario Usuario</h2>
                            <form onSubmit={handleSubmit}>
                                <input type="text" name='name' placeholder='Nombre'
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                                <input type="number" name='phone' placeholder='Telefono'
                                    onChange={handleChange}
                                    value={formData.phone}
                                />
                                <input type="mail" name='email' placeholder='mail'
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                                <button type="submit">Enviar</button>
                            </form>
                        </>
                    )}

                </ModalCustom>
            } */}
        </div>

    )

}

export default CartPage;