import { useCartContext } from "../../contexts/CartContext"



export const CartContainer = () => {
    const {cartList, vaciarCarrito} = useCartContext();

  return (
    <div>
        {cartList.map((producto) => <div key={producto.id} className="row m-2">
                                        <img className="w-25 col-2" src={producto.imagen} />
                                        <p className="col-2">Cantidad: {producto.cantidad} - Precio: ${producto.precio}
                                            <button className="btn btn-danger col-2"> X </button>
                                        </p>
                                        
                                        
                                    </div>

        )}
        <button className="btn btn-danger m-4" onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

 