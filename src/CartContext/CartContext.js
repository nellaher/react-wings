import React, { createContext, useEffect, useState } from 'react';


export const CartContext = createContext(); 

export const CartComponentContext = props => {
    
    const [itemsCart, setItemsCart] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [cantidadPrenda, setCantidadPrenda] = useState(0)


    const IsInCart = idPrenda => {
        itemsCart.find(itemCart => itemCart.prenda.id === idPrenda)
    }
    
    const añadirPrenda = prendaAgregada => {
        setPrecioTotal(precioTotal + (prendaAgregada.prenda.precio * prendaAgregada.cantidad ))
        setCantidadPrenda(cantidadPrenda + prendaAgregada.cantidad)

        if (IsInCart (prendaAgregada.prenda.id)){
            const actualizarItem = itemsCart.map((itemCart) => {
                const cantidadTotal = itemCart.cantidad + prendaAgregada.cantidad;
                if (itemCart.prenda.id === prendaAgregada.prenda.id){
                    return {...itemCart, cantidad: cantidadTotal}
                }
                return {itemCart}
            })  
                setItemsCart(actualizarItem)
        } else {
            setItemsCart(prendasAgregadas => [...prendasAgregadas, prendaAgregada])
        }

    }

    const removerPrenda = id => {
        const prendaRemovida = itemsCart.find(itemCart => itemCart.prenda.id === id);
        setPrecioTotal (precioTotal - (prendaRemovida.prenda.precio * prendaRemovida.cantidad))
        setCantidadPrenda (cantidadPrenda - prendaRemovida.cantidad)
        setItemsCart (itemsCart.filter((prenda)=> prenda.prenda.id !== id));
    }

    const quitarTodo = () => {
        setItemsCart([])
        setCantidadPrenda(0)
        setPrecioTotal(0)
    }


    useEffect(()=> {
        
    }, [itemsCart])

    return <CartContext.Provider value={{itemsCart, añadirPrenda, removerPrenda, quitarTodo, precioTotal, cantidadPrenda}}>
        {props.children}
    </CartContext.Provider>
    

}
