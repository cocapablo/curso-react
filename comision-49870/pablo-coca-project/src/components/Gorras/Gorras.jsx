import { useState } from "react"
import { ItemOptions } from "../ItemOptions/ItemOptions";




const opciones = [ //Esto vendría en una API : Componenete contenedor - tiene la lógica de los estado}
    {valor : 1, texto: "Rojo"},
    {valor: 2, texto: "Azul"}
]

export const Gorras = () => {
   const [opcion, setOpcion] = useState(1);

    function opcionSeleccionada(valor) {
        setOpcion(valor);
    }

  return (
    <ItemOptions opcion={opcion} opciones={opciones} opcionSeleccionada={opcionSeleccionada} />
  )
}

