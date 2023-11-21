
import { useCartContext } from "../../contexts/CartContext"
import { ItemCounter } from "../ItemCounter/ItemCounter"


export const ItemDetail = ({producto}) => {
   
    const {agregarProducto} = useCartContext();

    const onAdd = (cantidad) => {
        console.log("La cantidad seleccionada es: " + cantidad);
        agregarProducto({
            ...producto, 
            cantidad
        });
    }

  return (
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
                {producto.id && <ItemCounter initial={1} stock={producto.stock} onAdd={onAdd}></ItemCounter>}    
            </div> 

        </div>
    </div>
  )
}

