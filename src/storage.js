const KEY = "tasks";

export function saveTasks(tasks) {
  const data = JSON.stringify(tasks);
  localStorage.setItem(KEY, data);
}

export function loadTasks() {
  const raw = localStorage.getItem(KEY);
  if (raw === null) {
    return [];
  }
  return JSON.parse(raw);
}
