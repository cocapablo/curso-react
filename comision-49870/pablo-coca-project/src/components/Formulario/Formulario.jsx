import { Titulo2 } from "../Titulo/Titulo"
import './Formulario.css'

export const Formulario = ({saludo="Hola formulario"}) => {
    return (
      <div className="formulario">
        <Titulo2 titulo="Título de Formulario" subtitulo="Subtítulo de formulario"/>
        <h3>{saludo}</h3>
        <form>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="idNombre" placeholder='Ingrese su nombre'/>
        </form>
      </div>
    )
      
  }