"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Unique ID counter
let nextId = 1;
// 3. addTask Operation
function addTask(tasks, title) {
    const newTask = {
        id: nextId++,
        title: title,
        status: "todo",
    };
    return [...tasks, newTask];
}
// 4. completeTask Operation
function completeTask(tasks, id) {
    return tasks.map((task) => task.id === id ? { ...task, status: "done" } : task);
}
// 5. filterByStatus Operation
function filterByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status);
}
// 6. Custom Operation: deleteTask
function deleteTask(tasks, id) {
    return tasks.filter((task) => task.id !== id);
}
//# sourceMappingURL=model.js.map