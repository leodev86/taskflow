import { useState } from "react";
import TaskList from "../components/TaskList";
import type { Task } from "../types/task";


export default function Dashboard() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");


  function addTask(){

    if(!title.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed:false
    };


    setTasks([
      ...tasks,
      newTask
    ]);

    setTitle("");
  }


  function toggleTask(id:string){

    setTasks(
      tasks.map(task =>
        task.id === id
        ? {...task, completed: !task.completed}
        : task
      )
    );

  }


  function deleteTask(id:string){

    setTasks(
      tasks.filter(task => task.id !== id)
    );

  }



  return (

    <main className="min-h-screen bg-slate-900 p-8">

      <h1 className="text-4xl text-cyan-400 font-bold mb-8">
        TaskFlow 🚀
      </h1>


      <div className="flex gap-3 mb-8">

        <input
          className="p-3 rounded bg-white"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="Nueva tarea..."
        />


        <button
          onClick={addTask}
          className="bg-cyan-500 px-5 rounded"
        >
          Agregar
        </button>

      </div>


      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />


    </main>

  );
}