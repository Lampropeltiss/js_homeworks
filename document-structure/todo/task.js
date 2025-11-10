// localStorage.clear();

const input = document.querySelector("input");
const taskList = document.getElementById("tasks__list");

const addTask = (task) => {
    const newTask = document.createElement("div");
    newTask.classList.add("task__title");
    newTask.innerHTML = task;

    const remover = document.createElement("a");
    remover.classList.add("task__remove");
    remover.href = "#";
    remover.innerHTML = "&times;"

    const newTaskObject = document.createElement("div");
    newTaskObject.classList.add("task");
    newTaskObject.append(newTask);
    newTaskObject.append(remover);
    // console.log(newTaskObject);
    taskList.append(newTaskObject);

    localStorage.setItem(task, task);
    remover.addEventListener("click", () => {
        newTaskObject.remove();
        localStorage.removeItem(task);
    })
}

for (var i = 0; i < localStorage.length; i++) {
    item = localStorage.getItem(localStorage.key(i));
    addTask(item);
    // console.log(item);
}

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(input.value);
    input.value = "";
})