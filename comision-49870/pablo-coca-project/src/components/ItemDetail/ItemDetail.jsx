

export const ItemDetail = ({producto}) => {
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
</div>
  )
}

