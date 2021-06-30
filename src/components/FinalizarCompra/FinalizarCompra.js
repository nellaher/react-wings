import React from 'react';
import { Link } from 'react-router-dom';
import { buttonStyle } from '../counter/itemCount'
import './finalizarcompra.css'


export const FinalizarCompra = props => {
    
    
    const {cancelar} = props;
    return <div>

        <button style={buttonStyle}><Link className="btnFinalizar" to={`/cart`}>Finalizar compra</Link></button>
        <br/>
        <br/>

        
        <button style={buttonStyle}><Link className="btnFinalizar" onClick= { () => cancelar(false)}>cancelar</Link></button>
        
    </div>
}