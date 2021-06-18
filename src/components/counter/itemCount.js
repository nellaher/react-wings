import React, { useState } from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const buttonStyle ={
    verticalAlign: 'middle',
    backgroundColor:'rgb(255, 152, 138)',
    border: 'solid 1px rgb(238, 119, 139)',
    
}



export const ItemCount = () => {

    const valorInicial = 0;
    const stock = 10;
    const [count, setCount] = useState(valorInicial);
    
    const sumarProducto = () => {
        setCount(count+1);
    }   
    const quitarProducto = () => {
        setCount(count-1);
    }
    const addToCart = ()=> {
        console.log(`Agregaste ${count} productos a tu carrito!`)
        
    }

   
    return <div>
       
       <Container className="justify-content-center">
            <Row >            
                <Col><Button style={buttonStyle} onClick={e => sumarProducto()} disabled = {count >= stock ? true : false} > + </Button></Col>
                <Col className="text-center"><p> {count}</p></Col>
                <Col><Button style={buttonStyle} onClick={e => quitarProducto()} disabled = {count === valorInicial ? true : false}> - </Button></Col>
            </Row>
                <br></br>
            <Button style={buttonStyle} onClick={e => addToCart()}><ShoppingBasketIcon/> Agregar al carrito</Button>
        </Container>
            
        
        
        </div>
    
}