import React from 'react';

import {Item1} from './Items/item'
import { ItemCount } from '../cards/boton/itemCount';

const ItemContainerStyle = {
    backgroundColor: 'AliceBlue',
    color: 'black',
    padding:'1%',
    border: 'white 1px solid',
    boxShadow: 'LightSteelBlue 2px 5px 5px',
    textTransform: 'Uppercase',
    fontWeight: 'bold',
    margin:'2%',
    textAlign: 'center',
    
}
const ItemListContainer = () =>{
        return <div style ={ItemContainerStyle}>
        <Item1  catalogo="Proximamente: Catálogo de productos" />
        <ItemCount/>

    </div>
}


export default ItemListContainer;