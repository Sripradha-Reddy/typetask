import { addTask, updateTaskStatus, filterByStatus } from "./model.js";
let tasks = [];
let filter = "all";
const titleInput = document.getElementById("title");
const addBtn = document.getElementById("add");
const listEl = document.getElementById("list");
const chips = document.getElementById("chips");
function renderTasks() {
    listEl.innerHTML = "";
    const visibleTasks = filterByStatus(tasks, filter);
    visibleTasks.forEach(task => {
        const li = document.createElement("li");
        const title = document.createElement("span");
        title.textContent = `${task.title} (${task.status})`;
        const actions = document.createElement("div");
        actions.className = "task-actions";
        const nextBtn = document.createElement("button");
        nextBtn.textContent =
            task.status === "todo" ? "Start" :
                task.status === "in-progress" ? "Complete" : "Completed";
        nextBtn.disabled = task.status === "done";
        nextBtn.addEventListener("click", () => {
            const nextStatus = task.status === "todo" ? "in-progress" : "done";
            tasks = updateTaskStatus(tasks, task.id, nextStatus);
            renderTasks();
        });
        actions.appendChild(nextBtn);
        li.appendChild(title);
        li.appendChild(actions);
        listEl.appendChild(li);
    });
}
addBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    if (title === "") {
        alert("Please enter a task!");
        return;
    }
    tasks = addTask(tasks, title);
    titleInput.value = "";
    renderTasks();
});
titleInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        addBtn.click();
    }
});
chips.addEventListener("click", event => {
    const target = event.target;
    const selectedFilter = target.dataset.filter;
    if (selectedFilter === "all" ||
        selectedFilter === "todo" ||
        selectedFilter === "in-progress" ||
        selectedFilter === "done") {
        filter = selectedFilter;
        chips.querySelectorAll("button").forEach(button => {
            button.classList.remove("active");
        });
        target.classList.add("active");
        renderTasks();
    }
});
