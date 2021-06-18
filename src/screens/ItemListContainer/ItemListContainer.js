import React, {useState, useEffect} from 'react';
import {ItemList} from '../ItemList/ItemList';



const promiseWings = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
                [{
                    id: 1, 
                    title: 'Cardigan Lemon', 
                    description: 'Cardigan con bordado de flores', 
                    price: 1700,
                    picture:{
                        img: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/35/197/L_g0138819735.jpg',
                        alt: "cardigan flores"
                    },
                    stock: 5
                },
                {
                    id: 2, 
                    title: 'Camiseta Smile', 
                    description: 'Remera con estampado de carita feliz', 
                    price: 900,
                    picture:{
                        img: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/11/098/L_g0125009811.jpg',
                        alt: "camiseta :)"
                    },
                    stock: 10
                },
                {
                    id: 3, 
                    title: 'Pantalon Street', 
                    description: 'Jean holgado con dobladillo enrollado y bolsillos delanteros y traseros', 
                    price: 4500,
                    picture:{
                        img: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/23/444/L_g0110044423.jpg',
                        alt: "jean street"
                    },
                    stock: 8
                },
                {
                    id: 4, 
                    title: 'Campera Rio', 
                    description: 'Campera de jean corta oversize', 
                    price: 5300,
                    picture:{
                        img: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/83/965/L_g0114896583.jpg',
                        alt: "campera jean rio"
                    },
                    stock: 3
                }]
        ), 2000)
    })
}

export const ItemListContainer = props => {

    const [data, setData] = useState([]);

    useEffect(() => {
        promiseWings()
        .then(response => setData(response))
        .catch(error => console.log("Error al cargar los productos"))
    }, [])

    return <ItemList data = {data}/>
    
}