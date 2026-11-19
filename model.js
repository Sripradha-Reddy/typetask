export function addTask(tasks, title) {
    const newTask = {
        id: Date.now(),
        title: title,
        status: "todo"
    };
    return [...tasks, newTask];
}
export function updateTaskStatus(tasks, id, status) {
    return tasks.map(task => task.id === id ? { ...task, status } : task);
}
export function filterByStatus(tasks, status) {
    if (status === "all") {
        return tasks;
    }
    return tasks.filter(task => task.status === status);
}
