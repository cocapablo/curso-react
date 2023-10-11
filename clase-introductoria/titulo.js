const titulo = (div) => {
    const titulo = document.createElement("h2");

    titulo.innerText = "Bienvenidos a la comisión 49870";

    const subTitulo = document.createElement("h3");
    subTitulo.innerText = "Curso de React";

    div.appendChild(titulo);
    div.appendChild(subTitulo);

};

export default titulo;
