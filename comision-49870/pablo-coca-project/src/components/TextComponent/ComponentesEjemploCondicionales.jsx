

export const TextComponent = ({usuario = false, children}) => {
    //if con retorno temprano
    if (!usuario) {
        return(
            <h2>Usted no puede ver este componente porque no está logueado</h2>
        )
    }
  return (
    <>
        <h2>¡Bienvenido!</h2>
        {children}
    </>
  )
}

export const TextComponent2 = ({usuario = "admin"}) => {
  //Llamado a Context
  //Inline con Fragment
  
return (
  <>
      <button className="btn btn-outline-danger">Para todos </button>
      
      {usuario === "admin" && <button className="btn btn-outline-danger">Admin</button>}

      {usuario !== "admin" && <button className="btn btn-outline-primary">Usuario</button>}
  </>
)
}

export const TextComponent3 = ({stock = 0}) => {
  //Llamado a Context
  //Inline con Fragment
  
return (
  <>
      <h2>{stock === 0 ? "No hay Stock" : "Hay Stock"}</h2>
  </>
)
}

export const TextComponent4 = ({stock = 0}) => {
  //Llamado a Context
  //Inline con Fragment
  
return (
  <>
      <h2 style={{color : stock ? "green" : "red"}}>
        {stock === 0 ? "No hay Stock" : "Hay Stock"}
      </h2>
  </>
)
}

export const TextComponent5 = ({stock = 0}) => {
  //Llamado a Context
  //Inline con Fragment
  
return (
  <>
      <h2 className={(stock > 0) ? "alert alert-success" : "alert alert-danger"}>
        {stock === 0 ? "No hay Stock" : "Hay Stock"}
      </h2>
  </>
)
}

export const TextComponent6 = ({stock = 0, otraClase="mt-2"}) => {
  //Llamado a Context
  //Inline con Fragment
  
return (
  <>
      <h2 className={`${(stock > 0) ? "alert alert-success" : "alert alert-danger"} ${otraClase || ""}`}>
        {stock === 0 ? "No hay Stock" : "Hay Stock"}
      </h2>
  </>
)
}

export const TextComponent7 = ({condicion = false, otraClase="mt-2"}) => {
  const props = condicion ? 
  {
    className : `alert alert-success ${otraClase || ""}`,
    style : {color: "red"},
    title: "Este es el título si la condición es verdadera",
    nombre: "Pablo Coca"
  }
  :
  {
    className : `alert alert-warning ${otraClase || ""}`,  
    style : {color: "green"},
  }
  
return (
  <>
      <h2 {...props}>
        Ud está correctamente logueado genio total
      </h2>
  </>
)
}

