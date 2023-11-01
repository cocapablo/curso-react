//Componenetes son funciones que comienzan con mayúscula y retornan JSX
//Componentes parametrizadas
//Los parametros en JSX son atributos de las etiquetas y JSX las pasa a las componenetes como propiedades de un solo objeto (en este caso llamado propiedades)
import './Titulo.css'

export const Titulo2 = (propiedades) => { //también puedo pasar los parámetros con destructuring directamente ({titulo, subtitulo})
    const {titulo, subtitulo} = propiedades; //Destructuring
  
    return (
      <div className='titulo' > {/* Esto era un fragment <>, no creo un nuevo nodo en el DOM */}
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
      </div>
    )
  }

  