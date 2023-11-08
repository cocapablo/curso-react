import React from 'react'
import { NavBar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemCounter } from './components/ItemCounter/ItemCounter';
import { Formulario } from './components/Formulario/Formulario';

export const App = () => {
  const onAdd = (cantidad) => {
      console.log("Cantidad: " + cantidad);
  }

  return (
    <div>
        <NavBar />
        <ItemListContainer greeting="Bienvenidos Superhéroes del Universo" />
        <ItemCounter initial={1} stock={10} onAdd={onAdd}/>
        <Formulario titulo={{titulo: "Formulario de Clase 8", subtitulo:"Un desafío apasionante si los hay"}} />
    </div>
  )
}


export default App
