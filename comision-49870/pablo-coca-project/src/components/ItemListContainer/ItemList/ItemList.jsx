import { Link } from "react-router-dom"
import { Filter } from "./Filter"
import { Item } from "../Item"
import { memo } from "react"


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
            productos.map((producto) => 
                <Item producto={producto} />
            )
            : 
            productos
            .filter(prod => prod.nombre.toLowerCase().includes(filterState))
            .map((producto) => 
                <Item producto={producto} />
                )
            }
            </div>
        </div>
    </>
)



export const ItemList = memo( ({productos}) => {
    

  return (
    
    <Filter productos={productos}> 
    
        {productFiltered}
        
      </Filter>
  )
}, (propsViejas, propsNuevas) => {
    propsViejas.productos.lenght !== propsNuevas.productos.lenght}
)


 
