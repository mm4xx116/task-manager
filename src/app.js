import { login } from "./login.js";

const APP_TITLE = "Task Manager";

const tasks = [];

function addTask(text) {
  tasks.push({ text, done: false });
  render();
}

function render() {
  document.getElementById("title").textContent = APP_TITLE;
  const list = document.getElementById("tasks");
  list.innerHTML = "";
  for (const task of tasks) {
    const item = document.createElement("li");
    item.textContent = task.text;
    list.appendChild(item);
  }
}

const result = login("student", "1234");
console.log(result.message);

addTask("Вивчити git init");
addTask("Зробити перший коміт");
