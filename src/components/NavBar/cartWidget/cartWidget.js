import React, {useContext} from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './cartWidget.css'
import { CartContext } from '../../../CartContext/CartContext';


const styleCart = {
    backgroundColor: "#00000000",
    border: "none",
}
const CartWidget = () =>{
        return <div>
            <button className= "botonCarrito" style = {styleCart}>
                <Badge badgeContent={cantidadPrenda} color="secondary" />
                <ShoppingCartIcon />
            </button>
    </div>
    }
export default CartWidget;

    
