
import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { Link } from "react-router-dom";


export const ItemDetail = ({producto}) => {
    const [isCounter, setIsCounter] = useState(true);

    const {agregarProducto} = useCartContext();

    console.log("Producto:");
    console.log(producto);

    const onAdd = (cantidad) => {
        console.log("La cantidad seleccionada es: " + cantidad);
        agregarProducto({
            ...producto, 
            cantidad
        });
        setIsCounter(false);
    }

  return (
    <>
    {/* <TextComponent usuario={true} >  */}
    {producto.nombre 
    ? 
    <div className="card mb-12" style={{maxWidth: "1200px"}}>
         
         <div className="row g-0">
            <div className="col-md-4">
                <img src={producto.imagen} className="img-fluid rounded-start" alt="Imagen del producto" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="card-text"><small className="text-body-secondary">Precio: ${producto.precio}</small></p>
                    <p className="card-text"><small className="text-body-secondary">Stock: {producto.stock}</small></p>
                </div>
            </div>
        </div>

        
        <div className="row">
            <div id="itemCounter" className="col-md-12">
                {isCounter ?
                    producto.id && <ItemCounter initial={1} stock={producto.stock} onAdd={onAdd}></ItemCounter>    
                    :
                    <>
                        <Link to="/cart" className="w-15 btn btn-outline-dark">Terminar Compra</Link>
                        <Link to="/" className="w-15 btn btn-outline-dark">Seguir comprando</Link>
                    </>
                }
            </div> 
        
        </div>
     
    </div>
    :
    <label className="form-control m-4 w-50 bg-danger text-white">El producto no se encuentra en la Base de Datos   - <Link className="text-white fw-bold" to={"/"}> Ir a elegir Productos</Link></label> 
    
    }

    </>
  )
}

