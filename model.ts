
export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

export function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: Date.now(),
    title: title,
    status: "todo"
  };

  return [...tasks, newTask];
}

export function updateTaskStatus(
  tasks: Task[],
  id: number,
  status: TaskStatus
): Task[] {
  return tasks.map(task =>
    task.id === id ? { ...task, status } : task
  );
}

export function filterByStatus(
  tasks: Task[],
  status: TaskStatus | "all"
): Task[] {
  if (status === "all") {
    return tasks;
  }

  return tasks.filter(task => task.status === status);
}
