import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';

import db from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {Link} from 'react-router-dom';

import '../pages/Page.css';

// muestra las ordenes (con los productos) del usuario logueado, en caso de no poseer ordenes 
// da la opcion de seguir comprando
function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Productos
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Titulo</TableCell>
                                        <TableCell align="right">Precio ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.items.map((product) => (
                                        <TableRow key={product.id}>
                                            <TableCell component="th" scope="row">
                                                {product.id}
                                            </TableCell>
                                            <TableCell>{product.title}</TableCell>
                                            <TableCell align="right">{product.price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const OrdersPage = () => {
    const { user } = useContext(UserContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        setOrders([]);
        getOrders().then((order) => {
            setOrders(order)
        })
    }, [])

    const getOrders = async () => {
        const ordersQuery = query(collection(db, "ordenes"), where("buyer.email", "==", user.email))
        const querySnapshot = await getDocs(ordersQuery)
        let ordersList = []
        querySnapshot.docs.forEach((doc) => {
            const order = {
                id: doc.id,
                date: doc.data().date,
                items: doc.data().items,
                total: doc.data().total
            }
            ordersList = [...ordersList, order]
        });
        return ordersList;
    }

    return (
        <div>
            {
                (orders.length === 0) &&
                <div>
                    <h2>No hay ordenes ...</h2>
                    <Link to='/'>
                        <button className='button-st'>Continuar comprando</button>
                    </Link>
                </div>
            }
            {
                (orders.length !== 0) &&
                < TableContainer component={Paper} >
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Id Orden</TableCell>
                                <TableCell align="right">Fecha Orden</TableCell>
                                <TableCell align="right">Total Orden</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => (
                                <Row key={order.id} row={order} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
            }
        </div >
    );

}

export default OrdersPage;