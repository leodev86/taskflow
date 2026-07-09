import type { Task } from "../types/task";

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export default function TaskList({
  tasks,
  toggleTask,
  deleteTask,
}: TaskListProps) {

  return (
    <div className="space-y-3">

      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between bg-slate-800 p-4 rounded-lg"
        >

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              aria-label={
                task.completed
                  ? `Marcar "${task.title}" como pendiente`
                  : `Marcar "${task.title}" como completada`
              }
            />

            <span
              className={
                task.completed
                ? "line-through text-gray-500"
                : "text-white"
              }
            >
              {task.title}
            </span>
          </label>


          <button
            onClick={() => deleteTask(task.id)}
            aria-label={`Eliminar "${task.title}"`}
            className="text-red-400"
          >
            🗑️
          </button>

        </div>
      ))}

    </div>
  );
}