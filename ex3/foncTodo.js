const n=document.querySelector("#name"),
      c=document.querySelector("#content"),
      b=document.querySelector("#addbtn"),
      tl=document.querySelector(".todo-list");
      b.addEventListener("click",addTodo);
function addTodo(e){
    e.preventDefault();
    if (c.value!="" && n.value!=""){
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = n.value + " : " + c.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    const delbtn = document.createElement("button");
    delbtn.innerHTML = '<i class="fas fa-trash"></i>';
    delbtn.classList.add("trash-btn");
    todoDiv.appendChild(delbtn);
    delbtn.addEventListener("click",deleteTodo);
    tl.appendChild(todoDiv);
    n.value="";
    c.value="";
    }
    else{
      alert("Tu dois remplir les deux champs");
    }
}
function deleteTodo(e){
  e.target.parentElement.remove();
}