import { useState } from "react";
import Button from "./Button";

interface TaskFormProps {
  addTask: (title: string) => void;
}

export default function TaskForm({ addTask }: TaskFormProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) return;

    addTask(title);

    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Nueva Tarea..."
        className="flex-1 rounded-lg p-3 bg-white"
      />

      <Button type="submit">Agregar</Button>
    </form>
  );
}
