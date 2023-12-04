import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";
import { useCartContext } from "../../contexts/CartContext"
import { useState } from "react";
import { Link } from "react-router-dom";



export const CartContainer = () => {
    const [formData, setFormData]= useState({nombre: " ", telefono: " ", email: " ", repetirEmail: " "});
    const {cartList, vaciarCarrito, precioTotal, removerProducto} = useCartContext();
    const [idCompra, setIDCompra] = useState("");

    const handleOrden = (evt) => {
      evt.preventDefault();

      const orden = {};

      orden.comprador = formData;

      orden.items = cartList.map(({ id, nombre, precio, cantidad }) => ({id, nombre, precio, cantidad}));

      orden.total = precioTotal();

      console.log("Orden: ");
      console.log(orden);

      //Guardo en Firestore
      //Create
      const db = getFirestore();

      const ordenCollection = collection(db, "ordenes");

      //Agregar validaciones acá
      addDoc(ordenCollection, orden)
      .then(respuesta => setIDCompra(respuesta.id))
      .catch(err => console.log("Error : " + err))
      .finally(() => vaciarCarrito());
      ;

      //Update
      /* const db = getFirestore();

      const documento = doc(db, "productos", "Dh6JOFael4HObY6byasW");

      updateDoc(documento, {stock: 666})
      .then(() => console.log("terminó la actaulización"))
      .catch(err => console.log("Error: " + err)); */

      //Escritura por lotes
      /* const db= getFirestore();

      const batch = writeBatch(db);

      const documento1 = doc(db, "productos", "Dh6JOFael4HObY6byasW"); //Baticapa
      const documento2 = doc(db, "productos", "rAH48nc4RFX9Or9lMJwH"); //baticueva

      batch.update(documento1, {stock: 25031972})
      batch.update(documento2, {stock: 25031972})

      batch.commit(); */

      //borrado logico
    //   const db = getFirestore();

    //   const documento = doc(db, "productos", "Dh6JOFael4HObY6byasW");

    //   updateDoc(documento, {estaActivo: false})
    //   .then(() => console.log("terminó la actaulización"))
    //   .catch(err => console.log("Error: " + err));
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

        {cartList.map((producto) => <div key={producto.id} className="row m-2">
                                        <img className="w-25 col-2" src={producto.imagen} />
                                        <p className="col-2">Cantidad: {producto.cantidad} - Precio: ${producto.precio} - Subtotal: ${producto.precio * producto.cantidad}
                                            <button className="btn btn-danger col-2" onClick={() => removerProducto(producto.id)}> X </button>
                                        </p>
                                        
                                        
                                    </div>

        )}

        {precioTotal() > 0 
        ?
        <>
        <label className="form-control m-4 w-50 bg-primary text-white">Precio Total: ${precioTotal()}</label> 

        
        <button className="btn btn-danger m-4" onClick={vaciarCarrito}>Vaciar Carrito</button>
        <form className="form-control mx-4 w-50 m-4" onSubmit={handleOrden} >
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

 