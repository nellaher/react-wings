import React, {useContext} from 'react';
import { CartContext } from '../../CartContext/CartContext';
import { EmptyCart } from './EmptyCart/EmptyCart';
import { ListCart } from './ListCart/ListCart';

export const Cart = () => {

    const {itemsCart} = useContext(CartContext)
    return <>
        {itemsCart.lenght===0 ? <EmptyCart/> : <ListCart/>}
    </>
}