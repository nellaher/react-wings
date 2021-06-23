
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail/ItemDetail';
import { productosWings } from '../../Services/Productos/misProductos';


const promiseWings = () => {
    return new Promise ((resolve, reject) => {
        setTimeout( () => resolve (productosWings), 2000)
    })
}


export const ItemDetailContainer = props => {
    const [detallePrenda, setDetallePrenda] = useState([])
    const {prendaID} = useParams();

    useEffect ( ()=> {
        promiseWings()
        .then(response => {setDetallePrenda(response.filter(prenda => prenda.id === parseInt(prendaID)))
        }
        )
    },[prendaID]);
        

    return <>
        {
            detallePrenda.map((detalle) => <ItemDetail detallePrenda = {detalle}/>)
        }
    </>
}