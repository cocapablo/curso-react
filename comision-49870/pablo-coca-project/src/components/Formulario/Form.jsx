

export const Form = ({formData, handleOnChange, errors, validateForm}) => {
    
    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            console.log("Enviando ...." + formData.nombre + " - " + formData.email);
        }
    }

  return (
    <div>
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input 
            type="text" 
            name="nombre" 
            id="idNombre" 
            value={formData.nombre}
            placeholder='Ingrese su nombre'
            onChange={handleOnChange}
          />
          <br />
          {errors && errors.nombre && <span>{errors.nombre}</span>}
          <br />
          <label htmlFor="email">eMail</label>
          <input 
            type="text" 
            name="email" 
            id="idemail" 
            value={formData.email}
            placeholder='Ingrese su eMail'
            onChange={handleOnChange}
          />
          <br />
          {errors && errors.email && <span>{errors.email}</span>}
          <br />
          <button>Enviar</button>
        </form>    
    </div>
  )
}

