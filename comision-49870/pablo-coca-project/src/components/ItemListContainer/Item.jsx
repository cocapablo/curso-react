import { memo } from "react"
import { Link } from "react-router-dom"

export const Item = memo(({producto}) => {
  return (
    <div key={producto.id} className="col-3 card w-25 m-3">
        <div className="card-body p-0 my-3">
            <img src={producto.imagen} className="w-100" alt="Imagen del producto" />
            <h6>{producto.nombre}</h6>
            <p>{producto.precio}</p>
        </div>
        <div className="card-footer">
            <Link to={`/producto/${producto.id}`}>
                <button className="btn btn-outline-dark w-100">Detalle </button>
            </Link>
        </div>
    </div>)
  
}
)
