import React, { useEffect, useRef, useState } from 'react'
import { Titulo2 } from '../Titulo/Titulo'
import { Formulario } from '../Formulario/Formulario'
import './Home.css'

//Ciclo de vida de un componente
//La primera ejecución se llama montaje
//cada actualización se llama re render 
//Cosas que disparan una nueva ejecución de la componente (re render)
// 1 - Evento
// 2 - Cambio en el estado
// 3 - Cambio en las props
// Desmontaje - Cuando se elimina el nodeo de la interfaz (DOM)

const Home = () => {
  //estado
  const hookEstado = useState(1);
  const [count, cambiarValorDeCount] = hookEstado;
  console.log(count, cambiarValorDeCount);

  //useEffect : permite manejar distintas etapas en el ciclo de vida
  useEffect(
    () => {
      //Tareas que necesite realizar como efecto secuendario. Ej llamar a una API
      //Se llama después de renderizar
      console.log("Siempre se ejecuta si está así. - 1");

      //Clean Up

      return () => {
        console.log("Efecto de limpieza");
        //Esto se ejecuta después de cada dismounting
        //Se usa para desregistrar eventos y detectar dismounting
        console.log("document.removeEventListener(click, () => {})"); //ESto se usa porque cada vez que se renderiza se vuelve a registrar el evento. Asì se desregistra y se vuelve a registrar
        console.log("Dismounting Home");
      };
    }
  );

  useEffect(
    () => {
      //Tareas que necesite realizar como efecto secuendario. Ej llamar a una API
      //Se llama después de renderizar
      console.log("Se ejecuta solo en el montaje (la primera vez). Acá se llamaría a una API que carga cosas al principio - 2");
    }, [] //Array de dependencias
  );

  

  //let count = 1; //no es persistente porque dura lo que dura la ejecución de la función
  //hook

  const handleAdd = () => {
    //count++;
    cambiarValorDeCount(count + 1);
    console.log("Count = " + count);
  }

  const hookLike = useState(false);
  const [like, setLike] = hookLike;

  const handleLike = () => {
    //count++;
    setLike(!like);
    console.log("Like = " + like);
  }

  useEffect(
    () => {
      //Tareas que necesite realizar como efecto secuendario. Ej llamar a una API
      //Se llama después de renderizar
      console.log("Se ejecuta solo cuando cambia like - 3");
    }, [like] //Array de dependencias : las dependencias son estados y props que se usan como condiciones para ejecutar un useEffect
  );

  let ref = useRef(0);
  console.log("Current : " + ref.current); // ref va a ser persistente pero no provoca un nuevo render
  ref.current++;

  const divRef = useRef(null);

  let titulo1 = {titulo: "Lo que el viento se llevó",
                subtitulo: "Excelente película"};

  let titulo2 = {titulo: "Se lo que hicieron el verano pasado",
  subtitulo: "Película recontra chusma"};      
  
  
 
  //alert("Tareas pesadas o asicronicas consulta a una Api o fetch"); // Debería ir después del render, pero como no se puede se usa useEffect

  //Un evento me dispara una nueva ejecución de la función (re render)
  console.log("Render Home 4");

  const handleDivRef = () => {
      divRef.current.innerText = "Nuevo contenido";
  };

  return (
    <div className='home'>
      <label>Current : {ref.current}</label>
      <div ref={divRef} > 
        Contenido Inicial
      </div>

      <Titulo2 titulo="Soy el título de Home" subtitulo="Soy el subtítulo de Home" />
      <Formulario saludo="Soy el magnífico formulario de Home" titulo={titulo1} >
        <Titulo2 titulo="Soy el titulo componente" subtitulo="Soy el subtítulo componente" />
        <Titulo2 titulo="Soy el titulo componente 2" subtitulo="Soy el subtítulo componente 2" />
      </Formulario>
      <p>{count}</p>
      <button onClick={handleAdd}>Sumar</button>
      <button onClick={handleLike}>Me Gusta</button>
      <button onClick={handleDivRef}>Cambiar texto Ref</button>
    </div>
  )
}

export default Home