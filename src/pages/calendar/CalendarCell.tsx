interface CalendarCellProps {
  day: number;
}

export default function CalendarCell({
  day,
}: CalendarCellProps) {
  return (
    <div
      className="
        group
        h-28
        rounded-xl
        bg-slate-900
        border
        border-slate-700
        p-3
        cursor-pointer

        transition-all
        duration-300

        hover:border-cyan-400
        hover:-translate-y-1
        hover:shadow-lg
      "
    >

      <span
        className="
          font-semibold
          text-gray-300

          group-hover:text-cyan-400
          transition
        "
      >
        {day}
      </span>

    </div>
  );
}