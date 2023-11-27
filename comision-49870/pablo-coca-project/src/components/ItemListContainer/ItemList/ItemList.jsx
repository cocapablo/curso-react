import { Link } from "react-router-dom"
import { Filter } from "./Filter"
import { Item } from "../Item"
import { memo, useContext } from "react"
import { AppContext } from "../../../App"

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

//const AppContext = React.createContext([]);
//memo(Componente) o memo(componente, funcionComparadora) Estos son los dos usos posibles

export const ItemList = memo( ({productos}) => {
    const {prodGlobales} = useContext(AppContext); //Esto si quiero usar el Context

  return (
    //<Filter productos={prodGlobales} > para hacerlo con el context
    <Filter productos={productos}> 
    
        {productFiltered}
        
      </Filter>
  )
}, (propsViejas, propsNuevas) => {console.log(propsViejas, propsNuevas);
    propsViejas.productos.lenght !== propsNuevas.productos.lenght}
)


 
