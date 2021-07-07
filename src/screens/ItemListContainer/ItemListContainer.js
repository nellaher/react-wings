import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { productosWings } from '../../Services/Productos/misProductos';
import {ItemList} from '../ItemList/ItemList';
import { dataBase } from '../../firebase/firebase';




const promiseWings = () => {
    return new Promise ((resolve, reject) => {
        setTimeout( () => resolve (productosWings), 2000)
    })
}

export const ItemListContainer = props => {

    const [productos, setProductos] = useState([]);
    const {categoriaID} = useParams();

    useEffect(() => {
        promiseWings()
        .then(response => categoriaID === undefined ?
        setProductos(response) : setProductos(response.filter (prenda =>prenda.categoria === categoriaID )
        ))
    }, [categoriaID])

    return <ItemList productos = {productos}/>
    
}



