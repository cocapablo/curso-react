
import { useState, useEffect } from "react"
import { miFetch } from "../../helpers/miFetch"
import { ItemList } from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";






export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [like, setLike] = useState(false);

  const {cid} = useParams();
  let categoria = "";

  cid && (categoria = cid);
  

  
  useEffect(() => {
    
        
    miFetch({categoria: categoria}).
      then(productosRecibidos => {
        // Acá se podría agregar un nuevo producto. Por ahora no lo hago
        return productosRecibidos;
      }
        

      ).then(ultimosProductos => {
        
        setProductos(ultimosProductos);
      }).
      
      catch(err => console.log("ERROR: " + err)).
      finally(() => setLoading(false));
  }, [cid]);



  const handleLike = () => {
    setLike(!like);
  }
  
  const handleAgregarProducto = () => {
    let nuevoProducto = { id: productos.length + 1, nombre: "Putin", descripcion: "Un ruso loco divino con cara de piedra. Si sos ucraniano te va a acaer bárbaro", stock: 1, precio: 10000, categoria: "Armas", imagen: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1kzh3m.img?w=800&h=435&q=60&m=2&f=jpg" };

    console.log("Nuevo Producto: " + nuevoProducto);

    setProductos(
      [
      ...productos,
      nuevoProducto
      ]
    ) 
  }

  return (
    <div>
      <h2 className="text-center">{greeting}</h2>
      <button onClick={handleLike}>Me Gusta</button>
      <button onClick={handleAgregarProducto}>Agregar Producto</button>
      {loading ? 
        <Loading />
        : 
        <ItemList productos={productos} />
      }
    </div>
  );
};