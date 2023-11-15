export const ItemOptions = ({opcion, opciones, opcionSeleccionada}) => { //Componenete funcional: solo muestra
    return (
        <div>
            {opcion === 2
            ?
            <img src="https://th.bing.com/th?id=OIP.8zNIsw46XE6hSm3al_b1hgHaFv&w=283&h=220&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
            :
            <img src="https://th.bing.com/th?id=OIP.xAVfi7D2d7y7Jrku7aX2_AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" />
            
            }
            <select onChange={(evt) => opcionSeleccionada(Number(evt.target.value))} >
            
                {
                    //Con un select
                    opciones.map((val) => (
                        <option value={val.valor}>{val.texto}</option>
                    ))
                }
            </select>

            {

            //Con un radio button
            opciones.map((opt) => (
            <>
                <input
                    type = "radio"
                    name = "color"
                    id = {opt.valor}
                    checked = {opt.valor === opcion}
                    onChange={() => opcionSeleccionada(opt.valor) }
            
                />
                <label>{opt.texto}</label>

            </>
                 
            )
            ) 
            }

        </div>
    )
}