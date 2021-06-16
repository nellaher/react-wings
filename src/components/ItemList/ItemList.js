import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Item } from '../Item/Item'
 


const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
            [
                {
                    id: 1, 
                    title: 'Cardigan Lemon', 
                    description: 'Cardigan con bordado de flores', 
                    price: 1700,
                    picture:{
                        pictureUrl: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/32/197/L_g0138819732.jpg',
                        alt: "cardigan flores"
                    },
                    stock: 70
                },
                {
                    id: 2, 
                    title: 'Camiseta Smile', 
                    description: 'Camiseta de media manga con estampado de carita feliz', 
                    price: 900,
                    picture:{
                        pictureUrl: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/08/098/L_g0125009808.jpg',
                        alt: "camiseta :)"
                    },
                    stock: 100
                },
                {
                    id: 3, 
                    title: 'Pantalon Street', 
                    description: 'Jaan holgado con dobladillo enrollado y bolsillos delanteros y traseros', 
                    price: 4500,
                    picture:{
                        pictureUrl: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/23/444/L_g0110044423.jpg',
                        alt: "jean street"
                    },
                    stock: 80
                },
                {
                    id: 4, 
                    title: 'Campera Rio', 
                    description: 'Campera de jean corta oversize', 
                    price: 5300,
                    picture:{
                        pictureUrl: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/50/993/L_g0152699350_000.jpg',
                        alt: "campera jean rio"
                    },
                    stock: 45
                }
            ]
        ), 2000)
    })
}

export const ItemList = () => {
    
    const [data, setData] = useState([]);

    const ejecutarItemList = () => {
        myPromise().then(dataProductos => {
            setData(dataProductos)
        })
    }

    useEffect(() => {
        ejecutarItemList()
    }, [])

    return<>
        {
            data.length === 0 ? (<div></div>) : (<Container fluid>
                <Row>
                    <Col container justify="center" >
                        {data.map((element)=><Item key={element.id} 
                        id={element.id} 
                        title={element.title} 
                        description={element.description}
                        price={element.price}
                        pictureUrl={element.picture.pictureUrl}  
                        alt={element.picture.alt}
                        stock={element.stock}
                        />)}
                    </Col>
                </Row>
            </Container>)
        }
    </>
}