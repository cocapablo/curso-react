let productos = [
  { id: 1, nombre: "Capa roja", precio: 1000, categoria: "Capas", imagen: "https://http2.mlstatic.com/fantasia-capa-do-super-heroi-superman-tamanho-unico-infantil-D_NQ_NP_633770-MLB27115950667_042018-F.jpg" },
  { id: 2, nombre: "Escudo América", precio: 5000, categoria: "Super Armas", imagen: "https://i.ytimg.com/vi/ylvxkf2idm4/maxresdefault.jpg#auto" },
  { id: 3, nombre: "Baticapa", precio: 2000, categoria: "Capas", imagen: "https://th.bing.com/th/id/OIP.ULTzVMrvbIBo893YHQ89gAHaJj?w=163&h=210&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
  { id: 4, nombre: "Batimovil", precio: 10000, categoria: "Vehículos", imagen: "https://i1.wp.com/autoproyecto.com/wp-content/uploads/2017/11/01-3.jpg?quality=80&strip=all" }
];
export const miFetch = () => {
  return new Promise((res, rej) => {
    //acciones
    if (productos.length > 0) {
      setTimeout(() => res(productos), 5000); //resuelto("Acá te devuelvo lo que me prestaste"); //el parámetro es el resultado del estado Completado (2)
    } else {
      setTimeout(() => rej("No se encontraron productos"), 5000);
    }

  });
};
