import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../../contexts/CartContext"
import { useState } from "react";
import { Link } from "react-router-dom";




export const CartContainer = () => {
    const [formData, setFormData]= useState({nombre: " ", telefono: " ", email: " ", repetirEmail: " "});
    const [validacionDatosFormulario, setValidacionDatosFormulario] = useState({datosOk: true, mensajeError: ""});
    const {cartList, vaciarCarrito, precioTotal, removerProducto} = useCartContext();
    const [idCompra, setIDCompra] = useState("");

    const validarDatosformulario = () => {
      let datosValidados = {datosOk: true, mensajeError: ""};
    
      //Nombre
      if (formData.nombre.trim().length === 0) {
        datosValidados.datosOk = false;
        datosValidados.mensajeError = "Debe ingresar un Nombre";
        return datosValidados;
      }
    
      //Telefono
      if (formData.telefono.trim().length === 0) {
        datosValidados.datosOk = false;
        datosValidados.mensajeError = "Debe ingresar un Telefono";
        return datosValidados;
      }
    
      //eMail
      if (formData.email.trim().length === 0) {
        datosValidados.datosOk = false;
        datosValidados.mensajeError = "Debe ingresar un eMail";
        return datosValidados;
      }
    
      //Repetir eMail
      if (formData.repetirEmail !== formData.email) {
        datosValidados.datosOk = false;
        datosValidados.mensajeError = "Ingresó un eMail diferente en Repetir eMail al ingresado en eMail";
        return datosValidados;
      }
    
    
      return datosValidados;
    }

    const handleOrden = (evt) => {
      evt.preventDefault();

      //Valido los datos
      let datosValidados = validarDatosformulario();

      
      if (datosValidados.datosOk === false) {
        setValidacionDatosFormulario(datosValidados);
        return;
      }

      const orden = {};

      orden.comprador = formData;

      orden.items = cartList.map(({ id, nombre, precio, cantidad }) => ({id, nombre, precio, cantidad}));

      orden.total = precioTotal();

      //Guardo en Firestore
      //Create
      const db = getFirestore();

      const ordenCollection = collection(db, "ordenes");

      addDoc(ordenCollection, orden)
      .then(respuesta => setIDCompra(respuesta.id))
      .catch(err => console.log("Error : " + err))
      .finally(() => vaciarCarrito());
      ;

      
    }

    const handleOnChange = (evt) => {
      setFormData({
        ...formData,
        [evt.target.name] : evt.target.value
      })
    }

  return (
    <div>
        {idCompra !== ""
          &&
          <label className="form-control m-4 w-50 bg-warning text-blue fw-bold">La Orden de Compra es: {idCompra}</label> 
        }

        <div className="container">
        {cartList.map((producto) => <div key={producto.id} className="row m-2">
                                        <img className="col-3" src={producto.imagen} />
                                        <p className="col-sm">Cantidad: {producto.cantidad} - Precio: ${producto.precio} - Subtotal: ${producto.precio * producto.cantidad}
                                            <button className="btn btn-danger col-sm m-2" onClick={() => removerProducto(producto.id)}> X </button>
                                        </p>
                                        
                                        
                                    </div>

        )}
        </div>
        

        {precioTotal() > 0 
        ?
        <>
        <label className="form-control m-4 w-50 bg-primary text-white">Precio Total: ${precioTotal()}</label> 

        
        <button className="btn btn-danger m-4" onClick={vaciarCarrito}>Vaciar Carrito</button>
        <form className="form-control mx-4 w-50 m-4" onSubmit={handleOrden} >
          {validacionDatosFormulario.datosOk === false &&
          <label className="form-control bg-warning text-black fw-bold">{validacionDatosFormulario.mensajeError}</label> 
          }
          
          <br />
          <label>Nombre</label>
          <input 
            type="text"
            name="nombre"
            className="form-control"
            value={formData.nombre}
            onChange={handleOnChange}
          ></input>
          <br />
          <label>Telefono</label>
          <input 
            type="text"
            name="telefono"
            className="form-control"
            value={formData.telefono}
            onChange={handleOnChange}
          ></input>
          <br />
          <label>eMail</label>
          <input 
            type="text"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleOnChange}
          ></input>
          <br />
          <label>Repetir eMail</label>
          <input 
            type="text"
            name="repetirEmail"
            className="form-control"
            value={formData.repetirEmail}
            onChange={handleOnChange}
          ></input>
          <br />
          <button className="btn btn-danger m-4" >Terminar Compra</button>
        </form>
        </>
        :
        <label className="form-control m-4 w-50 bg-primary text-white">El carrito está vacío. Los superhéroes están tristes e indefensos   - <Link className="text-white fw-bold" to={"/"}> Ir a elegir Productos</Link></label> 
    }
    </div>
  )
}

 