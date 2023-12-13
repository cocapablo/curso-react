import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useState, useEffect, useContext } from "react";
import { miFetch } from "../../helpers/miFetch";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";



export const ItemDetailContainer = ({idProducto = 0}) => {
    const [producto, setProducto] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const {pid} = useParams();


    
    console.log("pid = ");
    console.log(pid);

    pid && (idProducto = pid);
    
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
            
            setProducto(unicoProducto);
        }).
        
        catch(err => console.log("ERROR: " + err)).
        finally(() => setLoading(false));
    }, []);

    
    return (
    <div className="container my-3">
        <div className="row">
            <div id="productoElegido" className="col-md-12">
                {loading ?
                <Loading />
                :
                <ItemDetail producto={producto} ></ItemDetail>   
                }
            </div> 
          
        </div>
        
        
    </div>
    );  
  
}

