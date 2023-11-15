

export const ButtonCount = ({handleInter}) => {
  return (
    <>
        <div>
            <button className="btn btn-primary"> + </button>
            <label> 1 </label>
            <button className="btn btn-primary"> - </button>
        </div>

        <button
        className="btn btn-outline-success"
        onClick={handleInter} >
            Agregar al Carrito
        </button>
    </>
  )
}

