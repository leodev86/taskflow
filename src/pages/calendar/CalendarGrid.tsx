import CalendarCell from "./CalendarCell";

const weekDays = [
  "Lun",
  "Mar",
  "Mié",
  "Jue",
  "Vie",
  "Sáb",
  "Dom",
];

export default function CalendarGrid() {
  return (
    <>

      <div
        className="
          grid
          grid-cols-7
          gap-3
          mb-3
        "
      >
        {weekDays.map((day) => (
          <div
            key={day}
            className="
              text-center
              font-semibold
              text-cyan-400
            "
          >
            {day}
          </div>
        ))}
      </div>

      <div
        className="
          grid
          grid-cols-7
          gap-3
        "
      >
        {Array.from({ length: 42 }).map((_, index) => (
          <CalendarCell
            key={index}
            day={index + 1}
          />
        ))}
      </div>

    </>
  );
}