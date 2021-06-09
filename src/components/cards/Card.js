import React from  'react';
import './Card.css'

const styleCard = {
    textAlign: 'center'
}

export const Card = props => {
    const {titulo,subtitulo,children} = props
    return  <div className="contenedor">
                <div className = "cardContainer" style={styleCard}>
                    <h5>{titulo}</h5>
                    <h6>{subtitulo}</h6>
                    {children}
                </div> 
            </div>
}