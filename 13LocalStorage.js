const button = document.getElementById('addBtn');
button.addEventListener('click', (e) => {
    const Input = document.getElementById('todo');
    const TodoMsg = Input.value.trim();
    if (TodoMsg) {
        const TodoObj = {
            id: Date.now(),
            todo: TodoMsg,
            complete: false
        }
        addTodos(TodoObj);
        Input.value = "";
    }
});
const addTodos = (TodoObj) => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(TodoObj);
    localStorage.setItem('todos', JSON.stringify(todos))
    TodoDisplay()
}

const TodoDisplay = () => {
    const TodoContainer = document.getElementById('todo-container');
    TodoContainer.innerHTML = "";

    const todos = JSON.parse(localStorage.getItem('todos')) || []

    todos.forEach((todo) => {
        const div = document.createElement('div');
        const container = document.createElement('div');
        const delBtn = document.createElement('button');
        const updateBtn = document.createElement('button');
        const buttonContainer = document.createElement('div');
        buttonContainer.id = "buttonContainer";
        div.textContent = `${todo.todo}`;
        div.id = "todoText"
        container.style.display = "flex";
        container.id = "todo";
        delBtn.id = "delBtn";
        updateBtn.id = "updateBtn";
        delBtn.innerHTML = "❌"
        updateBtn.innerHTML = "✏️"
        delBtn.addEventListener("click", (e) => {
            e.preventDefault()
            deleteTodo(todo.id)
        });
        updateBtn.addEventListener("click", (e) => {
            e.preventDefault()
            updateTodo(todo.id, todo.todo)
        })
        TodoContainer.appendChild(container)
        container.appendChild(div)
        container.appendChild(buttonContainer)
        buttonContainer.appendChild(updateBtn)
        buttonContainer.appendChild(delBtn)

    })
}

const updateTodo = (id,oldTodo) => {
  const newTodo = prompt("Update Your Todo",oldTodo);
  if(newTodo){
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id === id){
            todos[i].todo = newTodo;
            break;
        }
    }
    localStorage.setItem('todos',JSON.stringify(todos));
    TodoDisplay();
  }
}



const deleteTodo = (id) => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const newtodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(newtodos))
    TodoDisplay()
}

document.addEventListener('DOMContentLoaded', () => {
    TodoDisplay();
});

