import { NavLink } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar?: () => void;
}

const menuItems = [
  {
    name: "Mis tareas",
    path: "/tasks",
    icon: "📋",
  },
  {
    name: "Calendario",
    path: "/calendar",
    icon: "📅",
  },
  {
    name: "Notas",
    path: "/notes",
    icon: "📝",
  },
  {
    name: "Favoritos",
    path: "/favorites",
    icon: "⭐",
  },
  {
    name: "Recordatorios",
    path: "/reminders",
    icon: "⏰",
  },
  {
    name: "Papelera",
    path: "/trash",
    icon: "🗑️",
  },
  {
    name: "Estadísticas",
    path: "/statistics",
    icon: "📊",
  },
];


export default function Sidebar({ isOpen, closeSidebar, }: SidebarProps) {

  return (

    <aside
      className={`
        fixed
        top-0
        left-0
        h-full
        w-64
        bg-slate-800
        p-5
        shadow-xl
        z-50
        transition-transform
        duration-300
        ${
          isOpen
          ? "translate-x-0"
          : "-translate-x-full"
        }
      `}
    >

      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        TaskFlow
      </h2>


      <nav className="space-y-3">


        {menuItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeSidebar}
            className={({ isActive }) => `

              group
              relative
              flex
              items-center
              gap-3
              p-3
              rounded-lg
              transition-all
              duration-300

              ${
                isActive
                ? "bg-slate-700 text-cyan-400"
                : "text-gray-300"
              }

              hover:bg-slate-700
              hover:text-cyan-400

            `}
          >

            {/* Barra lateral animada */}
            <span
              className="
                absolute
                left-0
                w-1
                h-0
                bg-cyan-400
                rounded-full
                transition-all
                duration-300
                group-hover:h-8
              "
            />


            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              {item.icon}
            </span>


            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              {item.name}
            </span>


          </NavLink>

        ))}


      </nav>


    </aside>

  );
}