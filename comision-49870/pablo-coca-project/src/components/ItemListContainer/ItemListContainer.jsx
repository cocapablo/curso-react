
import { useState, useEffect } from "react"
import { miFetch } from "../../helpers/miFetch"
import { ItemList } from "./ItemList/ItemList";



/*
const task = new Promise((resuelto, rechazado) => {  //Estados: 1 - Pendiente - 2 - Completada (cumplida) - 3 - Rechazada (o perdida)
  //acciones
  setTimeout(() => resuelto("Acá te devuelvo lo que me prestaste"), 5000);
  //resuelto("Acá te devuelvo lo que me prestaste"); //el parámetro es el resultado del estado Completado (2)
  //rechazado("Sorry. No te puedo devolver la guita"); //Reachazado : el parámetro es el argumento del rechazo
}
);


console.log(task);
*/

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const getFetch = async () => {
    const resJSON = await fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20");
    const resultado = await resJSON.json();
    console.log(result);
    return result; //result es una Promise
  };

  /*
  useEffect(() =>
    {
    setTimeout(fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20").then(resultado => resultado.json()).then(pokemones => console.log(pokemones)).catch((errorcito) => console.log("Hubo un error y es este : " + errorcito)), 10000);
  }, []);
  */
  useEffect(() => {
    //
    //Ejemplo de fetch con verbo POST
    /*
    fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20", {
      method : "POST",
      headers : {
        "Content-Type": "aplication/json; charset: utf-8",
        "authentication": "Bearer asdfghertujksmnxxxxx"
      }
      body: JSON.stringify({nombre: "Pablo", apellido: "Coca"})
    }).then(resp => console.log(resp));
    */
    //Pokemones
    setTimeout(fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20").then(resultado => resultado.json()).then(pokemones => console.log(pokemones.results)).catch((errorcito) => console.log("Hubo un error y es este : " + errorcito)), 10000);

    //miFetch de Productos
    miFetch().
      then(productosRecibidos => {
        let nuevoProducto = { id: 5, nombre: "Kriptonita", precio: 300, categoria: "Armas", imagen: "https://th.bing.com/th/id/OIP.6rhMk7-uwsLYx7tPP18tbQHaF6?w=216&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" };

        if (productosRecibidos.some((prod) => prod.id == nuevoProducto.id) == false) {
          productosRecibidos.push(nuevoProducto);
        }

        //throw new Error("ERROR simulado");
        console.log(productosRecibidos);

        return productosRecibidos;
      }
        //respuestaDelResuleto.json(respuesta => {console.log("Respuesta final : " + respuesta)}),

      ).then(ultimosProductos => {
        console.log(ultimosProductos);
        setProductos(ultimosProductos);
      }).
      //error => console.log("Task RECHAZADO : " + error)).
      catch(err => console.log("ERROR: " + err));
  }, []);
  return (
    <div>
      <h2 className="text-center">{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  );
};