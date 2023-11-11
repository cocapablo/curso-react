import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { miFetch } from "../../helpers/miFetch";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = ({idProducto = 0}) => {
    const [producto, setProducto] = useState([{}]);
    const {pid} = useParams();

    let pidProducto = parseInt(pid);

    if(pidProducto > 0) {
        idProducto = pidProducto;
    }
    
    useEffect(() => {
        
      //miFetch de Productos filtrado por idProucto
      miFetch({idProducto: idProducto}).
        then(productosRecibidos => {
          console.log(productosRecibidos);
  
          return productosRecibidos;
        }
          
  
        ).then(ultimosProductos => {
            let unicoProducto = {};

            console.log(ultimosProductos);
            ultimosProductos[0] && (unicoProducto = ultimosProductos[0]);
            //unicoProducto = ultimosProductos[0];
            setProducto(unicoProducto);
        }).
        //error => console.log("Task RECHAZADO : " + error)).
        catch(err => console.log("ERROR: " + err));
    }, []);
    return (
    <div className="container my-3">
        <div className="row">
            <div id="productoElegido" className="col-md-12">
                {producto.id && <ItemDetail producto={producto} ></ItemDetail>}    
            </div> 
        </div>
    </div>
    );  
  
}

