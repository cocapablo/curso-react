import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/HomeClase'
import { Titulo2 } from './components/Titulo/Titulo'
import { Formulario } from './components/Formulario/Formulario'

const Titulo = () => {
  return (
    <div>
      <h1>Soy el titulo</h1>
      <h2>Soy el subtitulo</h2>
    </div>
  )
}





//Existen 2 tipos de componenetes
//Funcional y presentacional
//Presentacional : Solo muestra info
//Funcional: tiene codigo de comportamiento

function AppClases() {
  const [count, setCount] = useState(0)

  let contador = 0;
  contador = contador + 1;
  contador++;
  contador += 1;

  const condicion = true;
  let resultado = null;

  if (condicion) {
    resultado = "Verdadero";

  }
  else {
    resultado = "Falso";
  }

  console.log("Resultado : " + resultado);

  //Sugar Syntax
  console.log(`El resultado es : ${condicion ? "Verdadero" : "Falso"}`);

  //Spread operator
  const cuatro = 4;
  const numeros = [0, 1, 2, 3];
  const nuevoArrayConCuatro = [...numeros, 4];

  console.log(nuevoArrayConCuatro);

  //Propiedades dinámicas
  const campoNuevo = "eMail";
  const persona = {
    nombre : "Pablo",
    apellido : "Coca",
    [campoNuevo] : "cocapablo@gmail.com"
  }

  console.log(persona);

  // deep matching
    // destructuring
    const {nombre, apellido} = persona;

    console.log(nombre + " " + apellido);

    const {nombre: firstName, apellido : lastName, eMail = "roberto@gmail.com", direccion = "Diaz Velez 4145"} = persona;

    console.log(firstName + " " + lastName + " - " + eMail + " - " + direccion);

  console.log(contador);

  let estilo = {
    color : "red",
    fontSize : "150%",
    backgroundColor : "yellow" //reemplazo el guión medio de CSS por camelCase
  }

  let sTitulo = "Soy el gran título";
  let sSubtitulo = "Soy el pequeño subtítulo";

  //JSX -> JavaScript + XML
  // Toda etiqueta tiene que tener un cierre (porque es XML)
  return (
    <>
      
      {/*Titulo()*/}
      <Titulo />
      {/* Las funciones se llaman como tags y empiezan siempre con mayuscula. Son componentes */}
      <Titulo />
      <Titulo />
      
      <Titulo2 titulo={sTitulo} subtitulo={sSubtitulo} />

      <Formulario saludo="Hola soy el formulario de prueba estrella"/>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Pablo sos un groso</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={estilo} onClick={() => alert("Bienvenidos. Esto es mi castillo")}>
        <p>Buenas noches. Mi nombre es Pablo Andrés Coca</p> 
        <p className='pabloDiv'>y mi signo es Aries</p> 
        <input type="text" name="nombre" id="" placeholder='Ingrese su nombre' ></input>
        <input type="text" name="apellido" id="" placeholder='Ingrese su apellido'/>
      </div>
      <Home />
    </>
  )
}

export default App

//Para el transpilado (pasar JSX a JavaScript puro usa Babel, antes usaba webpack, esBuild)
//Transpilar es como compilar pero para JavaScript