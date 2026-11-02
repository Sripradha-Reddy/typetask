// 1. TaskStatus Union
export type TaskStatus = "todo" | "in-progress" | "done";

// 2. Task Interface
export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

// Counter for unique task IDs
let nextId = 1;

// 3. Add Task Operation
export function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: nextId++,
    title,
    status: "todo",
  };
  return [...tasks, newTask];
}

// 4. Complete Task Operation
export function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

// 5. Filter by Status Operation
export function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((task) => task.status === status);
}

// 6. Custom Operation (Required by Assignment: Originality requirement)
export function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}