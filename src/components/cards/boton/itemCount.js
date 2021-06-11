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


export const ItemCount = () => {
    
    const [count, setCount] = useState(0);
    const stock = 10;
    const stockLimite = (count >= stock)
    const stockMinimo = (count < 1)
   
    return <div>
       
       <Container> <h6>Cantidad</h6>
            <Row className="justify-content-center"lg={12}>            
                <Col  lg={1}><Button style={buttonStyle} onClick={() => {setCount(count + 1)}} disabled = {stockLimite} > + </Button></Col>
                <Col lg={1} ><p> {count} </p></Col>
                <Col lg={1}><Button style={buttonStyle} onClick={() => {setCount (count - 1 )}} disabled = {stockMinimo}> - </Button></Col>
            </Row>
                <br></br>
            <Button style={buttonStyle} onClick={() => {setCount(count + 1)}} disabled = {stockLimite} ><ShoppingBasketIcon/> Agregar al carrito</Button>
        </Container>
            
        
        
        </div>
    
}