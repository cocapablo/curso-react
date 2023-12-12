import React, { createContext, useState } from 'react'

import { NavBar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { ItemCounter } from './components/ItemCounter/ItemCounter';
//import { Formulario } from './components/Formulario/Formulario';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { productosGlobales } from './helpers/productos';
import { CartContextProvider } from './contexts/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';



export const AppContext = createContext([]);

console.log("El Context es :" + AppContext);

export const App = () => {
  const [prodGlobales, setProdGlobales] = useState(productosGlobales);

  const onAdd = (cantidad) => {
      console.log("Cantidad: " + cantidad);
  }

  return (
    <Router>
      <AppContext.Provider value={{
        prodGlobales
        //saludo
      }} >
      <div className='border border-5 border-primary m-3' 
      //onClick={() => alert("Evento de App")}
      >
          
          
            <CartContextProvider>
            <NavBar />
              <Routes>
                
                  <Route path='/' element= {<ItemListContainer greeting="Bienvenidos Superhéroes del Universo" /> } ></Route>
                  {/*}
                  <Route path='/counter' element= {<ItemCounter initial={1} stock={10} onAdd={onAdd}/> } ></Route>
                
                  <Route path='/formulario' element= {<Formulario titulo={{titulo: "Formulario de Clase 8", subtitulo:"Un desafío apasionante si los hay"}} /> } ></Route>
                  */ }
                  <Route path='/productos' element= {<ItemListContainer greeting="Bienvenidos Superhéroes del Universo" /> } ></Route>
                  <Route path='/producto/:pid' element= {<ItemDetailContainer /> } ></Route>
                  <Route path='/categoria/:cid' element= {<ItemListContainer greeting="Bienvenidos Superhéroes del Universo" /> } ></Route>
                  <Route path='/cart' element= {<CartContainer /> } ></Route>
                  <Route path='*' element= {<Navigate to={"/"}/> } ></Route>     
                  
              </Routes>
            </CartContextProvider>
          
      </div>
      </AppContext.Provider>   
    </Router>
    
  )
}


export default App

//Depuracion de codigo
// optimizar nuestro código para la entrega final
    // 1- no repetir cód.
    // 2- no mezclar idiomas en el cód. 
    // 3- no al cód comentado. 
    // 4- eliminar todos los console.log (menos los de los errores)
    // 5- Eliminar todo lo que no necesitemos -> mock el fetch - promises fuinciones que no usemos
    // 6- identar bien el cód. 
    // 7- no debe haber variables o estados declarados nunca usados
    // 8- Eliminar importaciones declaradas nunca usadas
    // 9- diseño modular- cada función - en sus archivos bien separadas las responsabilidades
