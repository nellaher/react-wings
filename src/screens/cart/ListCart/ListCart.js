import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../../../CartContext/CartContext';




export const ListCart = props => {
    const {itemsCart, removerPrenda, precioTotal } = useContext(CartContext)
    return <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th> </th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {itemsCart.map((prenda) => (
                    <tr key= {prenda.prenda.id}>
                    <td><img src={prenda.prenda.picture.img} alt={prenda.prenda.picture.alt}></img></td>
                    <td>{prenda.prenda.title}</td>
                    <td>$ {prenda.prenda.price}</td>
                    <td>{prenda.cantidad}</td>
                    <td><button onClick= {removerPrenda(prenda.prenda.id)}>X</button></td>
                    </tr>
                ))}
                
                <td> </td>
                <td> </td>
                <td> </td>
                <td>Total: </td>
                <td> $ {precioTotal}</td>
                
            </tbody>
            </Table>

</div>

}