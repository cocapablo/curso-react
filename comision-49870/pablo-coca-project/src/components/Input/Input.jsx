

export const Input = () => {
    const handleInput = (evento) => {
        //Escribo SOLO consonantes
        evento.key && (evento.key === "a" || evento.key === "e" || evento.key === "i" || evento.key === "o" || evento.key === "u") && evento.preventDefault();
        
        //console.log(evento);
        evento.stopPropagation(); //Esto significa que el evento no sube hacia las componentes padres
        console.log("Apretó la tecla: " + evento.key);
    }

  return (
    <div className="box border border-5 border-primary m-3">
        <div >
            <input className="m-5"
            type="text"
            name="nombre"
            onKeyDown={handleInput} 
            onClick={handleInput}
            />
        </div>
    </div>
  )
}

