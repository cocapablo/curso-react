import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);



export const CartContextProvider = ({children}) => {
    //Estados y funciones globales los defino acá
    const [cartList, setCartList] = useState([]);

    const agregarProducto = (nuevoProducto) => {
        let viejoProducto;
        //Me fijo si el producto ya estaba en CartList
        viejoProducto = cartList.find(producto => producto.id === nuevoProducto.id);

        if (viejoProducto) {
            //El producto ya existía . Solo sumo la cantidad
            viejoProducto.cantidad += nuevoProducto.cantidad;
            setCartList([...cartList]);
        } 
        else {
            //Producto nuevo. Lo agrego al carrito
            setCartList([
                ...cartList,
                nuevoProducto
            ])
        }
    }

    const vaciarCarrito = () => {
        setCartList([]);
    }

    const removerProducto = (idProducto) => {
        setCartList(cartList.filter((producto) => producto.id !== idProducto));
    }

    //Faltan estas funciones
    //Cantidad total de productos
    //Precio total de productos
    //Eliminar un producto por Item

    const precioTotal = () => {
        let valorInicial = 0;
        let total = 0;

        total = cartList.reduce((acumulador, producto) => acumulador += (producto.precio * producto.cantidad), valorInicial);

        return total;
    }   

    const cantidadProductos = () => {
        let valorInicial = 0;
        let total = 0;

        total = cartList.reduce((acumulador, producto) => acumulador += producto.cantidad, valorInicial);

        return total;   
    } 

    return (
        <CartContext.Provider value={{
            cartList,
            agregarProducto,
            vaciarCarrito,
            precioTotal,
            cantidadProductos,
            removerProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}