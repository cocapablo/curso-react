import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useState, useEffect, useContext } from "react";
import { miFetch } from "../../helpers/miFetch";
import { useParams } from "react-router-dom";
import { ItemCounter } from '../../components/ItemCounter/ItemCounter';
import { Input } from "../Input/Input";
import { Intercambiabilidad } from "../Intercambiabilidad/Intercambiabilidad";
import { Gorras } from "../Gorras/Gorras";



export const ItemDetailContainer = ({idProducto = 0}) => {
    const [producto, setProducto] = useState([{}]);
    const [loading, setLoading] = useState(true);
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
        catch(err => console.log("ERROR: " + err)).
        finally(() => setLoading(false));
    }, []);
    return (
    <div className="container my-3">
        <div className="row">
            <div id="productoElegido" className="col-md-12">
                {loading ?
                <h2>Cargando el Producto ...</h2>
                :
                <ItemDetail producto={producto} ></ItemDetail>   
                }
            </div> 
          
        </div>
        
        {/*}
        <div className="row  border border-5 border-warning m-3">
            <div id="miInput" className="col-md-12">
                {producto.id && <Input> </Input>}    
            </div> 
            
        </div>
        <div className="row  border border-5 border-warning m-3">
            <div id="miInter" className="col-md-12">
                {producto.id && <Intercambiabilidad />}    
            </div> 
            
        </div>
        <div className="row  border border-5 border-warning m-3">
            <div id="miInter" className="col-md-12">
                {producto.id && <Gorras />}    
            </div> 
            
        </div>
        {*/ } 
    </div>
    );  
  
}

