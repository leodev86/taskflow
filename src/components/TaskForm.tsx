import { useState } from "react";
 
interface TaskFormProps {
    addTask: (title: string) => void;
}

export default function TaskForm({ addTask}: TaskFormProps){
    const [title, setTitle] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!title.trim()) return;

        addTask(title);

        setTitle("");
    }


    return (
        <form
          onSubmit={handleSubmit}
          className="flex gap-3 mb-8"
          >
            <input
               type="text"
               value={title}
               onChange={(event) => setTitle(event.target.value)}
               placeholder="Nueva Tarea..."
               className="flex-1 rounded-lg p-3 bg-white"
               />

               <button
               type="submit"
               className="rounded-lg bg-cyan-500 px-5 font-semibold hover:bg-cyan-600 transition"
               >

                Agregar
               </button>
          </form>
    );
}