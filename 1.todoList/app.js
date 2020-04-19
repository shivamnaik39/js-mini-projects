// Define UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector("#collection");
const clearBtn = document.querySelector("#clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
// Load All Event Listeners
loadEventListener();
function loadEventListener() {
  // DOM Load Event
  document.addEventListener("DOMContentLoaded", getTasks);
  // Add task event
  form.addEventListener("submit", addTask);
  // Remove task event
  taskList.addEventListener("click", removeTask);
  // Clear Task Event
  clearBtn.addEventListener("click", clearTasks);
  // Filter Task Event
  filter.addEventListener("keyup", filterTasks);
}
// Get Tasks from LS
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task) {
    // Create li element
    const li = document.createElement("li");
    // Add class
    li.className =
      "collection-item border border-gray-500 border-b-0  py-3 px-4 flex justify-between ";
    // Create a text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link
    const link = document.createElement("a");
    // Add class to link
    link.className = "delete-item";
    // add icon html
    link.innerHTML = '<i class="fas fa-trash-alt text-red-500"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
  });
}
// Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task...");
    return;
  }
  // Create li element
  const li = document.createElement("li");
  // Add class
  li.className =
    "collection-item border border-gray-500 border-b-0  py-3 px-4 flex justify-between";
  // Create a text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link
  const link = document.createElement("a");
  // Add class to link
  link.className = "delete-item";
  // add icon html
  link.innerHTML = '<i class="fas fa-trash-alt text-red-500"></i>';
  // Append the link to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);
  // Store in local Storage
  storeInLocalStorage(taskInput.value);
  // Clear Input
  taskInput.value = "";
  e.preventDefault();
}
// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure??")) {
      e.target.parentElement.parentElement.remove();
      // remove from LS
      removeFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}
// remove from LS
function removeFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Clear Tasks
function clearTasks() {
  if (confirm("Are you sure you want to clear all tasks?")) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
    // Clear from LS
    clearFromlocalStorage();
  }
}
// Clear All from LS
function clearFromlocalStorage() {
  localStorage.removeItem("tasks");
}
// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(text) !== -1) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}
// Store task
function storeInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
