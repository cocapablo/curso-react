import { Titulo2 } from "../Titulo/Titulo"
import './Formulario.css'

export const Formulario = ({saludo="Soy el saludo default", titulo = {}, children}) => { //children recibe componentes hijos
    console.log("Children: " + children); //Las propiedades pueden ser cualquier cosa. Valores, funciones, objetos o componentes

    return (
      <div className="formulario">
        <Titulo2 titulo="Título de Formulario" subtitulo="Subtítulo de formulario"/>
        <Titulo2 titulo={titulo.titulo} subtitulo={titulo.subtitulo} />
        {children} 
        <h3>{saludo}</h3>

        <form>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="idNombre" placeholder='Ingrese su nombre'/>
        </form>
      </div>
    )
      
  }