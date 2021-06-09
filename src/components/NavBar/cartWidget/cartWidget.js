import React from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './cartWidget.css'


const styleCart = {
    backgroundColor: "#00000000",
    border: "none",
}
const CartWidget = () =>{
        return <div>
            <button className= "botonCarrito" style = {styleCart}>
                <Badge badgeContent={3} color="secondary" />
                <ShoppingCartIcon />
            </button>
    </div>
    }
export default CartWidget;

    
