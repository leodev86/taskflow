export default function CalendarHeader() {
  return (
    <header
      className="
        flex
        items-center
        justify-between
        mb-8
      "
    >

      <button
        className="
          px-4
          py-2
          rounded-lg
          bg-slate-700
          hover:bg-cyan-500
          transition
        "
      >
        ◀
      </button>

      <div className="text-center">

        <h2
          className="
            text-2xl
            font-bold
            text-cyan-400
          "
        >
          Julio 2026
        </h2>

        <p className="text-gray-400">
          Organiza tus tareas
        </p>

      </div>

      <button
        className="
          px-4
          py-2
          rounded-lg
          bg-slate-700
          hover:bg-cyan-500
          transition
        "
      >
        ▶
      </button>

    </header>
  );
}