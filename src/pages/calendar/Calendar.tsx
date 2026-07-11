import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";

export default function Calendar() {
  return (
    <main className="min-h-screen">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Calendario 📅
      </h1>

      <section
        className="
          bg-slate-800
          rounded-2xl
          shadow-lg
          p-6
        "
      >
        <CalendarHeader />

        <CalendarGrid />
      </section>

    </main>
  );
}