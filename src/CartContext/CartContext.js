import React, { createContext, useEffect, useState } from 'react';


export const CartContext = createContext(); 

export const CartComponentContext = props => {
    
    const [itemsCart, setItemsCart] = useState([]);

    const IsInCart = idPrenda => {
        itemsCart.find(itemCart => itemCart.prenda.id === idPrenda)
    }
    
    const añadirPrenda = prendaAgregada => {
        if (IsInCart (prendaAgregada.prenda.id)){
            const actualizarItem = itemsCart.map((itemCart) => {
                const cantidadTotal = itemCart.quantity + prendaAgregada.quantity;
                if (itemCart.prenda.id === prendaAgregada.prenda.id){
                    return {...itemCart, quantity: cantidadTotal}
                }
                return itemCart
            })  
                setItemsCart(actualizarItem)
        } else {
            setItemsCart(prendasAgregadas => [...prendasAgregadas, prendaAgregada])
        }

    }

    const removerPrenda = id => {
        setItemsCart (itemsCart.filter((prenda)=> prenda.prenda.id !== id));
    }

    const quitarTodo = () => {
        setItemsCart([])
    }


    useEffect(()=> {
        
    }, [itemsCart])

    return <CartContext.Provider value={{itemsCart, añadirPrenda, removerPrenda, quitarTodo}}>
        {props.children}
    </CartContext.Provider>
    

}
