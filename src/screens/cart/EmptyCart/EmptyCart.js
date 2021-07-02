import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { buttonStyle } from '../counter/itemCount';

export const EmptyCart = () => {
    const history = useHistory();
 
    return <div>
        <h3>No agregaste ningun producto a tu carrito. </h3>
        <button style={buttonStyle}><Link onClick= {() => history.push(`/`)}>Volver a la tienda</Link></button>
    </div>
}