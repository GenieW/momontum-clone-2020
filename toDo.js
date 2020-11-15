const todoForm = document.querySelector(".js-todo-form"),
      todoInput = todoForm.querySelector(".js-todo-input"),
      todoList = document.querySelector(".js-todo-list");

const TODO_LS = "to_do_list"
let toDos = [];


function handleDelete(event){
    const clickedTask = event.target.parentElement;
    todoList.removeChild(clickedTask);
    const remainToDos = toDos.filter(function(element) {
        return element.id !== parseInt(clickedTask.className);
    } );
    toDos = remainToDos;
    saveToDo(toDos);
}

//변경된 배열을 local storage 에 저장해준다. 
function saveToDo(text) {
    localStorage.setItem(TODO_LS, JSON.stringify(text));
}

//local storage 에 저장할 수 있게끔, toDos 배열을 업데이트 해준다. 
function setToDo(text,id) {
    const todoObject = {
        task: text,
        id: id
    }
    toDos.push(todoObject);
    saveToDo(toDos);
}

//li,button,span 생성하고, html ul 태그 안에 넣어줌으로써 화면에 보여준다. 버튼 클릭에 대한 함수를 호출한다. 
function printToDos(text) {
    const li = document.createElement("li");
    const doneBtn = document.createElement("button");
    const span = document.createElement("span");
    const newCN = toDos.length +1 ;
    li.className = newCN;
    doneBtn.innerText = "✓";
    span.innerText = text;
    li.appendChild(doneBtn);
    li.appendChild(span);
    todoList.appendChild(li);
    setToDo(text, newCN);
    doneBtn.addEventListener("click",handleDelete); 
}

//사용자가 엔터(submit)를 쳤을 때 호출되며, 새로운 할 일에 대해 printToDos 호출.  
function handleSubmitTodo(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    printToDos(currentValue);
    todoInput.value = "";
}

//local storage 에 저장된 to-do리스트를 불러오고, 화면에 보여준다. 
function loadToDoList(){
    const savedList = localStorage.getItem(TODO_LS);
    if(savedList != null) {
        const parsedList = JSON.parse(savedList);
        parsedList.forEach(function(element) {        //forEach 는 배열에서만 쓸 수 있다. 
            printToDos(element.task);
        });
    }
}

function init(){
    loadToDoList();
    todoForm.addEventListener("submit", handleSubmitTodo);
}

init();