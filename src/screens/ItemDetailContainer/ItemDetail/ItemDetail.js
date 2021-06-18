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
    width: '16rem',
    height:'100%'


};

const styleItemList = {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-around',
    margin:'3%'
};

export const ItemDetail = props=> {
    const {productoDetalle} = props;
    return <>
    {productoDetalle.length === 0 ? (
       <div className="d-flex justify-content-center" style={styleItemList}><Spinner animation="border" variant="secondary"/></div>
       ) : (
       
              <div>
        <Card style={ItemStyle}>
       <h5>{productoDetalle.title}</h5>
       <img src= {productoDetalle.picture.img}  alt= {productoDetalle.picture.alt}></img>
       <Card.Text> ${productoDetalle.price}</Card.Text>
       <div>
           <p>Descripción: {productoDetalle.description}</p>
           <p>Colores: {productoDetalle.colores.color1}, {productoDetalle.colores.color2}</p>
           <p>Talles: {productoDetalle.talles.T1}-{productoDetalle.talles.T2}-{productoDetalle.talles.T3}</p>
       </div>
       <ItemCount stock={productoDetalle.stock}/>

   </Card>
</div>
       )
   }
</>
}