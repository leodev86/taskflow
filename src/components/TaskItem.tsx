import type { Task } from "../types/task";

interface TaskItemProps {
    task: Task;
    toggleTask: (id: string) => void;
    deleteTask: (id: string) => void;
}

export default function TaskItem({
    task,
    toggleTask,
    deleteTask,
}: TaskItemProps){


    return(
        <div className="flex items-center justify-between bg-slate-800 p-4 rounded-lg"
        >

            <label className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
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
              className="text-red-400"
            >
                🗑️
            </button>

        </div>
    );
}