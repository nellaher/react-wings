
import React, {useState, useEffect} from 'react';
import { ItemDetail } from './ItemDetail/ItemDetail';

const promiseProducto = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=> resolve (
            [
                {
                    id: 1, 
                    title: 'Cardigan Lemon', 
                    description: 'Cardigan con bordado de flores', 
                    price: 1700,
                    picture:{
                        img: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/35/197/L_g0138819735.jpg',
                        alt: "cardigan flores"
                    },
                    stock: 5,
                    colores:{
                        color1:'azul',
                        color2:'blanco'
                    }, 
                    talles:{
                        T1:'S',
                        T2:'M',
                        T3:'L'
                    },
                }
            ]
        ) ,2000)
    })
}

export const ItemDetailContainer = props => {
    const [productoDetalle, setProductoDetalle] = useState([])

    useEffect ( ()=> {
        promiseProducto()
        .then(response => setProductoDetalle(response))
        .catch (error => console.log ('Error al cargar detalles del producto'))
    }, []);

    return <>
        {
            productoDetalle.map((detalle) => <ItemDetail productoDetalle = {detalle}/>)
        }
    </>
}