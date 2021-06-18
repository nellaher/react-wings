import React from 'react';
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../../components/counter/itemCount';
import './Item.css';

const ItemStyle = {
    backgroundColor: 'Beige',
    color: 'black',
    padding:'2%',
    border: 'white 1px solid',
    boxShadow: 'LightSteelBlue 2px 5px 5px',
    margin:'3%',
    textAlign: 'center',
    width: '16rem',
    height:'100%'


};



export const Item = props => {
    const {element} = props;
    
    return <div>
        <Card style={ItemStyle}>
            <h5>{element.title}</h5>
            <img src= {element.picture.img}  alt= {element.picture.alt}></img>
            <Card.Text> ${element.price}</Card.Text>
            <ItemCount stock={element.stock}/>

        </Card>
    </div>
}

