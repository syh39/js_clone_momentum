const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const toDoListDone = document.querySelector('#todo-list-done');

let toDos = [];

const TODOS_KEY = 'todos';
const LINETHROUGH = 'line-through';
const TODO_SPAN = 'todo_span';
const TODO_CHECKBOX = 'todo_checkbox';
const TODO_LABEL = 'todo_card';

const saveToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

const deleteTodo = (event) => {
    const p1 = event.target.parentElement;
    p1.remove();
    toDos = toDos.filter((item) => item.id !== parseInt(p1.id));
    saveToDos();
}

const toggleTodo = (event) => {
    const p1 = event.target.parentElement;
    toDos.forEach((item)=> {
        if(item.id === parseInt(p1.id)) {
            if(item.done == 'false') {
                item.done = 'true';
                p1.children[1].classList.add(LINETHROUGH);  
            } else {
                item.done = 'false';
                p1.children[1].classList.remove(LINETHROUGH);   
            }
        }
        console.log(item);
    })
    saveToDos();
    loadToDos();
}


const paintToDo = (newTodoObj) => {
    const p1 = document.createElement('p');
    p1.id = newTodoObj.id;
    p1.classList.add('todo_p');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';  // setAttribute('type', 'checkbox');
    checkbox.id = newTodoObj.id + 1;
    checkbox.classList.add(TODO_CHECKBOX);
    checkbox.addEventListener('click', toggleTodo);

    const label = document.createElement('label');
    label.setAttribute('for', checkbox.id);
    label.classList.add(TODO_LABEL);

    const span = document.createElement('span');
    span.innerText = newTodoObj.text;
    span.classList.add(TODO_SPAN);
    label.appendChild(span);
    
    const deleteButton = document.createElement('i');
    deleteButton.classList.add('fa');
    deleteButton.classList.add('fa-trash');
    deleteButton.classList.add('w3-xlarge');
    deleteButton.addEventListener('click', deleteTodo);

    p1.appendChild(checkbox);
    p1.appendChild(label);
    p1.appendChild(deleteButton);

    if(newTodoObj.done == 'false') {
        p1.children[1].classList.remove(LINETHROUGH);
        p1.children[0].checked = false;
        toDoList.appendChild(p1);
    } else {
        p1.children[1].classList.add(LINETHROUGH);
        p1.children[0].checked = true;
        toDoListDone.appendChild(p1);
    }
}

const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newTodo =  toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        done: 'false'
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const loadToDos = () => {
    while(toDoList.firstChild) {
        toDoList.firstChild.remove();
    }
    while(toDoListDone.firstChild) {
        toDoListDone.firstChild.remove();
    }
    const loadedTodos = localStorage.getItem(TODOS_KEY);

    if(loadedTodos !== null) {
        const parsedToDos = JSON.parse(loadedTodos);
        toDos = parsedToDos;
        parsedToDos.forEach(paintToDo);
    }
}

loadToDos();


