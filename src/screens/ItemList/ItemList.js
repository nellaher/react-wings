import React from 'react';
import {Item} from '../Item/Item';
import Spinner from 'react-bootstrap/Spinner';


const styleItemList = {
    display: 'flex',
    flexDirection: 'row',
    flex: 'auto',
    textAlign: 'center',
    justifyContent: 'space-around',
    margin:'3%'
}


export const ItemList = (props) => {

    const {productos} = props;
    return <>
         {productos.length === 0 ? (
            <div className="d-flex justify-content-center" style={styleItemList}><Spinner animation="border" variant="secondary"/></div>
            ) : (
            
                    <div style={styleItemList}>
                    {productos.map((prenda) => <Item key={prenda.id} 
                      prenda={prenda}
                        />)}
                    </div>
            )
        }
    </>
    
};
