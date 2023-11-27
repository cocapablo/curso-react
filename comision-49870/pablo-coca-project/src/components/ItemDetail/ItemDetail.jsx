
import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { TextComponent, TextComponent2, TextComponent3, TextComponent4, TextComponent5, TextComponent6, TextComponent7 } from "../TextComponent/ComponentesEjemploCondicionales";
import { Link } from "react-router-dom";


export const ItemDetail = ({producto}) => {
    const [isCounter, setIsCounter] = useState(true);

    const {agregarProducto} = useCartContext();

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
    {/* </TextComponent>   

    <TextComponent2 usuario="user"> </TextComponent2>
    <TextComponent3 /> */}
    {/* <TextComponent4 stock={producto.stock}/>
    <TextComponent5 stock={producto.stock}/>
    <TextComponent6 stock={producto.stock} otraClase="mt-5"/>
    <TextComponent7 condicion={true}/> */}
    </>
  )
}

