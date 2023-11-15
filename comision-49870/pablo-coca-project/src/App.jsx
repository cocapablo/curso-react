import React from 'react'

import { NavBar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { ItemCounter } from './components/ItemCounter/ItemCounter';
//import { Formulario } from './components/Formulario/Formulario';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

export const App = () => {
  const onAdd = (cantidad) => {
      console.log("Cantidad: " + cantidad);
  }

  return (
    <Router>
      <div className='border border-5 border-primary m-3' 
      //onClick={() => alert("Evento de App")}
      >
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
            <Route path='*' element= {<Navigate to={"/"}/> } ></Route>       
          </Routes>
      </div>
    </Router>
  )
}


export default App
