import { Filter } from "./Filter"

const productFiltered = ({productos, filterState, handleFilterChange}) => (
    <>
        <div>
            <label>Buscar</label>
            <input 
            className="form-control" 
            type="text" 
            value={filterState}
            onChange={handleFilterChange}></input>
        </div>
        <br />
        <div className="container">
            <div className="row">
            {filterState === "" 
            ?
            productos.map((producto) => <div key={producto.id} className="col-3 card w-25 m-3">
                <div className="card-body p-0 my-3">
                    <img src={producto.imagen} className="w-100" alt="Imagen del producto" />
                    <h6>{producto.nombre}</h6>
                    <p>{producto.precio}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-dark w-100">Detalle </button>
                </div>
            </div>)
            : 
            productos
            .filter(prod => prod.nombre.toLowerCase().includes(filterState))
            .map((producto) => <div key={producto.id} className="col-3 card w-25 m-3">
                <div className="card-body p-0 my-3">
                    <img src={producto.imagen} className="w-100" alt="Imagen del producto" />
                    <h6>{producto.nombre}</h6>
                    <p>{producto.precio}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-dark w-100">Detalle </button>
                </div>
            </div>)
            }
            </div>
        </div>
    </>
)

export const ItemList = ({productos}) => {
  return (
    <Filter productos={productos}>
        {productFiltered}
        
      </Filter>
  )
}



