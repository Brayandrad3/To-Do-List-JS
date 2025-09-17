//Creamos las consantes globales para los elementos principales 
const input = document.getElementById("to-do");
const addBtn = document.getElementById("add");
const toDoList = document.getElementById("cont-to-do-list");
const conCompletList = document.getElementById("cont-complete");

//Creamos la funcion que nos permite crear una nueva tarea

function createToDoItem(textoItem) {
    //Creamos el nodo o elemento padre
    const item = document.createElement("div");
    //Toda etiqueta que vamos a crear es a partir de la maqueta html pre existente
    item.classList.add("item-to-do");
    //Creamos el nodo o elemento hijo yle agregamos el nodo checkbox
    const checkbox = document.createElement("input");
    checkbox.type = ("checkbox");
    //Creamos el siguiente nodo hijo, parrafo
    //A este parrafo le asigno el valor del argumento de la funcion, 
    //es decir lo que escribe el usuario en el campo
    const p = document.createElement("p");
    p.textContent = textoItem;
    //Creamos el ultimo nodo hijo, el boton de eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    //Ensamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);
    //Utilizamos el return para dar respuesta del elemento creado, ya que lo usaremos en otra funcion mas adelante
    return item;
}