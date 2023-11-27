import { useCounter } from "../../hooks/useCounter";


export const ItemCounter = ({initial=1, stock=5, onAdd}) => {
    
    const {counter, handleSumar, handleRestar} = useCounter(initial, stock);

    const handleOnAdd = () => {
        onAdd(counter);
    }

  return (
    <div className="w-25">
        <button className="btn btn-outline-dark" onClick={handleSumar}> + </button>
        <label className="w-1 p-2">{counter}</label>
        <button className="btn btn-outline-dark" onClick={handleRestar}> - </button>
        <button className="btn btn-outline-dark" onClick={handleOnAdd}> Agregar al Carrito </button>
    </div>
  )
}

