import React from 'react';
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../cards/counter/itemCount';

export const Item = props => {
    const {id, title, description, price, pictureUrl, alt, stock} = props;
    
    return <>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
                    <Card.Img   
                                image= {pictureUrl}
                                width="200"
                                title= {alt} />
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <Card.Text>
                    ID: {id}
                    </Card.Text>
            <ItemCount>
                stock={stock} valorInicial={1}
            </ItemCount>
        </Card.Body>
    </Card>
    </>
}

