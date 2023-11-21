import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);



export const CartContextProvider = ({children}) => {
    //Estados y funciones globales los defino acá
    const [cartList, setCartList] = useState([]);

    const agregarProducto = (nuevoProducto) => {
        setCartList([
            ...cartList,
            nuevoProducto
        ])
    }

    const vaciarCarrito = () => {
        setCartList([]);
    }

    //Faltan estas funciones
    //Cantidad total de productos
    //Precio total de productos
    //Eliminar un producto por Item

    return (
        <CartContext.Provider value={{
            cartList,
            agregarProducto,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}