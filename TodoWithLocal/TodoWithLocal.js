const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

window.onload = function () {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTaskToDOM(task));
};

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  addTaskToDOM(taskText);
  saveTask(taskText);
  taskInput.value = "";
}

function addTaskToDOM(taskText) {
  const li = document.createElement("li");

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="edit-btn" onclick="editTask(this)">Edit</button>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
}

function saveTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(button) {
  const li = button.parentElement;
  const taskText = li.querySelector('.task-text').innerText;
  li.remove();

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function editTask(button) {
  const li = button.parentElement;
  const taskTextSpan = li.querySelector('.task-text');
  const originalText = taskTextSpan.innerText;

  // Replace span with input
  const input = document.createElement('input');
  input.type = "text";
  input.value = originalText;
  input.style.flex = "1";
  taskTextSpan.replaceWith(input);

  // Replace Edit button with Save
  button.innerText = "Save";
  button.className = "save-btn";
  button.onclick = function () {
    const updatedText = input.value.trim();
    if (updatedText === "") return;

    const newSpan = document.createElement("span");
    newSpan.className = "task-text";
    newSpan.innerText = updatedText;
    input.replaceWith(newSpan);

    button.innerText = "Edit";
    button.className = "edit-btn";
    button.onclick = () => editTask(button);

    // Update localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = tasks.indexOf(originalText);
    if (index !== -1) {
      tasks[index] = updatedText;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };
}