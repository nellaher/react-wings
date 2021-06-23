import React from 'react';
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../../components/counter/itemCount';
import './Item.css';
import { Link } from 'react-router-dom';

const ItemStyle = {
    backgroundColor: 'Beige',
    color: 'black',
    padding:'2%',
    border: 'white 1px solid',
    boxShadow: 'LightSteelBlue 2px 5px 5px',
    margin:'3%',
    textAlign: 'center',
    width: '16rem',
    height:'100%',
};

const linkStyle= {
    textDecoration: 'none',
}
export const Item = props => {
    const {prenda} = props;
    
    return <>
        <Link to={`/detalle/${prenda.id}`} style={linkStyle}>
            <Card style={ItemStyle}>
                    <h5>{prenda.title}</h5>
                    <img src= {prenda.picture.img}  alt= {prenda.picture.alt}></img>
                    <Card.Text> ${prenda.price}</Card.Text>
                
                <ItemCount stock={prenda.stock}/>

            </Card>
        </Link>
        </>
}

