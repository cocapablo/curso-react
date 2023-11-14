import { useCounter } from "../../hooks/useCounter";


export const ItemCounter = ({initial=1, stock=5, onAdd}) => {
    
    const {counter, handleSumar, handleRestar} = useCounter(initial, stock);

    const handleOnAdd = () => {
        onAdd(counter);
    }

  return (
    <div className="w-25">
        <button onClick={handleSumar}> + </button>
        <label>{counter}</label>
        <button onClick={handleRestar}> - </button>
        <button onClick={handleOnAdd}> Agregar al Carrito </button>
    </div>
  )
}

