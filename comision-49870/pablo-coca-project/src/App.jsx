import React from 'react'
import { NavBar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <div>
        <NavBar />
        <ItemListContainer greeting="Bienvenidos Superhéroes del Universo" />
    </div>
  )
}


export default App
