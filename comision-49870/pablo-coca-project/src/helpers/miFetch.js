import {getFirestore, doc, getDoc, collection, getDocs, query, where, limit, orderBy} from "firebase/firestore";

let productos = [
  { id: "1", nombre: "Capa roja", descripcion: "Fantástica capa roja con la cual no pasarás desapercibido nunca al volar por los cielos", precio: 1000, stock: 1000, categoria: "capas", imagen: "https://http2.mlstatic.com/fantasia-capa-do-super-heroi-superman-tamanho-unico-infantil-D_NQ_NP_633770-MLB27115950667_042018-F.jpg" },
  { id: "2", nombre: "Escudo América", descripcion: "Con la estrella y los colores de USA estampados defenderás a la nación del norte de sus malvadísimos enemigos", precio: 5000, stock: 1800,categoria: "superarmas", imagen: "https://i.ytimg.com/vi/ylvxkf2idm4/maxresdefault.jpg#auto" },
  { id: "3", nombre: "Baticapa", descripcion: "Con esta fantástica capa no volarás, pero te defenderás de las balas. También tendrás un aire misterioso-lúgubre, conquistando el bati corazón de miles de señoritas", precio: 2000, stock: 1200, categoria: "capas", imagen: "https://th.bing.com/th/id/OIP.ULTzVMrvbIBo893YHQ89gAHaJj?w=163&h=210&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
  { id: "4", nombre: "Batimovil", descripcion: "Negro, bajito  y lleno de armas, es la mejor descripción que se puede hacer de este vehículo. Imposible estacionarlo en horas pico", precio: 10000, stock: 100,categoria: "vehiculos", imagen: "https://i1.wp.com/autoproyecto.com/wp-content/uploads/2017/11/01-3.jpg?quality=80&strip=all" },
  { id: "5", nombre: "Baticueva", descripcion: "Esta misteriosa guarida se encuentra en las profundidades de la tierra y el personal de limpieza es un solo hombre: Alfred (pensá en lo que te ahorrás de costos laborales). En los 60 se ingresaba por batitubos. Ahora Dios sabe como", precio: 1000000, stock: 5, categoria: "guaridas", imagen: "https://th.bing.com/th/id/OIP.1LFc1YCkhZcPY8h9RzOKyQHaE7?w=256&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
  { id: "6", nombre: "Kriptonita", descripcion: "La piedra verde más temida por los kriptonianos. También combina perfectamente con cualquier adorno en tu hogar", precio: 300, stock: 250, categoria: "superarmas", imagen: "https://th.bing.com/th/id/OIP.6rhMk7-uwsLYx7tPP18tbQHaF6?w=216&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" }
];

/* export const miFetch = ({idProducto = 0, categoria=""}) => {
  return new Promise((res, rej) => {
    //acciones
    if (productos.length > 0) {
      if (idProducto === 0) {
        //Me fijo si hay alguna categoria especificada
        if (categoria.length > 0) {
          let productosElegidos;

          productosElegidos = productos.filter((producto) => producto.categoria === categoria);
          setTimeout(() => res(productosElegidos), 2000);    
        }
        else {
          //Devuelvo todos los productos
          setTimeout(() => res(productos), 2000); //resuelto("Acá te devuelvo lo que me prestaste"); //el parámetro es el resultado del estado Completado (2)
        }
      }
      else {
        //Retorna un array con solo el Producto cuyo id = idProducto
        let productosElegidos;

        productosElegidos = productos.filter((producto) => producto.id == idProducto);
        setTimeout(() => res(productosElegidos), 2000);
      }
    } else {
      setTimeout(() => rej("No se encontraron productos"), 5000);
    }

  });
}; */

//export const miFetch = fetchMock;
export const miFetch = fetchFirebase;

function fetchMock({idProducto = 0, categoria=""}) {
  return new Promise((res, rej) => {
    //acciones
    if (productos.length > 0) {
      if (idProducto === 0) {
        //Me fijo si hay alguna categoria especificada
        if (categoria.length > 0) {
          let productosElegidos;

          productosElegidos = productos.filter((producto) => producto.categoria === categoria);
          setTimeout(() => res(productosElegidos), 2000);    
        }
        else {
          //Devuelvo todos los productos
          setTimeout(() => res(productos), 2000); //resuelto("Acá te devuelvo lo que me prestaste"); //el parámetro es el resultado del estado Completado (2)
        }
      }
      else {
        //Retorna un array con solo el Producto cuyo id = idProducto
        let productosElegidos;

        productosElegidos = productos.filter((producto) => producto.id == idProducto);
        setTimeout(() => res(productosElegidos), 2000);
      }
    } else {
      setTimeout(() => rej("No se encontraron productos"), 5000);
    }

  });
};

function fetchFirebase({idProducto = 0, categoria=""}) {
  return new Promise((res, rej) => {
    let producto; 
    let productosLeidos; 

    //acciones
    console.log("Producto elegido: " + idProducto);
    const dbFirestore = getFirestore(); //Conecta con firestore
    //categoria = "superarmas";
    //idProducto = "eAdvA8cWzXWICbqDInrB";

    if (idProducto === 0) {
      //Me fijo si hay alguna categoria especificada
      if (categoria.length > 0) {
        //Filtro por categoría
        const queryCollection = collection(dbFirestore,"productos");
        console.log("Categoria elegida: " + categoria);

        const queryFilter = query(queryCollection, where("categoria", "==", categoria));
              
        getDocs(queryFilter)
        .then(resultado => {
          productosLeidos = resultado.docs.map(producto => ({id : producto.id, ...producto.data()}));
          console.log("Productos filtrados");
          console.log(productosLeidos);
          res(productosLeidos);
        }
        )
        .catch(err => rej(err));
        //setTimeout(() => res(productosElegidos), 2000);    
      }
      else {
        //Devuelvo todos los productos
        //Trae todos los productos
        
        const queryCollection = collection(dbFirestore,"productos");
        console.log("Estoy devolviendo todos los productos " + idProducto);

        getDocs(queryCollection)
        .then(resultado => res(productosLeidos = resultado.docs.map(producto => ({id : producto.id, ...producto.data()}))))
        .catch(err => rej(err));
        //setTimeout(() => res(productos), 2000); //resuelto("Acá te devuelvo lo que me prestaste"); //el parámetro es el resultado del estado Completado (2)
      }
    }
    else {
      //Retorna un array con solo el Producto cuyo id = idProducto
      const queryDoc = doc(dbFirestore, "productos", idProducto);  //Apunto aun doc de firestore
      console.log("Producto elegido: " + idProducto);
  
      getDoc(queryDoc)
      .then(resultado => {
        producto = {id : resultado.id, ...resultado.data()};
        producto.id && console.log(producto); 
        productosLeidos = [producto];
        res(productosLeidos);  
      }
      )
      .catch(err => rej(err));

      

      const queryCollection = collection(dbFirestore,"productos");

      const queryFilter = query(queryCollection, where("id", "==", idProducto));
            
      getDocs(queryFilter)
      .then(resultado => res(productosLeidos = resultado.docs.map(producto => ({id : producto.id, ...producto.data()}))))
      .catch(err => rej(err));
      //setTimeout(() => res(productosElegidos), 2000);
    }
    

  });

 

}