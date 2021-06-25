import { Link } from '@material-ui/icons';
import React from 'react';


export const FinalizarCompra = props => {
    
    
    const {cancelar} = props;
    return <div>
        <Link to="`/cart`"><button>Finalizar compra</button></Link>
        <Link onClick= { () => cancelar(false)}><button>Cancelar</button></Link>
        
    </div>
}