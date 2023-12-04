import { useEffect } from "react";

export const Loading = () => {
    useEffect(() => {
      //Código
      return () =>
        console.log("Desmontando Loading...");
      
      }
    );
  
    return(
      <h2>Cargando ...</h2> 
    );
  }