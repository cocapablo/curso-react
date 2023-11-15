import { useState } from "react";
import { Titulo2 } from "../Titulo/Titulo"
import './Formulario.css'
import { Form } from "./Form";
import { formWithValidation } from "./formWithValidation";

const FormWithValidation = formWithValidation(Form);

//Formulario es un componente Contenedor
export const Formulario = ({saludo="Soy el saludo default", titulo = {}, children}) => { //children recibe componentes hijos
    console.log("Children: " + children); //Las propiedades pueden ser cualquier cosa. Valores, funciones, objetos o componentes

    const [formData, setFormData] = useState({
      nombre : "",
      email : ""
    });

    const handleOnChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setFormData({
          ...formData,
          [evt.target.name] : evt.target.value
        })
    }

    

    return (
      <div className="formulario">
        <Titulo2 titulo="Título de Formulario" subtitulo="Subtítulo de formulario"/>
        <Titulo2 titulo={titulo.titulo} subtitulo={titulo.subtitulo} />
        {children} 
        <h3>{saludo}</h3>

        <FormWithValidation formData={formData} handleOnChange={handleOnChange} />
        
      </div>
    )
      
  }