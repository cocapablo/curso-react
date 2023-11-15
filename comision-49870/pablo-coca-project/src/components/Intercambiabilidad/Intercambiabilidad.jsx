import { useState } from "react"
import { ButtonCount } from "../ButtonCount/ButtonCount";
import { InputCount } from "../InputCount/InputCount";

export const Intercambiabilidad = () => {
    const [inputType, setInputType] = useState(true);

    const handleInter = () => {
        setInputType(false);
    }

  return (
    <center>
        <h2>Item Description</h2>

        {inputType ? 
        <ButtonCount handleInter={handleInter} />
        :
        <InputCount />
        }

    </center>
  )
}

