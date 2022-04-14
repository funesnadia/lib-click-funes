
import { useContext } from 'react';
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
import { Button } from 'bootstrap';


const CartPage = () => {
    const { cartProducts, deleteProduct, resetProducts, totAmount, amount } = useContext(CartContext)
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
                (cartProducts.length != 0) &&
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
                                    <TableCell align="right">{<DeleteIcon onClick={() => {deleteProduct(cartProduct.product.id) }}></DeleteIcon>} 
                                    </TableCell>
                                </TableRow>

                            ))}
                        </TableBody>
                    </Table>
                    <h3>Cantidad Total: {amount()}</h3>
                    <h3>Monto    Total: {totAmount()}</h3>
                    <button className='button-style' onClick={() => {resetProducts()}}>Vaciar el carrito</button>
                </TableContainer>
            }
        </div>

    )

}

export default CartPage;