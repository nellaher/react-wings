import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { ItemCount } from '../../../components/counter/itemCount';
import { FinalizarCompra } from '../../../components/FinalizarCompra/FinalizarCompra';

import { CartContext } from '../../../CartContext/CartContext';





const ItemStyle = {
    backgroundColor: 'Beige',
    color: 'black',
    padding:'2%',
    border: 'white 1px solid',
    boxShadow: 'LightSteelBlue 2px 5px 5px',
    margin:'3%',
    
    width: '90%',
    height:'100%',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-around',


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
    const [stockProducto, setStockProducto ] = useState (0);
    const [click, setClick] = useState(false);
    const {añadirPrenda, removerPrenda} = useContext(CartContext);

    const addToCart = stock => {
        setStockProducto(stock);
        setClick(true);
        añadirPrenda({prenda: detallePrenda, quantity: stock})
    }

    const cancelar = anular =>{
        setClick(false);
        removerPrenda(detallePrenda.id);
    };


    return <>
    {detallePrenda.length === 0 ? (
       <div className="d-flex justify-content-center" style={styleItemList}><Spinner animation="border" variant="secondary"/></div>
       ) : (
       
        <section style={ItemStyle}>
        <div >
       <h5>{detallePrenda.title}</h5>
       <img style={styleImg} src= {detallePrenda.picture.img}  alt= {detallePrenda.picture.alt}></img>
       <Card.Text> ${detallePrenda.price}</Card.Text>
       <div>
           <p>Descripción: {detallePrenda.description}</p>
           <p>Colores: {detallePrenda.colores.color1}, {detallePrenda.colores.color2}</p>
           <p>Talles: {detallePrenda.talles.T1}-{detallePrenda.talles.T2}-{detallePrenda.talles.T3}</p>
       </div>
       
       {
           click ? <FinalizarCompra cancelar= {cancelar}/> : <ItemCount stock = {detallePrenda.stock} valorInicial={1} stockProducto={stockProducto} addToCart= {addToCart}/>
       }

   </div>
</section>
       )
   }
</>
}