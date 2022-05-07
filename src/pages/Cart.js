import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalCustom from '../components/Modal/Modal';
import { useContext, useState, useEffect } from 'react';
import CartContext from "../context/CartContext";
import UserContext from '../context/UserContext';
import { Link } from 'react-router-dom';
// db
import db from '../firebase';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore'
import '../pages/Page.css';

// muestra el carrito de productos para completar la compra generando un nro de orden.
// se realiza actualizacion de stock
const CartPage = () => {
    const { cartProducts, deleteProduct, resetProducts, totAmount, amount } = useContext(CartContext)
    const { user } = useContext(UserContext)
    const [openModal, setOpenModal] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    })
    useEffect(() => {
        setFormData({
            ...formData,
            email: user.email
        })
    }, [user.email])

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
            date: 0,
            total: totAmount()
        }
    )
    const [successOrder, setSuccessOrder] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevOrder = {
            ...order,
            buyer: formData,
            date: getCurrentDate()
        }
        setOrder({
            ...order,
            buyer: formData,
            date: getCurrentDate()
        })
        pushOrder(prevOrder)
        updateStock()
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        setSuccessOrder(orderDoc.id)
    }

    const updateStock = () => {
        cartProducts.map(async (product) => {
            const docRef = doc(db, 'products', product.product.id)
            const stockNew = product.product.stock - product.count
            await updateDoc(docRef, { stock: stockNew });
        })
    }

    const handleChange = (e) => {
        const { value, name } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const getCurrentDate = (separator = '') => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
    }

    return (
        <div>
            {
                (cartProducts.length === 0) &&
                <div>
                    <h2>No hay items en tu carrito...</h2>
                    <Link to='/'>
                        <button className='button-st'>Continuar comprando</button>
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
                                >
                                    <TableCell component="th" scope="row">
                                        {<img src={cartProduct.product.img} alt='imgProd'></img>}
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
                    <button className='button-st' onClick={() => { resetProducts() }}>Vaciar el carrito</button>
                    <div className='div'>
                        <button className='button-st' onClick={() => setOpenModal(true)}>Completar Compra</button>
                    </div>
                </TableContainer>
            }
            {
                <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>

                    {successOrder ? (
                        <div>
                            <h2>Orden generada correctamente</h2>
                            <h3>Su numero de orden es: {successOrder}</h3>
                            <div className='div-e'>
                                <Link to='/'>
                                    <button className='button-st' onClick={() => { resetProducts() }}>Volver a Inicio</button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h2>Formulario Usuario</h2>
                            <form onSubmit={handleSubmit}>
                                {
                                    (user.email !== '') &&
                                    <div>
                                        <p onChange={handleChange}
                                            value={user.email}>Email logueado: {user.email}</p>
                                    </div>
                                }
                                <div>
                                    <input type="text" name='name' placeholder='Apellido y Nombre'
                                        onChange={handleChange}
                                        value={formData.name}
                                        required
                                    />
                                </div>
                                <div>
                                    <input type="number" name='phone' placeholder='Telefono'
                                        onChange={handleChange}
                                        value={formData.phone}
                                        required
                                    />
                                </div>
                                {
                                    (user.email === '') &&
                                    < div >
                                        <input type="mail" name='email' placeholder='mail'
                                            onChange={handleChange}
                                            value={formData.email}
                                            required
                                        />
                                    </div>
                                }
                                <div className='div-e'>
                                    <button className='button-st' type="submit">Enviar</button>
                                </div>
                            </form>
                        </div>
                    )
                    }
                </ModalCustom >
            }
        </div >
    )
}

export default CartPage;