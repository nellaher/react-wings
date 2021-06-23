import React from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { ItemCount } from '../../../components/counter/itemCount';



const ItemStyle = {
    backgroundColor: 'Beige',
    color: 'black',
    padding:'2%',
    border: 'white 1px solid',
    boxShadow: 'LightSteelBlue 2px 5px 5px',
    margin:'3%',
    textAlign: 'center',
    width: '30rem',
    height:'100%'


};

const styleItemList = {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-around',
    margin:'3%'
};

const styleImg = {
    height: '25rem',
    padding: '5px',
    
}

export const ItemDetail = props=> {
    const {detallePrenda} = props;
    return <>
    {detallePrenda.length === 0 ? (
       <div className="d-flex justify-content-center" style={styleItemList}><Spinner animation="border" variant="secondary"/></div>
       ) : (
       
        <section>
        <div style={ItemStyle}>
       <h5>{detallePrenda.title}</h5>
       <img style={styleImg} src= {detallePrenda.picture.img}  alt= {detallePrenda.picture.alt}></img>
       <Card.Text> ${detallePrenda.price}</Card.Text>
       <div>
           <p>Descripción: {detallePrenda.description}</p>
           <p>Colores: {detallePrenda.colores.color1}, {detallePrenda.colores.color2}</p>
           <p>Talles: {detallePrenda.talles.T1}-{detallePrenda.talles.T2}-{detallePrenda.talles.T3}</p>
       </div>
       <ItemCount stock={detallePrenda.stock}/>

   </div>
</section>
       )
   }
</>
}