import React, { useState } from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const buttonStyle ={
    verticalAlign: 'middle',
    backgroundColor:'rgb(255, 152, 138)',
    border: 'solid 1px rgb(238, 119, 139)',
    
}


export const ItemCount = props => {
    
    const {stock} = props  ;
    const valorInicial = 1;
    const [count, setCount] = useState(valorInicial);
    
    const añadir = () => {
        setCount(count+1);
    }   
    const quitar = () => {
        setCount(count-1);
    }

   
    return <div>
       
       <Container> <h6>Cantidad</h6>
            <Row className="justify-content-center">            
                <Col><Button style={buttonStyle} onClick={e => añadir()} disabled = {stock === 0 ? true : false} > + </Button></Col>
                <Col className="text-center"><p> {count}</p></Col>
                <Col><Button style={buttonStyle} onClick={e => quitar()} disabled = {count === valorInicial ? true : false}> - </Button></Col>
            </Row>
                <br></br>
            <Button style={buttonStyle} onClick={() => {setCount(count + 1)}} disabled = {stock === 0 ? true : false} ><ShoppingBasketIcon/> Agregar al carrito</Button>
        </Container>
            
        
        
        </div>
    
}