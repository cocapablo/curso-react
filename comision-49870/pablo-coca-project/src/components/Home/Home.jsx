import React, { useState } from 'react'
import { Titulo2 } from '../Titulo/Titulo'
import { Formulario } from '../Formulario/Formulario'
import './Home.css'

const Home = () => {
  //estado
  const hookEstado = useState(1);
  const [count, cambiarValorDeCount] = hookEstado;
  console.log(count, cambiarValorDeCount);

  //let count = 1; //no es persistente porque dura lo que dura la ejecución de la función
  //hook

  const handleAdd = () => {
    //count++;
    cambiarValorDeCount(count + 1);
    console.log("Count = " + count);
  }

  //Un evento me dispara una nueva ejecución de la función (re render)
  return (
    <div className='home'>
      <Titulo2 titulo="Soy el título de Home" subtitulo="Soy el subtítulo de Home" />
      <Formulario saludo="Soy el magnífico formulario de Home" />
      <p>{count}</p>
      <button onClick={handleAdd}>+</button>
    </div>
  )
}

export default Home