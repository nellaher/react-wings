import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Item} from '../Item/Item';
import Spinner from 'react-bootstrap/Spinner';


const styleItemList = {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-around',
    margin:'3%'
}


export const ItemList = (props) => {

    const {data} = props;
    return <>
         {data.length === 0 ? (
            <div className="d-flex justify-content-center" style={styleItemList}><Spinner animation="border" variant="secondary"/></div>
            ) : (
            
                    <div style={styleItemList}>
                    {data.map((element) => <Item key={element.id} 
                      element={element}
                        />)}
                    </div>
            )
        }
    </>
    
}