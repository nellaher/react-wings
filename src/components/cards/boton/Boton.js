import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './boton.css';


export const BtnCard = () =>{
    return <div>
        <button  className="cardButton">Comprar <ShoppingBasketIcon/></button>
        <button className="cardButton">Guardar <FavoriteIcon/></button>
    </div>
}