import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { Task } from "../types/task";

export default function Dashboard() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  function addTask(title: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    setTasks([
      ...tasks,
      newTask,
    ]);
  }

  function toggleTask(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  }

  function deleteTask(id: string) {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  }

  return (
    <main className="min-h-screen bg-slate-900 p-8">

      <h1 className="text-4xl text-cyan-400 font-bold mb-8">
        TaskFlow 🚀
      </h1>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />

    </main>
  );
}